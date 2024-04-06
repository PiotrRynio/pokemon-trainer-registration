import { Box } from "@mui/material";
import { ReactNode } from "react";

type VerticalCenterBoxProps = {
  children?: ReactNode;
};

export const VerticalCenterBox = ({ children }: VerticalCenterBoxProps) => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {children}
    </Box>
  );
};
