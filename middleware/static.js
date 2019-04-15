import { getMatchedComponents } from '~/.nuxt/utils.js'

// Static middleware to update `asyncData/fetch` when using `nuxt generate`
export default async ({ app, route }) => {
  // Ignore on server
  if (process.server) return
  // Ignore if not generated
  if (!process.static) return

  const Components = getMatchedComponents(route)
  // nuxt-payload-extractor works only for last child
  // see https://github.com/DreaMinder/nuxt-payload-extractor/blob/master/lib/module.js#L32
  const Component = Components[Components.length - 1]
  if (!Component.options.asyncData) {
    return
  }
  Component._payloads = Component._payloads || {}
  const payloadPath = (route.path + '/payload.json').replace(/\/+/, '/')
  let data = Component._payloads[payloadPath]
  if (!data) {
    data = await fetch(payloadPath).then((res) => res.json())
  }
  Component.options.asyncData = () => data
  Component._payloads[payloadPath] = data
}
