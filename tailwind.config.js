/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        biennale: ["Biennale", "sans-serif"],
      },
      container: {
        padding: "20px",
        center: true,
      },
      screens: {
        xl: "1340px",
        "2xl": "1340px",
      },
      colors: {
        primary: "#44c8f5",
        secondary: "#11163e",
      },
    },
  },
  plugins: [],
};
