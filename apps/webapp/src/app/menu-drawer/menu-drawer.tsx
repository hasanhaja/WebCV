import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton, ListItemText,
  Paper, styled, SwipeableDrawer,
  Typography
} from '@mui/material';

import { LinkedInSocial, GitHubSocial, TwitterSocial } from '@webcv/core-components';

/* eslint-disable-next-line */
export interface MenuDrawerProps {
  open: boolean;
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Div = styled("div")`
  width: 100%;
`;

const HeaderBanner = styled(Div)`
  padding-top: 0.8em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const SocialBanner = styled(Div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const MenuOptions = styled(Div)`

`;

const InitialAvatar = styled(Avatar)`
  margin-left: 16px;
`;

const CloseButton = styled(IconButton)`
  margin-right: 16px;
`;

const DrawerContent = styled("div")`
  flex-grow: 1;
  overflow-x: hidden;
  width: ${35*8}px;
`;

export function MenuDrawer({ open: openState, toggleDrawer }: MenuDrawerProps) {

  const header = () => (
    <HeaderBanner>
      <InitialAvatar>
        H
      </InitialAvatar>
      <Typography noWrap={true} variant="h6" align="left">
        Hasan Ali
      </Typography>
      <CloseButton onClick={toggleDrawer(false)} edge="end" color="inherit">
        <CloseIcon />
      </CloseButton>
    </HeaderBanner>
  );

  const list = () => (
    <MenuOptions
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItemButton component="a" key="Projects" href="https://github.com/hasanhaja" >
          <ListItemText primary="Projects" />
        </ListItemButton>

        <ListItemButton component="a" key="Blog" href="https://hasanhaja.medium.com/" >
          <ListItemText primary="Blog" />
        </ListItemButton>

        <ListItemButton component="a" key="Education" href="#education-section" >
          <ListItemText primary="Education" />
        </ListItemButton>

        <ListItemButton component="a" key="Experience" href="#experience-section">
          <ListItemText primary="Experience" />
        </ListItemButton>

        <ListItemButton component="a" key="Statistics" >
          <ListItemText primary="Statistics" />
        </ListItemButton>
      </List>
    </MenuOptions>
  );

  const socials = () => (
    <SocialBanner>
      <TwitterSocial href="https://twitter.com/hasanhaja"/>
      <LinkedInSocial href="https://www.linkedin.com/in/hasanhaja/"/>
      <GitHubSocial href="https://github.com/hasanhaja"/>
    </SocialBanner>
  );

  //
  const iOS = typeof navigator !== undefined && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
