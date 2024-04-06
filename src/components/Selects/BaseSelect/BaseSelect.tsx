import { Autocomplete, TextFieldProps } from "@mui/material";
import { ChangeEvent, SyntheticEvent } from "react";

import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput";
import {
  StyledCircularProgress,
  StyledExpandMore,
} from "@/components/Selects/BaseSelect/BaseSelect.styled";

type BaseSelectFieldProps = {
  options: string[];
  placeholder?: TextFieldProps["placeholder"];
  onInputChange?: (value: string) => void;
  isLoading?: boolean;
  isFullWidth?: boolean;
  onChange?: (value: string | null) => void;
  value?: string;
};

export const BaseSelect = ({
  options,
  placeholder,
  onInputChange,
  isLoading,
  isFullWidth,
  onChange,
  value,
}: BaseSelectFieldProps) => {
  const onInputChangeHandler = (event: ChangeEvent<{}>, value: string) => {
    onInputChange && onInputChange(value);
  };

  const onChangeHandler = (
    event: SyntheticEvent<Element, Event>,
    value: string | null,
  ) => {
    onChange && onChange(value);
  };

  console.log("value", value);

  return (
    <Autocomplete
      value={value || null}
      popupIcon={
        isLoading ? <StyledCircularProgress size={20} /> : <StyledExpandMore />
      }
      disablePortal
      options={options}
      renderInput={(params) => (
        <BaseTextInput
          placeholder={placeholder}
          isFullWidth={isFullWidth}
          {...params}
        />
      )}
      onInputChange={onInputChangeHandler}
      filterOptions={(options) => options}
      clearIcon={null}
      onChange={onChangeHandler}
    />
  );
};
