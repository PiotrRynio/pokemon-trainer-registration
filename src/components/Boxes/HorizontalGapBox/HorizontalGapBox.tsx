import { Box } from "@mui/material";
import { ReactNode } from "react";

import { gaps } from "@/styles/common/gaps";

type HorizontalGapBoxProps = {
  children?: ReactNode;
  gap?: 0 | string;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
};

export const HorizontalGapBox = ({
  children,
  gap = gaps.default,
  justifyContent = "flex-start",
}: HorizontalGapBoxProps) => {
  return (
    <Box width="100%" display="flex" gap={gap} justifyContent={justifyContent}>
      {children}
    </Box>
  );
};
