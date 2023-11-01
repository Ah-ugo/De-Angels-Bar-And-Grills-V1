/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      themeColor: "#0e0529",
      white: "#ffff",
      gray: "rgba(209, 213, 219, 0.7)",
      gray2: "rgba(209, 213, 219, 1)",
    },
  },
  plugins: [],
};
