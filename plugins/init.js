export default async function ({ $docs, isDev, env, req, app, store: { commit, state, dispatch }, redirect }) {
  // If state filled on server-side (to support spa fallback)
  if (state.filled) {
    return
  }
  // If SSR
  if (req) {
    const hostParts = (req.headers.host || '').replace('.org', '').split('.')
    // If url like ja.nuxtjs.org
    if (hostParts.length === 2) {
      if (hostParts[0] === 'www') { return redirect(301, 'https://nuxtjs.org' + req.url) }

      if (isDev) {
        commit('setLocale', hostParts[0])
      }
    }
  } else {
    // Used with nuxt generate
    commit('setLocale', env.LOCALE)
  }
  try {
    const releases = await $docs.get('/releases')
    commit('setGhVersion', releases[0] ? releases[0].name : 'vX.Y.Z')
    await dispatch('getLangData', state.locale)
    commit('setFilled')
  } catch (e) {
    console.error('Error on filling the store, please run the docs server.') // eslint-disable-line no-console
    console.error(e) // eslint-disable-line no-console
  }
}
