import React, { useEffect, useState } from 'react';

import { WalletName } from '../../../contexts/WalletContext/types';
import { useWallet } from '../../../hooks/useWallet';
import { Modal } from '../../composite/Modal/Modal';
import { WalletConnectButton } from './WalletConnectButton/WalletConnectButton';
import { WalletDisplay } from './WalletDisplay/WalletDisplay';
import { WalletSelect } from './WalletSelect/WalletSelect';

export const WalletConnectModal: React.FunctionComponent = () => {
  const wallet = useWallet();
  const [open, setOpen] = useState(false);
  const [selecting, setSelecting] = useState(true);
  const handleChangeWallet = () => setSelecting(true);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => {
    setOpen(!!wallet.account);
    setSelecting(false);
  };
  const handleClose = () => {
    setSelecting(false);
    setOpen(false);
    wallet.setRequired(false);
  };
  const handleSelectWallet = (name: WalletName) => {
    handleClose();
    void wallet.connect(name);
  };
  const handleDisconnectWallet = () => {
    handleClose();
    wallet.disconnect();
  };

  const renderContent = () => {
    if (wallet.status === 'connected' && !selecting) {
      return (
        <WalletDisplay
          account={wallet?.account}
          walletName={!wallet?.name || wallet.name === 'disconnect' ? null : wallet.name}
          onChangeWallet={handleChangeWallet}
          onDisconnectWallet={handleDisconnectWallet}
        />
      );
    }

    return (
      <WalletSelect
        wallet={wallet}
        onClose={handleModalClose}
        onSelectWallet={handleSelectWallet}
      />
    );
  };

  useEffect(() => {
    if (wallet.status === 'connected') {
      setSelecting(false);
    }
  }, [wallet.status]);

  useEffect(() => {
    if (wallet.required) {
      setOpen(true);
      setSelecting(true);
    }
  }, [wallet.required]);

  return (
    <Modal
      open={open}
      trigger={
        <WalletConnectButton
          account={wallet?.account}
          error={wallet?.walletError}
          walletName={!wallet?.name || wallet.name === 'disconnect' ? null : wallet.name}
        />
      }
      onClose={handleClose}
      onOpen={handleOpen}
    >
      {renderContent()}
    </Modal>
  );
};
