export default async function ({ $docs, env, req, store: { commit, state, dispatch }, redirect }) {
  // If state filled on server-side (to support spa fallback)
  if (state.filled) {
    return
  }
  commit('setLocale', env.LOCALE)
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
