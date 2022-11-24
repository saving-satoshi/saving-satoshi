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
        caveat: ['var(--font-caveat-brush)'],
        inter: ['var(--font-inter)'], 
        nunito: ['var(--font-nunito)'], 
      },
    },
  },
  plugins: [],
};
