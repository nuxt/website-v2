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
    display: ['responsive', 'after'],
    margin: ['responsive', 'after'],
    width: ['responsive', 'after'],
    borderWidth: ['responsive', 'after'],
    borderRadius: ['responsive', 'after'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'light', 'after', 'light:after', 'dark:after'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'light'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark', 'light']
  },
  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      // addVariant('dark', ({ modifySelectors, separator }) => {
      //   modifySelectors(({ className }) => {
      //     return `[data-theme='dark'] .${e(`dark${separator}${className}`)}`
      //   })
      // })
      // addVariant('after', ({ modifySelectors, separator }) => {
      //   modifySelectors(({ className }) => {
      //     return `.${e(`after${separator}${className}`)}::after`
      //   })
      // })
      const themeVariants = ['light', 'dark']
      themeVariants.forEach((mode) => {
        addVariant(mode, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `[data-theme='${mode}'] .${e(`${mode}${separator}${className}`)}`
          })
        })
      })
      const pseudoVariants = ['after', 'before']
      pseudoVariants.forEach((pseudo) => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`
          })
        })
      })
      // generate chained color mode and pseudo variants
      themeVariants.forEach((mode) => {
        pseudoVariants.forEach((pseudo) => {
          addVariant(`${mode}:${pseudo}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `[data-theme='${mode}'] .${e(`${mode}${separator}${pseudo}${separator}${className}`)}::${pseudo}`
            })
          })
        })
      })
    })
  ]
}
