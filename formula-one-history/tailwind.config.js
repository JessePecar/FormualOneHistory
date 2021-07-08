module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
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
