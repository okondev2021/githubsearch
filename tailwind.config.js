/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'big': {'max': '1300px'},
      // => @media (max-width: 1300px) { ... }
      'md': {'max': '1030px'},
      // => @media (max-width: 1030px) { ... }
      'tab': {'max': '790px'},
      // => @media (max-width: 1030px) { ... }
      'mobile': {'max': '500px'},
      // => @media (max-width: 430px) { ... }
    },
    fontFamily:{
      body: ['Space Mono']
    },
    extend: {
      colors:{
        'dark': {
          'button': ' #0079FF',
          'notAvailText': '#697C9A',
          'background': '#141D2F',
          'main': '#1E2A47',
        }
      },
      fontSize:{
        'xxsm': '10px'
      }
    },
  },
  plugins: [],
}

