import { useField } from "formik";

import { LabeledTextInput } from "@/components/Inputs/TextInput/LabeledTextInput/LabeledTextInput";

type TrainerNameInputProps = {};

export const TrainerAgeInput = ({}: TrainerNameInputProps) => {
  const [{ onChange, name, value }, { error }] = useField("trainerAge");

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
