const { join } = require('path')
const getPort = require('get-port')
const startDocsServer = require('./server')
const degit = require('degit')
const logger = require('consola').withScope('modules/docs')

const startServer = async function (path, port) {
  const server = await startDocsServer(path, port)

  logger.success(`Docs server listening on http://localhost:${port}`)
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
      url: `http://localhost:${port}`
    }
  })

  this.nuxt.hook('listen', () => startServer(join(this.options.srcDir, 'docs'), port))
  // We need to run the server in order to serve the docs when running `nuxt generate`
  this.nuxt.hook('generate:before', async (generator) => {
    let server

    // Wait for build to be done before
    this.nuxt.hook('build:done', async () => {
      // For generate, clone the repo in `.nuxt/docs` with degit
      const path = join(this.options.buildDir, 'docs')
      logger.info(`Cloning nuxt/docs into ${path}`)
      await degit('nuxt/docs', { force: true, cache: false }).clone(path)
      server = await startServer(path, port)
    })

    // Add hook when closing the server
    this.nuxt.hook('generate:done', () => {
      return new Promise((resolve) => {
        logger.info(`Stopping docs server...`)
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
