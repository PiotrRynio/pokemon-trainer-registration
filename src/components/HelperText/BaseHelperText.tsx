import { StyledFormHelperText } from "./BaseHelperText.styled";

export type BaseHelperTextProps = {
  helperText?: string;
  isHelperTextError?: boolean;
};

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
