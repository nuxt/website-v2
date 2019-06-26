const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        nuxt: {
          gray: '#2F495E',
          lightgreen: '#00C58E',
          green: '#108775'
        }
      },
      boxShadow: {
        reverse: '0 -1px 3px 0 rgba(0, 0, 0, .1), 0 -1px 2px 0 rgba(0, 0, 0, .06)',
        nuxt: '0 0 8px 0 rgba(10, 31, 68, 0.08)'
      }
    }
  },
  variants: {},
  plugins: []
}
