const { join } = require('path')
const DocsServer = require('./server')
const logger = require('consola').withScope('docs/module')

module.exports = async function (moduleOptions) {
  const isDev = this.options.dev
  const isGenerate = this.options._generate
  const isStart = this.options._start
  const isBuild = this.options._build
  const runServer = isDev || isGenerate || isStart

  const options = {
    port: 3001,
    docsDir: join(isDev ? this.options.srcDir : this.options.buildDir, 'docs'),
    repo: 'nuxt/docs',
    watch: isDev,
    ...this.options.docs,
    ...moduleOptions
  }

  // Start docs server
  if (runServer) {
    const docsServer = new DocsServer(options)
    await docsServer.cloneRepo()
    await docsServer.init()
    await docsServer.listen()
    if (isGenerate) {
      this.nuxt.hook('generate:done', () => docsServer.close())
    }
  }

  if (isBuild) {
    // Add runtime plugin
    this.addPlugin({
      src: join(__dirname, 'plugin.js'),
      options: {
        url: `http://localhost:${options.port}`
      }
    })
  }

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

    // Profile generate
    const startTime = new Date()
    let count = 0
    this.nuxt.hook('generate:routeCreated', () => {
      count++
    })
    this.nuxt.hook('generate:done', () => {
      const time = (new Date() - startTime) / 1000
      const rps = count / time
      logger.info(`Generated ${count} routes in ${time} sec (${rps} r/s)`)
    })
  })
}
