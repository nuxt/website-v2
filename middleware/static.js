import { getMatchedComponents } from '~/.nuxt/utils.js'

// Static middleware to update `asyncData/fetch` when using `nuxt generate`
export default async ({ app, route }) => {
  // Ignore on server
  if (process.server) return
  // Ignore if not generated
  if (!process.static) return

  const Components = getMatchedComponents(route)

  Components.forEach((Component) => {
    if (!Component.options.asyncData) {
      return
    }
    Component.options.asyncData = async function () {
      const payloadPath = (route.path + '/payload.json').replace(/\/+/, '/')
      const { data } = await fetch(payloadPath).then((res) => res.json())

      return data
    }
  })
}
