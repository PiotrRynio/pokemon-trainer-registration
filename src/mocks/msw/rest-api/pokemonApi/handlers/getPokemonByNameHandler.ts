import { http, HttpResponse } from "msw";

import { getPokemonByNameResponse } from "../responses/getPokemonByNameResponse";

export const getPokemonByNameHandler = http.get(
  `https://pokeapi.co/api/v2/pokemon/pikachu`,
  () => {
    console.log("getPokemonByNameHandler");
    return HttpResponse.json(getPokemonByNameResponse);
  },
);
