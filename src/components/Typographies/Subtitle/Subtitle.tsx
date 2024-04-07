import { Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type SubtitleProps = {
  children?: ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="subtitle1"
      lineHeight="20px"
      color={theme.base.colors.grey100}
      fontSize="12px"
    >
      {children}
    </Typography>
  );
};
