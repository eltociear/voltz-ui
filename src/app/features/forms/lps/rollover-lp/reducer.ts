import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AMM, InfoPostLp } from '@voltz-protocol/v1-sdk';
import { ContractReceipt, providers } from 'ethers';

import { getAmmProtocol } from '../../../../../utilities/amm';
import { stringToBigFloat } from '../../../../../utilities/number';
import { checkLowLeverageNotification, formLimitAndFormatNumber } from '../../common';
import { pushLeverageChangeEvent } from './analytics';
import { initialState } from './state';
import {
  approveUnderlyingTokenThunk,
  confirmLpRolloverThunk,
  getInfoPostLpThunk,
  getPoolLpInfoThunk,
  getUnderlyingTokenAllowanceThunk,
  getWalletBalanceThunk,
  initializeAMMsAndPositionsForRolloverThunk,
  InitializeAMMsAndPositionsForRolloverThunkSuccess,
} from './thunks';
import {
  getProspectiveLpNotional,
  updateLeverage,
  updateLeverageOptionsAfterGetInfoPostLp,
  updateLeverageOptionsAfterGetPoolLpInfo,
  validateUserInputAndUpdateSubmitButton,
} from './utils';

const slice = createSlice({
  name: 'rolloverLpForm',
  initialState,
  reducers: {
    resetStateAction: () => initialState,
    setSignerForRolloverLpFormAction: (
      state,
      {
        payload: { signer },
      }: PayloadAction<{
        signer: providers.JsonRpcSigner | null;
      }>,
    ) => {
      if (state.amm) {
        state.amm.signer = signer;
      }
      if (state.previousAMM) {
        state.previousAMM.signer = signer;
      }
    },
    openRolloverConfirmationFlowAction: (state) => {
      state.lpConfirmationFlow.step = 'rolloverConfirmation';
    },
    closeRolloverConfirmationFlowAction: (state) => {
      state.lpConfirmationFlow = {
        step: null,
        error: null,
        txHash: null,
      };
    },
    setUserInputFixedLowerAction: (
      state,
      {
        // what you send from the frontend world with type PayloadAction and the value can be a number
        payload: { value },
      }: PayloadAction<{
        value: number | null;
      }>,
    ) => {
      const amm = state.amm;

      if (!amm) {
        return;
      }

      let nextFixedRateLowerNumber: number | null = null;
      if (value !== null) {
        nextFixedRateLowerNumber = amm.getNextUsableFixedRate(value, 0);
      }

      state.userInput.fixedRange.lower = nextFixedRateLowerNumber;
      state.userInput.fixedRange.updateCount = state.userInput.fixedRange.updateCount + 1;
      validateUserInputAndUpdateSubmitButton(state);
    },
    setUserInputFixedUpperAction: (
      state,
      {
        // what you send from the frontend world with type PayloadAction and the value can be a number
        payload: { value },
      }: PayloadAction<{
        value: number | null;
      }>,
    ) => {
      const amm = state.amm;

      if (!amm) {
        return;
      }

      let nextFixedRateUpperNumber: number | null = null;
      if (value !== null) {
        nextFixedRateUpperNumber = amm.getNextUsableFixedRate(value, 0);
      }

      state.userInput.fixedRange.upper = nextFixedRateUpperNumber;
      state.userInput.fixedRange.updateCount = state.userInput.fixedRange.updateCount + 1;
      validateUserInputAndUpdateSubmitButton(state);
    },
    setNotionalAmountAction: (
      state,
      {
        payload: { value },
      }: PayloadAction<{
        value?: number;
      }>,
    ) => {
      if (value !== undefined) {
        state.userInput.notionalAmount.value = value;

        updateLeverage(state);
        validateUserInputAndUpdateSubmitButton(state);
      }
    },
    resetInfoPostLpAction: (state) => {
      state.prospectiveLp.infoPostLp = {
        ...initialState.prospectiveLp.infoPostLp,
      };
    },
    setMarginAmountAction: (
      state,
      {
        payload: { value },
      }: PayloadAction<{
        value?: number;
      }>,
    ) => {
      if (value !== undefined) {
        state.userInput.marginAmount.value = value;
      }

      updateLeverage(state);
      validateUserInputAndUpdateSubmitButton(state);
    },
    setLeverageAction: (
      state,
      {
        payload: { value, account, changeType },
      }: PayloadAction<{
        value: number;
        account: string;
        changeType: 'button' | 'input';
      }>,
    ) => {
      if (getProspectiveLpNotional(state) === 0 || isNaN(value) || value === 0) {
        state.userInput.leverage = null;
        state.userInput.marginAmount.value = 0;
        validateUserInputAndUpdateSubmitButton(state);
        return;
      }

      state.userInput.leverage = value;
      if (!isNaN(value)) {
        pushLeverageChangeEvent({
          leverage: value,
          account,
          pool: getAmmProtocol(state.amm as AMM),
          changeType,
        });
      }
      state.userInput.marginAmount.value = stringToBigFloat(
        formLimitAndFormatNumber(getProspectiveLpNotional(state) / value, 'ceil'),
      );

      validateUserInputAndUpdateSubmitButton(state);
      state.showLowLeverageNotification = checkLowLeverageNotification(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWalletBalanceThunk.pending, (state) => {
        state.walletBalance = {
          value: 0,
          status: 'pending',
        };
      })
      .addCase(getWalletBalanceThunk.rejected, (state) => {
        state.walletBalance = {
          value: 0,
          status: 'error',
        };
      })
      .addCase(getWalletBalanceThunk.fulfilled, (state, { payload }) => {
        state.walletBalance = {
          value: payload as number,
          status: 'success',
        };
        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(getUnderlyingTokenAllowanceThunk.pending, (state) => {
        state.walletTokenAllowance = {
          value: 0,
          status: 'pending',
        };
      })
      .addCase(getUnderlyingTokenAllowanceThunk.rejected, (state) => {
        state.walletTokenAllowance = {
          value: 0,
          status: 'error',
        };
      })
      .addCase(getUnderlyingTokenAllowanceThunk.fulfilled, (state, { payload }) => {
        state.walletTokenAllowance = {
          value: payload as number,
          status: 'success',
        };
        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(approveUnderlyingTokenThunk.pending, (state) => {
        state.submitButton = {
          state: 'approving',
          disabled: true,
          message: {
            text: 'Waiting for confirmation...',
            isError: false,
          },
        };
      })
      .addCase(approveUnderlyingTokenThunk.rejected, (state, { payload }) => {
        state.submitButton = {
          state: 'approve',
          disabled: false,
          message: {
            text: payload as string,
            isError: true,
          },
        };
      })
      .addCase(approveUnderlyingTokenThunk.fulfilled, (state, { payload }) => {
        state.walletTokenAllowance = {
          value: payload as number,
          status: 'success',
        };
        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(getPoolLpInfoThunk.pending, (state) => {
        state.poolLpInfo = {
          // note max leverage is a function of the fixed rate range selected by the lp
          maxLeverage: 0,
          status: 'pending',
        };
      })
      .addCase(getPoolLpInfoThunk.rejected, (state) => {
        state.poolLpInfo = {
          maxLeverage: 0,
          status: 'error',
        };
      })
      .addCase(getPoolLpInfoThunk.fulfilled, (state, { payload }) => {
        let { maxLeverage } = payload as {
          maxLeverage: number;
        };
        maxLeverage = Math.floor((maxLeverage * 99) / 100);
        state.poolLpInfo = {
          maxLeverage: maxLeverage,
          status: 'success',
        };
        updateLeverageOptionsAfterGetPoolLpInfo(state);
        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(getInfoPostLpThunk.pending, (state) => {
        state.prospectiveLp.infoPostLp = {
          value: initialState.prospectiveLp.infoPostLp.value,
          status: 'pending',
        };
      })
      .addCase(getInfoPostLpThunk.rejected, (state) => {
        state.prospectiveLp.infoPostLp = {
          value: initialState.prospectiveLp.infoPostLp.value,
          status: 'error',
        };
      })
      .addCase(getInfoPostLpThunk.fulfilled, (state, { payload }) => {
        const { infoPostLp, earlyReturn } = payload as {
          infoPostLp: InfoPostLp;
          earlyReturn: boolean;
        };

        if (earlyReturn) {
          state.prospectiveLp.infoPostLp = {
            value: initialState.prospectiveLp.infoPostLp.value,
            status: 'idle',
          };
          return;
        }

        const marginRequirementWithBuffer: number = (infoPostLp.marginRequirement * 101) / 100;

        state.prospectiveLp.infoPostLp = {
          value: {
            marginRequirement: marginRequirementWithBuffer,
            maxMarginWithdrawable: infoPostLp.maxMarginWithdrawable,
            gasFee: infoPostLp.gasFee,
          },
          status: 'success',
        };

        updateLeverageOptionsAfterGetInfoPostLp(state);
        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(initializeAMMsAndPositionsForRolloverThunk.pending, (state) => {
        state.previousPosition = null;
        if (state.amm) {
          state.amm.signer = null;
        }
        if (state.previousAMM) {
          state.previousAMM.signer = null;
        }
      })
      .addCase(initializeAMMsAndPositionsForRolloverThunk.rejected, (state) => {
        state.previousPosition = null;
        if (state.amm) {
          state.amm.signer = null;
        }
        if (state.previousAMM) {
          state.previousAMM.signer = null;
        }
      })
      .addCase(initializeAMMsAndPositionsForRolloverThunk.fulfilled, (state, { payload }) => {
        const { signer, aMM, previousPosition, previousAMM } =
          payload as InitializeAMMsAndPositionsForRolloverThunkSuccess;
        state.amm = aMM;
        state.previousAMM = previousAMM;
        state.previousPosition = previousPosition;

        if (previousPosition) {
          state.userInput.fixedRange.lower = previousPosition.fixedRateLower.toNumber();
          state.userInput.fixedRange.upper = previousPosition.fixedRateUpper.toNumber();
        }

        if (state.amm) {
          state.amm.signer = signer;
        }
        if (state.previousAMM) {
          state.previousAMM.signer = signer;
        }

        validateUserInputAndUpdateSubmitButton(state);
      })
      .addCase(confirmLpRolloverThunk.pending, (state) => {
        state.lpConfirmationFlow = {
          step: 'waitingForRolloverConfirmation',
          error: null,
          txHash: null,
        };
      })
      .addCase(confirmLpRolloverThunk.rejected, (state, { payload }) => {
        state.lpConfirmationFlow = {
          step: 'rolloverConfirmation',
          error: payload as string,
          txHash: null,
        };
      })
      .addCase(confirmLpRolloverThunk.fulfilled, (state, { payload }) => {
        state.lpConfirmationFlow = {
          step: 'rolloverCompleted',
          error: null,
          txHash: (payload as ContractReceipt).transactionHash,
        };
      });
  },
});
export const {
  resetStateAction,
  setNotionalAmountAction,
  setMarginAmountAction,
  setLeverageAction,
  setUserInputFixedLowerAction,
  setUserInputFixedUpperAction,
  openRolloverConfirmationFlowAction,
  closeRolloverConfirmationFlowAction,
  setSignerForRolloverLpFormAction,
  resetInfoPostLpAction,
} = slice.actions;
export const rolloverLpFormReducer = slice.reducer;
