import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { Position } from '@voltz-protocol/v1-sdk';
import React from 'react';

import { selectChainId } from '../../../../app/features/network';
import { useAppSelector } from '../../../../app/hooks';
import { Panel } from '../../../../components/atomic/Panel/Panel';
import { AMMProvider } from '../../../../contexts/AMMContext/AMMContext';
import { useAMMs } from '../../../../hooks/useAMMs';
import { useAppNavigate } from '../../../../hooks/useAppNavigate';
import { getConfig } from '../../../../hooks/voltz-config/config';
import { colors, SystemStyleObject, Theme } from '../../../../theme';
import {
  findCurrentAmm,
  generateAmmIdForRoute,
  generatePoolId,
  generatePositionIdForRoute,
} from '../../../../utilities/amm';
import { getRowButtonId } from '../../../../utilities/googleAnalytics/helpers';
import { isTraderRolloverExperienceFlowEnabled } from '../../../../utilities/isEnvVarProvided/is-trader-rollover-experience-flow-enabled';
import { getMaturityWindow } from '../../../../utilities/maturityWindow';
import { PositionTableHead, PositionTableRow } from './components';
import { TransactionList } from './TransactionList/TransactionList';

export type PositionTableProps = {
  positions: Position[];
  onSelectItem: (datum: Position, mode: 'margin' | 'liquidity' | 'rollover' | 'notional') => void;
  onSettle: (position: Position) => void;
};

export const PositionTable: React.FunctionComponent<PositionTableProps> = ({
  positions,
  onSelectItem,
  onSettle,
}) => {
  const navigate = useAppNavigate();
  const chainId = useAppSelector(selectChainId);
  const { aMMs } = useAMMs();

  const commonOverrides: SystemStyleObject<Theme> = {
    '& .MuiTableCell-root': {
      borderColor: 'transparent',
      paddingRight: (theme) => theme.spacing(4),
      paddingLeft: (theme) => theme.spacing(4),
      paddingTop: (theme) => theme.spacing(2),
      paddingBottom: (theme) => theme.spacing(1),
      '&:first-of-type': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      '&:last-of-type': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
    },
    '.MuiInputLabel-root': {
      marginBottom: (theme) => theme.spacing(1),
    },
  };

  const listItemStyles: SystemStyleObject<Theme> = {
    padding: '0',
    margin: '0',
    marginTop: (theme) => theme.spacing(6),

    '&:first-of-type': {
      marginTop: '0',
    },
  };

  const getMaturedTableBorderStyles = (positionType: number) => {
    const base = { borderRadius: '8px' };

    switch (positionType) {
      case 1: {
        return {
          ...base,
          border: `1px solid ${colors.skyBlueCrayola.base}`,
        };
      }
      case 2:
      case 3: {
        return {
          ...base,
          border: `1px solid ${colors.lavenderWeb.base}`,
        };
      }
    }
  };

  const handleSelectRow = (
    index: number,
    mode: 'margin' | 'liquidity' | 'rollover' | 'notional',
  ) => {
    onSelectItem(positions[index], mode);
  };

  const config = getConfig(chainId);
  const pools = config ? config.pools : [];

  if (positions.length === 0) {
    return null;
  }

  return (
    <List sx={{ padding: '0', margin: '0' }}>
      {positions.map((pos, index) => {
        const rolloverAmm = findCurrentAmm(aMMs, pools, pos);
        const rolloverAvailable = rolloverAmm ? rolloverAmm.id !== pos.amm.id : false;
        const closeToMaturity =
          Date.now().valueOf() + getMaturityWindow(pos.amm.rateOracle.protocolId) >
          pos.amm.endDateTime.toMillis();

        return (
          <ListItem key={pos.id} sx={listItemStyles}>
            <Panel
              sx={{ width: '100%', padding: (theme) => `0 ${theme.spacing(4)}` }}
              variant="main"
            >
              <PositionTableHead
                beforeMaturity={!pos.isPoolMatured}
                gaButtonId={getRowButtonId(
                  false,
                  pos.amm.protocol,
                  pos.amm.market.tags.isBorrowing,
                )}
                healthFactor={pos.healthFactor}
                isBothTraderAndLP={pos.isBothTraderAndLP ?? false}
                isSettled={pos.isSettled}
                poolTraderWithdrawable={
                  pools.find((pool) => pool.id === pos.amm.id)?.traderWithdrawable ?? true
                }
                positionType={pos.positionType}
                rolloverAvailable={rolloverAvailable}
                settlementCashflowInUSD={pos.settlementCashflowInUSD}
                underlyingTokenName={pos.amm.underlyingToken.name || ''}
                unrealizedPnL={pos.unrealizedPnLFromSwaps}
                onRollover={() => {
                  if (isTraderRolloverExperienceFlowEnabled()) {
                    navigate.toRolloverSwapFormPage({
                      ammId: generateAmmIdForRoute(pos.amm),
                      poolId: generatePoolId(pos.amm),
                      positionId: generatePositionIdForRoute(pos),
                    });
                    return;
                  }
                  handleSelectRow(index, 'rollover');
                }}
                onSelect={
                  closeToMaturity
                    ? undefined
                    : (mode: 'margin' | 'liquidity' | 'notional') => {
                        navigate.toSwapFormPage({
                          ammId: generateAmmIdForRoute(pos.amm),
                          poolId: generatePoolId(pos.amm),
                        });
                      }
                }
                onSettle={() => onSettle(pos)}
              />

              <TableContainer
                sx={
                  pos.isPoolMatured && !pos.isSettled
                    ? getMaturedTableBorderStyles(pos.positionType)
                    : undefined
                }
              >
                <Table size="medium" sx={{ ...commonOverrides }}>
                  <TableBody>
                    <AMMProvider amm={pos.amm}>
                      <PositionTableRow
                        key={pos.id}
                        index={index}
                        isAaveV3={pos.amm.market.tags.isAaveV3}
                        position={pos}
                      />
                    </AMMProvider>
                  </TableBody>
                </Table>
              </TableContainer>
              <TransactionList position={pos} />
            </Panel>
          </ListItem>
        );
      })}
    </List>
  );
};
