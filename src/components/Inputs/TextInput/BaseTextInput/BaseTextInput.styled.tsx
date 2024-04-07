"use client";
import { styled, TextField } from "@mui/material";

type StyledTextInputProps = { fullWidth?: boolean };
export const StyledTextInput = styled(TextField)<StyledTextInputProps>(
  ({ fullWidth, theme }) => ({
    width: fullWidth ? "100%" : 320,

    "& .MuiOutlinedInput-root": {
      boxSizing: "border-box",
      height: 48,
      width: "100%",

      "& input": {
        boxSizing: "border-box",
        padding: "14px 10px",
        lineHeight: 20,
        fontSize: 14,
        textTransform: "capitalize",
        color: theme.base.colors.grey100,
      },

      "& fieldset": {
        boxSizing: "border-box",
        height: 53,
        width: "100%",
        border: theme.base.borders.default,
      },
      "&:hover fieldset": {
        border: theme.base.borders.primary,
      },
      "&.Mui-focused fieldset": {
        border: theme.base.borders.primary,
        boxShadow: theme.base.shadows.focused,
      },
    },

    "input[type=number]::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "input[type=number]::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  }),
);
