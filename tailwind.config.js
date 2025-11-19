/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37'
      },
      fontFamily: {
        serif: ['Georgia', 'serif']
      }
    }
  },
  plugins: []
}
