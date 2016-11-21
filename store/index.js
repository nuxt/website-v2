import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    visibleHeader: false,
    visibleAffix: false
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    }
  }
})

export default store
