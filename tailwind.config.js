const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Quicksand',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ]
      },
      colors: {
        nuxt: {
          gray: '#2F495E',
          lightgreen: '#00C58E',
          green: '#108775'
        },
        primary: {
          base: '#00C58E',
          light: '#00E0A1',
          dark: '#07A377'
        },
        light: {
          surface: '#F8FAFC',
          onSurfacePrimary: '#2F495E',
          onSurfaceSecondary: '#606F7B',
          elevatedSurface: defaultTheme.colors.white,
          border: defaultTheme.colors.gray['300']
        },
        dark: {
          surface: '#2C3E50',
          onSurfacePrimary: '#F5F7FA',
          onSurfaceSecondary: '#B8C2CC',
          elevatedSurface: '#2F495E',
          border: defaultTheme.colors.gray['900']
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
        nuxt: '0px 0px 8px rgba(0, 0, 0, 0.101562)'
      },
      inset: {
        24: '6rem'
      }
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark']
  },
  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `[data-theme='dark'] .${e(`dark${separator}${className}`)}`
        })
      })
    })
  ]
}
