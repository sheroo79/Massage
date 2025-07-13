/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poller: ['"Poller One"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      boxShadow: {
        'custom-purple': '1.81px 3.62px 21.7px 0px rgba(94, 80, 191, 0.05)',
        'custom-faint': '2px 4px 24px rgba(94, 80, 191, 0.05)',
      },
    },
  },
  plugins: [],
}

