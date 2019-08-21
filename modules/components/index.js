
const { join, basename } = require('path')
const globby = require('globby')

export default async function () {
  const { options } = this.nuxt

  const dir = options.dir.components || 'components'
  const componentsDir = join(options.srcDir, dir)

  // Scan plugins/*.js
  let globalComponents = await globby('**/*.global.(vue|js)', {
    cwd: componentsDir,
    asbsolute: true,
    onlyFiles: true
  })
  // globalComponents = globalComponents.map(p => `~/${dir}/${p}`)

  // Resolve aliases
  // plugins = plugins.map(p => resolver.resolveAlias(p))

  // // Filter duplicates
  // plugins = plugins.filter((p) => {
  //   const found = options.plugins.find(_p => p === resolver.resolveAlias(_p.src || _p))
  //   return !found
  // })

  // Filter ignored (from .nuxtignore)
  // globalComponents = this.nuxt.builder.ignore.filter(plugins.map(p => relative(builder.ignore.rootDir, p)))
  // plugins = plugins.map(p => join(builder.ignore.rootDir, p))

  globalComponents = globalComponents.map((path) => {
    return {
      name: basename(path).replace(/\.global\.(vue|js)$/, ''),
      path: `~/${dir}/${path}`
    }
  })

  // console.log(globalComponents)

  this.addPlugin({
    src: join(__dirname, 'global-components.plugin.js'),
    options: {
      globalComponents
    }
  })

  // // Append plugins
  // options.plugins = [
  //   ...options.plugins,
  //   ...plugins
  // ]
}
