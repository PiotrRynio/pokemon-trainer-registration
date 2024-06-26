"use client";
import { Box, Dialog } from "@mui/material";
import React from "react";

import { useTrainerRegistrationFormContext } from "@/app/_components/TrainerRegistrationForm/hooks/useTrainerRegistrationFormContext";
import { HorizontalCenterBox } from "@/components/Boxes/HorizontalCenterBox/HorizontalCenterBox";
import { VerticalCenterBox } from "@/components/Boxes/VerticalCenterBox/VerticalCenterBox";
import { VerticalGapBox } from "@/components/Boxes/VerticalGapBox/VerticalGapBox";
import { BaseButton } from "@/components/Buttons/BaseButton";
import { Headline } from "@/components/Typographies/Headline/Headline";

type SuccessSubmitDialogProps = {
  isOpened: boolean;
  onClose: () => void;
};

export const SuccessSubmitDialog = ({
  onClose,
  isOpened,
}: SuccessSubmitDialogProps) => {
  const { resetForm } = useTrainerRegistrationFormContext();

  const onButtonClick = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog
      open={isOpened}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box padding="32px 120px" margin="auto">
        <VerticalCenterBox>
          <VerticalGapBox gap="32px">
            <Headline>Success</Headline>

            <HorizontalCenterBox>
              <BaseButton onClick={onButtonClick}>Reset form</BaseButton>
            </HorizontalCenterBox>
          </VerticalGapBox>
        </VerticalCenterBox>
      </Box>
    </Dialog>
  );
};
