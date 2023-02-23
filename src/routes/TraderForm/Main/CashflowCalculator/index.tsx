import { CurrencyField, LabelTokenTypography, Typography } from 'brokoli-ui';
import React, { useCallback, useEffect } from 'react';

import {
  selectAdditionalCashflow,
  selectCashflowCalculatorStatus,
  selectCashflowCalculatorValidation,
  selectPredictedApy,
  selectTotalCashflow,
  setPredictedApyAction,
  updateCashflowCalculatorAction,
} from '../../../../app/features/swap-form';
import { initialiseCashflowCalculatorThunk } from '../../../../app/features/swap-form/thunks';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useSwapFormAMM } from '../../../../hooks/useSwapFormAMM';
import { formatCurrency } from '../../../../utilities/number';
import {
  AdditionalCashFlowBox,
  CashFlowCalculatorBox,
  CashFlowCalculatorLeftBox,
  CashFlowCalculatorRightBox,
  ExpectedApyBox,
  TotalCashFlowBox,
} from './CashflowCalculator.styled';

type CashFlowCalculatorProps = {};

export const CashFlowCalculator: React.FunctionComponent<CashFlowCalculatorProps> = () => {
  const dispatch = useAppDispatch();
  const { aMM } = useSwapFormAMM();

  const status = useAppSelector(selectCashflowCalculatorStatus);
  const valid = useAppSelector(selectCashflowCalculatorValidation);

  const predictedApy = useAppSelector(selectPredictedApy);

  const additonalCashflow = useAppSelector(selectAdditionalCashflow);
  const totalCashflow = useAppSelector(selectTotalCashflow);

  useEffect(() => {
    if (!aMM) {
      return;
    }
    void dispatch(initialiseCashflowCalculatorThunk());
  }, [dispatch, aMM]);

  const handleOnChange = useCallback(
    (value?: string) => {
      if (!value) {
        return;
      }
      dispatch(
        setPredictedApyAction({
          value,
        }),
      );
      if (aMM) {
        dispatch(updateCashflowCalculatorAction());
      }
    },
    [dispatch, aMM],
  );

  return (
    <CashFlowCalculatorBox>
      <CashFlowCalculatorLeftBox>
        <Typography colorToken="lavenderWeb" typographyToken="primaryBodyMediumBold">
          Cashflow Simulator
        </Typography>
      </CashFlowCalculatorLeftBox>
      <CashFlowCalculatorRightBox>
        <ExpectedApyBox>
          <Typography colorToken="lavenderWeb3" typographyToken="primaryBodyXSmallRegular">
            Expected Variable APY
          </Typography>
          <CurrencyField
            allowNegativeValue={false}
            disabled={status !== 'success'}
            error={!valid}
            suffix="%"
            value={predictedApy}
            onChange={handleOnChange}
          />
        </ExpectedApyBox>
        <AdditionalCashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Additional Cashflow"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token=" USDC"
            typographyToken="secondaryBodySmallRegular"
            value={formatCurrency(additonalCashflow, true, true, 2, 4)}
          />
        </AdditionalCashFlowBox>
        <TotalCashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Total Cashflow"
            labelColorToken="lavenderWeb3"
            labelTypographyToken="primaryBodyXSmallRegular"
            token=" USDC"
            typographyToken="secondaryBodySmallRegular"
            value={formatCurrency(totalCashflow, true, true, 2, 4)}
          />
        </TotalCashFlowBox>
      </CashFlowCalculatorRightBox>
    </CashFlowCalculatorBox>
  );
};
