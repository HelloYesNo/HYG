module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'np-dark': '13px 13px 26px #151518, -13px -13px 26px #1b1b1e',
        'np-dark-2': 'inset 13px 13px 26px #151518, inset -13px -13px 26px #1b1b1e',
        'np-light': '13px 13px 26px #c4c4c2, -13px -13px 26px #ffffff',
        'np-light-2': 'inset 13px 13px 26px #c4c4c2, inset -13px -13px 26px #ffffff',
      },
      colors: {
        'light': '#E7E7E4',
      },
      textShadow: {
        'np-dark': '2px 2px 2px #202024, -2px -2px 2px #101012',
        'np-light': '1px 1px 2px #ffffff, -1px -2px 2px #bfbfbd',  
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
