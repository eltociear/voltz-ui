import { TypographyToken } from 'brokoli-ui';
import React from 'react';

import { selectRolloverLpFormAMM } from '../../../../../app/features/forms/lps/rollover-lp';
import { useAppSelector } from '../../../../../app/hooks';
import { useResponsiveQuery } from '../../../../../hooks/useResponsiveQuery';
import { NewPositionDetailsUI } from './NewPositionDetailsUI';
import { PreviousPositionDetailsUI } from './PreviousPositionDetailsUI';

type PositionDetailsProps = {};
export const PositionDetails: React.FunctionComponent<PositionDetailsProps> = () => {
  const aMM = useAppSelector(selectRolloverLpFormAMM);
  const { isLargeDesktopDevice } = useResponsiveQuery();

  const actionLabelTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodyLargeBold'
    : 'primaryBodyMediumBold';

  const actionTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'secondaryBodyMediumRegular'
    : 'secondaryBodySmallRegular';

  const labelTypographyToken: TypographyToken = isLargeDesktopDevice
    ? 'primaryBodySmallRegular'
    : 'primaryBodyXSmallRegular';

  const typographyToken: TypographyToken = isLargeDesktopDevice
    ? 'secondaryBodySmallRegular'
    : 'secondaryBodyMediumRegular';

  if (!aMM) {
    return null;
  }

  return (
    <React.Fragment>
      <PreviousPositionDetailsUI
        actionLabelTypographyToken={actionLabelTypographyToken}
        actionTypographyToken={actionTypographyToken}
        labelTypographyToken={labelTypographyToken}
        typographyToken={typographyToken}
        underlyingTokenName={aMM.underlyingToken.name}
      />
      <NewPositionDetailsUI
        actionLabelTypographyToken={actionLabelTypographyToken}
        actionTypographyToken={actionTypographyToken}
        labelTypographyToken={labelTypographyToken}
        typographyToken={typographyToken}
        underlyingTokenName={aMM.underlyingToken.name}
      />
    </React.Fragment>
  );
};
