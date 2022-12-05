
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "innov8Yellow":"#FEFAC6",
        "innov8LightGreen":"#F0F9EC",
        "innov8DarkGreen":"#326E35",
        "innov8VeryDarkGreen":"#172518",
        "innov8Organge":"#EA7F1E"
      }
    },
    
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        'rotate-y-0':{
          transform:"rotateY(0deg)"
        },
        'rotate-y-60':{
          transform:"rotateY(-60deg)"
        },
        'rotate-y-120':{
          transform:"rotateY(-120deg)"
        },
        'rotate-y-180':{
          transform:"rotateY(-180deg)"
        },
      })
    })
  ]
}
