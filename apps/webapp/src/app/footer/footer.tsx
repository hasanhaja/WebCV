import React from 'react';

import { styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled("footer")`
  overflow: hidden;
  flex-grow: 1;
`;

export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div>
        <Typography
          color="textSecondary"
          variant="body2">
          {`\u00A9 ${year} Hasan Ali`}
        </Typography>
      </div>
    </StyledFooter>
  );
}

export default Footer;
