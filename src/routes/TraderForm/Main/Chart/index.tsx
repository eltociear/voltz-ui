import { Granularity } from '@voltz-protocol/v1-sdk';
import { LineChart, RainbowLoader } from 'brokoli-ui';
import React, { useEffect, useState } from 'react';

import {
  selectHistoricalRates,
  selectHistoricalRatesStatus,
  selectOppositeSideCurrentRate,
} from '../../../../app/features/historical-rates';
import { fetchHistoricalRatesThunk } from '../../../../app/features/historical-rates/thunks';
import { selectChainId } from '../../../../app/features/network';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useSwapFormAMM } from '../../../../hooks/useSwapFormAMM';
import { ChartBox, LineChartBox, LoadingBox } from './Chart.styled';
import { ChartFilters, ChartFiltersProps } from './ChartFilters';

type ChartProps = {};

const filterOptions: ChartFiltersProps['filterOptions'] = [
  {
    id: '1d',
    label: '1d',
    isMode: false,
  },
  {
    id: '1w',
    label: '1w',
    isMode: false,
  },
  {
    id: '1m',
    label: '1m',
    isMode: false,
  },
  {
    id: '1y',
    label: '1y',
    isMode: false,
  },
  {
    id: 'fixed',
    label: 'Fix',
    underlineColorToken: 'skyBlueCrayola',
    isMode: true,
  },
  {
    id: 'variable',
    label: 'Var',
    underlineColorToken: 'ultramarineBlue',
    isMode: true,
  },
];

export const Chart: React.FunctionComponent<ChartProps> = () => {
  const data = useAppSelector(selectHistoricalRates);
  const yMarker = useAppSelector(selectOppositeSideCurrentRate);
  const loading = useAppSelector(selectHistoricalRatesStatus) === 'pending';
  const dispatch = useAppDispatch();
  const [activeTimeRangeId, setActiveTimeRangeId] = useState<string>('1w');
  const [activeModeId, setActiveModeId] = useState<string>('fixed');
  const chainId = useAppSelector(selectChainId);
  const { aMM } = useSwapFormAMM();
  const granularity =
    activeTimeRangeId === '1d' || activeModeId === '1w'
      ? Granularity.ONE_HOUR
      : Granularity.ONE_DAY;
  const timeframe =
    activeTimeRangeId === '1d'
      ? 1
      : activeTimeRangeId === '1w'
      ? 7
      : activeTimeRangeId === '1m'
      ? 31
      : 365;
  const isFixed = activeModeId === 'fixed';
  useEffect(() => {
    if (!aMM || !chainId) {
      return;
    }
    void dispatch(
      fetchHistoricalRatesThunk({
        chainId,
        isFixed,
        granularity,
        timeframeMs: timeframe * 24 * 60 * 60 * 1000,
        aMMId: aMM.id,
        aMMRateOracleId: aMM.rateOracle.id,
      }),
    );
  }, [dispatch, timeframe, isFixed, granularity, chainId, aMM]);
  return (
    <ChartBox>
      <LineChartBox>
        {loading ? (
          <LoadingBox>
            <RainbowLoader height={3} text="Printing historical rates..." width={335} />
          </LoadingBox>
        ) : null}
        <LineChart
          colorToken={isFixed ? 'skyBlueCrayola' : 'ultramarineBlue'}
          data={[
            {
              id: 'graph1',
              data: data,
            },
          ]}
          yMarker={yMarker}
          yMarkerColorToken={isFixed ? 'ultramarineBlue3' : 'skyBlueCrayola3'}
          yMarkerText={isFixed ? 'Variable rate' : 'Fixed rate'}
        />
      </LineChartBox>
      <ChartFilters
        activeModeId={activeModeId}
        activeTimeRangeId={activeTimeRangeId}
        disabled={loading}
        filterOptions={filterOptions}
        onModeChange={setActiveModeId}
        onTimeRangeChange={setActiveTimeRangeId}
      />
    </ChartBox>
  );
};