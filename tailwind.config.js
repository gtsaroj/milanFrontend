import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const darkMode = "class";
export const plugins = [addVariablesForColors];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
