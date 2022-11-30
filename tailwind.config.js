const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-blue': '#293A60',
      },
      fontFamily: {
        cbrush: ['var(--cbrush-font)'],
        inter: ['var(--inter-font)'], 
        nunito: ['var(--nunito-font)'], 
      },
    },
  },
  plugins: [],
};