const { promisify } = require('util')
const { resolve } = require('path')
const fs = require('fs')

const micro = require('micro')
const { send } = require('micro')
const axios = require('axios')
const marked = require('marked')
const highlightjs = require('highlight.js')
const fm = require('front-matter')
const consola = require('consola')
const octicon = require('octicons')

const glob = promisify(require('glob'))
const readFile = promisify(fs.readFile)

const defaultLang = 'en'

// Use highlight.js for code blocks
const renderer = new marked.Renderer()
renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language))
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
}
renderer.heading = (text, level) => {
  const patt = /\s?{([^}]+)}$/
  let link = patt.exec(text)

  if (link && link.length && link[1]) {
    text = text.replace(patt, '')
    link = link[1]
  } else {
    link = text.toLowerCase().replace(/[^\wА-яіІїЇєЄ\u4e00-\u9eff一-龠ぁ-ゔァ-ヴー々〆〤\u3130-\u318F\uAC00-\uD7AF]+/gi, '-')
  }
  return '<h' + level + '>' +
    '<a id="' + link + '" class="anchor" aria-hidden="true" href="#' + link + '">' +
      octicon.link.toSVG() +
    '</a>' + text + '</h' + level + '>'
}
marked.setOptions({ renderer })

// Partial renderer for homepage object
const partialRenderer = new marked.Renderer()
partialRenderer.paragraph = (text) => {
  return text + '<br>'
}

// Fetch releases
let RELEASES = []

const getReleases = async () => {
  consola.info('Fetching releases...')
  const options = { url: 'https://api.github.com/repos/nuxt/nuxt.js/releases' }
  if (process.env.GITHUB_TOKEN) {
    options.headers = { 'Authorization': `token ${process.env.GITHUB_TOKEN}` }
  }
  try {
    const res = await axios(options)
    RELEASES = res.data.filter(r => !r.draft).map((release) => {
      return {
        name: release.name,
        date: release.published_at,
        body: marked(release.body)
      }
    })
  } catch (e) {
    consola.error('Could not fetch nuxt.js release notes.')
  }
  const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
  RELEASES.sort((a, b) => {
    const aMajorVersion = getMajorVersion(a)
    const bMajorVersion = getMajorVersion(b)
    if (aMajorVersion !== bMajorVersion) {
      return bMajorVersion - aMajorVersion
    }
    return new Date(b.date) - new Date(a.date)
  })
}

// Fetch doc and menu files
let _DOC_FILES_ = {}

async function getFiles(cwd) {
  consola.info('Building files...')
  cwd = cwd || process.cwd()
  const docPaths = await glob('*/**/*.md', {
    cwd: cwd,
    ignore: 'node_modules/**/*',
    nodir: true
  })

  const promises = []
  const tmpDocFiles = {}
  docPaths.forEach((path) => {
    const promise = getDocFile(path, cwd)
    promise.then((file) => {
      tmpDocFiles[path] = file
    })
    promises.push(promise)
  })

  await Promise.all(promises)
  _DOC_FILES_ = tmpDocFiles
  // Construct the doc menu
  await getMenu(cwd)
  // Construct the lang object
  await getLanguages(cwd)
  // Construct the homepage object
  await getHomepage(cwd)
}

// Get doc file and sent back it's attributes and html body
async function getDocFile(path, cwd, parseOptions) {
  cwd = cwd || process.cwd()
  let file = await readFile(resolve(cwd, path), 'utf-8')
  // transform markdown to html
  file = fm(file)
  _DOC_FILES_[path] = {
    attrs: file.attributes,
    body: marked(file.body, parseOptions)
  }
  return _DOC_FILES_[path]
}

// Get menu files and create the doc menu
let _MENU_ = {}

async function getMenu(cwd) {
  consola.info('Building menu...')
  cwd = cwd || process.cwd()
  const menuPaths = await glob('*/**/menu.json', {
    cwd: cwd,
    ignore: 'node_modules/**/*',
    nodir: true
  })
  const tmpMenu = {}
  const promises = []
  menuPaths.forEach((path) => {
    let menu = tmpMenu
    const keys = path.split('/').slice(0, -1)
    keys.forEach((key, i) => {
      if ((i + 1) === keys.length) {
        const promise = readFile(resolve(cwd, path), 'utf-8')
        promise.then((fileContent) => {
          menu[key] = JSON.parse(fileContent)
        }).catch((e) => { consola.error(e, path) })
        promises.push(promise)
        return
      }
      menu[key] = menu[key] || {}
      menu = menu[key]
    })
  })
  await Promise.all(promises)
  _MENU_ = tmpMenu
}

// Get lang files and create the lang object
let _LANG_ = {}

