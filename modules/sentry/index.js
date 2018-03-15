const Raven = require('raven')
const path = require('path')

// Sentry module made by @DiederikvandenB
// https://github.com/nuxt/nuxt.js/issues/1688#issuecomment-336846213

module.exports = function sentryErrorMiddleware(options) {
  if (!options.project_id || !options.private_key || !options.public_key) {
    return console.warn('Sentry is disabled (no valid configuration given)') // eslint-disable-line no-console
  }
  // Setup raven
  Raven.config(`https://${options.public_key}:${options.private_key}@sentry.io/${options.project_id}`).install()

  // Register the client plugin
  this.addPlugin({ src: path.resolve(__dirname, 'sentry-client.js'), options })

  // Hook in to Nuxt renderer
  this.nuxt.hook('renderer', (renderer) => {
    renderer.app.use(Raven.requestHandler())

    // Grab Nuxt's original error middleware and overwrite it with our own
    const nuxtErrorMiddleware = renderer.errorMiddleware
    renderer.errorMiddleware = (err, req, res, next) => {
      // Log the error
      res.sentry = Raven.captureException(err, { req })

      // Call Nuxt's original error middleware
      nuxtErrorMiddleware.call(renderer, err, req, res, next)
    }
  })
}
