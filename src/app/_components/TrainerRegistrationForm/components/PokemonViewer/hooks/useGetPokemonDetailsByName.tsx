import { useQuery } from "@tanstack/react-query";

import { externalApiPaths } from "@/api/externalApiPaths";

type UseGetSearchProps = { pokemonName?: string };

export type PokemonDetailsType = {
  id: number;
  name: string;
  base_experience: number;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
};

export const useGetPokemonDetailsByName = ({
  pokemonName,
}: UseGetSearchProps) => {
  const isPokemonName = !!pokemonName;

  return useQuery<PokemonDetailsType>({
    queryFn: async () => {
      const url = `${externalApiPaths.pokemonApi.pokemon}/${pokemonName}`;

      return fetch(url).then((response) => response.json());
    },

    queryKey: ["get-pokemon-by-name-" + pokemonName],

    enabled: isPokemonName,
  });
};
