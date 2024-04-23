/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from "path";
import { defineConfig, loadEnv } from "vite";

import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), pluginPurgeCss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["../vitest.setup.ts"],
      css: false,
      coverage: {
        provider: "v8",
      },
    },
  };
});
