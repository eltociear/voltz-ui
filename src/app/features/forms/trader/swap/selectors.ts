import { getViewOnEtherScanLink } from '@voltz-protocol/v1-sdk';

import { formatNumber } from '../../../../../utilities/number';
import { RootState } from '../../../../store';
import { formatPoolMaturity, formatUnderlyingTokenName } from '../../../helpers';
import {
  formCompactFormat,
  formCompactFormatToParts,
  formFormatNumber,
  formLimitAndFormatNumber,
  getGasInfoFormatted,
  getVariableRate24hDelta,
  isLeverageHidden,
} from '../../common';
import {
  getAvailableMargin,
  getAvailableNotional,
  getEditPositionFixedRate,
  getEditPositionMode,
  getEditPositionNotional,
  getEditPositionVariableRate,
  getExistingPositionFixedRate,
  getExistingPositionMode,
  getExistingPositionVariableRate,
  getNewPositionFixedRate,
  getProspectiveSwapMargin,
  getProspectiveSwapMode,
  getProspectiveSwapNotional,
  getRealizedPnLFromFees,
  getRealizedPnLFromSwaps,
  getUnrealizedPnLFromSwaps,
  getVariableRate,
  hasExistingPosition,
} from './utils';

export const selectSubmitButtonInfo = (state: RootState) => state.swapForm.submitButton;
export const selectSwapFormAMM = (state: RootState) => state.swapForm.amm;
export const selectSwapFormPosition = (state: RootState) => state.swapForm.position.value;
export const selectSwapFormPositionFetchingStatus = (state: RootState) =>
  state.swapForm.position.status;
export const selectWalletBalance = (state: RootState) => {
  if (state.swapForm.walletBalance.status !== 'success') {
    return '--';
  }

  return formCompactFormat(state.swapForm.walletBalance.value);
};
export const selectFixedRateInfo = (state: RootState) => state.swapForm.amm?.fixedApr;
export const selectVariableRateInfo = (state: RootState) => state.swapForm.amm?.variableApy;
export const selectPoolSwapInfoStatus = (state: RootState) => state.swapForm.poolSwapInfo.status;
export const selectSwapFormMode = (state: RootState): 'new' | 'edit' => {
  return hasExistingPosition(state.swapForm) ? 'edit' : 'new';
};

export const selectAMMTokenFormatted = (state: RootState) => {
  return formatUnderlyingTokenName(selectSwapFormAMM(state));
};

export const selectAMMMaturityFormatted = (state: RootState) => {
  return formatPoolMaturity(selectSwapFormAMM(state));
};

export const selectMarginAccountName = (state: RootState) => {
  const aMM = selectSwapFormAMM(state);
  if (!aMM) {
    return '';
  }
  return `${aMM.protocol} ${selectAMMMaturityFormatted(state)}`;
};

// User Input
export const selectUserInputMode = (state: RootState) => state.swapForm.userInput.mode;
export const selectUserInputNotionalInfo = (state: RootState) =>
  state.swapForm.userInput.notionalAmount;
export const selectUserInputMarginInfo = (state: RootState) =>
  state.swapForm.userInput.marginAmount;

export const selectProspectiveSwapMode = (state: RootState) =>
  getProspectiveSwapMode(state.swapForm);
export const selectProspectiveSwapNotionalFormatted = (state: RootState) => {
  return formCompactFormat(getProspectiveSwapNotional(state.swapForm));
};
export const selectProspectiveSwapMarginFormatted = (state: RootState) => {
  if (state.swapForm.userInput.marginAmount.editMode === 'add') {
    return formCompactFormat(
      getProspectiveSwapMargin(state.swapForm) -
        state.swapForm.prospectiveSwap.infoPostSwap.value.fee,
    );
  }
  return formCompactFormat(getProspectiveSwapMargin(state.swapForm));
};
export const selectProspectiveSwapFeeFormatted = (state: RootState) => {
  if (state.swapForm.prospectiveSwap.infoPostSwap.status === 'success') {
    return formFormatNumber(state.swapForm.prospectiveSwap.infoPostSwap.value.fee);
  }

  return '--';
};

export const selectGasInfoFormatted = (state: RootState) => {
  const infoPostSwap = state.swapForm.prospectiveSwap.infoPostSwap;
  return getGasInfoFormatted({
    status: infoPostSwap.status,
    gasDetails: infoPostSwap.value.gasFee,
  });
};

export const selectLeverage = (state: RootState) => state.swapForm.userInput.leverage;
export const selectInfoPostSwap = (state: RootState) => state.swapForm.prospectiveSwap.infoPostSwap;
export const selectInfoPostSwapAverageFixedRate = (state: RootState) =>
  state.swapForm.prospectiveSwap.infoPostSwap.status !== 'success'
    ? null
    : state.swapForm.prospectiveSwap.infoPostSwap.value.averageFixedRate;
