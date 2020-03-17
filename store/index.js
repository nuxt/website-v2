export const state = () => ({
  filled: false,
  docVersion: '',
  ghVersion: '',
  visibleAffix: false,
  locale: 'en',
  lang: {},
  menu: {},
  homepage: {},
  adBlocked: false,
  focusMode: false
})

export const mutations = {
  toggle (state, key) {
    state[key] = !state[key]
  },
  setDocVersion (state, docVersion) {
    state.docVersion = docVersion
  },
  setGhVersion (state, ghVersion) {
    state.ghVersion = ghVersion
  },
  setLocale (state, locale) {
    state.locale = locale
  },
  setLang (state, lang) {
    state.lang = lang
  },
  setMenu (state, menu) {
    state.menu = menu
  },
  setHomepage (state, homepage) {
    state.homepage = homepage
  },
  setFilled (state) {
    state.filled = true
  },
  setAdBlocked (state, value) {
    state.adBlocked = value
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
  }
}
