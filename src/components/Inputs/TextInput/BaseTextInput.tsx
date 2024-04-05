"use client";
import { InputLabel, TextField } from "@mui/material";
import { styled } from "@mui/system";

export type BaseTextInputProps = {
  labelName: string;
  placeholder?: string;
};

// const StyledInputLabel = styled(InputLabel)`
//   line-height: 20px;
//   font-size: 12px;
//   font-weight: 400;
//   color: colors.grey100;
// `;

const StyledInputLabel = styled(InputLabel)`
  line-height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: colors.grey100;
`;

const StyledTextInput = styled(TextField)``;

export const BaseTextInput = ({
  labelName,
  placeholder,
}: BaseTextInputProps) => {
  return (
    <div>
      <StyledInputLabel>{labelName}</StyledInputLabel>
      <StyledTextInput placeholder={placeholder || labelName} />
    </div>
  );
};
