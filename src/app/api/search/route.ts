import { NextResponse } from "next/server";

import { getFuzzySearchResult } from "@/app/api/search/getFuzzySearchResult";
import { getSearchParamFromRequest } from "@/app/api/search/getSearchParamFromRequest";

import pokemonData from "./data.json";

export async function GET(request: Request) {
  const searchedPattern = getSearchParamFromRequest(request, "name");

  const pokemonList = pokemonData.data;
  if (!searchedPattern) {
    return NextResponse.json(pokemonList);
  }

  const searchedPokemon = getFuzzySearchResult<typeof pokemonList>(
    pokemonList,
    searchedPattern,
  );

  return NextResponse.json(searchedPokemon);
}
