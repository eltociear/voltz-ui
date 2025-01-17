import { Button, CloseButton, HorizontalLine, Typography } from 'brokoli-ui';
import React, { useCallback } from 'react';

import {
  closeLpConfirmationFlowAction,
  confirmLpThunk,
  selectLpConfirmationFlowError,
  selectLpFormAMM,
} from '../../../../../../app/features/forms/lps/lp';
import { useAppDispatch, useAppSelector } from '../../../../../../app/hooks';
import { MarketTokenInformationProps } from '../../../../../components/MarketTokenInformation';
import { MarketTokenInformationCompact } from '../../../../../components/MarketTokenInformationCompact';
import { TransactionDetails } from '../../TransactionDetails';
import { LPDetails } from '../LPDetails';
import {
  LpConfirmationStepBox,
  LpDetailsBox,
  LpFeeDetailsBox,
  TitleBox,
} from './LPConfirmationStep.styled';

export const LPConfirmationStep: React.FunctionComponent = () => {
  const aMM = useAppSelector(selectLpFormAMM);
  const dispatch = useAppDispatch();
  const handleConfirmLp = useCallback(() => {
    void dispatch(confirmLpThunk());
  }, [dispatch]);
  const error = useAppSelector(selectLpConfirmationFlowError);
  const handleCloseButtonClick = useCallback(() => {
    dispatch(closeLpConfirmationFlowAction());
  }, [dispatch]);
  if (!aMM) {
    return null;
  }

  return (
    <LpConfirmationStepBox>
      <TitleBox>
        <Typography colorToken="lavenderWeb" typographyToken="primaryHeader3Bold">
          Confirm
        </Typography>
        <CloseButton onClick={handleCloseButtonClick} />
      </TitleBox>
      <LpDetailsBox>
        <MarketTokenInformationCompact
          market={aMM.market.name as MarketTokenInformationProps['market']}
          token={aMM.underlyingToken.name.toLowerCase() as MarketTokenInformationProps['token']}
        />
        <LPDetails />
      </LpDetailsBox>
      <HorizontalLine />
      <LpFeeDetailsBox>
        <TransactionDetails />
      </LpFeeDetailsBox>
      <Button
        bottomLeftText={error ? error : ''}
        bottomLeftTextColorToken={error ? 'wildStrawberry' : undefined}
        bottomLeftTextTypographyToken={error ? 'primaryBodyXSmallRegular' : undefined}
        variant="primary"
        onClick={handleConfirmLp}
      >
        Confirm
      </Button>
    </LpConfirmationStepBox>
  );
};
