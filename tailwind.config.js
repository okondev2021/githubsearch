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
      'mobile': {'max': '430px'},
      // => @media (max-width: 430px) { ... }
    },
    fontFamily:{
      body: ['Nunito Sans']
    },
    extend: {},
  },
  plugins: [],
}

