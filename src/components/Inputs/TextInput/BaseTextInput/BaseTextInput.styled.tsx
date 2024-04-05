"use client";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

import { borders } from "@/styles/common/borders";
import { colors } from "@/styles/common/colors";
import { shadows } from "@/styles/common/shadows";

export const StyledTextInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    boxSizing: "border-box",
    height: 48,
    width: 320,

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
      width: 320,
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
}));
