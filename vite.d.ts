declare global {
  const render: typeof import("@testing-library/react").render;
  const act: typeof import("@testing-library/react").act;
  const testScreen: typeof import("@testing-library/react").screen;
  const userEvent: typeof import("@testing-library/user-event");
}

// declare const render: typeof render
// declare const act =  typeofact
// declare const testScreen = typeof screen
// declare const userEvent = typeof userEvent

export {};
