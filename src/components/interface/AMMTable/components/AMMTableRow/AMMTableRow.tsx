import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { SystemStyleObject, Theme } from '@mui/system';
import isNull from 'lodash/isNull';

import { Agents } from '@components/contexts';
import { Button, Typography } from '@components/atomic';
import { MaturityInformation } from '@components/composite';
import { useAgent, useWallet } from '@hooks';
import { AMMTableDatum } from '../../types';
import { labels } from '../../constants';
import { VariableAPY } from './components';

export type AMMTableRowProps = {
  datum: AMMTableDatum;
  index: number;
  onSelect: () => void;
};


// todo: panel component, adjust the styling
const AMMTableRow: React.FunctionComponent<AMMTableRowProps> = ({ datum, index, onSelect }) => {
  const wallet = useWallet();
  const { agent } = useAgent();
  const variant = agent === Agents.LIQUIDITY_PROVIDER ? 'darker' : 'main';
  
  // add object to sx prop
  // todo:
  // 
  // const anotherObject = {
  //   margin: ... 
  // }

  const typeStyleOverrides = (): SystemStyleObject<Theme> => {
    if (!variant) {
      return {
        backgroundColor: `primary.dark`,
      };
    }

    switch (variant) {
      case 'main':
        return {
          backgroundColor: `secondary.darken040`,
        };

      case 'darker':
        return {
          backgroundColor: `secondary.darken045`,
        };

      default:
        return {};
    }
  };


  const handleClick = () => {
    if (isNull(wallet.account)) {
      wallet.setRequired(true);
    } else {
      onSelect();
    }
  };

  return (
      // todo: <TableRow key={index} sx={{...anotherObject,  ...typeStyleOverrides() }}>
      <TableRow key={index} sx={{...typeStyleOverrides() }}>
      {labels.map(([field, label]) => {
        if (field === 'variableApy') {
          return <VariableAPY />;
        }

        const renderDisplay = () => {
          if (field === 'maturity') {
            return (
              <MaturityInformation
                label={label}
                startDate={datum.startDate}
                endDate={datum.endDate}
              />
            );
          }

          const getContent = () => {
            switch (field) {
              case 'protocol':
                return datum.protocol;

              case 'fixedApr':
                return `${datum.fixedApr.toFixed(2)}%`;

              default:
                return null;
            }
          };

          return (
            <Typography variant="body2" label={label} agentStyling={field=="fixedApr"}>
              {getContent()}
            </Typography>
          );
        };

        return <TableCell key={field}>{renderDisplay()}</TableCell>;
      })}
      <TableCell align="center">
        <Button variant="contained" onClick={handleClick}>
          {agent === Agents.LIQUIDITY_PROVIDER ? 'PROVIDE LIQUIDITY' : 'TRADE'}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AMMTableRow;
