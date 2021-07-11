import React from 'react';

import './section.module.scss';
import { createStyles, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* eslint-disable-next-line */
export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: 407,
    },
  }),
);

export function Section({ title, children, className }: SectionProps) {
  const classes = useStyles();
  return (
    <Grid
      container
      // className={`${className} ${classes.root}`}
      className={className}
      direction="column"
      alignContent="flex-start"
    >
      <Grid item>
        <Typography variant="h4">{ title }</Typography>
      </Grid>
      <Grid item>
        { children }
      </Grid>
    </Grid>
  );
}

export default Section;
