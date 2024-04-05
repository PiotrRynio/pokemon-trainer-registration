import { ReactNode } from "react";

import { StyledBodyText } from "@/components/Typographies/BodyText/BodyText.styled";

type SubtitleProps = {
  children?: ReactNode;
};

export const BodyText = ({ children }: SubtitleProps) => {
  return <StyledBodyText variant="body1">{children}</StyledBodyText>;
};
