/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        bgCard: "url('./assets/card.svg')",
      }
    },
  },
  plugins: [],
};
