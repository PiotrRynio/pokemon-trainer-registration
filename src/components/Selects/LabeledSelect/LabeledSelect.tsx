import { BaseHelperText } from "@/components/HelperText/BaseHelperText";
import { BaseLabel } from "@/components/Label/BaseLabel";
import { BaseSelect } from "@/components/Selects/BaseSelect/BaseSelect";
import { StyledLabeledSelectWrapper } from "@/components/Selects/LabeledSelect/LabeledSelect.styled";

type LabeledSelectProps = {
  labelName: string;
  options: string[];
  placeholder?: string;
  helperText?: string;
  isHelperTextError?: boolean;
  onInputChange?: (value: string) => void;
  isLoading?: boolean;
  isFullWidth?: boolean;
  onChange?: (value: string | null) => void;
  value?: string;
};

export const LabeledSelect = ({
  labelName,
  options,
  placeholder,
  helperText,
  isHelperTextError,
  onInputChange,
  isLoading,
  isFullWidth,
  onChange,
  value,
}: LabeledSelectProps) => {
  return (
    <StyledLabeledSelectWrapper>
      <BaseLabel labelText={labelName}>
        <BaseSelect
          placeholder={placeholder}
          options={options}
          onInputChange={onInputChange}
          isLoading={isLoading}
          isFullWidth={isFullWidth}
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
    </StyledLabeledSelectWrapper>
  );
};
