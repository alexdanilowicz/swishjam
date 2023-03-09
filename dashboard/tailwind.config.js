const { Tokens } = require('./.mirrorful/theme_cjs');

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: [Tokens.fontSizes.xs, { lineHeight: '1rem' }],
      sm: [Tokens.fontSizes.sm, { lineHeight: '1.5rem' }],
      base: [Tokens.fontSizes.base, { lineHeight: '1.75rem' }],
      lg: [Tokens.fontSizes.lg, { lineHeight: '2rem' }],
      xl: [Tokens.fontSizes.xl, { lineHeight: '2rem' }],
      '2xl': [Tokens.fontSizes['2xl'], { lineHeight: '2rem' }],
      '3xl': [Tokens.fontSizes['3xl'], { lineHeight: '2.5rem' }],
      '4xl': [Tokens.fontSizes['4xl'], { lineHeight: '3.5rem' }],
      '5xl': [Tokens.fontSizes['5xl'], { lineHeight: '3.5rem' }],
      '6xl': [Tokens.fontSizes['6xl'], { lineHeight: '1' }],
      '7xl': [Tokens.fontSizes['7xl'], { lineHeight: '1.1' }],
      '8xl': [Tokens.fontSizes['8xl'], { lineHeight: '1' }],
      '9xl': [Tokens.fontSizes['9xl'], { lineHeight: '1' }],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          }
        }
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        swishjam: {
          ...Tokens.colors,
        },
      },
    },
  },
  plugins: [
    forms,
    typography
  ],
}
