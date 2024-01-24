/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {boxShadow: {
      '3xl': 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    }},
  },
  plugins: [],
}


