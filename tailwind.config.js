module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FCFAFA',
      blue: '#9CB1BF',
      green: '#9ABC9C',
      black: '#232C33',
      pink: '#D03970',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
