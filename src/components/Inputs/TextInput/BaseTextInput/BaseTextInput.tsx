"use client";

import { TextFieldProps } from "@mui/material";

import { StyledTextInput } from "@/components/Inputs/TextInput/BaseTextInput/BaseTextInput.styled";

export type BaseTextInputProps = {
  placeholder?: string;
} & TextFieldProps;

export const BaseTextInput = ({
  placeholder,
  ...props
}: BaseTextInputProps) => {
  return <StyledTextInput placeholder={placeholder} {...props} />;
};
