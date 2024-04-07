import { ChangeEvent } from "react";

import { VerticalGapBox } from "@/components/Boxes/VerticalGapBox/VerticalGapBox";
import { BaseHelperText } from "@/components/HelperText/BaseHelperText";
import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput";
import { BaseLabel } from "@/components/Label/BaseLabel";

type LabeledTextInputProps = {
  labelName: string;
  placeholder?: string;
  helperText?: string;
  isHelperTextError?: boolean;
  isFullWidth?: boolean;
  type?: "number";
  inputName?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const LabeledTextInput = ({
  value,
  labelName,
  placeholder,
  helperText,
  isHelperTextError,
  isFullWidth,
  type,
  inputName,
  onChange,
}: LabeledTextInputProps) => {
  return (
    <VerticalGapBox gap="2px">
      <BaseLabel labelText={labelName}>
        <BaseTextInput
          placeholder={placeholder || labelName}
          isFullWidth={isFullWidth}
          type={type}
          name={inputName}
          onChange={onChange}
          value={value}
        />
      </BaseLabel>

      {helperText ? (
        <BaseHelperText
          helperText={helperText}
          isHelperTextError={isHelperTextError}
        />
      ) : null}
    </VerticalGapBox>
  );
};
