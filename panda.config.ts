import { customTokens as tokens } from "@components/theme";
import { customGlobalCss as globalCss } from "@components/theme/global";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",
  globalCss,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
