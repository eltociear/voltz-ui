import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
// import { SystemStyleObject, Theme } from '@theme';
import { Position } from '@voltz-protocol/v1-sdk';
import { Button, getPositionBadgeVariant, PositionBadge, SummaryPanel } from '@components/atomic';
import { FormPanel } from '@components/interface';
import { formatCurrency } from '@utilities';
import { BigNumber } from 'ethers';
import { useAMMContext } from '@hooks';
import { colors }  from '@theme';

export type SwapCurrentPositionProps = {
  onPortfolio: () => void;
  position: Position;
};

const SwapCurrentPosition: React.FunctionComponent<SwapCurrentPositionProps> = ({
  onPortfolio,
  position
}) => {
  // const bottomSpacing: SystemStyleObject<Theme> = {
  //   marginBottom: (theme) => theme.spacing(6)
  // }
  const { positionInfo } = useAMMContext();

  const currentPositionBadgeText = `Current position: ${position.positionType === 1 ? 'Fix taker' : 'Variable taker'}`;
  const notional = Math.abs(position.effectiveVariableTokenBalance);
  const margin = position.amm.descale(BigNumber.from(position.margin.toString()));
  const leverage = notional / margin;
  const underlyingTokenName = position.amm.underlyingToken.name || '';

  const getHealthFactor = () => {
    
    if(positionInfo.loading) {
      return 'loading...';
    } else {
      let healthColour = '';
      let text = '';

      switch(positionInfo.result?.healthFactor) {
        case 1: {
          healthColour = colors.vzCustomRed1;
          text = 'DANGER';
          break;
        }
        case 2: {
          healthColour = colors.vzCustomYellow1;
          text = 'WARNING';
          break;
        }
        case 3: {
          healthColour = colors.vzCustomGreen2;
          text = 'HEALTHY';
          break;
        }
      }

      return (
        <span style={{color: healthColour}}>
          {text}
        </span>
      );
    }
  }

  useEffect(() => {
    positionInfo.call(position);
  }, [position]);

  return (
    <FormPanel noBackground>
      <Box sx={{ width: (theme) => theme.spacing(53), marginLeft: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: (theme) => theme.spacing(6) }}>
          <PositionBadge variant='FC' text={currentPositionBadgeText} sx={{ display: 'inline-block', marginLeft: 0 }} />
        </Box>
        <SummaryPanel label="Position information" rows={[
          {
            label: 'NOTIONAL',
            value: `${formatCurrency(notional)} ${underlyingTokenName}`
          },
          {
            label: 'LEVERAGE',
            value: `${formatCurrency(leverage)}x`
          },
          {
            label: 'HEALTH FACTOR',
            value: positionInfo.loading ? 'loading...' : getHealthFactor(),
          },
          {
            label: 'CURRENT MARGIN',
            value: `${formatCurrency(margin)} ${underlyingTokenName}`,
            highlight: true
          },
        ]} />
        <Button
          sx={{ 
            marginTop: (theme) => theme.spacing(6), 
            flexGrow: 0 
          }}
          variant="dark-link"
          onClick={onPortfolio}
        >
          Portfolio
        </Button>
      </Box>
    </FormPanel>
  );
};

export default SwapCurrentPosition;
