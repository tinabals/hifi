/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        veryDarkBlue: 'hsla(216, 98%, 20%, 1)',
        lightBlue: 'hsla(216, 99%, 30%, 1)',
        lightGray: 'hsla(0, 0% ,100%, 1)',
        darkGray: 'hsla(0, 0%, 30%, 1)'
      }
    },
  },
  plugins: [],
}

