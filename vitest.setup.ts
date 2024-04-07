import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, beforeEach } from "vitest";

import { server } from "@/mocks/msw/rest-api/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "bypass" });
});

beforeEach(() => {});
afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());
