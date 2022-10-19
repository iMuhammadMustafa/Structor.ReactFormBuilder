import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// @ts-ignore
import pathsFromConfig from "./tsconfig.paths.json";

// mode/commands Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    resolve: {
      alias: resolveTSConfigPathAlias(),
    },
    //envPrefix: "VITE",
    server: {
      host: true,
      port: Number.parseInt(env.PORT) || 3001,
      open: true,
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
