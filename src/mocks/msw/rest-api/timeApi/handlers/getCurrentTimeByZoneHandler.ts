import { http, HttpResponse } from "msw";

import { getCurrentTimeByZoneResponse } from "../responses/getCurrentTimeByZoneResponse";

export const getCurrentTimeByZoneHandler = http.get(
  `https://www.timeapi.io/api/Time/current/zone`,
  () => {
    return HttpResponse.json(getCurrentTimeByZoneResponse);
  },
);
