/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red1": "#3A1212",
        "custom-red2": "#FF2625",
      },
      width: {
        700: "700px",
      },
      height: {
        900: "900px",
      },
      margin: {
        280: "280px",
      },
      fontSize: {
        200: "200px",
      },
    },
  },
  plugins: [],
};
