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
  return useQuery<PokemonDetailsType>({
    queryFn: async () => {
      console.log(pokemonName);
      const isPokemonName = !!pokemonName;
      if (!isPokemonName) {
        return Promise.reject("No pokemon name provided");
      }

      const url = `${externalApiPaths.pokemonApi.pokemon}/${pokemonName}`;

      return fetch(url).then((response) => response.json());
    },
    queryKey: ["get-pokemon-by-name-" + pokemonName],
  });
};
