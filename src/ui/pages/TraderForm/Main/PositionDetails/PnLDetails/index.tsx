import { TokenTypography, Typography } from 'brokoli-ui';
import React from 'react';

import { PnLDetailsBox, RowBox, RowsBox } from './PnLDetails.styled';

type PnLDetailsProps = {
  underlyingTokenName: string;
  pnlFromSwaps: string;
  pnlFromFees: string;
};

export const PnLDetails: React.FunctionComponent<PnLDetailsProps> = ({
  underlyingTokenName,
  pnlFromSwaps,
  pnlFromFees,
}) => {
  return (
    <PnLDetailsBox>
      <Typography colorToken="lavenderWeb" typographyToken="primaryBodySmallRegular">
        Profit or loss already captured from fees as well as the position after closing it or
        accrued cashflows while it is active
      </Typography>
      <RowsBox>
        <RowBox>
          <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
            Swaps
          </Typography>
          <TokenTypography
            colorToken="lavenderWeb"
            token={` ${underlyingTokenName.toUpperCase()}`}
            typographyToken="primaryBodySmallRegular"
            value={pnlFromSwaps}
          />
        </RowBox>
        <RowBox>
          <Typography colorToken="lavenderWeb2" typographyToken="primaryBodySmallRegular">
            Fees
          </Typography>
          <TokenTypography
            colorToken="lavenderWeb"
            token={` ${underlyingTokenName.toUpperCase()}`}
            typographyToken="primaryBodySmallRegular"
            value={pnlFromFees}
          />
        </RowBox>
      </RowsBox>
    </PnLDetailsBox>
  );
};
