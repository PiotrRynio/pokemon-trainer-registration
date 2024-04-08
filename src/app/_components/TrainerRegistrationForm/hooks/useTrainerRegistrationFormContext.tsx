"use client";
import { useFormikContext } from "formik";

import { TrainerRegistrationFormValues } from "@/app/_components/TrainerRegistrationForm/types/TrainerRegistrationFormValues";

export const useTrainerRegistrationFormContext = () =>
  useFormikContext<TrainerRegistrationFormValues>();
