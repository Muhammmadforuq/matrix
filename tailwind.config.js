/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":["Inter"],
        "ibm-plex-sans":["IBM Plex Sans"],
      },
      fontSize:{
        "display-sm":['1.0625rem', '1.3125rem'],
        "display-3xl":['2.5rem', '2.625rem'],
      },
      colors:{
        brand:{
          black:{
            100:"#1A1A1A",
            200:"#0A0A0A",
            300:"#424242",
          },
          gray:{
            10:"#F0F0F0",
            100:"#D9D9D9",
            200:"#C2C2C2",
            300:"#757575",
          },
          orange:"#EA5B0C"
        }
      },
      maxWidth:{
        'xxl':"84rem",
        "current":"44.25rem",
      },
      backgroundImage:{
        lamp:"url('../img/lamp.png')"
      }
      
    },
  },
  plugins: [],
}
