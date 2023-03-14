import styled from '@emotion/styled';
import { colors } from 'brokoli-ui';

import { ReactComponent as VoltzLogoSvg } from './voltz-logo.svg';

export const VoltzLogo = styled(VoltzLogoSvg)`
  cursor: pointer;
  transition: filter 200ms ease-in;
  filter: drop-shadow(0px 0px 20px ${colors.wildStrawberry});

  &:hover {
    filter: drop-shadow(0px 0px 10px ${colors.wildStrawberry});
  }
`;

export const PanelBox = styled('div')`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;

  width: 63px;
  height: 100%;

  border: 1px solid ${colors.lavenderWeb8};

  background: rgba(11, 9, 17, 0.5);
  backdrop-filter: blur(2px);
`;

export const CraftedByBox = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
