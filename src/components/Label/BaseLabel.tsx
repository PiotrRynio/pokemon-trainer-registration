import { InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { ReactNode } from "react";

import { Subtitle } from "@/components/Typographies/Subtitle/Subtitle";

export type BaseLabelProps = {
  labelText: string;
  children?: ReactNode;
};

const StyledInputLabel = styled(InputLabel)`
  overflow: visible;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const BaseLabel = ({ labelText, children }: BaseLabelProps) => {
  return (
    <StyledInputLabel>
      <Subtitle>{labelText}</Subtitle>
      {children}
    </StyledInputLabel>
  );
};
