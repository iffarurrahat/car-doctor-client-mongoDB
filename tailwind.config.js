/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif"
      },
      colors: {
        primary: "#FF3811",
        secondary: "#151515",
        tertiary: "#737373",
        quaternary: "#444",
        protein: "#F3F3F3",
      }
    },
  },
  plugins: [require("daisyui")],
}



