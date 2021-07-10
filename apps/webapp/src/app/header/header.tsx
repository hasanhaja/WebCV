import React, { useState } from 'react';

import './header.module.scss';
import {
  AppBar,
  Avatar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuDrawer from '../menu-drawer/menu-drawer';
/**
 * import { ReactComponent as Logo } from './logo.svg';
 * <Logo width="75" height="75" />
 *
 * import star from './star.svg';
 *
 * <div className="github-star-badge">
 *  <img src={star} className="material-icons" alt="" />
 *    Star
 * </div>
 */

/* eslint-disable-next-line */
export interface HeaderProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
    },
    hamburgerButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    shape: {
      borderRadius: 0,
    },
    logo: {
      marginLeft: theme.spacing(2),
    },
  }),
);

export function Header(props: HeaderProps) {
  const classes = useStyles();

  const [openState, setOpenState] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenState(open);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.shape} position="fixed">
        <Toolbar>
          <Button color="inherit" disabled className={classes.logo}>
            <Avatar>H</Avatar>
          </Button>
          <Typography
            variant="h6"
            className={classes.title}
            noWrap={true}
          >
            Hasan Ali
          </Typography>
          <IconButton edge="end" className={classes.hamburgerButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <MenuDrawer open={openState} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </AppBar>
      {/* This additional toolbar is a fix to ensure content doesn't get hidden behind it.*/}
      {/* Reference: https://material-ui.com/components/app-bar/*/}
      <Toolbar />
    </div>
  );
}

export default Header;
