import { createMuiTheme, ThemeOptions } from '@material-ui/core';

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
        // padding: themeSizes.overallPadding,
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
      justify: "space-between",
      alignContent: "center",
    },
    MuiTypography: {
      variant: "body1",
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

export const setTheme = (enableDarkMode = true) =>
  createMuiTheme(enableDarkMode ? darkTheme : lightTheme);
