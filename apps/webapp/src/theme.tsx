import { createTheme, ThemeOptions } from '@mui/material';

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

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: `${themeSizes.overallBorderRadius}px 0 0 ${themeSizes.overallBorderRadius}px`,
          padding: themeSizes.overallPadding,
          backgroundColor: "rgba(34, 40, 49, 1)",
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: themeSizes.overallBorderRadius,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: themeSizes.overallPadding,
          backgroundColor: "#30475e",
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(34, 40, 49, 0.8)",
        },
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          flexGrow: 1,
        },
      },
      defaultProps: {
        justifyContent: "center",
        spacing: 4,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          padding: `${themeSizes.overallPadding}px ${themeSizes.overallPadding * 2}px`,
        },
      },
      defaultProps: {
        variant: "body1",
        color: "textPrimary",
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          color: "#222831",
          backgroundColor: "#fbdab7",
        },
      }
    },
    MuiChip: {
      defaultProps: {
        color: "secondary",
      },
    },
    MuiDivider: {
      defaultProps: {
        variant: "middle",
        light: true,
      },
    },
  },
}

/**
 * dark: #222831
 * lighter dark color: #30475e
 * light: #e8e8e8
 */

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
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
    mode: "light",
    primary: {
      main: "#222831",
    },
  },
  ...commonTheme,
}

export const setTheme = (enableDarkMode = true) =>
  createTheme(enableDarkMode ? darkTheme : lightTheme);
