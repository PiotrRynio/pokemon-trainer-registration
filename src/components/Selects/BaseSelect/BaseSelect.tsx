import { Autocomplete, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

import { BaseTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput";
import {
  StyledCircularProgress,
  StyledExpandMore,
} from "@/components/Selects/BaseSelect/BaseSelect.styled";
import { Option } from "@/type/Option";

type BaseSelectFieldProps = {
  options: Option[];
  placeholder?: TextFieldProps["placeholder"];
  onInputChange?: (event: ChangeEvent<{}>, value: string) => void;
  isLoading?: boolean;
};

export const BaseSelect = ({
  options,
  placeholder,
  onInputChange,
  isLoading,
}: BaseSelectFieldProps) => {
  return (
    <Autocomplete
      popupIcon={
        isLoading ? <StyledCircularProgress size={20} /> : <StyledExpandMore />
      }
      disablePortal
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <BaseTextInput placeholder={placeholder} {...params} />
      )}
      onInputChange={onInputChange}
      filterOptions={(options) => options}
    />
  );
};
