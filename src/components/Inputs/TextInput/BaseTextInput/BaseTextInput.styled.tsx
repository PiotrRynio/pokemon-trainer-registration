"use client";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

import { borders } from "@/styles/common/borders";
import { colors } from "@/styles/common/colors";
import { shadows } from "@/styles/common/shadows";

type StyledTextInputProps = { fullWidth?: boolean };
export const StyledTextInput = styled(TextField)<StyledTextInputProps>(
  ({ fullWidth }) => ({
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
        color: colors.grey100,
      },

      "& fieldset": {
        boxSizing: "border-box",
        height: 53,
        width: "100%",
        border: borders.default,
      },
      "&:hover fieldset": {
        border: borders.primary,
      },
      "&.Mui-focused fieldset": {
        border: borders.primary,
        boxShadow: shadows.focused,
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
