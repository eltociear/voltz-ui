import { Draft } from '@reduxjs/toolkit';
import { Position } from '@voltz-protocol/v1-sdk';

import { SliceState } from '../../reducer';
import { hasExistingPosition } from '../hasExistingPosition';

export const getRealizedPnLFromSwaps = (state: Draft<SliceState>) => {
  if (hasExistingPosition(state)) {
    return (state.selectedPosition as Position).realizedPnLFromSwaps;
  }
  return null;
};
