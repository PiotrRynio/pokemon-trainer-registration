export const getSearchParamFromRequest = (
  request: Request,
  searchParamName: string,
) => {
  const requestUrl = request.url;
  const url = new URL(requestUrl);
  const searchParam = url.searchParams.get(searchParamName);

  return searchParam;
};
