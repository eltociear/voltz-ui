import React, { useEffect } from 'react';
import isUndefined from 'lodash/isUndefined';
import Box from '@mui/material/Box';

import { useAMMContext } from '@hooks';
import { Typography } from '@components/atomic';

export type SwapInfoProps = {
  notional?: number;
};

const SwapInfo: React.FunctionComponent<SwapInfoProps> = ({ notional }) => {
  const { swapInfo } = useAMMContext();
  const { result, loading, call } = swapInfo;

  useEffect(() => {
    if (!isUndefined(notional)) {
      call({ notional });
    }
  }, [call, notional]);

  const renderSwapInfo = () => {
    if (loading) {
      return 'Loading...';
    }

    if (!result) {
      return '';
    }

    return (
      <>
        <Typography agentStyling variant="body2" label="Swap info">
          Available notional: {((result.availableNotional < 0) ? -result.availableNotional : result.availableNotional).toFixed(2)}
        </Typography>
        <Typography agentStyling variant="body2">Estimated slippage: {((result.slippage < 0) ? -result.slippage : result.slippage).toFixed(2)}%</Typography>
        <Typography agentStyling variant="body2">Fee: {((result.fee < 0) ? -result.fee : result.fee).toFixed(2)} </Typography>
        <Typography agentStyling variant="body2">
          Additional margin required: {result.marginRequirement.toFixed(2)}
        </Typography>
      </>
    );
  };

  return <Typography agentStyling variant="body2"> {renderSwapInfo()} </Typography>
};

export default SwapInfo;
