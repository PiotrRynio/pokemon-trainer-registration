"use client";
import { useField } from "formik";

import { TrainerRegistrationFormValues } from "@/app/_components/TrainerRegistrationForm/types/TrainerRegistrationFormValues";
import { LabeledTextInput } from "@/components/Inputs/TextInput/LabeledTextInput/LabeledTextInput";

type TrainerNameInputProps = {};

export const TrainerAgeInput = ({}: TrainerNameInputProps) => {
  const [{ onChange, name, value }, { error }] =
    useField<TrainerRegistrationFormValues["trainerAge"]>("trainerAge");

  return (
    <LabeledTextInput
      labelName="Trainer's age"
      isFullWidth
      type="number"
      onChange={onChange}
      inputName={name}
      value={value}
      helperText={error}
      isHelperTextError
    />
  );
};
