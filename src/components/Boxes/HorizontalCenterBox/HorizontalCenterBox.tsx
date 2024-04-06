import { Box } from "@mui/material";
import { ReactNode } from "react";

type HorizontalCenterBoxProps = {
  children?: ReactNode;
};

export const HorizontalCenterBox = ({ children }: HorizontalCenterBoxProps) => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      {children}
    </Box>
  );
};
