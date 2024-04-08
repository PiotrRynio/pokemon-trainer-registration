import { externalApiPaths } from "@/api/externalApiPaths";
import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";

export const fetchTimeByTimeZone = async (timeZone = "Europe/Warsaw") => {
  const apiPath = `${externalApiPaths.timeApi.currentTimeByZone}?timeZone=${timeZone}`;

  const time: CurrentTimeType = await fetch(apiPath).then((response) => {
    return response.json();
  });

  return time;
};
