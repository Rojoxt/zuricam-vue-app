/** @type {import('tailwindcss').Config} */
const primeui = require('tailwindcss-primeui');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [primeui],
};


