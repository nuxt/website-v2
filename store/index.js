import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    filled: false,
    docVersion: '',
    ghVersion: '',
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    locale: 'en',
    lang: {},
    menu: {}
  },
  mutations: {
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
    }
  }
})

export default store
