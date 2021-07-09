import React from 'react';

import './content.module.scss';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

/* eslint-disable-next-line */
export interface ContentProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
  }),
);

export function Content({ children }: ContentProps) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      { children }
    </Container>
  );
}

export default Content;
