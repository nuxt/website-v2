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
      fill: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
      }),
      boxShadow: {
        nuxt: '0 0 8px 0 rgba(10, 31, 68, 0.08)'
      }
    }
  },
  variants: {},
  plugins: []
}
