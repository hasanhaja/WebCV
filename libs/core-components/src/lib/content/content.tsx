import React from 'react';

import { Container} from '@mui/material';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContentProps {
  children: React.ReactNode;
// TODO Refactor sizing. This might not be a good way to do it.
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const StyledContainer = styled(Container)`
  overflow: hidden;
`;

export function Content({ width="lg", children }: ContentProps) {
  return (
    <StyledContainer maxWidth={width}>
      { children }
    </StyledContainer>
  );
}

export default Content;
