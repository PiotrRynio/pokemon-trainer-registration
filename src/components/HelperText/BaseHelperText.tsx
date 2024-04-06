"use client";
import { FormHelperText } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "@/styles/common/colors";

export type BaseHelperTextProps = {
  helperText?: string;
  isHelperTextError?: boolean;
};

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  height: 16,
  margin: 0,
  fontSize: 10,
  color: colors.grey100,
}));

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
