import { Typography } from 'brokoli-ui';
import React from 'react';

import { VoltzLogo } from '../VoltzLogo';
import { CraftedByBox, PanelBox, VoltzLogoBox } from './LeftPanel.styled';

export const LeftPanelWithoutSubmenu: React.FunctionComponent = React.memo(() => (
  <PanelBox data-testid="LeftPanel-PanelBox">
    <VoltzLogoBox>
      <VoltzLogo />
    </VoltzLogoBox>
    <CraftedByBox data-testid="LeftPanel-CraftedByBox">
      <Typography colorToken="lavenderWeb" typographyToken="primaryBodyXSmallRegular">
        Voltz
      </Typography>
      <Typography colorToken="lavenderWeb3" typographyToken="primaryBodyXSmallRegular">
        {process.env.APP_VERSION}
      </Typography>
    </CraftedByBox>
  </PanelBox>
));
