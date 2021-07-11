import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import CloseIcon from '@material-ui/icons/Close';

import {
  Avatar,
  createStyles,
  Grid,
  IconButton,
  Paper,
  SwipeableDrawer,
  Theme,
  Typography
} from '@material-ui/core';
import { LinkedInSocial, GitHubSocial, TwitterSocial } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface MenuDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

// const bg = "orange";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // background: bg,
      // width: 325,
      flexGrow: 1,
      // overflow: 'hidden',
      // padding: theme.spacing(0, 3),
      width: theme.spacing(35),
    },
    list: {
      // width: 325,
    },
    paper: {
      // borderRadius: "15px 0 0 15px",
      // background: bg,
    },
    closeButton: {
      marginRight: theme.spacing(2),
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    header: {
      width: "100%",
    }
  }),
);

export function MenuDrawer({ open: openState, toggleDrawer }: MenuDrawerProps) {
  const classes = useStyles();

  const header = () => (
    <Paper elevation={0} className={classes.header}>
      <Grid container spacing={3} wrap="nowrap" alignItems="center">
        <Grid item xs>
          <Avatar
            className={classes.avatar}
          >
            H
          </Avatar>
        </Grid>
        <Grid item xs>
          <Typography noWrap={true} variant="h6" className={classes.title}>
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
        {['Projects', 'Blog', 'Education', 'Experience', 'Statistics'].map((text) => (
          <ListItem button key={text}>
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
      <div className={classes.root}>
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
