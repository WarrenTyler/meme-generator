/** @type {import('tailwindcss').Config} */
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
      backgroundImage: (theme) => ({
        "gradient-purple":
          "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
      }),
      gridTemplateRows: {
        "form-layout": "40px 40px",
      },
    },
  },
  plugins: [],
};
