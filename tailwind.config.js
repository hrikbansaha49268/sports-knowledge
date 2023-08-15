/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '499px' },
        'md': { 'min': '500px', 'max': '1023px' },
        'laptop': { 'min': '1024px', 'max': '1366px' },
        ...defaultTheme.screens,
      },
    }
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};
