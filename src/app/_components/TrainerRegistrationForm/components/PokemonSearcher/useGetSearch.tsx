import { useQuery } from "@tanstack/react-query";

import { internalApiPaths } from "@/api/internalApiPaths";
import { GetSearchResponse } from "@/app/api/search/types/GetSearchResponse";

type UseGetSearchProps = { searchedText: string };

export const useGetSearch = ({ searchedText }: UseGetSearchProps) => {
  return useQuery<string[]>({
    queryFn: async () => {
      const search = searchedText ? `?name=${searchedText}` : "";
      const url = `${internalApiPaths.search}${search}`;
      return await fetch(url)
        .then((response) => response.json())
        .then((data: GetSearchResponse) => data.map((item) => item.name));
    },
    queryKey: ["get-search-" + searchedText],
  });
};
