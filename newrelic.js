'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['nuxtjs.org'],
  /**
   * Your New Relic license key.
   */
  license_key: process.env.NEWRELIC_KEY,
  logging: {
    enabled: false
  }
}
