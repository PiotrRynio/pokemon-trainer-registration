"use server";
import { externalApiPaths } from "@/api/externalApiPaths";
import { CurrentTimeType } from "@/app/_utils/getCurrentTimeFromApi/CurrentTimeType";

export const fetchTimeByTimeZone = async (timeZone = "Europe/Warsaw") => {
  "use server";
  console.log("INSIDE fetchTimeByTimeZone");

  const apiPath = `${externalApiPaths.timeApi.currentTimeByZone}?timeZone=${timeZone}`;

  const time: CurrentTimeType = await fetch(apiPath).then((response) => {
    console.log("INSIDE fetchTimeByTimeZone THEN");

    return response.json();
  });

  return time;
};
