// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  darkMode: "class",
  theme: { 
    fontFamily: { 
      'rigtheous': ['Righteous', 'system-ui' ],
      'hanek': ['Hanken Grotesk', 'sans', 'system-ui' ], 
      'monset': ['Montserrat', 'sans-serif', 'system-ui'],       
    },
    extend: {
      colors: {
        lightModeBackground:"hsl(0, 0%, 90%)", 
        black: "#0E0E0F",
        darkModeBackground:"#0F172A",
        darkHeader:"#0E0E0F",
        lightModeText: "hsl(200, 15%, 8%)", 
        // lightModeElement:" hsl(0, 0%, 100%)", 
        lightModeElement:"#3B82F6", 
        darkModeText:"hsl(0, 0%, 100%)",
        darkModeElement:"#22223",
        darkTerra: "#D64B5E",
        accentColor1: "#1DB3F9",
        phyedColor: '#36457D',
        // entityGradient: "gradient-to-r from-verylightblue to-darkTerra", 
      }
    },
  },
  plugins: [],
} 

