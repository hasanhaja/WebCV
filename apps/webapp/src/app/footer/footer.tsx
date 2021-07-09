import React from 'react';

import './footer.module.scss';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

/* eslint-disable-next-line */
export interface FooterProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
  }),
);

export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div>
        <Typography
          color="textSecondary"
          variant="body2">
          {`\u00A9 ${year} Hasan Ali`}
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
