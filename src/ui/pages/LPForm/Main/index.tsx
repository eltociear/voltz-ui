import React from 'react';

import { MAX_POOL_CAP } from '../../../../app/features/aMMs';
import {
  selectFixedRateInfo,
  selectLpFormAMM,
  selectLpFormSelectedPosition,
  selectVariableRateInfo,
} from '../../../../app/features/forms/lps/lp';
import { useAppSelector } from '../../../../app/hooks';
import { isV2AMM } from '../../../../utilities/amm';
import { AdmitPassFlow } from '../../../components/AdmitPassFlow';
import { FormTransactionHistory } from '../../../components/FormTransactionHistory';
import { HistoricalRatesChart } from '../../../components/HistoricalRatesChart';
import { BottomMainBox, MainBox } from './Main.styled';
import { PoolHeader } from './PoolHeader';
import { PositionDetails } from './PositionDetails';

export const Main: React.FunctionComponent = () => {
  const aMM = useAppSelector(selectLpFormAMM);
  const fixedRateInfo = useAppSelector(selectFixedRateInfo);
  const variableRateInfo = useAppSelector(selectVariableRateInfo);
  const existingPosition = useAppSelector(selectLpFormSelectedPosition);
  if (!aMM || fixedRateInfo === undefined || variableRateInfo === undefined) {
    return null;
  }

  return (
    <MainBox>
      {isV2AMM(aMM) ? <AdmitPassFlow poolCap={MAX_POOL_CAP} /> : null}
      <PoolHeader />
      <HistoricalRatesChart
        aMMId={aMM.id}
        aMMRateOracleId={aMM.rateOracle.id}
        fixedRate={fixedRateInfo}
        variableRate={variableRateInfo}
      />
      <BottomMainBox>
        <PositionDetails />
        <FormTransactionHistory positionId={existingPosition?.id} />
      </BottomMainBox>
    </MainBox>
  );
};
