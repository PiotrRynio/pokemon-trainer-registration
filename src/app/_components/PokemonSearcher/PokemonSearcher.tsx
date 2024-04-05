"use client";
import { useThrottle } from "@uidotdev/usehooks";
import { ChangeEvent, useState } from "react";

import { useGetSearch } from "@/app/_components/PokemonSearcher/useGetSearch";
import { LabeledSelect } from "@/components/Selects/LabeledSelect/LabeledSelect";

type PokemonNameSearcherProps = {};

export const PokemonSearcher = ({}: PokemonNameSearcherProps) => {
  const [searchedText, setSearchedText] = useState("");
  const throttledSearchedText = useThrottle(searchedText, 750);
  const { data, isLoading } = useGetSearch({
    searchedText: throttledSearchedText,
  });

  const placeholder = isLoading ? "Loading options" : "Choose";

  const onInputChange = (event: ChangeEvent<{}>, value: string) => {
    console.log(value);
    setSearchedText(value);
  };

  return (
    <LabeledSelect
      isLoading={isLoading}
      labelName="Pokemon name"
      options={data || []}
      placeholder={placeholder}
      onInputChange={onInputChange}
    />
  );
};
