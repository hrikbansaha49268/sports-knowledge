/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'laptop': '1366px',
      // => @media (min-width: 1366px) { ... }"}
      'lg': '1380px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};
