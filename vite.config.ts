import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    //envPrefix: "VITE",
    server: {
      host: true,
      port: Number.parseInt(env.PORT) || 3001,
      open: true,
    },
  };
});

// export default ({ mode }) => {
//   // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
//   process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
//   console.log(process.env.VITE_PORT);
//   return defineConfig({
//     plugins: [react()],
//   });
// };
