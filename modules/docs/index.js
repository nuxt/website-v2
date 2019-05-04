const { join } = require('path')
const fs = require('fs')
const getPort = require('get-port')
const degit = require('degit')
const docsServer = require('./server')
const logger = require('consola').withScope('docs/module')

module.exports = async function (moduleOptions) {
  const options = { ...this.options.docs, ...moduleOptions }

  const isGenerate = this.options._generate
  const isStart = this.options._start
  const runServer = this.options.dev || isGenerate || isStart

  // Port
  if (!options.port) {
    options.port = await getPort()
  }

  // Docs Dir
  if (!options.docsDir) {
    options.docsDir = this.options.dev
      ? join(this.options.srcDir, 'docs')
      : join(this.options.buildDir, 'docs')
  }

  // Clone repo
  if (!fs.existsSync(options.docsDir)) {
    logger.info(`Cloning nuxt/docs into ${options.docsDir}`)
    await degit('nuxt/docs', { force: true, cache: false }).clone(options.docsDir)
  }

  // Start server
  if (runServer) {
    await docsServer.start(options.docsDir, options.port)
    if (isGenerate) {
      // Add hook to close server after generate
      this.nuxt.hook('generate:done', () => docsServer.stop())
    }
  }

  // Add runtime plugin
  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options: {
      url: `http://localhost:${options.port}`
    }
  })

  // Hook generator to extract routes
  this.nuxt.hook('generate:before', async (generator) => {
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
