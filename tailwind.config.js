/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        'mina': ['"Mina"', "sans-serif"],
        'mansalva': ['"Mansalva"', "sans-serif"],
        'major': ['"Major Mono Display"', "monospace"],
        'Vujahday': ['"VujahdayScript"', "sans-serif"],
        'Inter': ['"Inter"', "sans-serif"],
      },
      colors: {
        'apple-blossom': '#AB3E41',
        'biscay': '#163A5F',
        'black': '#0A0B0B',
        'blumine': '#1D566E',
        'crimson': '#DC1B3C',
        'eastern-blue': '#21ABA5',
        'hit-pink': '#FFAA72',
        'true-black': '#000000',
        'true-white': '#FFFFFF',
        'turquoise': '#45EBA5',
        'well-read': '#BB342F',
        'white': '#F2F2F3',
        'warning': '#FF9A17',
        'error': '#EF233C',
        'info': '#DDA448',
      }
    },
  },
  plugins: [],
};
