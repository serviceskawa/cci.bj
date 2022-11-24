
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'] 
    },
    colors: {
      primary: "#DD7A4B",
      green: "#487F50",
      white: "#FFFFFF",
      danger: "#B91C1C",
      dark: "#000000",
      gray: "#487F501A",
      primaryInfo: "#DD7A4B1A",
      blue: "#111827",
      gris: "#FAFAFA",
      blanc: "#FBFBFB",
      bgHeader: "#FBFBFB",
      gray900: "#111928",
      borderSimple: "#111827",
      grayCard:"#F9FAFB",
      sp: "#6B7280",
      borderInput:"#D1D5DB",
      subtitlegray: "#6B7280",
      label: "#374151",
      lightGray: "#F7F9F9"
      //sous paragraphe
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
