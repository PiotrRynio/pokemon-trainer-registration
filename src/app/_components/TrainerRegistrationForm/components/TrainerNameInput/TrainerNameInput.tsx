import { useField } from "formik";

import { LabeledTextInput } from "@/components/Inputs/TextInput/LabeledTextInput/LabeledTextInput";

type TrainerNameInputProps = {};

export const TrainerNameInput = ({}: TrainerNameInputProps) => {
  const [{ onChange, value }, { error }] = useField("trainerName");

  return (
    <LabeledTextInput
      labelName="Trainer's age"
      value={value}
      isFullWidth
      inputName="trainerName"
      onChange={onChange}
      helperText={error}
      isHelperTextError
    />
  );
};
