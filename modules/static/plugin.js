import { getMatchedComponents } from './utils.js'
import Middleware from './middleware'

Middleware.nuxt_static = async ({ app, route }) => {
  // Ignore on server
  if (process.server) { return }
  // Ignore if not generated
  if (!process.static) { return }

  const Components = getMatchedComponents(route)
  Components.forEach((Component) => {
    Component._payloads = Component._payloads || {}
    if (Component.options.asyncData) {
      Component.options.asyncData = ({ route }) => Component._payloads[route.path.replace(/\/$/, '')]
    }
  })
  const path = route.path.replace(/\/$/, '')
  const needFetch = Components.some(Component => Component.options.asyncData && !Component._payloads[path])
  if (!needFetch) {
    return
  }
  const payloadPath = (path + '/payload.json').replace(/\/+/, '/')
  const pageDatas = await fetch(payloadPath).then((res) => {
    if (!res.ok) { return null }
    return res.json()
  })
  if (!pageDatas) {
    return console.error(`[@nuxt/static] Could not fetch ${payloadPath}`) // eslint-disable-line no-console
  }

  Components.forEach((Component, index) => {
    if (Component.options.asyncData) {
      Component._payloads[path] = pageDatas[index]
    }
  })
}