export const selectInfoPostSwapVariableTokenDeltaBalance = (state: RootState) =>
  state.swapForm.prospectiveSwap.infoPostSwap.status !== 'success'
    ? null
    : state.swapForm.prospectiveSwap.infoPostSwap.value.variableTokenDeltaBalance;

export const selectIsMarginRequiredError = (state: RootState) => {
  return (
    state.swapForm.userInput.marginAmount.error !== null &&
    state.swapForm.userInput.marginAmount.error !== 'WLT'
  );
};
export const selectIsWalletMarginError = (state: RootState) => {
  return state.swapForm.userInput.marginAmount.error === 'WLT';
};
export const selectBottomRightMarginNumber = (state: RootState) => {
  const swapFormState = state.swapForm;

  if (swapFormState.userInput.marginAmount.editMode === 'remove') {
    const margin = getAvailableMargin(swapFormState);
    if (margin === null) {
      return null;
    }
    return formLimitAndFormatNumber(margin, 'floor');
  }

  if (swapFormState.prospectiveSwap.infoPostSwap.status === 'success') {
    return formLimitAndFormatNumber(
      swapFormState.prospectiveSwap.infoPostSwap.value.marginRequirement,
      'ceil',
    );
  }

  return null;
};

export const selectAvailableNotional = (state: RootState) => {
  return getAvailableNotional(state.swapForm);
};

export const selectNewPositionReceivingRate = (state: RootState) => {
  return getProspectiveSwapMode(state.swapForm) === 'fixed'
    ? getNewPositionFixedRate(state.swapForm)
    : getVariableRate(state.swapForm);
};
export const selectNewPositionPayingRate = (state: RootState) => {
  return getProspectiveSwapMode(state.swapForm) === 'fixed'
    ? getVariableRate(state.swapForm)
    : getNewPositionFixedRate(state.swapForm);
};
export const selectNewPositionCompactNotional = (state: RootState) => {
  if (state.swapForm.userInput.notionalAmount.error) return null;

  const compactParts = formCompactFormatToParts(getProspectiveSwapNotional(state.swapForm));

  return {
    compactNotionalSuffix: compactParts.compactSuffix,
    compactNotionalNumber: compactParts.compactNumber,
  };
};

export const selectExistingPositionMode = (state: RootState) => {
  return getExistingPositionMode(state.swapForm);
};
export const selectExistingPositionReceivingRateFormatted = (state: RootState) => {
  const receivingRate =
    getExistingPositionMode(state.swapForm) === 'fixed'
      ? getExistingPositionFixedRate(state.swapForm)
      : getExistingPositionVariableRate(state.swapForm);

  return receivingRate === null ? '--' : formFormatNumber(receivingRate);
};
export const selectExistingPositionPayingRateFormatted = (state: RootState) => {
  const payingRate =
    getExistingPositionMode(state.swapForm) === 'fixed'
      ? getExistingPositionVariableRate(state.swapForm)
      : getExistingPositionFixedRate(state.swapForm);

  return payingRate === null ? '--' : formFormatNumber(payingRate);
};
export const selectExistingPositionCompactNotional = (state: RootState) => {
  if (state.swapForm.position.status !== 'success' || !state.swapForm.position.value) {
    return null;
  }

  const compactParts = formCompactFormatToParts(state.swapForm.position.value.notional);
  return {
    compactNotionalSuffix: compactParts.compactSuffix,
    compactNotionalNumber: compactParts.compactNumber,
  };
};

export const selectEditPositionMode = (state: RootState) => {
  return getEditPositionMode(state.swapForm);
};
export const selectEditPositionReceivingRateFormatted = (state: RootState) => {
  const receivingRate =
    getEditPositionMode(state.swapForm) === 'fixed'
      ? getEditPositionFixedRate(state.cashflowCalculator, state.swapForm)
      : getEditPositionVariableRate(state.swapForm);

  return receivingRate === null ? '--' : formFormatNumber(receivingRate);
};

export const selectEditPositionRealizedPnLTotalFormatted = (state: RootState) => {
  const realizedPnLFromFees = getRealizedPnLFromFees(state.swapForm);
  const realizedPnLFromSwaps = getRealizedPnLFromSwaps(state.swapForm);
  let realizedPnLTotal = null;

  if (realizedPnLFromFees !== null && realizedPnLFromSwaps !== null) {
    realizedPnLTotal = realizedPnLFromFees + realizedPnLFromSwaps;
  }

  return realizedPnLTotal === null ? '--' : formFormatNumber(realizedPnLTotal);
};

export const selectEditPositionRealizedPnLFromFeesFormatted = (state: RootState) => {
  const realizedPnLFromFees = getRealizedPnLFromFees(state.swapForm);

  return realizedPnLFromFees === null ? '--' : formFormatNumber(realizedPnLFromFees);
};

export const selectEditPositionRealizedPnLFromSwapsFormatted = (state: RootState) => {
  const realizedPnLFromSwaps = getRealizedPnLFromSwaps(state.swapForm);

  return realizedPnLFromSwaps === null ? '--' : formFormatNumber(realizedPnLFromSwaps);
};

