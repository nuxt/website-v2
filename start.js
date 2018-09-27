// New Relic
if (process.env.NEWRELIC_KEY) require('newrelic')
else console.warn('New Relic is disabled (process.env.NEWRELIC_KEY not found)') // eslint-disable-line no-console
// Modules
const express = require('express')
const { existsSync } = require('fs')
const { resolve } = require('path')
const { Nuxt } = require('nuxt')

const options = require('./nuxt.config')
// Force production mode (no webpack middleware called)
options.dev = false
// Add Timber logging middleware
if (process.env.TIMBER_KEY) {
  const timber = require('timber')
  const transport = new timber.transports.HTTPS(process.env.TIMBER_KEY)
  timber.install(transport)
  if (!options.serverMiddleware) options.serverMiddleware = []
  const timberMiddleware = express()
  timberMiddleware.use(timber.middlewares.express())
  options.serverMiddleware.push({ path: '/', handler: timberMiddleware })
} else {
  console.warn('Timber.io is disabled (process.env.TIMBER_KEY not found)') // eslint-disable-line no-console
}

// Start Nuxt.js
const nuxt = new Nuxt(options)
// Check if project is built for production
const distDir = resolve(nuxt.options.rootDir, nuxt.options.buildDir || '.nuxt', 'dist')
if (!existsSync(distDir)) {
  console.error('> No build files found, please run `nuxt build` before launching `npm start`') // eslint-disable-line no-console
  process.exit(1)
}

const port = process.env.PORT || process.env.npm_package_config_nuxt_port
const host = process.env.HOST || process.env.npm_package_config_nuxt_host

nuxt.listen(port, host)
