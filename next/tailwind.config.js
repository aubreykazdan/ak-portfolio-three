/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    fontFamily: {
      inter: ["Monserrat", "sans-serif"],
    },
    extend: {
      colors: {
        accent: {
          darkest: "#3e2d23",
          dark: "#6d3a11",
          DEFAULT: "#b50102",
          hover: "#ec7615",
          light: "#e0b767",
          blue: "#2f088d",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
