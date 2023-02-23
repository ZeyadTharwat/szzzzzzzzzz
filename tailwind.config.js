/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '490px',


      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'blg': '992px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    fontSize:{
      base: ['16px', '19.5px'],
      sm: ['14px', '17.07px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['30px', '36px'],
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',


    },
    container: {
      screens: {
          '3xl': "1920px",
      },
      center: true,
  },

    extend: {
      boxShadow: {
        secondary: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },

      fontFamily:{
        montserrat:[ "Montserrat", "sans-serif"],
      },

      fontSize: {
        xxs:['10px','12.19px'],
        xxs17px:['10px','17px'],
        '8px':['8px','9.75px']
      },
      borderRadius:{
        "20px":"20px",
        "10px":"10px",
        "5px":"5px",
      },
      colors: {
        gray: {
          10: "#EBEBEB",
          15:"#CCCCCC",
          20:"#737373",
      },
        main:"#A00006",
      }
    },
  },
  plugins: [],
}
