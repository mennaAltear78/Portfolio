/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
        animation: {
          slideIn: "slideIn 1s ease-out",
          fade: "fade 0.5s ease",
          float: "floatLoop 2s ease-in-out infinite",
        },
        keyframes: {
          slideIn: {
            "0%": { transform: "translateX(-100%)", opacity: 0 },
            "100%": { transform: "translateX(0)", opacity: 1 },
          },
          fade: {
            "0%": { opacity: 0 },
            "50%": {opacity:0.1},
            "100%": { opacity: 1 },
          },
          floatLoop: {
            "0%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
            "100%": { transform: "translateY(0px)" },
          },
        },
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}