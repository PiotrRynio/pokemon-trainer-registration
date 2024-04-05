import { ChangeEvent } from "react";

import { BaseHelperText } from "@/components/HelperText/BaseHelperText";
import { BaseLabel } from "@/components/Label/BaseLabel";
import { BaseSelect } from "@/components/Selects/BaseSelect/BaseSelect";
import { StyledLabeledSelectWrapper } from "@/components/Selects/LabeledSelect/LabeledSelect.styled";
import { Option } from "@/type/Option";

type LabeledSelectProps = {
  labelName: string;
  options: Option[];
  placeholder?: string;
  helperText?: string;
  isHelperTextError?: boolean;
  onInputChange?: (event: ChangeEvent<{}>, value: string) => void;
  isLoading?: boolean;
};

export const LabeledSelect = ({
  labelName,
  options,
  placeholder,
  helperText,
  isHelperTextError,
  onInputChange,
  isLoading,
}: LabeledSelectProps) => {
  return (
    <StyledLabeledSelectWrapper>
      <BaseLabel labelText={labelName}>
        <BaseSelect
          placeholder={placeholder}
          options={options}
          onInputChange={onInputChange}
          isLoading={isLoading}
        />
      </BaseLabel>

      <BaseHelperText
        helperText={helperText}
        isHelperTextError={isHelperTextError}
      />
    </StyledLabeledSelectWrapper>
  );
};
