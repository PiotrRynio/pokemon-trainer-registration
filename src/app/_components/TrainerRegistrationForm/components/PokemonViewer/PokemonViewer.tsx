import { Box } from "@mui/material";
import { useField } from "formik";

import { PokemonDetails } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/components/PokemonDetails/PokemonDetails";
import { useGetPokemonDetailsByName } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/hooks/useGetPokemonDetailsByName";
import { HorizontalCenterBox } from "@/components/Boxes/HorizontalCenterBox/HorizontalCenterBox";
import { VerticalCenterBox } from "@/components/Boxes/VerticalCenterBox/VerticalCenterBox";
import { BodyText } from "@/components/Typographies/BodyText/BodyText";
import { borderRadius } from "@/styles/common/borderRadius";
import { borders } from "@/styles/common/borders";

export const PokemonViewer = () => {
  const [{ value: pokemonName }] = useField("pokemonName");

  console.log("pokemonName", pokemonName);
  const { data: pokemonDetailsData } = useGetPokemonDetailsByName({
    pokemonName,
  });
  const isPokemonDetailsDataExist = !!pokemonDetailsData;

  return (
    <Box
      padding="29px 56px"
      border={borders.default}
      height="254px"
      borderRadius={borderRadius.default}
    >
      <VerticalCenterBox>
        {!isPokemonDetailsDataExist ? (
          <HorizontalCenterBox>
            <BodyText fontSize="12px">Your Pokemon</BodyText>
          </HorizontalCenterBox>
        ) : (
          <PokemonDetails pokemonDetails={pokemonDetailsData} />
        )}
      </VerticalCenterBox>
    </Box>
  );
};
