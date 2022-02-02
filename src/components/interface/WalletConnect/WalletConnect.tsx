import React from 'react';
import Box from '@mui/material/Box';

import { UseWalletResult } from '@hooks';
import { Icon, Typography } from '../../atomic';
import { WalletConnectModal } from './components';

export type WalletConnectProps = {
  wallet: UseWalletResult;
};

const WalletConnect: React.FunctionComponent<WalletConnectProps> = ({ wallet }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Icon name="ethereum" color="secondary" fill="blue" />
        <Typography variant="body2">Ethereum</Typography>
      </Box>
      <WalletConnectModal wallet={wallet} />
    </Box>
  );
};

export default WalletConnect;
