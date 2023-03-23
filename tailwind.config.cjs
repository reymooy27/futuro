/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#61646b',
        'border': '#e6e7eb'
      }
    },
  },
  plugins: [],
};

module.exports = config;
