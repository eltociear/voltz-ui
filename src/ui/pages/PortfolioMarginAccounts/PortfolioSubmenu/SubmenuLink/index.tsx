import React, { ReactNode } from 'react';

import { ActiveSubmenuLink, SubmenuLinkStyled } from './SubmenuLink.styled';

export type SubmenuLinkProps = {
  to: string;
  isActive: boolean;
  Icon: React.FunctionComponent;
  children?: ReactNode | undefined;
};

export const SubmenuLink: React.FunctionComponent<SubmenuLinkProps> = ({
  to,
  Icon,
  isActive,
  children,
}: SubmenuLinkProps) => {
  const LinkUI = isActive ? ActiveSubmenuLink : SubmenuLinkStyled;
  return (
    <LinkUI data-testid={isActive ? 'ActiveSubLinkButton' : 'SubLinkButton'} role="link" to={to}>
      {Icon ? <Icon /> : null}
      {children}
    </LinkUI>
  );
};
