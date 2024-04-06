import { Box } from "@mui/material";
import { ReactNode } from "react";

import { gaps } from "@/styles/common/gaps";

type VerticalGapBoxProps = {
  children?: ReactNode;
  gap?: 0 | string;
  justifyContent?: "flex-start" | "center" | "flex-end";
};

export const VerticalGapBox = ({
  children,
  gap = gaps.default,
  justifyContent = "flex-start",
}: VerticalGapBoxProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap={gap}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};
