export default ({ store }) => {
  window.onNuxtReady(async () => {
    if (await adsBlocked()) {
      store.commit('setAdBlocked', true)
    }
  })
}

function adsBlocked() {
  return fetch(
    'https://codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical',
    {
      method: 'HEAD',
      mode: 'no-cors'
    }
  )
    .then(() => false)
    .catch(() => true)
}
