/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",  //violate
        olive: "#556B2F", //olive
        secondary: "#4b5563"
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [daisyui],
}

