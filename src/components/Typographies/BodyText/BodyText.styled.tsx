"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "@/styles/common/colors";

export const StyledBodyText = styled(Typography)`
  line-height: 20px;
  font-size: 14px;
  color: ${colors.grey100};
`;
