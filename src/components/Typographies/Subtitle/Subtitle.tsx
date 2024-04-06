import { Typography } from "@mui/material";
import { ReactNode } from "react";

import { colors } from "@/styles/common/colors";

type SubtitleProps = {
  children?: ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <Typography
      variant="subtitle1"
      lineHeight="20px"
      color={colors.grey100}
      fontSize="12px"
    >
      {children}
    </Typography>
  );
};
