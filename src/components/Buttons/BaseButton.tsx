"use client";
import { Button as MaterialButton } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "@/styles/common/colors";
import { shadows } from "@/styles/common/shadows";

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

const StyledButton = styled(MaterialButton)(({}) => ({
  gap: "10px",
  padding: "10px 24px",
  lineHeight: "20px",
  fontSize: "14px",
  fontWeight: 400,
  textTransform: "none",

  "&:focus": {
    boxShadow: shadows.focused,
    backgroundColor: colors.primaryDark,
  },
  "&.MuiButton-colorSecondary:focus": {
    boxShadow: shadows.focused,
    backgroundColor: colors.grey300,
  },
}));

export const BaseButton = ({
  children,
  onClick,
  color = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      color={color}
      variant="contained"
      onClick={onClick}
      disableRipple
      type={type}
    >
      {children}
    </StyledButton>
  );
};
