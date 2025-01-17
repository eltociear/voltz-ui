import React from 'react';

import {
  selectAMMTokenFormatted,
  selectMarginAccountName,
  selectPositionMarginFormatted,
} from '../../../../../app/features/forms/trader/rollover-swap';
import { useAppSelector } from '../../../../../app/hooks';
import { MarginAccountFormPreview } from '../../../../components/MarginAccountFormPreview';

export const MarginAccount: React.FunctionComponent = () => {
  const token = useAppSelector(selectAMMTokenFormatted);
  const accountName = useAppSelector(selectMarginAccountName);
  const balanceValue = useAppSelector(selectPositionMarginFormatted);

  return (
    <MarginAccountFormPreview accountName={accountName} balanceValue={balanceValue} token={token} />
  );
};
