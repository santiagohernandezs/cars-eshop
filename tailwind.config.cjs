/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': 'repeat(4, 284px)'
      },
      height: {
        '20': '20rem',
      }
    },
  },
  plugins: [],
}