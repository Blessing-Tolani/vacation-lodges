/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FF385C",
        "light-gray":'#717171',
        gray:'#222222',
      },
      screens: {
        xlMax: { max: '1279px' },
        lgMax: { max: '1023px' },
        mdMax: { max: '767px' },
        smMax: { max: '639px' },
      },
    },
  },
  plugins: [],
}

