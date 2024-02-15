/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors: {
        primary: "#6F8A98",
        secondary: "#ABB2C3",
        accent: "#9498B3",
        background: "#FCFDFD",
        text: "#090B0C"
      },
    },
  },
  plugins: [],
}