"use client";
import { Button as MaterialButton } from "@mui/material";
import { styled } from "@mui/system";

import { colors } from "@/styles/common/colors";
import { shadows } from "@/styles/common/shadows";

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
};

const StyledButton = styled(MaterialButton)(({ theme }) => ({
  gap: "10px",
  padding: "10px 24px",
  lineHeight: "20px",
  fontSize: "14px",
  fontWeight: 400,

  "&:focus": {
    boxShadow: shadows.focused,
    backgroundColor: colors.primaryDark,
  },
}));

export const BaseButton = ({
  children,
  onClick,
  color = "primary",
}: ButtonProps) => {
  return (
    <StyledButton
      color={color}
      variant="contained"
      onClick={onClick}
      disableRipple={true}
    >
      {children}
    </StyledButton>
  );
};
