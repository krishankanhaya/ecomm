/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        ph: { max: "767px" },
        lp: { min: "768px" },
      },
      nth: {
        1: "nth-child(1n)",
        2: "nth-child(2n)",
        3: "nth-child(3n)", 
      },
    },
  },
  plugins: [],
};

