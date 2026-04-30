/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Esto añade Inter como la fuente sans principal
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}