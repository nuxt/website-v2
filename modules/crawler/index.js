const { join } = require('path')
const logger = require('consola').withScope('docs/crawler')

module.exports = async function () {
  const isBuild = this.options._build

  if (isBuild) {
    // Add runtime plugin
    this.addPlugin({
      src: join(__dirname, 'plugin.js')
    })
  }

  // Hook generator to extract routes
  this.nuxt.hook('generate:before', async (generator) => {
    const routes = {}

    // Add hook when a page is generated
    this.nuxt.hook('vue-renderer:ssr:context', async (context) => {
      routes[context.url] = true
      context.links = context.links || []

      const promises = context.links.map(async (link) => {
        const route = link.replace(/\/+/, '/').replace(/\?.+/, '').replace(/#.+/, '')
        if (routes[route]) {
          return
        }
        routes[route] = true
        await generator.generateRoute({ route, payload: null })
      })
      await Promise.all(promises)
    })

    // Profile generate
    let startTime
    let count
    this.nuxt.hook('generate:routeCreated', () => {
      if (!startTime) {
        startTime = new Date()
        count = 0
      } else {
        count++
      }
    })
    this.nuxt.hook('generate:done', () => {
      const time = (new Date() - startTime) / 1000
      const rps = count / time
      logger.info(`Generated ${count} routes in ${time} sec (${rps} r/s)`)
    })
  })
}
