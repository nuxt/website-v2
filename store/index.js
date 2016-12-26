import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '0.9.4',
    visibleHeader: false,
    visibleAffix: false
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    }
  },
  actions: {
    nuxtServerInit ({ state }, { req }) {
      if (!process.BROWSER) {
        state.lang = require('static/docs/en/lang.json')
        state.menu = {
          guide: require('static/docs/en/guide/menu.json'),
          api: require('static/docs/en/api/menu.json'),
          examples: require('static/docs/en/examples/menu.json')
        }
      }
    }
  }
})

export default store
