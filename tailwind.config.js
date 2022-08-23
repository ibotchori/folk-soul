/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebarColor: '#333',
        primaryBG: '#143B52',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
