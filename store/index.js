import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    version: '0.9.5',
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    _lang: 'en',
    lang: {},
    menu: {}
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    }
  },
  actions: {
    async nuxtServerInit ({ state }, { isDev }) {
      if (isDev) {
        state.apiURI = 'http://localhost:4000'
      }
      const resLang = await axios(state.apiURI + '/lang/' + state._lang)
      state.lang = resLang.data
      const resMenu = await axios(state.apiURI + '/menu/' + state._lang)
      state.menu = resMenu.data
    }
  }
})

export default store
