import { Agents } from '@contexts';
import Box from '@mui/material/Box';
import CustomPoolField from './CustomPoolField';
import { Typography } from '@components/atomic';

import { ReactComponent as Aave } from './aave-icon.svg';
import { ReactComponent as Compound } from './compound-icon.svg';
import { ReactComponent as Lido } from './lido-icon.svg';
import { ReactComponent as Rocket } from './rocket-icon.svg';
import { ReactComponent as DAI } from './dai-icon.svg';
import { ReactComponent as USDC } from './usdc-icon.svg';
import { ReactComponent as USDT } from './usdt-icon.svg';
import { ReactComponent as ETH } from './eth-icon.svg';

export type PoolFieldProps = {
  agent?: Agents;
  protocol: string;
  isBorrowing: boolean;
  isBorrowTable?: boolean;
};

const PoolField = ({ agent, protocol, isBorrowing, isBorrowTable }: PoolFieldProps) => {
  const protocolIcon = () => {
    const prefix = protocol[0];
    switch (prefix) {
      case 'c':
        return ['Compound', <Compound />];
      case 'a':
        return ['Aave', <Aave />];
      case 's':
        return ['Lido', <Lido />];
      case 'r':
        return ['Rocket', <Rocket />];
      default:
        return ['', ''];
    }
  };

  const tokenIcon = () => {
    const token = protocol.substring(1);
    switch (token) {
      case 'DAI':
        return ['DAI', <DAI />];
      case 'USDC':
        return ['USDC', <USDC />];
      case 'ETH':
        return ['ETH', <ETH />];
      case 'tETH':
        return ['ETH', <ETH />];
      case 'USDT':
        return ['USDT', <USDT />];
      default:
        return ['', ''];
    }
  };

  const protocolInfo = protocolIcon();
  const tokenInfo = tokenIcon();

  const getPoolLabel = () => (
    <>
      <Box component="span" sx={{ color: '#9B97AD' }}>
        POOL
      </Box>
      {isBorrowing && (
        <Box component="span" sx={{ color: '#FF4AA9' }}>
          {'  '}
          <strong>BORROWING</strong>
        </Box>
      )}
    </>
  );

  const renderPool = () => (
    <Typography
      variant="body2"
      sx={{
        fontSize: 18,
        textTransform: 'uppercase',
        verticalAlign: 'middle',
        fontWeight: 700,
        letterSpacing: '0.02em',
        lineHeight: '100%',
        marginTop: (theme) => theme.spacing(1),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            marginRight: (theme) => theme.spacing(-1),
            marginBottom: (theme) => theme.spacing(-1),
          }}
        >
          {' '}
          {protocolInfo[1]}
        </Box>
        <Box
          sx={{
            marginRight: (theme) => theme.spacing(2),
            marginBottom: (theme) => theme.spacing(-1),
          }}
        >
          {tokenInfo[1]}
        </Box>
        {protocolInfo[0]} - {tokenInfo[0]}
      </Box>
    </Typography>
  );

  if (isBorrowTable) {
    return renderPool();
  }

  if (agent === Agents.LIQUIDITY_PROVIDER) {
    return (
      <CustomPoolField label={getPoolLabel()}>
        <Box sx={{ width: '100%' }}>{renderPool()}</Box>
      </CustomPoolField>
    );
  } else {
    return <CustomPoolField label={getPoolLabel()}>{renderPool()}</CustomPoolField>;
  }
};

export default PoolField;
