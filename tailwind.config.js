/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#2C3E50',
        },
        main1: {
          DEFAULT: '#E67E22',
        },
        main2: {
          DEFAULT: '#8E44AD',
        },
        sub1: {
          DEFAULT: '#27AE60',
        },
        sub2: {
          DEFAULT: '#F0F2F5',
        },
      },
    },
  },
  plugins: [],
};