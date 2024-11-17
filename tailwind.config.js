/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react";
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from "tailwindcss-scoped-preflight";

const config = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({ addCommonColors: true }),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer([".spinner", ".skeleton"]),
    }),
  ],
};

export default config;
