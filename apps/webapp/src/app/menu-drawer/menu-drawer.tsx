import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem, ListItemText,
  Paper, SwipeableDrawer,
  Typography
} from '@mui/material';

import { LinkedInSocial, GitHubSocial, TwitterSocial } from '@webcv/core-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MenuDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Header = styled(Paper)`
  width: 100%;
`;

const InitialAvatar = styled(Avatar)`
  margin-left: 16px;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const CloseButton = styled(IconButton)`
  margin-right: 16px;
`;

const DrawerContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  width: ${35*8}px;
`;

export function MenuDrawer({ open: openState, toggleDrawer }: MenuDrawerProps) {

  const header = () => (
    <Header elevation={0}>
      <Grid container spacing={3} wrap="nowrap" alignItems="center">
        <Grid item xs>
          <InitialAvatar>
            H
          </InitialAvatar>
        </Grid>
        <Grid item xs>
          <Title noWrap={true} variant="h6">
            Hasan Ali
          </Title>
        </Grid>
        <Grid item xs>
          <CloseButton onClick={toggleDrawer(false)} edge="end" color="inherit">
            <CloseIcon />
          </CloseButton>
        </Grid>
      </Grid>
    </Header>
  );

  const list = () => (
    <div
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
                     anchor="right"
    >
      <DrawerContent>
        {/*TODO Adjust this grid component for different screen sizes*/}
        {header()}
        <Divider />
        {list()}
        {socials()}
      </DrawerContent>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
