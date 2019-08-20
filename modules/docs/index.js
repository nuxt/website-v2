const { join } = require('path')
const DocsServer = require('./server')

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

  // Initialize docsServer
  const docsServer = new DocsServer(options)
  await docsServer.cloneRepo()
  await docsServer.init()

  // Read lang meta and update PWA manifest
  const { locale } = this.options.env
  const lang = require(join(options.docsDir, locale, 'lang.json'))
  this.options.manifest.description = lang.homepage.meta.description

  // Start docs server
  if (runServer) {
    await docsServer.listen()
    if (isGenerate) {
      this.nuxt.hook('generate:done', () => docsServer.close())
    } else {
      this.nuxt.hook('close', () => docsServer.close())
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
