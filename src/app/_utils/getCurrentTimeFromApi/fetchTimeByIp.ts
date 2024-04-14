"use server";

import { externalApiPaths } from "@/api/externalApiPaths";
import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";

export const fetchTimeByIp = async (ip: string) => {
  console.log("INSIDE fetchTimeByIp");

  const apiPath = `${externalApiPaths.timeApi.currentTimeByIp}?ipAddress=${ip}`;
  const time: CurrentTimeType = await fetch(apiPath).then((response) => {
    console.log("INSIDE fetchTimeByIp THEN");

    return response.json();
  });

  return time;
};