export const selectEditPositionUnrealizedPnLFromSwapsFormatted = (state: RootState) => {
  const unrealizedPnLFromSwaps = getUnrealizedPnLFromSwaps(state.swapForm);

  return unrealizedPnLFromSwaps === null ? '--' : formFormatNumber(unrealizedPnLFromSwaps);
};

export const selectEditPositionPayingRateFormatted = (state: RootState) => {
  const payingRate =
    getEditPositionMode(state.swapForm) === 'fixed'
      ? getEditPositionVariableRate(state.swapForm)
      : getEditPositionFixedRate(state.cashflowCalculator, state.swapForm);

  return payingRate === null ? '--' : formFormatNumber(payingRate);
};

export const selectEditPositionCompactNotional = (state: RootState) => {
  const notional = getEditPositionNotional(state.swapForm);

  const compactParts = formCompactFormatToParts(notional);
  return {
    compactNotionalSuffix: compactParts.compactSuffix,
    compactNotionalNumber: compactParts.compactNumber,
  };
};

export const selectSlippageFormatted = (state: RootState) => {
  if (!state.swapForm.amm || state.swapForm.prospectiveSwap.infoPostSwap.status !== 'success') {
    return '--';
  }

  if (state.swapForm.prospectiveSwap.infoPostSwap.value.variableTokenDeltaBalance === 0) {
    return formFormatNumber(0);
  }

  const slippage = Math.abs(
    state.swapForm.prospectiveSwap.infoPostSwap.value.averageFixedRate -
      state.swapForm.amm.fixedApr,
  );

  return formFormatNumber(slippage);
};

export const selectSwapConfirmationFlowStep = (state: RootState) =>
  state.swapForm.swapConfirmationFlow.step;
export const selectSwapConfirmationFlowError = (state: RootState) =>
  state.swapForm.swapConfirmationFlow.error;
export const selectSwapConfirmationFlowEtherscanLink = (state: RootState) => {
  return getViewOnEtherScanLink(
    state.network.chainId,
    state.swapForm.swapConfirmationFlow.txHash || '',
  );
};

export const selectMarginUpdateConfirmationFlowStep = (state: RootState) =>
  state.swapForm.marginUpdateConfirmationFlow.step;
export const selectMarginUpdateConfirmationFlowError = (state: RootState) =>
  state.swapForm.marginUpdateConfirmationFlow.error;
export const selectMarginUpdateConfirmationFlowEtherscanLink = (state: RootState) => {
  return getViewOnEtherScanLink(
    state.network.chainId,
    state.swapForm.marginUpdateConfirmationFlow.txHash || '',
  );
};

export const selectVariableRate24hDelta = (state: RootState) => {
  return getVariableRate24hDelta(state.swapForm.amm);
};

export const selectSubmitButtonText = (state: RootState) => {
  switch (state.swapForm.submitButton.state) {
    case 'swap':
      return 'Swap';
    case 'margin-update':
      return 'Update margin';
    case 'not-enough-balance':
      return 'Not enough balance';
    case 'approve':
      return `Approve ${
        state.swapForm.amm ? state.swapForm.amm.underlyingToken.name.toUpperCase() : ''
      }`;
    case 'approving':
      return `Approving...`;
    case 'connect-wallet':
      return 'Connect Your Wallet to Start Trading';
  }
};

export const selectIsLeverageDisabled = (state: RootState) => {
  return getProspectiveSwapNotional(state.swapForm) === 0;
};

export const selectIsLeverageHidden = (state: RootState) => {
  return isLeverageHidden(state.swapForm.amm);
};

export const selectShowLeverageNotification = (state: RootState) =>
  state.swapForm.showLowLeverageNotification;

export const selectLeverageOptions = (state: RootState) => {
  const swapFormState = state.swapForm;

  return {
    maxLeverage: swapFormState.prospectiveSwap.leverage.maxLeverage,
    leverageOptions: swapFormState.prospectiveSwap.leverage.options.map(String),
  };
};

export const selectIsGetInfoPostSwapLoading = (state: RootState) => {
  return state.swapForm.prospectiveSwap.infoPostSwap.status === 'pending';
};

export const selectPositionMarginFormatted = (state: RootState) => {
  if (!state.swapForm.position.value) {
    return '--';
  }
  return formCompactFormat(state.swapForm.position.value.margin);
};

export const selectFixedRateValueFormatted = (state: RootState) => {
  return !state.swapForm.amm ? '--' : formatNumber(state.swapForm.amm.fixedApr);
};

export const selectVariableRateValueFormatted = (state: RootState) => {
  return !state.swapForm.amm ? '--' : formatNumber(state.swapForm.amm.variableApy);
};

export const selectMarginRequirementFormatted = (state: RootState) => {
  return state.swapForm.prospectiveSwap.infoPostSwap.status === 'success'
    ? formatNumber(state.swapForm.prospectiveSwap.infoPostSwap.value.marginRequirement, 2, 4)
    : '--';
};
