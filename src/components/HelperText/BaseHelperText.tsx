import { FormHelperText } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "@/styles/common/colors";

export type BaseHelperTextProps = {
  helperText?: string;
  isHelperTextError?: boolean;
};

const StyledFormHelperText = styled(FormHelperText)`
  height: 16px;
  margin: 0;
  font-size: 10px;
  line-height: 16px;
  color: ${colors.grey100};
`;

export const BaseHelperText = ({
  isHelperTextError,
  helperText,
}: BaseHelperTextProps) => {
  return (
    <StyledFormHelperText error={isHelperTextError}>
      {helperText}
    </StyledFormHelperText>
  );
};
