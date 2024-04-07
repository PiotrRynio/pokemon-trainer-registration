"use client";
import { createTheme } from "@mui/material/styles";

import { baseBorderRadius } from "@/styles/theme/base/baseBorderRadius";
import { baseBorders } from "@/styles/theme/base/baseBorders";
import { baseColors } from "@/styles/theme/base/baseColors";
import { baseGaps } from "@/styles/theme/base/baseGaps";
import { baseShadows } from "@/styles/theme/base/baseShadows";
import { muiShadows } from "@/styles/theme/muiShadows";

const base = {
  colors: baseColors,
  borderRadius: baseBorderRadius,
  borders: baseBorders,
  gaps: baseGaps,
  shadows: baseShadows,
} as const;

export type CustomBase = typeof base;

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    primary: {
      main: baseColors.primary,
      dark: baseColors.primaryDark,
      contrastText: baseColors.white,
    },

    secondary: {
      main: baseColors.grey400,
      dark: baseColors.grey300,
      contrastText: baseColors.grey100,
    },

    error: {
      main: baseColors.error,
    },
  },
  shape: {
    borderRadius: baseBorderRadius.default,
  },

  components: {
    MuiIcon: {
      styleOverrides: {},
    },
  },

  shadows: muiShadows,

  base,
});
