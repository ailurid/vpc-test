import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

/*
CASES
- panelLevel:
  - not set
  - "warning"
  - "error"
  - invalid string
  - invalid number
  - null
  - something else?
- number of warnings
  - 0
  - 1+
- number of errors
  - 0
  - 1+

TODO: is there a way to change config while app is running? probably not?
*/

// don't think the force thing works, just manually stop/start instead to see plugin changes

const warning = "don't use this value";

var error;

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["vite-plugin-checker"]
  },
  plugins: [
    react(),
    // TODO: sort out whatever the problem is here
    checker({
      overlay: {
        panelLevel: "warning"
      },
      typescript: true,
      eslint: {
        lintCommand: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore"
      }
    })
  ]
});
