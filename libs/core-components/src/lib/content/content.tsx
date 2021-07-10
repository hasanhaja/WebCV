import React from 'react';

import './content.module.scss';
import { Container, createStyles, makeStyles, Theme } from '@material-ui/core';

/* eslint-disable-next-line */
export interface ContentProps {
  children: React.ReactNode;
// TODO Refactor sizing. This might not be a good way to do it.
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
  }),
);

export function Content({ width, children }: ContentProps) {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={width}>
      { children }
    </Container>
  );
}

export default Content;
