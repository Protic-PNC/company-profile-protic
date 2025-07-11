/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'c2': '#C8C6C7',
        'c3': '#E99C16',
        'c4': '#13111E',
        'c5': '#2A7F68',
        'c6': '#275032',
        'c7': '#307E52',
        'c8': '#06291E',
      },
      fontFamily: {
        'monserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display'],
      },
      screens: {
        '1700': '1700px',
        '1600': '1600px',
        '1400': '1400px',
        '1300': '1300px',
        '1200': '1200px',
        '1100': '1100px',
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}