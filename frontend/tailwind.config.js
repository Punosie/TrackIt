/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        balsamiq: ['"Balsamiq Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}