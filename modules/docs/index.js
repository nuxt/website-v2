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
}
