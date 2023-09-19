import { afterEach, expect } from "vitest";

import matchers from "@testing-library/jest-dom/matchers";
import { act, cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

globalThis.render = render;
globalThis.testScreen = screen;
globalThis.act = act;
globalThis.userEvent = userEvent;

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
