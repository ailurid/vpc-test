import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

const forceReload = "fooo";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["vite-plugin-checker"]
  },
  plugins: [
    react(),
    checker({
      overlay: {
        errorsOnly: true
      },
      typescript: true,
      eslint: {
        lintCommand: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore"
      }
    })
  ]
});
