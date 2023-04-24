/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#c74aae",
        grey: "#222222",
        white: "#fff",
        hover: "#66355c"
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        // "home-hero": "url('/assets/images/football-hero.jpg')"
      }
    },
  },
  plugins: [],
}

