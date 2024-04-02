/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      gridColumn: {
        '1fr': '1fr',
        '2fr': '2fr',
      },
    },
  },
  plugins: [],
}