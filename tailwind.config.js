/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayish: "#D5D4D8",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      fontFamily: {
        impact: ["Impact", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-purple":
          "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
      }),
      gridTemplateRows: {
        "form-layout": "40px 40px",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT:
          "2px 2px 0 var(--tw-shadow-color), -2px -2px 0 var(--tw-shadow-color), 2px -2px 0 var(--tw-shadow-color), -2px 2px 0 var(--tw-shadow-color), 0 2px 0 var(--tw-shadow-color), 2px 0 0 var(--tw-shadow-color), 0 -2px 0 var(--tw-shadow-color), -2px 0 0 var(--tw-shadow-color), 2px 2px 5px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
