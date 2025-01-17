import { SupportedChainId } from '@voltz-protocol/v1-sdk';

import { PositionsFilterId } from '../../../ui/pages/Portfolio/PortfolioPositions/PositionsList';
import { PortfolioPosition, PortfolioSummary } from './thunks';

export type SliceState = {
  positionsLoadedState: 'idle' | 'pending' | 'succeeded' | 'failed';
  positions: PortfolioPosition[];
  portfolioSummaryLoadedState: 'idle' | 'pending' | 'succeeded' | 'failed';
  portfolioSummary: PortfolioSummary | null;
  sortingDirection: PositionSorting;
};

export type PositionUI = {
  id: string;
  creationTimestampInMS: number;
  routeAmmId: string;
  routePositionId: string;
  routePoolId: string;
  isBorrowing: boolean;
  isV2: boolean;
  type: 'LP' | 'Variable' | 'Fixed';
  chainId: SupportedChainId;
  market: 'Aave V2' | 'Aave V3' | 'Compound' | 'Lido' | 'Rocket' | 'GMX:GLP' | 'SOFR';
  token?: 'eth' | 'usdc' | 'usdt' | 'dai';
  name: string;
  notionalUSD: number;
  notionalUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
  marginUSD: number;
  marginUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
  maturityFormatted: string;
  maturityEndTimestampInMS: number;
  maturityStartTimestampInMS: number;
  status: {
    health: 'healthy' | 'danger' | 'warning';
    variant: 'matured' | 'settled' | 'active';
    currentFixed: number;
    receiving: number;
    paying: number;
    fixLow: number;
    fixHigh: number;
  };
  unrealizedPNLUSD: number;
  unrealizedPNLUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
  realizedPNLTotalUSD: number;
  realizedPNLTotalUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
  realizedPNLFeesUSD: number;
  realizedPNLFeesUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
  realizedPNLCashflowUSD: number;
  realizedPNLCashflowUSDCompactFormat: {
    compactNumber: string;
    compactSuffix: string;
  };
};

export type PositionSortId =
  | 'name'
  | 'notional'
  | 'margin'
  | 'maturity'
  | 'status'
  | 'unrealizedPNL'
  | 'realizedPNL';
export type PositionSortDirection = 'noSort' | 'ascending' | 'descending';
export type PositionSorting = Record<PositionSortId, PositionSortDirection>;
export type PositionsSummaryFormatted = {
  maturedPositionsLength: string;
  settledPositionsLength: string;
  activePositionsLength: string;
  positionsLength: string;
  healthyPositionsLength: string;
  warningPositionsLength: string;
  dangerPositionsLength: string;
  totalPortfolioValueUSDFormatted: string;
  totalPortfolioMarginValueUSDFormatted: string;
  totalPortfolioRealizedPNLValueUSDFormatted: string;
  totalPortfolioUnrealizedPNLValueUSDFormatted: string;
  totalPortfolioNotionalValueUSDCompactFormatted: {
    compactNumber: string;
    compactSuffix: string;
  };
  filterOptions: {
    id: PositionsFilterId;
    label: string;
    attentionPrefixText?: string;
  }[];
};
export type PortfolioSummaryFormatted = {
  healthyPositionsLength: string;
  warningPositionsLength: string;
  dangerPositionsLength: string;
  totalPortfolioValueUSDFormatted: string;
  totalPortfolioMarginValueUSDFormatted: string;
  totalPortfolioRealizedPNLValueUSDFormatted: string;
  totalPortfolioUnrealizedPNLValueUSDFormatted: string;
  totalPortfolioNotionalValueUSDCompactFormatted: {
    compactNumber: string;
    compactSuffix: string;
  };
  totalPortfolioCollateralUSDCompactFormatted: {
    compactNumber: string;
    compactSuffix: string;
  };
  distributions: PortfolioSummary['distributions'];
};
