import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  core: {
    builder: {
      name: "@storybook/builder-vite", // 👈 The builder enabled here.
      options: {
        viteConfigPath: "./.storybook/customVite.config.ts",
      },
    },
  },
  stories: ["../src/**/*.mdx", "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/client-api",
    "@storybook/addon-docs",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
