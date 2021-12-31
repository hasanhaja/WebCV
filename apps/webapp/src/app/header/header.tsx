import React, { useState } from 'react';

import {
  AppBar,
  Avatar,
  Button,
  IconButton, styled,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from '../menu-drawer/menu-drawer';

/* eslint-disable-next-line */
export interface HeaderProps {}

// TODO verify all non-relative styles
const StyledHamburgerButton = styled(IconButton)`
  margin-right: 16px;
`;

const StyledAppBar = styled(AppBar)`
  border-radius: 0;
`;

const HeaderDiv = styled("div")`
  flex-grow: 1;
  overflow: hidden;
`;

const Title = styled(Typography)`
  flex-grow: 1;
`;

const LogoButton = styled(Button)`
  margin-left: 16px;
`;

export function Header(props: HeaderProps) {
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
    <HeaderDiv>
      <StyledAppBar position="fixed">
        <Toolbar>
          <LogoButton color="inherit" disabled>
            <Avatar>H</Avatar>
          </LogoButton>
          <Title
            variant="h6"
            noWrap={true}
          >
            Hasan Ali
          </Title>
          <StyledHamburgerButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </StyledHamburgerButton>
          <MenuDrawer open={openState} toggleDrawer={toggleDrawer} />
        </Toolbar>
      </StyledAppBar>
      {/* This additional toolbar is a fix to ensure content doesn't get hidden behind it.*/}
      {/* Reference: https://material-ui.com/components/app-bar/*/}
      <Toolbar />
    </HeaderDiv>
  );
}

export default Header;
