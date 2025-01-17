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
  getNewPositionFixedRate,
  getPreviousPositionRealizedPnLFromFees,
  getPreviousPositionRealizedPnLFromSwaps,
  getProspectiveSwapMargin,
  getProspectiveSwapMode,
  getProspectiveSwapNotional,
  getVariableRate,
} from './utils';

export const selectSubmitButtonInfo = (state: RootState) => state.rolloverSwapForm.submitButton;
export const selectRolloverSwapFormAMM = (state: RootState) => state.rolloverSwapForm.amm;
export const selectRolloverSwapFormPreviousAMM = (state: RootState) =>
  state.rolloverSwapForm.previousAMM;
export const selectRolloverSwapFormPreviousPosition = (state: RootState) =>
  state.rolloverSwapForm.previousPosition;

export const selectWalletBalance = (state: RootState) => {
  const availableMargin = getAvailableMargin(state.rolloverSwapForm);
  if (availableMargin === null) {
    return '--';
  }

  return formCompactFormat(availableMargin);
};
export const selectFixedRateInfo = (state: RootState) => state.rolloverSwapForm.amm?.fixedApr;
export const selectVariableRateInfo = (state: RootState) => state.rolloverSwapForm.amm?.variableApy;
export const selectPoolSwapInfoStatus = (state: RootState) =>
  state.rolloverSwapForm.poolSwapInfo.status;

export const selectAMMTokenFormatted = (state: RootState) => {
  return formatUnderlyingTokenName(selectRolloverSwapFormAMM(state));
};

export const selectAMMMaturityFormatted = (state: RootState) => {
  return formatPoolMaturity(selectRolloverSwapFormAMM(state));
};

export const selectMarginAccountName = (state: RootState) => {
  const aMM = selectRolloverSwapFormAMM(state);
  if (!aMM) {
    return '';
  }
  return `${aMM.protocol} ${selectAMMMaturityFormatted(state)}`;
};

// User Input
export const selectUserInputMode = (state: RootState) => state.rolloverSwapForm.userInput.mode;
export const selectUserInputNotionalInfo = (state: RootState) =>
  state.rolloverSwapForm.userInput.notionalAmount;
export const selectUserInputMarginInfo = (state: RootState) =>
  state.rolloverSwapForm.userInput.marginAmount;

export const selectProspectiveSwapMode = (state: RootState) =>
  getProspectiveSwapMode(state.rolloverSwapForm);
export const selectPreviousPositionSwapMode = (state: RootState) => {
  if (!state.rolloverSwapForm.previousPosition) {
    return 'fixed';
  }
  return state.rolloverSwapForm.previousPosition.positionType === 1 ? 'fixed' : 'variable';
};

export const selectPreviousPositionId = (state: RootState) => {
  if (!state.rolloverSwapForm.previousPosition) {
    return null;
  }
  return state.rolloverSwapForm.previousPosition.id;
};

export const selectProspectiveSwapNotionalFormatted = (state: RootState) => {
  return formCompactFormat(getProspectiveSwapNotional(state.rolloverSwapForm));
};
export const selectProspectiveSwapMarginFormatted = (state: RootState) => {
  return formCompactFormat(
    getProspectiveSwapMargin(state.rolloverSwapForm) -
      state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.fee,
  );
};
export const selectProspectiveSwapFeeFormatted = (state: RootState) => {
  if (state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status === 'success') {
    return formFormatNumber(state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.fee);
  }

  return '--';
};

export const selectLeverage = (state: RootState) => state.rolloverSwapForm.userInput.leverage;
export const selectInfoPostSwap = (state: RootState) =>
  state.rolloverSwapForm.prospectiveSwap.infoPostSwap;
export const selectInfoPostSwapAverageFixedRate = (state: RootState) =>
  state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status !== 'success'
    ? null
    : state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.averageFixedRate;
export const selectInfoPostSwapVariableTokenDeltaBalance = (state: RootState) =>
  state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status !== 'success'
    ? null
    : state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.variableTokenDeltaBalance;

