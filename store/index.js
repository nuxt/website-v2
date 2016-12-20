<<<<<<< HEAD
export const state = () => ({
  adBlocked: false
=======
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '0.9.0',
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
        state.lang = require('json-loader!static/docs/en/lang.json')
        state.menu = {
          guide: require('json-loader!static/docs/en/guide/menu.json'),
          api: require('json-loader!static/docs/en/api/menu.json'),
          examples: require('json-loader!static/docs/en/examples/menu.json')
        }
      }
    }
  }
>>>>>>> a439c1be (Update version to 0.9.0)
})

export const mutations = {
  setAdBlocked(state, value) {
    state.adBlocked = value
  }
}
