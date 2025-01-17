import React, { useCallback } from 'react';

import {
  selectIsLeverageDisabled,
  selectIsLeverageHidden,
  selectLeverage,
  selectLeverageOptions,
  selectShowLeverageNotification,
  setLeverageAction,
} from '../../../../../app/features/forms/lps/rollover-lp';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { useLowLeverageNotification } from '../../../../../hooks/useLowLeverageNotification';
import { useWallet } from '../../../../../hooks/useWallet';
import { LeverageField as LeverageFieldComponent } from '../../../../components/LeverageField';

export const LeverageField: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const leverage = useAppSelector(selectLeverage);
  const isLeverageDisabled = useAppSelector(selectIsLeverageDisabled);
  const isLeverageHidden = useAppSelector(selectIsLeverageHidden);
  const { maxLeverage, leverageOptions } = useAppSelector(selectLeverageOptions);
  const { account } = useWallet();
  const showLowLeverageNotification = useAppSelector(selectShowLeverageNotification);

  useLowLeverageNotification({ showLowLeverageNotification });

  const handleOnChange = useCallback(
    (value: number | undefined, changeType: 'button' | 'input') => {
      dispatch(
        setLeverageAction({
          value: value === undefined ? NaN : value,
          account: account || '',
          changeType,
        }),
      );
    },
    [dispatch, account],
  );

  if (isLeverageHidden) {
    return null;
  }

  return (
    <LeverageFieldComponent
      disabled={isLeverageDisabled || maxLeverage === '--'}
      leverage={leverage}
      leverageOptions={leverageOptions}
      maxLeverage={maxLeverage}
      onLeverageChange={handleOnChange}
    />
  );
};
