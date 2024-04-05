"use client";
import { Chip } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

import { colors } from "@/styles/common/colors";

export type BaseChipProps = {
  children: ReactNode;
};

const StyledChip = styled(Chip)(({ theme }) => ({
  gap: "10px",
  height: "28px",
  padding: "0px 0px",
  border: "none 0px",
  lineHeight: "20px",
  fontSize: "12px",
  fontWeight: 400,
  color: colors.black,

  "& .MuiChip-label": {
    padding: "4px 8px",
  },
}));

export const BaseChip = ({ children }: BaseChipProps) => {
  return <StyledChip label={children} variant="filled" />;
};
