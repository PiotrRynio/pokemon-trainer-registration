import { headers } from "next/headers";

import { fetchTimeByIp } from "@/app/_utils/getCurrentTimeFromApi/fetchTimeByIp";
import { fetchTimeByTimeZone } from "@/app/_utils/getCurrentTimeFromApi/fetchTimeByTimeZone";

export const getCurrentTimeFromApi = async () => {
  const ip = headers().get("X-Forwarded-For");
  const isLocalhostIp =
    ip === "127.0.0.1" || ip === "localhost" || ip === "::1";

  if (!ip || isLocalhostIp) {
    return fetchTimeByTimeZone();
  }

  return fetchTimeByIp(ip);
};
