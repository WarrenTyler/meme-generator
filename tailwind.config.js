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
          "linear-gradient(90deg, #673280 1.18%, #A626D3 100%)",
      }),
      gridTemplateRows: {
        // Default grid template (for small screens)
        "form-layout": "40px 40px 40px",
        // Medium screens and above (md and larger)
        "md-form-layout": "40px 50px",
      },
      textShadow: {
        DEFAULT:
          "2px 2px 0 var(--tw-shadow-color), -2px -2px 0 var(--tw-shadow-color), 2px -2px 0 var(--tw-shadow-color), -2px 2px 0 var(--tw-shadow-color), 0 2px 0 var(--tw-shadow-color), 2px 0 0 var(--tw-shadow-color), 0 -2px 0 var(--tw-shadow-color), -2px 0 0 var(--tw-shadow-color), 2px 2px 5px var(--tw-shadow-color)",
        md: "3px 3px 0 var(--tw-shadow-color), -3px -3px 0 var(--tw-shadow-color), 3px -3px 0 var(--tw-shadow-color), -3px 3px 0 var(--tw-shadow-color), 0 3px 0 var(--tw-shadow-color), 3px 0 0 var(--tw-shadow-color), 0 -3px 0 var(--tw-shadow-color), -3px 0 0 var(--tw-shadow-color), 3px 3px 6px var(--tw-shadow-color)",
        lg: "4px 4px 0 var(--tw-shadow-color), -4px -4px 0 var(--tw-shadow-color), 4px -4px 0 var(--tw-shadow-color), -4px 4px 0 var(--tw-shadow-color), 0 4px 0 var(--tw-shadow-color), 4px 0 0 var(--tw-shadow-color), 0 -4px 0 var(--tw-shadow-color), -4px 0 0 var(--tw-shadow-color), 4px 4px 7px var(--tw-shadow-color)",
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
