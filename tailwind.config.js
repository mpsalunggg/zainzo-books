/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom': 'rgba(228, 228, 228, 0.5)',
        'custom2': 'rgba(113,113,113, 1)',
        'redColor' : 'rgba(209, 2, 52, 1)'
      },
      colors: {
        'custom': 'rgba(113,113,113, 1)',
        'custom2': 'rgba(82, 82, 82, 1)',
        'redColor' : 'rgba(209, 2, 52, 1)'
      },
      width: {
        '128': '32rem',
        'custom' : '30rem',
        'custom2' : '37rem',
        'custom3' : '48rem'
      },
      height: {
        'custom': '28rem',
        'custom2' : '37rem',
      }
    },
  },
  plugins: [],
}
