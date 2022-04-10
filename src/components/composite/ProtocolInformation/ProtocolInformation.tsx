import React from 'react';
import Box from '@mui/material/Box';
import isUndefined from 'lodash/isUndefined';

import { Typography } from '@components/atomic';
import IconLabel from '../IconLabel/IconLabel';
import { VariableAPY } from './components';

export type ProtocolInformationProps = {
  protocol?: string;
  fixedApr?: number;
};

const ProtocolInformation: React.FunctionComponent<ProtocolInformationProps> = ({
  protocol,
  fixedApr,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        '& .MuiFormControl-root': {
          paddingRight: 3,
          paddingBottom: 3,
        },
      }}
    >
      <Typography
        label={<IconLabel label="protocol" icon="information-circle" info="The underlying bearing token." />}
        variant="h3"
      >
        {protocol}
      </Typography>
      {!isUndefined(fixedApr) && (
        <Typography
          label={<IconLabel label="fixed apr" icon="information-circle" info=" The current fixed Annual Percentage Rate of the pool." />}
          variant="h3"
          agentStyling
        >
          {fixedApr.toFixed(2)}%
        </Typography>
      )}
      <VariableAPY />
    </Box>
  );
};

export default ProtocolInformation;
