import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

type HorizontalGapBoxProps = {
  children?: ReactNode;
  gap?: 0 | string;
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
};

export const HorizontalGapBox = ({
  children,
  gap,
  justifyContent = "flex-start",
}: HorizontalGapBoxProps) => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      display="flex"
      gap={gap || theme.base.gaps.default}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};
