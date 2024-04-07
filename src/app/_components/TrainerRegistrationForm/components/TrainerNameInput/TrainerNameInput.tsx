import { useField } from "formik";

import { TrainerRegistrationFormValues } from "@/app/_components/TrainerRegistrationForm/types/TrainerRegistrationFormValues";
import { LabeledTextInput } from "@/components/Inputs/TextInput/LabeledTextInput/LabeledTextInput";

type TrainerNameInputProps = {};

export const TrainerNameInput = ({}: TrainerNameInputProps) => {
  const [{ onChange, value }, { error }] =
    useField<TrainerRegistrationFormValues["trainerName"]>("trainerName");

  return (
    <LabeledTextInput
      labelName="Trainer's name"
      value={value}
      isFullWidth
      inputName="trainerName"
      onChange={onChange}
      helperText={error}
      isHelperTextError
    />
  );
};