export const selectIsMarginRequiredError = (state: RootState) => {
  return (
    state.rolloverSwapForm.userInput.marginAmount.error !== null &&
    state.rolloverSwapForm.userInput.marginAmount.error !== 'WLT'
  );
};

export const selectIsWalletMarginError = (state: RootState) => {
  return state.rolloverSwapForm.userInput.marginAmount.error === 'WLT';
};

export const selectBottomRightMarginNumber = (state: RootState) => {
  const rolloverSwapForm = state.rolloverSwapForm;

  if (rolloverSwapForm.prospectiveSwap.infoPostSwap.status === 'success') {
    return formLimitAndFormatNumber(
      rolloverSwapForm.prospectiveSwap.infoPostSwap.value.marginRequirement,
      'ceil',
    );
  }

  return null;
};

export const selectAvailableNotional = (state: RootState) => {
  return getAvailableNotional(state.rolloverSwapForm);
};

export const selectNewPositionReceivingRate = (state: RootState) => {
  return getProspectiveSwapMode(state.rolloverSwapForm) === 'fixed'
    ? getNewPositionFixedRate(state.rolloverSwapForm)
    : getVariableRate(state.rolloverSwapForm);
};

export const selectPreviousPositionDepositedMargin = (state: RootState) => {
  if (!state.rolloverSwapForm.previousPosition) {
    return null;
  }
  const depositedMargin =
    state.rolloverSwapForm.previousPosition.margin -
    state.rolloverSwapForm.previousPosition.realizedPnLFromFeesPaid;
  const compactParts = formCompactFormatToParts(depositedMargin);

  return {
    compactDepositedMarginSuffix: compactParts.compactSuffix,
    compactDepositedMarginNumber: compactParts.compactNumber,
  };
};

export const selectPreviousPositionSettlingBalance = (state: RootState) => {
  const position = state.rolloverSwapForm.previousPosition;
  if (!position) {
    return null;
  }
  const settlingBalance = position.margin + position.realizedPnLFromSwaps;
  const compactParts = formCompactFormatToParts(settlingBalance);

  return {
    compactSuffix: compactParts.compactSuffix,
    compactNumber: compactParts.compactNumber,
  };
};

export const selectNewPositionPayingRate = (state: RootState) => {
  return getProspectiveSwapMode(state.rolloverSwapForm) === 'fixed'
    ? getVariableRate(state.rolloverSwapForm)
    : getNewPositionFixedRate(state.rolloverSwapForm);
};

export const selectNewPositionCompactNotional = (state: RootState) => {
  if (state.rolloverSwapForm.userInput.notionalAmount.error) return null;

  const compactParts = formCompactFormatToParts(getProspectiveSwapNotional(state.rolloverSwapForm));

  return {
    compactNotionalSuffix: compactParts.compactSuffix,
    compactNotionalNumber: compactParts.compactNumber,
  };
};

export const selectPreviousPositionCompactNotional = (state: RootState) => {
  if (!state.rolloverSwapForm.previousPosition) {
    return null;
  }
  const compactParts = formCompactFormatToParts(state.rolloverSwapForm.previousPosition.notional);

  return {
    compactNotionalSuffix: compactParts.compactSuffix,
    compactNotionalNumber: compactParts.compactNumber,
  };
};

export const selectSlippageFormatted = (state: RootState) => {
  if (
    !state.rolloverSwapForm.amm ||
    state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status !== 'success'
  ) {
    return '--';
  }

  if (state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.variableTokenDeltaBalance === 0) {
    return formFormatNumber(0);
  }

  const slippage = Math.abs(
    state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.averageFixedRate -
      state.rolloverSwapForm.amm.fixedApr,
  );

  return formFormatNumber(slippage);
};

export const selectSwapConfirmationFlowStep = (state: RootState) =>
  state.rolloverSwapForm.swapConfirmationFlow.step;
export const selectSwapConfirmationFlowError = (state: RootState) =>
  state.rolloverSwapForm.swapConfirmationFlow.error;
export const selectRolloverConfirmationFlowEtherscanLink = (state: RootState) => {
  return getViewOnEtherScanLink(
    state.network.chainId,
    state.rolloverSwapForm.swapConfirmationFlow.txHash || '',
  );
};

