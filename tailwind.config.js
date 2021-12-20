const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      bluefooter: {
        light: '#1C3E7E',
        DEFAULT: '#193579',
        dark: '#009eeb',
      },
      lightblue: {
        light: '#1C3E7E',
        DEFAULT: '#1C3E7E',
        dark: '#009eeb',
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: false,
  },
}