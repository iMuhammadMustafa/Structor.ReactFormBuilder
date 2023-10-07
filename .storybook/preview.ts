import type { Preview } from "@storybook/react";

import "../src/index.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Form", ["Form", ["Base"]]],
      },
    },
  },
};

export default preview;
