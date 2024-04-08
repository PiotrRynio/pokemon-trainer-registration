"use client";
import { TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

import { StyledTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput.styled";

export type BaseTextInputProps = {
  placeholder?: string;
  isFullWidth?: boolean;
  type?: "number";
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
} & Omit<TextFieldProps, "fullWidth">;

export const BaseTextInput = ({
  placeholder,
  isFullWidth,
  type,
  name,
  onChange,
  value,
  ...props
}: BaseTextInputProps) => {
  return (
    <StyledTextInput
      value={value}
      name={name}
      fullWidth={isFullWidth}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      {...props}
    />
  );
};
