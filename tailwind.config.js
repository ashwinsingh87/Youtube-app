/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1024px','max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '767px','max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '639px','max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },

  },
  plugins: [],
} 