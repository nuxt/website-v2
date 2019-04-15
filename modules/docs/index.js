const { join } = require('path')
const getPort = require('get-port')
const startDocsServer = require('./server')

const startServer = async function (srcDir, port) {
  const server = await startDocsServer(join(srcDir, 'docs'), port)

  console.log(`Docs server listening on ws://localhost:${port}`)
  return server
}

module.exports = async function () {
  const port = await getPort()
  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    options: {
      url: `ws://localhost:${port}`
    }
  })

  this.nuxt.hook('listen', () => startServer(this.options.srcDir, port))
  // We need to run the server in order to serve the docs when running `nuxt generate`
  this.nuxt.hook('generate:before', async () => {
    const server = await startServer(this.options.srcDir, port)

    this.nuxt.hook('generate:done', () => {
      return new Promise((resolve) => {
        console.log(`Stopping docs server...`)
        server.close(resolve)
      })
    })
  })
}
