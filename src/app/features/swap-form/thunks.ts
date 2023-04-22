import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ExpectedCashflowInfo,
  getPositions,
  InfoPostSwapV1,
  Position,
  SupportedChainId,
} from '@voltz-protocol/v1-sdk';
import { ContractReceipt, providers } from 'ethers';

import { findCurrentPosition, getAmmProtocol } from '../../../utilities/amm';
import { isBorrowingPosition } from '../../../utilities/borrowAmm';
import { RootState } from '../../store';
import { isUserInputNotionalError } from '../common-form/utils';
import {
  pushPageViewEvent,
  pushSwapTransactionFailedEvent,
  pushSwapTransactionSubmittedEvent,
  pushSwapTransactionSuccessEvent,
} from './analytics';
import {
  getProspectiveSwapMargin,
  getProspectiveSwapMode,
  getProspectiveSwapNotional,
  hasExistingPosition,
} from './utils';

const extractError = (err: unknown): string => {
  if (typeof err === 'string') {
    return err;
  }
  return (err as Error)?.message;
};

const rejectThunkWithError = (
  thunkAPI: {
    rejectWithValue: (value: string | undefined) => unknown;
  },
  err: unknown,
) => {
  return thunkAPI.rejectWithValue(extractError(err));
};

export const getWalletBalanceThunk = createAsyncThunk<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/getWalletBalance', async (_, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().swapForm.amm;
    if (!amm || !amm.signer) {
      return;
    }

    return await amm.underlyingTokens();
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const getUnderlyingTokenAllowanceThunk = createAsyncThunk<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  { chainId: SupportedChainId; alchemyApiKey: string },
  { state: RootState }
