import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

type VerticalGapBoxProps = {
  children?: ReactNode;
  gap?: 0 | string;
  justifyContent?: "flex-start" | "center" | "flex-end";
};

export const VerticalGapBox = ({
  children,
  gap,
  justifyContent = "flex-start",
}: VerticalGapBoxProps) => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      gap={gap || theme.base.gaps.default}
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};
