module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-once' : 'animation: bounce 1s',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
