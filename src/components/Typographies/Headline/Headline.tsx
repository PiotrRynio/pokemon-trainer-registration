import { Typography } from "@mui/material";
import { ReactNode } from "react";

import { colors } from "@/styles/common/colors";

type SubtitleProps = {
  children?: ReactNode;
};

export const Headline = ({ children }: SubtitleProps) => {
  return (
    <Typography
      variant="h4"
      lineHeight="40px"
      color={colors.black}
      fontSize="40px"
    >
      {children}
    </Typography>
  );
};
