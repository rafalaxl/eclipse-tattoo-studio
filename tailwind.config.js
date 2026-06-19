/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'eclipse-black': '#0a0a0a',
        'eclipse-dark': '#1a1a1a',
        'eclipse-gold': '#c5a059',
      },
      spacing: {
        '24': '1.5rem',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
