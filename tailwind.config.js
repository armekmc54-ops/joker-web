/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#0B0B0D",
        carbon: "#161618",
        carbonLight: "#1F1F22",
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E4C878",
          dark: "#8A6D2F",
        },
        silver: "#A8A8B0",
        pureWhite: "#F8F8F6",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 20px rgba(201, 162, 75, 0.25)",
        goldHover: "0 0 30px rgba(201, 162, 75, 0.45)",
      },
    },
  },
  plugins: [],
};
