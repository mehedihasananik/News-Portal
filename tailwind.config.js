/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '375px',
        lsm: '414px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        "OldEnglish": ['UnifrakturCook', 'cursive']
      },
    },
  },
  plugins: [],
});

