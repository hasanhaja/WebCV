import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import CloseIcon from '@material-ui/icons/Close';

import styles from './menu-drawer.module.scss';
import {
  AppBar,
  createStyles,
  Grid,
  IconButton,
  Paper,
  SwipeableDrawer,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';
import { LinkedInSocial, GitHubSocial, TwitterSocial } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface MenuDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const bg = "orange";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // background: bg,
    },
    list: {
      // width: 325,
    },
    paper: {
      // borderRadius: "15px 0 0 15px",
      // background: bg,
    },
    closeButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      // flexGrow: 1,
    },
  }),
);

export function MenuDrawer({ open: openState, toggleDrawer }: MenuDrawerProps) {
  const classes = useStyles();

  const header = () => (
    <Paper elevation={0}>
      <Grid container spacing={3}>
        <Grid item xs>
          <AccountBoxIcon/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.title}>
            Hasan Ali
          </Typography>
        </Grid>
        <Grid item xs>
          <IconButton onClick={toggleDrawer(false)} edge="end" className={classes.closeButton} color="inherit">
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Projects', 'Blog', 'Education', 'Experience', 'Statistics'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const socials = () => (
    <Paper elevation={0}>
      <Grid container spacing={3} wrap="nowrap">
        <Grid item xs>
          <TwitterSocial href="https://twitter.com/hasanhaja"/>
        </Grid>
        <Grid item xs>
          <LinkedInSocial href="https://www.linkedin.com/in/hasanhaja/"/>
        </Grid>
        <Grid item xs>
          <GitHubSocial href="https://github.com/hasanhaja"/>
        </Grid>
      </Grid>
    </Paper>
  );

  //
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                     open={openState}
                     onClose={toggleDrawer(false)}
                     onOpen={toggleDrawer(true)}
                     classes={{paper: classes.paper}}
                     anchor="right"
    >
      <div>
        {/*TODO Adjust this grid component for different screen sizes*/}
        {header()}
        <Divider />
        {list()}
        {socials()}
      </div>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
