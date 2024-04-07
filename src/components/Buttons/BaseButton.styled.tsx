"use client";
import { Button as MaterialButton, styled } from "@mui/material";

export const StyledButton = styled(MaterialButton)(({ theme }) => ({
  gap: "10px",
  padding: "10px 24px",
  lineHeight: "20px",
  fontSize: "14px",
  fontWeight: 400,
  textTransform: "none",

  "&:focus": {
    boxShadow: theme.base.shadows.focused,
    backgroundColor: theme.base.colors.primaryDark,
  },
  "&.MuiButton-colorSecondary:focus": {
    boxShadow: theme.base.shadows.focused,
    backgroundColor: theme.base.colors.grey300,
  },
}));
