import { LabelTokenTypography, TypographyToken } from 'brokoli-ui';
import React from 'react';

import {
  selectPreviousPositionCompactNotional,
  selectPreviousPositionDepositedMargin,
  selectPreviousPositionNetBalance,
  selectPreviousPositionRealizedPnLFromFeesFormatted,
  selectPreviousPositionRealizedPnLFromSwapsFormatted,
  selectPreviousPositionRealizedPnLTotalFormatted,
  selectPreviousPositionSwapMode,
} from '../../../../../app/features/forms/trader/rollover-swap-form';
import { useAppSelector } from '../../../../../app/hooks';
import { PnLDetailsWithTooltip } from '../../../../components/PnLDetailsWithTooltip';
import { MODE_COLOR_TOKEN_MAP } from '../../helpers';
import {
  CashFlowBox,
  DepositedMarginBox,
  NotionalBox,
  PositionDetailsBox,
  PositionDetailsLeftBox,
  PositionDetailsRightBox,
  RealisedPNLBox,
} from './PositionDetails.styled';

type PreviousPositionDetailsUIProps = {
  underlyingTokenName: string;
  actionLabelTypographyToken: TypographyToken;
  actionTypographyToken: TypographyToken;
  labelTypographyToken: TypographyToken;
  typographyToken: TypographyToken;
};

export const PreviousPositionDetailsUI: React.FunctionComponent<PreviousPositionDetailsUIProps> = ({
  underlyingTokenName,
  actionLabelTypographyToken,
  actionTypographyToken,
  labelTypographyToken,
  typographyToken,
}) => {
  const compactNotional = useAppSelector(selectPreviousPositionCompactNotional);
  const mode = useAppSelector(selectPreviousPositionSwapMode);
  const compactDepositedMargin = useAppSelector(selectPreviousPositionDepositedMargin);
  const compactNetBalance = useAppSelector(selectPreviousPositionNetBalance);
  const realizedPnLTotal = useAppSelector(selectPreviousPositionRealizedPnLTotalFormatted);
  const realizedPnLFromFees = useAppSelector(selectPreviousPositionRealizedPnLFromFeesFormatted);
  const realizedPnLFromSwaps = useAppSelector(selectPreviousPositionRealizedPnLFromSwapsFormatted);

  return (
    <PositionDetailsBox>
      <PositionDetailsLeftBox>
        <LabelTokenTypography
          colorToken={MODE_COLOR_TOKEN_MAP[mode]}
          label="Previous Position"
          labelColorToken="lavenderWeb"
          labelTypographyToken={actionLabelTypographyToken}
          token=""
          typographyToken={actionTypographyToken}
          value={mode === 'fixed' ? 'Fixed Taker' : 'Variable Taker'}
        />
      </PositionDetailsLeftBox>
      <PositionDetailsRightBox>
        <NotionalBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Notional"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token={
              compactNotional
                ? `${compactNotional.compactNotionalSuffix} ${underlyingTokenName.toUpperCase()}`
                : ` ${underlyingTokenName.toUpperCase()}`
            }
            typographyToken={typographyToken}
            value={compactNotional ? compactNotional.compactNotionalNumber : '--'}
          />
        </NotionalBox>
        <DepositedMarginBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Deposited margin"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token={
              compactDepositedMargin
                ? `${
                    compactDepositedMargin.compactDepositedMarginSuffix
                  } ${underlyingTokenName.toUpperCase()}`
                : ` ${underlyingTokenName.toUpperCase()}`
            }
            typographyToken={typographyToken}
            value={
              compactDepositedMargin ? compactDepositedMargin.compactDepositedMarginNumber : '--'
            }
          />
        </DepositedMarginBox>
        <RealisedPNLBox>
          <PnLDetailsWithTooltip
            labelTypographyToken={labelTypographyToken}
            realizedPnLFromFees={realizedPnLFromFees}
            realizedPnLFromSwaps={realizedPnLFromSwaps}
            realizedPnLTotal={realizedPnLTotal}
            typographyToken={typographyToken}
            underlyingTokenName={underlyingTokenName}
          />
        </RealisedPNLBox>
        <CashFlowBox>
          <LabelTokenTypography
            colorToken="lavenderWeb"
            label="Net Balance"
            labelColorToken="lavenderWeb3"
            labelTypographyToken={labelTypographyToken}
            token={
              compactNetBalance
                ? `${
                    compactNetBalance.compactNetBalanceSuffix
                  } ${underlyingTokenName.toUpperCase()}`
                : ` ${underlyingTokenName.toUpperCase()}`
            }
            typographyToken={typographyToken}
            value={compactNetBalance ? compactNetBalance.compactNetBalanceNumber : '--'}
          />
        </CashFlowBox>
      </PositionDetailsRightBox>
    </PositionDetailsBox>
  );
};
