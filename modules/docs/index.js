const { join } = require('path')
const logger = require('consola').withScope('docs/module')
const DocsServer = require('./server')

module.exports = async function (moduleOptions) {
  const isDev = this.options.dev
  const isBuild = this.options._build
  const runServer = isDev || !isBuild

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
    this.nuxt.hook('generate:done', () => docsServer.close())
    this.nuxt.hook('close', () => docsServer.close())
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
}
