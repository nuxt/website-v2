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
        state.guideMenu = require('json-loader!static/docs/guide/menu.json')
        state.apiMenu = require('json-loader!static/docs/api/menu.json')
        state.examplesMenu = require('json-loader!static/docs/examples/menu.json')
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
