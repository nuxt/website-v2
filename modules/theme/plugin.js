import Vue from 'vue'
import { parse, serialize } from 'cookie'

const key = '<%= options.cookie.key %>'
const cookieOptions = <%= JSON.stringify(options.cookie.options, null, 2) %>

export default function (ctx, inject) {
  const theme = Vue.observable({
    value: (process.client ? window.__nuxt_theme : '<%= options.value %>')
  })
  const setTheme = (value, persist = true) => {
    theme.value = value
    if (process.client) {
      // update cookie
      if (persist) {
        document.cookie = serialize(key, value, cookieOptions)
      }
      // Force data-theme update
      document.body.setAttribute('data-theme', theme.value)
    }
  }
  theme.set = setTheme

  // Read from cookie
  if (process.server && ctx.req) {
    // Check if cookie exist, otherwise TypeError: argument str must be a string
    const cookieExist = ctx.req.headers.cookie
    if (cookieExist) {
      const cookies = parse(ctx.req.headers.cookie)
      if (cookies[key] && cookies[key] !== theme.value) {
        theme.value = cookies[key]
      }
    }
  }

  // Reads from color-scheme
  if (process.client && window.matchMedia) {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkQuery.addListener((e) => setTheme(e.matches ? 'dark' : 'light', false))
  }

  if (process.static && process.client) {
    // Static generated, read from cookie + update body attrs manually
    document.body.setAttribute('data-theme', theme.value)
  }

  inject('theme', theme)
}
