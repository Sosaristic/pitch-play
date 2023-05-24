/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        vs: "290px",
      },
      colors: {
        primary: "#c74aae",
        dark: "#100f10",
        "dark-grey": '#1b1b1b',
        "light-grey": "#242424",
        white: "#fff",
        hover: "#66355c",
        'white-rgba': 'rgba(#fff, 0.96)',
        'light-grey-rgba': 'rgba(#fff, 0.67)',
        'dark-grey-rgba': 'rgba(#fff, 0.45)',
        "pitch-light-green": "#589644",
        "pitch-dark-green": "#528b40",
      },
      fontFamily: {
        righteous: ["Righteous", "cursive"],
        jost: ["Jost", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        // "home-hero": "url('/assets/images/football-hero.jpg')"
        "football-field": "url('/src/assets/svg/football-field.svg')",
      },
      boxShadow: {
        "user-select-shadow": "0px 0px 2px 2px #1d8e66",
        "services-card": "0px 0px 10px 8px #f9f9f9",
      },
    },
  },
  plugins: [],
};
