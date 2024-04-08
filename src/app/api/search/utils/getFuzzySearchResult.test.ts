import { describe, expect, test } from "vitest";

import { getFuzzySearchResult } from "@/app/api/search/utils/getFuzzySearchResult";

describe("getFuzzySearchResult", () => {
  test("return correct result", () => {
    const pokemonList = [
      { name: "bulbasaur", id: 1 },
      { name: "charmander", id: 4 },
      { name: "squirtle", id: 7 },
      { name: "pikachu", id: 25 },
      { name: "phione", id: 489 },
      { name: "manaphy", id: 490 },
      { name: "darkrai", id: 491 },
      { name: "arceus", id: 493 },
      { name: "victini", id: 494 },
      { name: "snivy", id: 495 },
      { name: "servine", id: 496 },
      { name: "serperior", id: 497 },
      { name: "tepig", id: 498 },
      { name: "pignite", id: 499 },
      { name: "emboar", id: 500 },
      { name: "oshawott", id: 501 },
      { name: "dewott", id: 502 },
    ];

    const searchedPattern = "pik";
    const searchedPokemon = getFuzzySearchResult<typeof pokemonList>(
      pokemonList,
      searchedPattern,
    );

    expect(searchedPokemon).toEqual([
      {
        id: 25,
        name: "pikachu",
      },
      {
        id: 499,
        name: "pignite",
      },
      {
        id: 498,
        name: "tepig",
      },
    ]);
  });
});