export const selectVariableRate24hDelta = (state: RootState) => {
  return getVariableRate24hDelta(state.rolloverSwapForm.amm);
};

export const selectSubmitButtonText = (state: RootState) => {
  switch (state.rolloverSwapForm.submitButton.state) {
    case 'rollover':
      return 'Rollover';
    case 'not-enough-balance':
      return 'Not enough balance';
    case 'approve':
      return `Approve ${
        state.rolloverSwapForm.amm
          ? state.rolloverSwapForm.amm.underlyingToken.name.toUpperCase()
          : ''
      }`;
    case 'approving':
      return `Approving...`;
    case 'connect-wallet':
      return 'Connect Your Wallet to Start Trading';
  }
};

export const selectIsLeverageDisabled = (state: RootState) => {
  return getProspectiveSwapNotional(state.rolloverSwapForm) === 0;
};

export const selectIsLeverageHidden = (state: RootState) => {
  return isLeverageHidden(state.rolloverSwapForm.amm);
};

export const selectShowLeverageNotification = (state: RootState) =>
  state.rolloverSwapForm.showLowLeverageNotification;

export const selectLeverageOptions = (state: RootState) => {
  const rolloverSwapForm = state.rolloverSwapForm;

  return {
    maxLeverage: rolloverSwapForm.prospectiveSwap.leverage.maxLeverage,
    leverageOptions: rolloverSwapForm.prospectiveSwap.leverage.options.map(String),
  };
};

export const selectIsGetInfoPostSwapLoading = (state: RootState) => {
  return state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status === 'pending';
};

export const selectPositionMarginFormatted = () => {
  return '--';
};

export const selectFixedRateValueFormatted = (state: RootState) => {
  return !state.rolloverSwapForm.amm ? '--' : formatNumber(state.rolloverSwapForm.amm.fixedApr);
};

export const selectVariableRateValueFormatted = (state: RootState) => {
  return !state.rolloverSwapForm.amm ? '--' : formatNumber(state.rolloverSwapForm.amm.variableApy);
};

export const selectMarginRequirementFormatted = (state: RootState) => {
  return state.rolloverSwapForm.prospectiveSwap.infoPostSwap.status === 'success'
    ? formatNumber(
        state.rolloverSwapForm.prospectiveSwap.infoPostSwap.value.marginRequirement,
        2,
        4,
      )
    : '--';
};

export const selectPreviousPositionRealizedPnLTotalFormatted = (state: RootState) => {
  const realizedPnLFromFees = getPreviousPositionRealizedPnLFromFees(state.rolloverSwapForm);
  const realizedPnLFromSwaps = getPreviousPositionRealizedPnLFromSwaps(state.rolloverSwapForm);
  let realizedPnLTotal = null;

  if (realizedPnLFromFees !== null && realizedPnLFromSwaps !== null) {
    realizedPnLTotal = realizedPnLFromFees + realizedPnLFromSwaps;
  }

  return realizedPnLTotal === null ? '--' : formFormatNumber(realizedPnLTotal);
};

export const selectPreviousPositionRealizedPnLFromFeesFormatted = (state: RootState) => {
  const realizedPnLFromFees = getPreviousPositionRealizedPnLFromFees(state.rolloverSwapForm);

  return realizedPnLFromFees === null ? '--' : formFormatNumber(realizedPnLFromFees);
};

export const selectPreviousPositionRealizedPnLFromSwapsFormatted = (state: RootState) => {
  const realizedPnLFromSwaps = getPreviousPositionRealizedPnLFromSwaps(state.rolloverSwapForm);

  return realizedPnLFromSwaps === null ? '--' : formFormatNumber(realizedPnLFromSwaps);
};

export const selectGasInfoFormatted = (state: RootState) => {
  const infoPostSwap = state.rolloverSwapForm.prospectiveSwap.infoPostSwap;
  return getGasInfoFormatted({
    status: infoPostSwap.status,
    gasDetails: infoPostSwap.value.gasFee,
  });
};
