module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    fontFamily:{
      'raleway': ['Raleway'],
      'raleway-italic': ['Raleway-Italic']
    },
    extend: {
      blur: {
        xs: '1px'
      }
    },
  },
  variants: {
    extend: {
      blur: ['hover', 'focus']
    },
  },
  plugins: []
}
