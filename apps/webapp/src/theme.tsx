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

  overrides: {
    MuiPaper: {
      root: {
        borderRadius: `${themeSizes.overallBorderRadius}px 0 0 ${themeSizes.overallBorderRadius}px`,
        padding: themeSizes.overallPadding,
      }
    },
    MuiAppBar: {
      root: {
        padding: 0,
      }
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
      }
    },
    MuiGrid: {
      container: {
        flexGrow: 1,
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
    },
    MuiContainer: {
      disableGutters: true,
    }
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
    },
    // action: {
    //   hover: "rgba(212, 241, 244, 0.08)",
    // },
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
