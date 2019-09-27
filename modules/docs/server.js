const { promisify } = require('util')
const { resolve } = require('path')
const fs = require('fs')
const micro = require('micro')
const { send } = require('micro')
const fm = require('front-matter')
const fetch = require('node-fetch')
const glob = promisify(require('glob'))
const chokidar = require('chokidar')
const degit = require('degit')
const logger = require('consola').withScope('docs/server')
const { marked, partialRenderer } = require('./renderer')
const readFile = promisify(fs.readFile)

class DocsServer {
  constructor (options) {
    this.docsDir = options.docsDir || process.cwd()
    this.defaultLang = options.defaultLang || 'en'
    this.port = options.port || 3001
    this.repo = options.repo
    this.watch = options.watch

    this.releases = []
    this.docsFiles = {}
    this.menu = {}
    this.langs = {}
    this.homepage = {}

    this.server = null
  }

  // Initialize
  async init () {
    await Promise.all([
      this.getFiles(),
      this.getReleases()
    ])

    if (this.watch) {
      this.watchFiles(this.docsDir)
    }
  }

  // Start server
  async listen () {
    if (this.server) {
      return
    }

    this.server = micro((req, res) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      try {
        const data = this.get(req.url)
        send(res, 200, data)
      } catch (err) {
        send(res, 404, { message: err.message })
      }
    })

    this.server.listen = promisify(this.server.listen)
    this.server.close = promisify(this.server.close)

    await this.server.listen(this.port)