async function getLanguages(cwd) {
  consola.info('Building languages...')
  cwd = cwd || process.cwd()
  const langPaths = await glob('*/lang.json', {
    cwd: cwd,
    ignore: 'node_modules/**/*',
    nodir: true
  })
  const tmpLang = {}
  const promises = []
  langPaths.forEach((path) => {
    const lang = path.split('/')[0]
    const promise = readFile(resolve(cwd, path), 'utf-8')
    promise.then((fileContent) => {
      tmpLang[lang] = JSON.parse(fileContent)
    })
    promises.push(promise)
  })
  await Promise.all(promises)
  _LANG_ = tmpLang
}

// Get homepage files and create the homepage object
let _HOMEPAGE_ = {}

async function getHomepage(cwd) {
  consola.info('Building homepage object...')
  cwd = cwd || process.cwd()
  const homepagePaths = await glob('*/homepage/*.md', {
    cwd: cwd,
    ignore: 'node_modules/**/*',
    nodir: true
  })
  const tmpHomepage = {}
  const promises = []
  homepagePaths.forEach((path) => {
    const lang = path.split('/')[0]
    const homepage = path.split('/')[1]
    const part = path.split('/')[2].replace(/.md$/, '')
    const parseOptions = {
      renderer: partialRenderer
    }
    const promise = getDocFile(path, cwd, parseOptions)
    promise.then((file) => {
      if (!tmpHomepage[lang]) {
        tmpHomepage[lang] = {}
      }
      tmpHomepage[lang][part] = file
    })
    promises.push(promise)
  })
  await Promise.all(promises)

  // Copy fallback resource from defaultLang: en
  // Target check uses _LANG_, */lang.json
  Object.keys(_LANG_).map((lang) => {
    Object.keys(tmpHomepage[defaultLang]).map((part) => {
      if (!tmpHomepage[lang]) {
        tmpHomepage[lang] = {}
      }
      if (!tmpHomepage[lang][part]) {
        tmpHomepage[lang][part] = tmpHomepage[defaultLang][part]
        tmpHomepage[lang][part]['attrs']['fallback'] = true
      }
    })
  })

  _HOMEPAGE_ = tmpHomepage
}

// watch file changes
function watchFiles(cwd) {
  consola.info('Watch files changes...')
  const options = {
    cwd: cwd,
    ignoreInitial: true,
    ignored: 'node_modules/**/*'
  }
  const chokidar = require('chokidar')
  // Doc Pages
  chokidar.watch('*/**/*.md', options)
    .on('add', path => getDocFile(path, cwd))
    .on('change', path => getDocFile(path, cwd))
    .on('unlink', path => delete _DOC_FILES_[path])
  // Menu
  chokidar.watch('*/**/menu.json', options)
    .on('add', () => getMenu(cwd))
    .on('change', () => getMenu(cwd))
    .on('unlink', () => getMenu(cwd))
  // Lang
  chokidar.watch('*/lang.json', options)
    .on('add', () => getLanguages(cwd))
    .on('change', () => getLanguages(cwd))
    .on('unlink', () => getLanguages(cwd))
  // Homepage
  chokidar.watch('*/homepage/*.md', options)
    .on('add', () => getHomepage(cwd))
    .on('change', () => getHomepage(cwd))
    .on('unlink', () => getHomepage(cwd))
}

// Server handle request method
const get = function (url) {
    // Releases
  if (url === '/releases') {
    return RELEASES
  }
  // Menu
  if (url.indexOf('/menu') === 0) {
    const lang = url.split('/')[2]
    const category = url.split('/')[3]
    if (lang && category && _MENU_[lang] && _MENU_[lang][category]) {
      return _MENU_[lang][category]
    }

    if (lang && _MENU_[lang]) {
      return _MENU_[lang]
    }

    if (lang) {
      throw new Error('Language not found')
    }

    return _MENU_
  }
  // Lang
  if (url.indexOf('/lang') === 0) {
    const lang = url.split('/')[2]
    if (lang && _LANG_[lang]) {
      return _LANG_[lang]
    }

    if (lang) {
      throw new Error('Language not found')
    }

    return _LANG_
  }
  // Homepgae
  if (url.indexOf('/homepage') === 0) {
    const lang = url.split('/')[2]
    if (lang && _HOMEPAGE_[lang]) {
      return _HOMEPAGE_[lang]
    }

    if (lang) {
      throw new Error('Language not found')
    }

    return _HOMEPAGE_
  }

  // remove first /
  const path = url.slice(1) + '.md'
  // Check if path exists

  if (!_DOC_FILES_[path]) {
    throw new Error('File not found')
  }
  // Send back doc content
  return _DOC_FILES_[path]
}

module.exports = async function startDocsServer(cwd, port) {
  await getFiles(cwd)
  await getReleases()
  if (process.env.NODE_ENV !== 'production') {
    watchFiles(cwd)
  }

  const server = micro(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    try {
      const data = get(req.url)
      send(res, 200, data)
    } catch(err) {
      send(res, 404, err.message)
    }
  })
  server.listen(port)

  return server
}
