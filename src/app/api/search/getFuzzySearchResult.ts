import Fuse from "fuse.js";

export const getFuzzySearchResult = <
  T extends {
    name: string;
  }[],
>(
  pokemonList: T,
  searchedPattern: string,
) => {
  const fuseOptions = {
    keys: ["name"],
  };
  const fuse = new Fuse(pokemonList, fuseOptions);

  return fuse.search(searchedPattern).map((result) => result.item);
};
