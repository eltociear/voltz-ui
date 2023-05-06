import { Draft } from '@reduxjs/toolkit';

import { SliceState as LPFormSliceState } from '../../../lp-form/state';
import { SliceState as RolloverSwapFormSliceState } from '../../../trader/rollover-swap-form/state';
import { SliceState as SwapFormSliceState } from '../../../trader/swap-form/state';

export const isUserInputNotionalError = (
  state: Draft<RolloverSwapFormSliceState | SwapFormSliceState | LPFormSliceState>,
): boolean => {
  return state.userInput.notionalAmount.error !== null;
};
