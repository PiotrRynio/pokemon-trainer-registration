import { Box } from "@mui/material";
import Image from "next/image";

import { PokemonDetailsType } from "@/app/_components/TrainerRegistrationForm/components/PokemonViewer/hooks/useGetPokemonDetailsByName";
import { HorizontalGapBox } from "@/components/Boxes/HorizontalGapBox/HorizontalGapBox";
import { VerticalCenterBox } from "@/components/Boxes/VerticalCenterBox/VerticalCenterBox";
import { VerticalGapBox } from "@/components/Boxes/VerticalGapBox/VerticalGapBox";
import { BaseChip } from "@/components/Chips/BaseChip";
import { BodyText } from "@/components/Typographies/BodyText/BodyText";

type PokemonDetailsProps = {
  pokemonDetails: PokemonDetailsType;
};

export const PokemonDetails = ({ pokemonDetails }: PokemonDetailsProps) => {
  const {
    id,
    name,
    sprites,
    types,
    base_experience: baseExperience,
  } = pokemonDetails;
  const imageUrl = sprites.front_default;
  const typesNames = types.slice(0, 2).map((typeItem) => typeItem.type.name);

  return (
    <HorizontalGapBox>
      <Image
        src={imageUrl}
        alt={`${name} Image`}
        width={194}
        height={196}
        priority
      />

      <VerticalCenterBox>
        <VerticalGapBox gap="8px">
          <BodyText>Name: {name}</BodyText>

          <Box display="flex" gap="8px" alignItems="center">
            <BodyText>Type:</BodyText>
            {typesNames.map((typeName) => (
              <BaseChip key={typeName}>{typeName}</BaseChip>
            ))}
          </Box>

          <BodyText>Base experience: {baseExperience}</BodyText>

          <BodyText>Id: {id}</BodyText>
        </VerticalGapBox>
      </VerticalCenterBox>
    </HorizontalGapBox>
  );
};
