const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

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
      },
      opacity: {
        15: '0.15',
        25: '0.25',
        75: '0.75',
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
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(
            theme('bgGradientDeg', { plugin }), // name of config key. Must be unique
            {
              10: '10deg',
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '180deg',
            }
          ),
        }
      )
    }),
  ],
}
