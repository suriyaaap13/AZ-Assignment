/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '47.4375rem'
      },
      fontFamily: {
        rubik: ['Rubik'],
        dmSans: ['DM+Sans'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}