"use client";
import { Form, Formik } from "formik";
import React, { useState } from "react";

import { PokemonSearcher } from "@/app/_components/TrainerRegistrationForm/components/PokemonSearcher/PokemonSearcher";
import { PokemonViewer } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/PokemonViewer";
import { ResetButton } from "@/app/_components/TrainerRegistrationForm/components/ResetButton/ResetButton";
import { VisitDate } from "@/app/_components/TrainerRegistrationForm/components/ServerDate/VisitDate";
import { SubmitButton } from "@/app/_components/TrainerRegistrationForm/components/SubmitButton/SubmitButton";
import { SuccessSubmitDialog } from "@/app/_components/TrainerRegistrationForm/components/SuccessSubmitDialog/SuccessSubmitDialog";
import { TrainerAgeInput } from "@/app/_components/TrainerRegistrationForm/components/TrainerAgeInput/TrainerAgeInput";
import { TrainerNameInput } from "@/app/_components/TrainerRegistrationForm/components/TrainerNameInput/TrainerNameInput";
import { TrainerRegistrationFormValues } from "@/app/_components/TrainerRegistrationForm/types/TrainerRegistrationFormValues";
import { TrainerRegistrationFormSchema } from "@/app/_components/TrainerRegistrationForm/validation/TrainerRegistrationFormSchema";
import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";
import { HorizontalGapBox } from "@/components/Boxes/HorizontalGapBox/HorizontalGapBox";
import { VerticalGapBox } from "@/components/Boxes/VerticalGapBox/VerticalGapBox";

type TrainerRegistrationFormProps = {
  currentTime: CurrentTimeType;
};

const initialFormValues: TrainerRegistrationFormValues = {
  trainerName: "",
  trainerAge: "",
  pokemonName: "",
};

export const TrainerRegistrationForm = ({
  currentTime,
}: TrainerRegistrationFormProps) => {
  const [isSuccessDialogOpened, setIsSuccessDialogOpened] = useState(false);

  const handleSubmit = () => {
    setIsSuccessDialogOpened(true);
  };

  return (
    <>
      <Formik<TrainerRegistrationFormValues>
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={TrainerRegistrationFormSchema}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <VerticalGapBox>
            <HorizontalGapBox justifyContent="flex-end">
              <VisitDate time={currentTime} />
            </HorizontalGapBox>

            <HorizontalGapBox>
              <TrainerNameInput />
              <TrainerAgeInput />
            </HorizontalGapBox>

            <HorizontalGapBox>
              <PokemonSearcher />
            </HorizontalGapBox>

            <PokemonViewer />

            <HorizontalGapBox justifyContent="flex-end" gap="16px">
              <ResetButton />

              <SubmitButton />
            </HorizontalGapBox>
          </VerticalGapBox>

          <SuccessSubmitDialog
            onClose={() => setIsSuccessDialogOpened(false)}
            isOpened={isSuccessDialogOpened}
          />
        </Form>
      </Formik>
    </>
  );
};
