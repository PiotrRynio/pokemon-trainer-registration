"use client";
import { Box, useTheme } from "@mui/material";
import { useField } from "formik";

import { PokemonDetails } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/components/PokemonDetails/PokemonDetails";
import { useGetPokemonDetailsByName } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/hooks/useGetPokemonDetailsByName";
import { TrainerRegistrationFormValues } from "@/app/_components/TrainerRegistrationForm/types/TrainerRegistrationFormValues";
import { HorizontalCenterBox } from "@/components/Boxes/HorizontalCenterBox/HorizontalCenterBox";
import { VerticalCenterBox } from "@/components/Boxes/VerticalCenterBox/VerticalCenterBox";
import { BodyText } from "@/components/Typographies/BodyText/BodyText";

export const PokemonViewer = () => {
  const theme = useTheme();

  const [{ value: pokemonName }] =
    useField<TrainerRegistrationFormValues["pokemonName"]>("pokemonName");

  const { data: pokemonDetailsData } = useGetPokemonDetailsByName({
    pokemonName,
  });

  const isPokemonDetailsDataExist = !!pokemonDetailsData;

  return (
    <Box
      padding="29px 56px"
      border={theme.base.borders.default}
      height="254px"
      borderRadius={theme.base.borderRadius.default}
    >
      <VerticalCenterBox>
        {isPokemonDetailsDataExist ? (
          <PokemonDetails pokemonDetails={pokemonDetailsData} />
        ) : (
          <HorizontalCenterBox>
            <BodyText fontSize="12px">Your Pokemon</BodyText>
          </HorizontalCenterBox>
        )}
      </VerticalCenterBox>
    </Box>
  );
};
