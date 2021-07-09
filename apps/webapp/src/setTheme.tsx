import { createMuiTheme, ThemeOptions } from '@material-ui/core';

const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#222831"
    },
  }
}

const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#222831"
    },
  }
}

export const setTheme = (enableDarkMode = true) =>
  createMuiTheme(enableDarkMode ? darkTheme : lightTheme);
