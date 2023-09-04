/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    extend: {
      fontfamily: {
        Gilroy: ["Gilroy-bold"],
        Gilroy: ["Gilroy-light"],
      },
    },
  },
  plugins: [],
};
