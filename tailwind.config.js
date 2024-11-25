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
        light: {
          primary: "#9E9EDE",
          secondary: "#8CA472",
          neutral: "#F4F4F5",
        },
        dark: {
          primary: "#4B4B6A",
          secondary: "#6A7452",
          neutral: "#1E2329",
        },
        purple: "#7c3aed",  //violate
        olive: "#556B2F", //olive
        neutral: "#1d2b3a",
        violate: '#483D8B',
        charcoal: '#1f2937',
        offWhite: "#E1E2DB",
        lavender: "#f5f3ff"
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [daisyui],
}

