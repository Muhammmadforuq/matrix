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
          blue:{
            100:"#1A1A1A",
            200:"#0A0A0A",
            300:"#424242"
          },
          gray:"#F0F0F0",
          orange:"#EA5B0C"
        }
      },
      maxWidth:{
        'xxl':"84rem"
      }
      
    },
  },
  plugins: [],
}
