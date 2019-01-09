import axios from 'axios'

export default async function ({ isDev, env, req, store: { commit, state }, redirect }) {
  // If state filled on server-side (to support spa fallback)
  if (state.filled) {
    return
  }
  if (isDev) {
    commit('setApiURI', 'http://localhost:4000')
  }
  // If SSR
  if (req) {
    const hostParts = (req.headers.host || '').replace('.org', '').split('.')
    // If url like ja.nuxtjs.org
    if (hostParts.length === 2) {
      if (hostParts[0] === 'www') return redirect(301, 'https://nuxtjs.org' + req.url)

      if (isDev) {
        commit('setLocale', hostParts[0])
      }
    }
  } else {
    // Used with nuxt generate
    commit('setLocale', env.locale)
  }
  try {
    const resReleases = await axios(state.apiURI + '/releases')
    commit('setGhVersion', resReleases.data[0] ? resReleases.data[0].name : 'vX.Y.Z')
    const resLang = await axios(state.apiURI + '/lang/' + state.locale)
    commit('setLang', resLang.data)
    commit('setDocVersion', resLang.data.docVersion)
    const resMenu = await axios(state.apiURI + '/menu/' + state.locale)
    commit('setMenu', resMenu.data)
    commit('setFilled')
  } catch (e) {
    console.error('Error on filling the store, please run the docs server.') // eslint-disable-line no-console
    console.error(e) // eslint-disable-line no-console
  }
}
