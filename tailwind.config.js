const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: '#16A34A',
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: '#2563EB',
    },
    extend: {},
  },
  plugins: [],
};
