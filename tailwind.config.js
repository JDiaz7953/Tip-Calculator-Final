/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Poppins font
        spacemono: ['"Space Mono"', 'monospace'], // Space Mono font
      }
    },
  },
  plugins: [],
}

