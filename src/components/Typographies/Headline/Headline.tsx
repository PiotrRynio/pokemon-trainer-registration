import { Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type SubtitleProps = {
  children?: ReactNode;
};

export const Headline = ({ children }: SubtitleProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h4"
      lineHeight="40px"
      color={theme.base.colors.black}
      fontSize="40px"
    >
      {children}
    </Typography>
  );
};
