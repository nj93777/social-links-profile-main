/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        neoyellow: '#8DA644',
        customgreen: '#819642',
        customneoyellow: '#C4F828',
        custombody: '#0E0E0E' ,
        customdiv: '#1F1F1F',
        customdiv1: '#333333',
      },
    },
  },
  plugins: [],
};
