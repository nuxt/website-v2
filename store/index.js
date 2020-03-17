<<<<<<< HEAD
export const state = () => ({
  adBlocked: false
=======
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

<<<<<<< HEAD
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
=======
export const state = () => ({
  filled: false,
  docVersion: '',
  ghVersion: '',
  visibleHeader: false,
  visibleAffix: false,
  apiURI: 'https://docs.api.nuxtjs.org',
  locale: 'en',
  lang: {},
  menu: {},
  adBlocked: false
})

export const mutations = {
  toggle(state, key) {
    state[key] = !state[key]
  },
  setApiURI(state, apiURI) {
    state.apiURI = apiURI
  },
  setDocVersion(state, docVersion) {
    state.docVersion = docVersion
  },
  setGhVersion(state, ghVersion) {
    state.ghVersion = ghVersion
  },
  setLocale(state, locale) {
    state.locale = locale
  },
  setLang(state, lang) {
    state.lang = lang
  },
  setMenu(state, menu) {
    state.menu = menu
  },
  setFilled(state) {
    state.filled = true
  },
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
  setAdBlocked(state, value) {
    state.adBlocked = value
<<<<<<< HEAD
=======
  },
  setFocusMode (state, value) {
    state.focusMode = value
  }
}

let _focusTimeout = null

export const actions = {
  async getLangData ({ commit }, locale) {
    const lang = await this.$docs.get('/lang/' + locale)
    commit('setLang', lang)
    commit('setDocVersion', lang.docVersion)
    const menu = await this.$docs.get('/menu/' + locale)
    commit('setMenu', menu)
    const homepage = await this.$docs.get('/homepage/' + locale)
    commit('setHomepage', homepage)
  },
  focusMode ({ commit }) {
    if (_focusTimeout) {
      return
    }
    _focusTimeout = setTimeout(() => commit('setFocusMode', true), 1300)
  },
  clearFocusMode ({ commit }) {
    if (_focusTimeout) {
      clearTimeout(_focusTimeout)
      _focusTimeout = null
    }
    commit('setFocusMode', false)
>>>>>>> 1b87907b (feat: dark mode (#303))
  }
}
