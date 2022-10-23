import { afterEach, expect } from "vitest";

import "@testing-library/jest-dom";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
