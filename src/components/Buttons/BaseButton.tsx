"use client";

import { StyledButton } from "./BaseButton.styled";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

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
