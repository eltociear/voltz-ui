import { Draft } from '@reduxjs/toolkit';

import { SliceState as LPFormSliceState } from '../../../lp-form/state';
import { SliceState as SwapFormSliceState } from '../../../swap-form/state';

export const checkLowLeverageNotification = (
  state: Draft<SwapFormSliceState | LPFormSliceState>,
) => {
  return !!(
    state.amm &&
    state.userInput.leverage !== null &&
    state.userInput.leverage < state.amm.minLeverageAllowed &&
    !state.showLowLeverageNotification
  );
};
