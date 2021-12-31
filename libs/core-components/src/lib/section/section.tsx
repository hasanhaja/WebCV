import React from 'react';

import { Grid, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <Grid
      container
      className={className}
      direction="column"
      justifyContent="flex-start"
    >
      <Grid item>
        <Typography
          variant="h4"
        >
          { title }
        </Typography>
      </Grid>
      <Grid item>
        { children }
      </Grid>
    </Grid>
  );
}

export default Section;
