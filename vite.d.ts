declare global {
  const render: typeof import("@testing-library/react").render;
  const act: typeof import("@testing-library/react").act;
  const testScreen: typeof import("@testing-library/react").screen;
  const userEvent: typeof import("@testing-library/user-event");
}

export {};
