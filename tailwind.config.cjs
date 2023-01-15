/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      lineHeight: {
        75: "75px",
        60: "60px",
      },

      colors: {
        "main-red": "#ea2845",
        "main-white": "#fdfdfd",
        "main-black": "#090909",
        "main-dark": "#111",
        "main-gray": "#a5a5a5",
      },

      boxShadow: {
        project: "0 10px 30px -15px #000",
        input: "-2px 2px 3px #dcdcdc",
      },

      screens: {
        sx: "360px",
        ss: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
