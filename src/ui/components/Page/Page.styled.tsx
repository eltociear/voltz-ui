import styled from '@emotion/styled';

import { mediaQuery } from '../../../hooks/useResponsiveQuery/mediaQuery';

export const PageSectionBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasSubmenu',
})<{ hasSubmenu: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${({ hasSubmenu }) => (hasSubmenu ? 'calc(100% - 55px)' : '100%')};
  width: 100%;
`;

export const RightPageSectionBox = styled('div')`
  box-sizing: border-box;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const MainAndFormSectionBox = styled('div')`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow-y: auto;
`;

export const MainSectionBox = styled('div')`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
`;

export const RightSectionBox = styled('div')`
  box-sizing: border-box;
  width: 416px;

  height: 100vh;

  background: linear-gradient(180deg, rgba(11, 9, 17, 0.8) 41.43%, rgba(24, 21, 36, 0.8) 110.49%);
  backdrop-filter: blur(2px);

  @media ${mediaQuery.largeDesktopDevice} {
    width: 544px;
  }
`;
