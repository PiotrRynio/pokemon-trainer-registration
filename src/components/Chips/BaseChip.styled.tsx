"use client";
import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(({ theme }) => ({
  gap: "10px",
  height: "28px",
  padding: "0px 0px",
  border: "none 0px",
  lineHeight: "20px",
  fontSize: "12px",
  fontWeight: 400,
  textTransform: "capitalize",
  color: theme.base.colors.black,

  "& .MuiChip-label": {
    padding: "4px 8px",
  },
}));
