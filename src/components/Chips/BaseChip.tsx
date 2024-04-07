"use client";
import { ReactNode } from "react";

import { StyledChip } from "./BaseChip.styled";

type BaseChipProps = {
  children: ReactNode;
};

export const BaseChip = ({ children }: BaseChipProps) => {
  return <StyledChip label={children} variant="filled" />;
};
