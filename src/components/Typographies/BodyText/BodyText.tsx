import { Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type SubtitleProps = {
  children?: ReactNode;
  fontSize?: string;
  noWrap?: boolean;
};

export const BodyText = ({
  children,
  fontSize = "14px",
  noWrap,
}: SubtitleProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      lineHeight="20px"
      fontSize={fontSize}
      color={theme.base.colors.grey100}
      noWrap={noWrap}
    >
      {children}
    </Typography>
  );
};