>('swapForm/getUnderlyingTokenAllowance', async ({ chainId, alchemyApiKey }, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().swapForm.amm;
    if (!amm || !amm.signer) {
      return;
    }

    return await amm.getUnderlyingTokenAllowance({
      forceErc20Check: false,
      chainId,
      alchemyApiKey,
    });
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const approveUnderlyingTokenThunk = createAsyncThunk<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/approveUnderlyingToken', async (_, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().swapForm.amm;
    if (!amm || !amm.signer) {
      return;
    }

    return await amm.approveUnderlyingTokenForPeripheryV1();
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const getPoolSwapInfoThunk = createAsyncThunk<
  Awaited<number | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/getPoolSwapInfo', async (_, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().swapForm.amm;
    if (!amm) {
      return;
    }

    return await amm.getPoolSwapInfo();
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const getInfoPostSwapThunk = createAsyncThunk<
  Awaited<
    | {
        notionalAmount: number;
        swapMode: 'fixed' | 'variable';
        infoPostSwapV1: InfoPostSwapV1;
        earlyReturn: boolean;
      }
    | ReturnType<typeof rejectThunkWithError>
  >,
  void,
  { state: RootState }
>('swapForm/getInfoPostSwap', async (_, thunkAPI) => {
  try {
    const swapFormState = thunkAPI.getState().swapForm;
    const amm = swapFormState.amm;
    if (!amm || isUserInputNotionalError(swapFormState)) {
      return {
        notionalAmount: NaN,
        swapMode: getProspectiveSwapMode(swapFormState),
        infoPostSwap: {},
        earlyReturn: true,
      };
    }

    if (getProspectiveSwapNotional(swapFormState) === 0) {
      return {
        notionalAmount: 0,
        swapMode: getProspectiveSwapMode(swapFormState),
        infoPostSwap: {
          marginRequirement: 0,
          maxMarginWithdrawable: 0,
          averageFixedRate: 0,
          fixedTokenDeltaBalance: 0,
          variableTokenDeltaBalance: 0,
          fixedTokenDeltaUnbalanced: 0,
          fee: 0,
          slippage: 0,
          gasFeeETH: 0,
        },
        earlyReturn: false,
      };
    }

    const notionalAmount = getProspectiveSwapNotional(swapFormState);
    const infoPostSwapV1 = await amm.getInfoPostSwapV1({
      isFT: getProspectiveSwapMode(swapFormState) === 'fixed',
      notional: notionalAmount,
      fixedLow: 1,
      fixedHigh: 999,
    });

    // margin requirement is collateral only now
    if (infoPostSwapV1.marginRequirement > infoPostSwapV1.fee) {
      infoPostSwapV1.marginRequirement -= infoPostSwapV1.fee;
    } else {
      infoPostSwapV1.marginRequirement = 0;
    }

    return {
      notionalAmount,
      swapMode: getProspectiveSwapMode(swapFormState),
      infoPostSwap: infoPostSwapV1,
      earlyReturn: false,
    };
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export type SetSignerAndPositionForAMMThunkSuccess = {
  position: Position | null;
  signer: providers.JsonRpcSigner | null;
};
export const setSignerAndPositionForAMMThunk = createAsyncThunk<
  Awaited<SetSignerAndPositionForAMMThunkSuccess | ReturnType<typeof rejectThunkWithError>>,
  { signer: providers.JsonRpcSigner | null; chainId: SupportedChainId },
  { state: RootState }
>('swapForm/setSignerAndPositionForAMM', async ({ signer, chainId }, thunkAPI) => {
  try {
    const amm = thunkAPI.getState().swapForm.amm;
    if (!amm) {
      return {
        signer: null,
        position: null,
      };
    }

    if (!signer) {
      pushPageViewEvent({
        account: '',
        isEdit: false,
      });
      return {
        signer: null,
        position: null,
      };
    }

    const account = await signer.getAddress();

    const { positions, error } = await getPositions({
      chainId,
      userWalletId: account.toLowerCase(),
      amms: [amm],
      type: 'Trader',
    });
    if (error) {
      return rejectThunkWithError(thunkAPI, error);
    }
    // TODO: Alex possible to move filter into subgraph level? Discuss
    const nonBorrowPositions = positions.filter((pos) => !isBorrowingPosition(pos));
    const position = findCurrentPosition(nonBorrowPositions || [], amm.id) || null;
    pushPageViewEvent({
      account,
      isEdit: Boolean(position),
    });
    return {
      position,
      signer,
    };
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const confirmSwapThunk = createAsyncThunk<
  Awaited<ContractReceipt | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/confirmSwap', async (_, thunkAPI) => {
  const swapFormState = thunkAPI.getState().swapForm;
  const amm = swapFormState.amm;
  if (!amm || !amm.signer) {
    return;
  }

  const account = await amm.signer.getAddress();
  const eventParams = {
    account,
    notional: getProspectiveSwapNotional(swapFormState),
    margin: getProspectiveSwapMargin(swapFormState),
    isEdit: hasExistingPosition(swapFormState),
    pool: getAmmProtocol(amm),
    isFT: getProspectiveSwapMode(swapFormState) === 'fixed',
  };

  try {
    pushSwapTransactionSubmittedEvent(eventParams);
    const result = await amm.swap({
      isFT: getProspectiveSwapMode(swapFormState) === 'fixed',
      notional: getProspectiveSwapNotional(swapFormState),
      margin: getProspectiveSwapMargin(swapFormState),
      fixedLow: 1,
      fixedHigh: 999,
    });
    pushSwapTransactionSuccessEvent(eventParams);
    return result;
  } catch (err) {
    pushSwapTransactionFailedEvent({
      ...eventParams,
      errorMessage: extractError(err),
    });
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const confirmMarginUpdateThunk = createAsyncThunk<
  Awaited<ContractReceipt | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/confirmMarginUpdate', async (_, thunkAPI) => {
  try {
    const swapFormState = thunkAPI.getState().swapForm;
    const amm = swapFormState.amm;
    if (!amm) {
      return;
    }

    return await amm.updatePositionMargin({
      fixedLow: 1,
      fixedHigh: 999,
      marginDelta: getProspectiveSwapMargin(swapFormState),
    });
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});

export const getExpectedCashflowInfoThunk = createAsyncThunk<
  Awaited<ExpectedCashflowInfo | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/getExpectedCashflowInfo', async (_, thunkAPI) => {
  try {
    const swapFormState = thunkAPI.getState().swapForm;
    const amm = swapFormState.amm;
    if (!amm) {
      return;
    }

    return await amm.getExpectedCashflowInfo({
      position: swapFormState.position.value ?? undefined,
      prospectiveSwapAvgFixedRate:
        swapFormState.prospectiveSwap.infoPostSwap.value.averageFixedRate / 100,
      prospectiveSwapNotional:
        swapFormState.prospectiveSwap.infoPostSwap.value.variableTokenDeltaBalance,
    });
  } catch (err) {
    return rejectThunkWithError(thunkAPI, err);
  }
});
