import { afterEach } from "vitest";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// import * as matchers from "@testing-library/jest-dom/matchers";
// import matchers from "@testing-library/jest-dom/matchers";
// expect.extend(matchers);

globalThis.render = render;
globalThis.testScreen = screen;
globalThis.act = act;
globalThis.userEvent = userEvent;

afterEach(() => {
  cleanup();
});
