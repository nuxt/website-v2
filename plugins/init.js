export default async function ({ $docs, isDev, env, req, store: { commit, state }, redirect }) {
  // If state filled on server-side (to support spa fallback)
  if (state.filled) {
    return
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
    const releases = await $docs.get('/releases')
    commit('setGhVersion', releases[0] ? releases[0].name : 'vX.Y.Z')
    const lang = await $docs.get('/lang/' + state.locale)
    commit('setLang', lang)
    commit('setDocVersion', lang.docVersion)
    const menu = await $docs.get('/menu/' + state.locale)
    commit('setMenu', menu)
    const homepage = await $docs.get('/homepage/' + state.locale)
    commit('setHomepage', homepage)
    commit('setFilled')
  } catch (e) {
    console.error('Error on filling the store, please run the docs server.') // eslint-disable-line no-console
    console.error(e) // eslint-disable-line no-console
  }
}
