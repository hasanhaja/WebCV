import { createMuiTheme, ThemeOptions } from '@material-ui/core';

const darkTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#222831"
    },
  }
}

export const theme = createMuiTheme(darkTheme);
