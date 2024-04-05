import { useQuery } from "@tanstack/react-query";

import { internalApiPaths } from "@/api/internalApiPaths";
import { GetSearchResponse } from "@/app/api/search/types/GetSearchResponse";

type UseGetSearchProps = { searchedText: string };

export const useGetSearch = ({ searchedText }: UseGetSearchProps) => {
  return useQuery<GetSearchResponse>({
    queryFn: async () => {
      const search = searchedText ? `?name=${searchedText}` : "";
      const url = `${internalApiPaths.search}${search}`;
      return await fetch(url).then((response) => response.json());
    },
    queryKey: ["get-search-" + searchedText],
  });
};
