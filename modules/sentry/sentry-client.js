/* global options:true */

import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven
  .config(`https://${options.public_key}@sentry.io/${options.project_id}`)
  .addPlugin(RavenVue, Vue)
  .install()
