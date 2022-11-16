import { UpdatePositionMarginAction, Transaction } from '../types';
import { serializeAmm, createId } from '../utilities';

import { AMM } from '@voltz-protocol/v1-sdk';

const updatePositionMarginAction = (
  amm: AMM,
  transaction: Omit<Transaction, 'id'>,
): UpdatePositionMarginAction => ({
  type: 'updatePositionMargin',
  payload: {
    amm: serializeAmm(amm),
    transaction: {
      ...transaction,
      id: createId(transaction),
    },
  },
});

export default updatePositionMarginAction;
