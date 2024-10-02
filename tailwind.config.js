const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './i18n/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        16: '64px',
      },
      colors: {
        overlayColor: '#01010180',
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
        orange: ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--orange), ${opacityValue})`
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--orange), var(${opacityVariable}, 1))`
          }
          return `rgb(var(--orange))`
        },
        red: '#BC0E13',
      },
      opacity: {
        15: '0.15',
        25: '0.25',
        75: '0.75',
      },
      screens: {
        slim: { raw: '(min-width: 556px)' },
        short: { raw: '(max-height: 825px) and (min-width: 768px)' },
      },
      fontFamily: {
        cbrush: ['var(--cbrush-font)'],
        'space-mono': [
          'var(--space-mono-font)',
          {
            fontFeatureSettings: '"liga" 0',
          },
        ],
        nunito: ['var(--nunito-font)'],
      },
      backdropBlur: {
        '4xl': '75px',
      },
      dropShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        '3xl': '0 0px 8px rgba(251, 235, 198, 0.5)',
      },
      spacing: {
        18: '72px',
      },
    },
  },
  plugins: [],
}
