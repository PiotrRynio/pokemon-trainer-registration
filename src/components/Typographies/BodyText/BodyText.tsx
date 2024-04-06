import { Typography } from "@mui/material";
import { ReactNode } from "react";

import { colors } from "@/styles/common/colors";

type SubtitleProps = {
  children?: ReactNode;
  fontSize?: string;
};

export const BodyText = ({ children, fontSize = "14px" }: SubtitleProps) => {
  return (
    <Typography
      variant="body1"
      lineHeight="20px"
      fontSize={fontSize}
      color={colors.grey100}
    >
      {children}
    </Typography>
  );
};
