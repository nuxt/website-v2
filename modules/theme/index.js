import path from 'path'
import { readFileSync } from 'fs'
import defu from 'defu'
import { template } from 'lodash'

const defaults = {
  default: 'system',
  cookie: {
    key: 'nuxt-theme',
    options: {
      path: '/'
    }
  }
}

export default function (moduleOptions) {
  // defu(object, defaults)
  const options = defu({
    ...this.options.theme,
    ...moduleOptions
  }, defaults)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })

  let script = readFileSync(path.resolve(__dirname, 'script.js'), 'utf-8')
  script = template(script)({ options })
  this.options.head.script = this.options.head.script || []
  this.options.head.script.push({
    hid: 'nuxt-theme-script',
    innerHTML: script,
    pbody: true
  })
  this.options.head.__dangerouslyDisableSanitizersByTagID = this.options.head.__dangerouslyDisableSanitizersByTagID || {}
  this.options.head.__dangerouslyDisableSanitizersByTagID['nuxt-theme-script'] = ['innerHTML']
}
