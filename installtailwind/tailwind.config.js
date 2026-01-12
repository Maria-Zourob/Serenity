/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Poppines':['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        primecolor: '#1c2749',
        orangcolor:'#e9895b',
        yellowcolor:'#fdd500',
        graycolor:'#978c89',
        bluecolor:'#5c78cf',

      },

  },
  plugins: [],
}
}