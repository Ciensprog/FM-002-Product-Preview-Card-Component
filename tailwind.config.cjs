const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = {
  aquamarine: {
    400: '#3D8168',
    700: '#1A4032',
  },
  aurometal: {
    400: '#6C7289',
  },
  cream: {
    400: '#F2EAE2',
  },
  gunmetal: {
    700: '#1C232B',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      fontFamily: {
        fraunces: ['Fraunces', ...fontFamily.serif],
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
