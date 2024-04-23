/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from "path";
import { build, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss"
// @ts-ignore
import pathsFromConfig from "./tsconfig.paths.json";

import * as packageJson from './package.json'

import dts from "vite-plugin-dts";


// @ts-ignore
export default defineConfig(({ command, mode}) => {

  if (command === 'serve') {}
  
  const env = loadEnv(mode, process.cwd(), "");
  let openBrowser = mode === "development";

  return { 
    plugins: [react(), 
      pluginPurgeCss(), 
      dts({ rollupTypes:true, include: ['lib'], exclude: ['src'] })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    server: {
      host: true,
      port: Number.parseInt(env.PORT) || 3001,
      open: openBrowser,
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, 'lib/main.ts'),
        formats: ['es'],
        name: 'structor-reactformbuilder',
        fileName: 'main',
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime", "react-dom"],
      },      
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
      css: false,
      coverage: {
        provider: 'v8',
      },
      
    },
  }
});