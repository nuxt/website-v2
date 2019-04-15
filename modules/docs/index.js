const { join } = require('path')
const loadApi = require('./api')

module.exports = async function () {
  const handler = await loadApi(join(this.options.srcDir, 'docs'))

  this.addServerMiddleware({
    path: '/_api',
    handler
  })

  // We need to run the server in order to serve the docs when running `nuxt generate`
  this.nuxt.hook('generate:before', (g) => g.nuxt.server.listen())
  this.nuxt.hook('generate:done', (g) => g.nuxt.server.close())
}
