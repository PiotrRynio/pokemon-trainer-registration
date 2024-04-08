import { externalApiPaths } from "@/api/externalApiPaths";
import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";

export const fetchTimeByIp = async (ip: string) => {
  const apiPath = `${externalApiPaths.timeApi.currentTimeByIp}?ipAddress=${ip}`;
  const time: CurrentTimeType = await fetch(apiPath).then((response) => {
    return response.json();
  });

  return time;
};
