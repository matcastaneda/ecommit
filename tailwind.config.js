const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: { max: '580px' },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif",
      },
    },
  },
  variants: {},
  plugins: [],
};
