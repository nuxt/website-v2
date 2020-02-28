const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans
        ]
      },
      colors: {
        nuxt: {
          gray: '#2F495E',
          lightgreen: '#00C58E',
          green: '#108775'
        },
        light: {
          text: '#2F495E',
          surface: defaultTheme.colors.white,
          elevatedSurface: defaultTheme.colors.gray['100']
        },
        dark: {
          text: '#F5F7FA',
          surface: '#2C3E50',
          elevatedSurface: '#2F495E'
        }
      },
      fill: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green')
      }),
      stroke: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green')
      }),
      boxShadow: {
        nuxt: '0 0 8px 0 rgba(10, 31, 68, 0.08)'
      },
      inset: {
        24: '6rem'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
