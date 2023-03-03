const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        back: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--back), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--back), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--back))`
        },
        green: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--green), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--green), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--green))`
        },
      },
      opacity: {
        15: '0.15',
        25: '0.25',
        75: '0.75',
      },
      fontFamily: {
        cbrush: ['var(--cbrush-font)'],
        'space-mono': ['var(--space-mono-font)'],
        nunito: ['var(--nunito-font)'],
      },
      backdropBlur: {
        '4xl': '75px',
      },
      dropShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
