"use client";
import { styled } from "@mui/system";

export type LabeledTextInputProps = {
  labelName: string;
  placeholder?: string;
  helperText?: string;
  isHelperTextError?: boolean;
};

import { BaseHelperText } from "@/components/HelperText/BaseHelperText";
import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput";
import { BaseLabel } from "@/components/Label/BaseLabel";

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const LabeledTextInput = ({
  labelName,
  placeholder,
  helperText,
  isHelperTextError,
}: LabeledTextInputProps) => {
  return (
    <StyledWrapper>
      <BaseLabel labelText={labelName}>
        <BaseTextInput placeholder={placeholder || labelName} />
      </BaseLabel>

      <BaseHelperText
        helperText={helperText}
        isHelperTextError={isHelperTextError}
      />
    </StyledWrapper>
  );
};
