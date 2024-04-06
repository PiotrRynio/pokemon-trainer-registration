import { BaseButton } from "@/components/Buttons/BaseButton";

type ResetButtonProps = {};

export const ResetButton = ({}: ResetButtonProps) => {
  return (
    <BaseButton type="reset" color="secondary">
      Reset
    </BaseButton>
  );
};
