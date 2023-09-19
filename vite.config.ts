/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-ignore
import pathsFromConfig from "./tsconfig.paths.json";

// mode/commands Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  let openBrowser = mode === "development";

  return {
    plugins: [react()],
    resolve: {
      alias: resolveTSConfigPathAlias(),
    },
    //envPrefix: "VITE",
    server: {
      host: true,
      port: Number.parseInt(env.PORT) || 3001,
      open: openBrowser,
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      css: false,
      coverage: {
        provider: 'c8',
      },
      
    },
  };
});

function resolveTSConfigPathAlias() {
  const pathsAliasesArray = pathsFromConfig.compilerOptions.paths;
  const aliasesKeys = Object.keys(pathsAliasesArray).map(x => x.slice(0, -2));

  const aliases = {};

  aliasesKeys.forEach(key => {
    let pathString = pathsAliasesArray[key + "/*"][0].slice(0, -1);
    aliases[key] = path.join(path.resolve(__dirname, pathString));
  });
  return aliases;
}
