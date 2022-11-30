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
        'space-mono': ['var(--space-mono-font)'], 
        nunito: ['var(--nunito-font)'], 
      },
    },
  },
  plugins: [],
};