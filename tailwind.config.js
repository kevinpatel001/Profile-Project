/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{ transform:"translateX(0)"},
          to:{transform:"translateX(-100%)"},
        },
      },
      colors: {
       'dot-white': 'rgba(255, 255, 255, 0.2)', // Dot white with 20% opacity
        'dot-black': 'rgba(0, 0, 0, 0.2)',       // Dot black with 20% opacity
      },
    },
  },
  plugins: [],
}