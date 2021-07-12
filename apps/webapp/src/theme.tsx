import { createStyles, createTheme, Theme, ThemeOptions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const themeSizes = {
  overallBorderRadius: 15,
  overallPadding: 8,
}

const commonTheme: ThemeOptions = {
  shape: {
    borderRadius: themeSizes.overallBorderRadius,
  },

  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Verdana',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  overrides: {
    MuiPaper: {
      root: {
        borderRadius: `${themeSizes.overallBorderRadius}px 0 0 ${themeSizes.overallBorderRadius}px`,
        padding: themeSizes.overallPadding,
        backgroundColor: "rgba(34, 40, 49, 1)",
      }
    },
    MuiAppBar: {
      root: {
        padding: 0,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      }
    },
    MuiButtonBase: {
      root: {
        borderRadius: themeSizes.overallBorderRadius,
      }
    },
    MuiContainer: {
      root: {
        padding: themeSizes.overallPadding,
        backgroundColor: "#30475e",
      }
    },
    MuiCard: {
      root: {
        backgroundColor: "rgba(34, 40, 49, 0.8)",
      },
    },
    MuiGrid: {
      container: {
        flexGrow: 1,
      },
    },
    MuiTypography: {
      root: {
        padding: `${themeSizes.overallPadding}px ${themeSizes.overallPadding*2}px`,
      },
    },
    MuiAvatar: {
      colorDefault: {
        color: "#222831",
        backgroundColor: "#fbdab7",
      },
    },
  },

  props: {
    MuiButton: {
      disableRipple: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiDivider: {
      variant: "middle",
      light: true,
    },
    MuiGrid: {
      justifyContent: "center",
      spacing: 4,
    },
    MuiTypography: {
      variant: "body1",
      color: "textPrimary",
    },
    MuiContainer: {
      disableGutters: true,
    },
    MuiChip: {
      color: "secondary",
    },
  }
}

/**
 * dark: #222831
 * lighter dark color: #30475e
 * light: #e8e8e8
 */

const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#222831",
      contrastText: "#e8e8e8",
    },
    secondary: {
      main: "#FBDAB7",
      contrastText: "#222831",
    },
    text: {
      primary: "#e8e8e8",
      secondary: "#fbdab7",
    },
    // action: {
    //   hover: "rgba(212, 241, 244, 0.08)",
    // },
    background: {
      paper: "#222831",
      default: "#222831"
    },
  },
  ...commonTheme,
}

const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#222831",
    },
  },
  ...commonTheme,
}

export const useDefaultSpacingStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(1, 0, 6, 0),
    },
    title: {
      paddingBottom: theme.spacing(2),
    }
  }),
);

export const setTheme = (enableDarkMode = true) =>
  createTheme(enableDarkMode ? darkTheme : lightTheme);
