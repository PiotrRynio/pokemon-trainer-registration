"use client";
import { useThrottle } from "@uidotdev/usehooks";
import { useField } from "formik";
import { useState } from "react";

import { useGetSearch } from "@/app/_components/TrainerRegistrationForm/components/PokemonSearcher/useGetSearch";
import { LabeledSelect } from "@/components/Selects/LabeledSelect/LabeledSelect";

type PokemonNameSearcherProps = {
  onChange?: (value: string | null) => void;
};

export const PokemonSearcher = ({ onChange }: PokemonNameSearcherProps) => {
  const [{ value }, { error }, { setValue }] = useField("pokemonName");

  const [searchedText, setSearchedText] = useState("");
  const throttledSearchedText = useThrottle(searchedText, 750);
  const { data, isLoading } = useGetSearch({
    searchedText: throttledSearchedText,
  });

  const placeholder = isLoading ? "Loading options" : "Choose";

  const onInputChange = (value: string) => {
    setSearchedText(value);
  };

  const onChangeHandler = async (value: string | null) => {
    onChange && onChange(value);
    await setValue(value);
  };

  return (
    <LabeledSelect
      isLoading={isLoading}
      labelName="Pokemon name"
      options={data || []}
      placeholder={placeholder}
      onInputChange={onInputChange}
      isFullWidth={true}
      onChange={onChangeHandler}
      value={value}
      helperText={error}
      isHelperTextError
    />
  );
};
