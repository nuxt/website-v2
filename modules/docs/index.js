const { join } = require('path')
const getPort = require('get-port')
const startDocsServer = require('./server')

const startServer = async function (srcDir, port) {
  const server = await startDocsServer(join(srcDir, 'docs'), port)

  console.log(`Docs server listening on ws://localhost:${port}`)
  return server
}

module.exports = async function (moduleOptions) {
  const options = Object.assign({}, this.options.docs, moduleOptions)

  let port = options.port
  if (!port) {
    port = await getPort()
  }
  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options: {
      url: `ws://localhost:${port}`
    }
  })

  this.nuxt.hook('listen', () => startServer(this.options.srcDir, port))
  // We need to run the server in order to serve the docs when running `nuxt generate`
  this.nuxt.hook('generate:before', async (generator) => {
    const server = await startServer(this.options.srcDir, port)

    // Add hook when closing the server
    this.nuxt.hook('generate:done', () => {
      return new Promise((resolve) => {
        console.log(`Stopping docs server...`)
        server.close(resolve)
      })
    })
    // Add hook for extending routes
    this.nuxt.hook('generate:extendRoutes', (routes) => {
      // Empty array
      routes.splice(0, routes.length)
      // Add home
      routes.push({ route: '/', payload: null })
    })
    const routes = {}
    // Add hook when a page is generated
    this.nuxt.hook('vue-renderer:ssr:context', async (context) => {
      routes[context.url] = true

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
  })
}
