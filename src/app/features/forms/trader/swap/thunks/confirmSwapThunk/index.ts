import { AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import { ContractReceipt } from 'ethers';

import { getAmmProtocol } from '../../../../../../../utilities/amm';
import { RootState } from '../../../../../../store';
import { extractError } from '../../../../../helpers/extract-error';
import { rejectThunkWithError } from '../../../../../helpers/reject-thunk-with-error';
import {
  pushSwapTransactionFailedEvent,
  pushSwapTransactionSubmittedEvent,
  pushSwapTransactionSuccessEvent,
  SwapEventParams,
} from '../../analytics';
import {
  getProspectiveSwapMargin,
  getProspectiveSwapMode,
  getProspectiveSwapNotional,
  hasExistingPosition,
} from '../../utils';

export const confirmSwapThunkHandler: AsyncThunkPayloadCreator<
  Awaited<ContractReceipt | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
> = async (_, thunkAPI) => {
  const swapFormState = thunkAPI.getState().swapForm;
  const amm = swapFormState.amm;
  if (!amm || !amm.signer) {
    return;
  }

  const account = await amm.signer.getAddress();
  const prospectiveSwapNotional = getProspectiveSwapNotional(swapFormState);
  const prospectiveSwapMargin = getProspectiveSwapMargin(swapFormState);
  const existingPosition = hasExistingPosition(swapFormState);
  const prospectiveSwapMode = getProspectiveSwapMode(swapFormState);
  const eventParams: SwapEventParams = {
    account,
    notional: prospectiveSwapNotional,
    margin: prospectiveSwapMargin,
    isEdit: existingPosition,
    pool: getAmmProtocol(amm),
    isFT: prospectiveSwapMode === 'fixed',
  };

  try {
    pushSwapTransactionSubmittedEvent(eventParams);
    const result = await amm.swap({
      isFT: prospectiveSwapMode === 'fixed',
      notional: prospectiveSwapNotional,
      margin: prospectiveSwapMargin,
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
};

export const confirmSwapThunk = createAsyncThunk<
  Awaited<ContractReceipt | ReturnType<typeof rejectThunkWithError>>,
  void,
  { state: RootState }
>('swapForm/confirmSwap', confirmSwapThunkHandler);
