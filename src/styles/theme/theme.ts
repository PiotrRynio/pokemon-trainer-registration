"use client";
import { createTheme } from "@mui/material/styles";

import { borderRadius } from "@/styles/common/borderRadius";
import { colors } from "@/styles/common/colors";
import { muiShadows } from "@/styles/theme/muiShadows";

const themeOptions = {
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: colors.white,
    },

    secondary: {
      main: colors.grey400,
      dark: colors.grey300,
      contrastText: colors.grey100,
    },

    error: {
      main: colors.error,
    },

    disabledBackground: {
      main: colors.disabledBackground,
    },
  },
  shape: {
    borderRadius: borderRadius.default,
  },

  components: {
    MuiIcon: {
      styleOverrides: {},
    },
  },

  shadows: muiShadows,
};

export type CustomThemeOptions = typeof themeOptions;

export const theme = createTheme(themeOptions);

// export type CustomTheme = typeof theme;
