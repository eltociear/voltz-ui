import { Draft } from '@reduxjs/toolkit';

import { SliceState } from '../../state';

export const getRealizedPnLFromSwaps = (state: Draft<SliceState>) => {
  if (state.previousPosition !== null) {
    return state.previousPosition.realizedPnLFromSwaps;
  }
  return null;
};
