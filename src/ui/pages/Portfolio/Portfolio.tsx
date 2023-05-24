import React from 'react';

import { selectChainId } from '../../../app/features/network';
import { useAppSelector } from '../../../app/hooks';
import { useWallet } from '../../../hooks/useWallet';
import { ConnectWallet } from '../../components/ConnectWallet';

export const Portfolio: React.FunctionComponent = () => {
  const wallet = useWallet();
  const chainId = useAppSelector(selectChainId);

  if (!chainId) {
    return null;
  }

  if (!wallet.account) {
    return (
      <ConnectWallet
        heading="Welcome to the your Portfolio"
        subheading="Please connect your wallet"
      />
    );
  }

  return <ConnectWallet heading="Welcome to the Voltz Portfolio" subheading="Hi" />;
};
