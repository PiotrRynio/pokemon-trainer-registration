import { describe, expect, test, vi } from "vitest";

import { getCurrentTimeFromApi } from "./getCurrentTimeFromApi";

describe("getCurrentTimeFromApi", () => {
  vi.mock("next/headers", () => ({
    headers: vi.fn().mockImplementation(() => ({
      get: vi.fn().mockReturnValue("127.0.0.1"),
    })),
  }));

  test("should return time by ip", async () => {
    const checkedTime = await getCurrentTimeFromApi();

    expect(checkedTime).toStrictEqual({
      year: 2024,
      month: 4,
      day: 5,
      hour: 16,
      minute: 36,
      seconds: 19,
      milliSeconds: 756,
      dateTime: "2024-04-05T16:36:19.7561359",
      date: "04/05/2024",
      time: "16:36",
      timeZone: "Europe/Warsaw",
      dayOfWeek: "Sunday",
      dstActive: true,
    });
  });
});