    this.server.url = `http://localhost:${this.port}`
    logger.success(`Docs server listening on \`${this.server.url}\``)
  }

  // Stop server
  async close () {
    if (!this.server) {
      return
    }

    logger.info(`Stopping docs server...`)
    await this.server.close()
    delete this.server
  }

  // Fetch releases
  async getReleases () {
    logger.info('Fetching releases...')
    const options = {}
    if (process.env.GITHUB_TOKEN) {
      options.headers = { 'Authorization': `token ${process.env.GITHUB_TOKEN}` }
    }
    try {
      const data = await fetch('https://api.github.com/repos/nuxt/nuxt.js/releases', options).then(res => res.json())
      this.releases = data.filter(r => !r.draft).map((release) => {
        return {
          name: release.name || release.tag_name,
          date: release.published_at,
          body: marked(release.body)
        }
      })
    } catch (e) {
      logger.error('Could not fetch nuxt.js release notes:', e.message)
    }
    const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
    this.releases.sort((a, b) => {
      const aMajorVersion = getMajorVersion(a)
      const bMajorVersion = getMajorVersion(b)
      if (aMajorVersion !== bMajorVersion) {
        return bMajorVersion - aMajorVersion
      }
      return new Date(b.date) - new Date(a.date)
    })
  }

  // Fetch doc and menu files
  async getFiles () {
    logger.info('Building files...')

    // Construct the doc menu
    await this.getMenu()

    // Construct the lang object
    await this.getLanguages()

    // Construct the homepage object
    await this.getHomepage()

    // Get all docs files
    await this.getDocFiles()
  }

  // Get all docs files
  async getDocFiles () {
    const docPaths = await this.glob('*/**/*.md')
    await Promise.all(docPaths.map(path => this.getDocFile(path)))
  }

  // Get doc file and sent back it's attributes and html body
  async getDocFile (path, parseOptions, useCache = true) {
    if (this.docsFiles[path] && useCache) {
      return this.docsFiles[path]
    }

    // Read file
    let file = await readFile(resolve(this.docsDir, path), 'utf-8')

    // Transform markdown to html
    file = fm(file)

    this.docsFiles[path] = {
      attrs: file.attributes,
      body: marked(file.body, parseOptions)
    }

    return this.docsFiles[path]
  }

  // Get menu files and create the doc menu
  async getMenu () {
    logger.info('Building menu...')

    const menuPaths = await this.glob('*/**/menu.json')

    const menu = {}

    await Promise.all(menuPaths.map(async (path) => {
      const keys = path.split('/').slice(0, -1)
      const lastKey = keys.pop()

      let pathMenu = menu
      for (const key of keys) {
        pathMenu[key] = pathMenu[key] || {}
        pathMenu = pathMenu[key]
      }

      const fileContent = await readFile(resolve(this.docsDir, path), 'utf-8')
      pathMenu[lastKey] = JSON.parse(fileContent)
    }))

    this.menu = menu
  }

  // Get lang files and create the lang object
  async getLanguages () {
    logger.info('Building languages...')

    const langPaths = await this.glob('*/lang.json')

    const langs = {}

    await Promise.all(langPaths.map(async (path) => {
      const lang = path.split('/')[0]
      const fileContent = await readFile(resolve(this.docsDir, path), 'utf-8')
      langs[lang] = JSON.parse(fileContent)
    }))

    this.langs = langs
  }

  // Get homepage files and create the homepage object
  async getHomepage () {
    logger.info('Building homepage...')

    const homepagePaths = await this.glob('*/homepage/*.md')

    const homepage = {}

    await Promise.all(homepagePaths.map(async (path) => {
      const lang = path.split('/')[0]
      // const homepage = path.split('/')[1]
      const part = path.split('/')[2].replace(/.md$/, '')
      const file = await this.getDocFile(path, { renderer: partialRenderer })
      if (!homepage[lang]) {
        homepage[lang] = {}
      }
      homepage[lang][part] = file
    }))

    // Copy fallback resource from defaultLang: en
    // Target check uses this.langs, */lang.json
    for (const lang in this.langs) {
      if (lang === this.defaultLang) {
        continue
      }
      for (const part in homepage[this.defaultLang]) {
        if (!homepage[lang]) {
          homepage[lang] = {}
        }
        if (!homepage[lang][part]) {
          homepage[lang][part] = homepage[this.defaultLang][part]
          homepage[lang][part].attrs.fallback = true
        }
      }
    }

    this.homepage = homepage
  }

  // watch file changes
  watchFiles (cwd) {
    logger.info('Watching files changes...')

    const options = {
      cwd,
      ignoreInitial: true,
      ignored: 'node_modules/**/*'
    }

    // Doc Pages
    chokidar.watch('*/**/*.md', options)
      .on('add', path => this.getDocFile(path, null, false))
      .on('change', path => this.getDocFile(path, null, false))
      .on('unlink', path => delete this.docsFiles[path])

    // Menu
    chokidar.watch('*/**/menu.json', options)
      .on('add', () => this.getMenu())
      .on('change', () => this.getMenu())
      .on('unlink', () => this.getMenu())

    // Lang
    chokidar.watch('*/lang.json', options)
      .on('add', () => this.getLanguages())
      .on('change', () => this.getLanguages())
      .on('unlink', () => this.getLanguages())

    // Homepage
    chokidar.watch('*/homepage/*.md', options)
      .on('add', () => this.getHomepage())
      .on('change', () => this.getHomepage())
      .on('unlink', () => this.getHomepage())
  }

  // Server handle request method
  get (url) {
    // Releases
    if (url === '/releases') {
      return this.releases
    }

    // Menu
    if (url.indexOf('/menu') === 0) {
      const lang = url.split('/')[2]
      const category = url.split('/')[3]

      if (lang && category && this.menu[lang] && this.menu[lang][category]) {
        return this.menu[lang][category]
      }

      if (lang && this.menu[lang]) {
        return this.menu[lang]
      }

      if (lang) {
        throw new Error('Language not found')
      }

      return this.menu
    }

    // Lang
    if (url.indexOf('/lang') === 0) {
      const lang = url.split('/')[2]

      if (lang && this.langs[lang]) {
        return this.langs[lang]
      }

      if (lang) {
        throw new Error('Language not found')
      }

      return this.langs
    }
    // Homepage
    if (url.indexOf('/homepage') === 0) {
      const lang = url.split('/')[2]

      if (lang && this.homepage[lang]) {
        return this.homepage[lang]
      }

      if (lang) {
        throw new Error('Language not found')
      }

      return this.homepage
    }

    // Remove first /
    const path = url.slice(1) + '.md'
    const lang = path.slice(0, 2)

    // Check if path exists
    let doc = this.docsFiles[path]
    const isInvalid = !doc || (!doc.body && !Object.keys(doc.attrs).length)
    if (isInvalid && lang !== 'en') {
      // Check fallback for EN
      doc = this.docsFiles['en' + path.slice(2)]
      if (!doc) {
        throw new Error('File not found')
      }
      doc.langFallback = true
    }

    // Send back doc content
    return doc
  }

  // Glob util
  glob (pattern) {
    return glob(pattern, {
      cwd: this.docsDir,
      ignore: 'node_modules/**/*',
      nodir: true
    })
  }

  // Clone repository
  async cloneRepo () {
    if (fs.existsSync(this.docsDir)) {
      return
    }
    logger.info(`Cloning ${this.repo} into ${this.docsDir}`)
    await degit(this.repo, { force: true, cache: false }).clone(this.docsDir)
  }
}

module.exports = DocsServer
