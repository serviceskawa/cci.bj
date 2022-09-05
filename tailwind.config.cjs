/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#DD7A4B",
      green: "#487F50",
      white: "#FFFFFF",
      dark: "#000000",
      gray: "#487F501A",
      primaryInfo: "#DD7A4B1A",
      blue: "#111827",
      gris: "#FAFAFA",
      blanc: "#FBFBFB",
      bgHeader: "#FBFBFB",
      gray900: "#111928",
      borderSimple: "#111827",
      sp: "#6B7280", //sous paragraphe
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
