import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    docVersion: '',
    ghVersion: '',
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    locale: 'en',
    lang: {},
    menu: {},
    contributors: {}
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
    setContributors(state, { docPath, contributors }) {
      Vue.set(state.contributors, docPath, contributors)
    }
  },
  actions: {
    async nuxtServerInit({ state, commit }, { isDev, req, redirect }) {
      if (isDev) {
        commit('setApiURI', 'http://localhost:4000')
      }
      const hostParts = (req.headers.host || '').replace('.org', '').split('.')
      // If url like ja.nuxtjs.org
      if (hostParts.length === 2) {
        if (hostParts[0] === 'www') return redirect(301, 'https://nuxtjs.org' + req.url)
        commit('setLocale', hostParts[0])
      }
      try {
        const resReleases = await axios(state.apiURI + '/releases')
        commit('setGhVersion', resReleases.data[0].name)
        const resLang = await axios(state.apiURI + '/lang/' + state.locale)
        commit('setLang', resLang.data)
        commit('setDocVersion', resLang.data.docVersion)
        const resMenu = await axios(state.apiURI + '/menu/' + state.locale)
        commit('setMenu', resMenu.data)
        const resContributors = await axios(state.apiURI + '/contributors/' + state.locale)
        commit('setContributors', resContributors.data)
      } catch (e) {
        console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
      }
    },
    async fetchContributors({ commit }, { docPath }) {
      const perPage = 100
      const githubClient = axios.create({ baseURL: 'https://api.github.com' })

      let commitDataArray = []
      for (let page = 0; page < 10; page++) {
        let res = await githubClient.get(`/repos/nuxt/docs/commits?path=${docPath}&per_page=${String(perPage)}&page=${String(page)}`)
        commitDataArray = commitDataArray.concat(res.data)
        if (!res.headers.link || !res.headers.link.match(/rel="next"/)) {
          break
        }
      }

      const committers = commitDataArray.map((commitData) => {
        if (commitData.committer) {
          return commitData.committer.login
        } else {
          return null
        }
      }).filter(committer => committer)

      const contributors = committers.reduce((accumulator, committer) => {
        accumulator.push({ userName: committer, commits: 1 })
        return accumulator
      }, [])

      commit('setContributors', { docPath, contributors })
    }
  }
})

export default store
