import { Draft } from '@reduxjs/toolkit';

import { SliceState as RolloverLpFormSliceState } from '../../../rollover-lp-form/state';
import { SliceState as RolloverSwapFormSliceState } from '../../../trader/rollover-swap-form/state';

export const getRealizedPnLFromSwaps = (
  state: Draft<RolloverSwapFormSliceState | RolloverLpFormSliceState>,
) => {
  if (state.previousPosition !== null) {
    return state.previousPosition.realizedPnLFromSwaps;
  }

  return null;
};