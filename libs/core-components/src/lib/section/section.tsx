import React from 'react';

import { Grid, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, children, className, id }: SectionProps) {
  return (
    <div id={id !== null ? id : ""}>
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
    </div>
  );
}

export default Section;
