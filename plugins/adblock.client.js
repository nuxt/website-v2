<<<<<<< HEAD
export default ({ store }) => {
  window.onNuxtReady(async () => {
    if (await adsBlocked()) {
      store.commit('setAdBlocked', true)
    }
  })
}

function adsBlocked() {
  return fetch('https://cdn.carbonads.com/carbon.js?serve=CKYILK7U&placement=nuxtjsorg', {
    method: 'HEAD',
    mode: 'no-cors'
  })
    .then(() => false)
    .catch(() => true)
=======
import 'whatwg-fetch'

export default ({ store }) => {
  window.onNuxtReady(async () => {
    if (await adsBlocked()) store.commit('setAdBlocked', true)
  })
}

function adsBlocked(){
  return fetch('https://codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical', {
    method: 'HEAD',
    mode: 'no-cors'
  })
  .then(() => false)
  .catch(() => true)
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
}
