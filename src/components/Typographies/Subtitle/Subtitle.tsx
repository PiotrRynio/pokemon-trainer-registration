import { ReactNode } from "react";

import { StyledSubtitle } from "@/components/Typographies/Subtitle/Subtitle.styled";

type SubtitleProps = {
  children?: ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return <StyledSubtitle variant="subtitle1">{children}</StyledSubtitle>;
};
