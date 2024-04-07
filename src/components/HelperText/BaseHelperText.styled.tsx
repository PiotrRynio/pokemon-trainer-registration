"use client";
import { FormHelperText, styled } from "@mui/material";

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  height: 16,
  margin: 0,
  fontSize: 10,
  color: theme.base.colors.grey100,
}));
