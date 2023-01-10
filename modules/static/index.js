// Inspired by https://github.com/DreaMinder/nuxt-payload-extractor
// Credits to @DreMinder
const path = require('path')
const { writeFile, ensureDir } = require('fs-extra')

let extractPayload = function({ html, route }, windowNamespace){
  let chunks = html.split(`<script>window.${windowNamespace}=`)
  let pre = chunks[0]
  let payload = chunks[1].split('</script>').shift()
  let post = chunks[1].split('</script>').slice(1).join('</script>')
  let path = route === '/' ? '' : route

  return {
    html: pre + '<script defer src="' + path + '/payload.js"></script>' + post,
    payload
  }
}

let writePayload = async function (payload, dir, windowNamespace){
  // Make sure the directory exists
  await ensureDir(dir)

  // Write payload.js file
  await writeFile(path.resolve(dir, 'payload.js'), `window.${windowNamespace}=${payload}`, 'utf-8')

  // if routes are nested, ignore parent routs and extract last one
  const nuxtContext = eval('('+payload+')')
  const pageData = nuxtContext.data

  // Write payload.json (page data)
  await writeFile(path.resolve(dir, 'payload.json'), JSON.stringify(pageData), 'utf-8')
}

module.exports = function (moduleOptions) {
  const options = {
    blacklist: [],
    ...this.options.static,
    ...moduleOptions
  }

  this.nuxt.hook('generate:page', async page => {
    if (!this.nuxt.options.generate.subFolders) {
      throw new Error('generate.subFolders should be true for @nuxt/static')
    }
    if (options.blacklist.includes(page.route)) {
      return page
    }

    const windowNamespace = this.nuxt.options.globals.context(this.nuxt.options.globalName)
    let { html, payload } = extractPayload(page, windowNamespace)

    await writePayload(payload, path.join(this.nuxt.options.generate.dir, page.route), windowNamespace)
    page.html = html

    return page
  })

  // Add nuxt_static middleware
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js')
  })
  this.nuxt.options.router.middleware.push('nuxt_static')
}
