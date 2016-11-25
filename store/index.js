import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    visibleHeader: false,
    visibleAffix: false,
    currentFile: null,
    currentFileContent: null
  },
  mutations: {
    toggle (state, key) {
      state[key] = !state[key]
    },
    updateFile (state, value) {
      state.currentFile = value
    },
    updateFileContent (state, value) {
      state.currentFileContent = value
    }
  },
  actions: {
    updateFileDatas ({ commit, state }, file) {
      commit('updateFile', file)
      // return axios({
      //   url: file.download_url,
      //   headers: {
      //     'Authorization': 'token 4aa6bcf919d238504e7db59a66d32e78281c0ad3'
      //   }
      // })
      // .then((res) => {
      //   console.log(res)
      //   commit('updateFileContent', res.data)
      // })
    },
    nuxtServerInit ({ state }, { req }) {
      if (!process.BROWSER) {
        state.guideMenu = require('json-loader!static/docs/guide/menu.json')
        state.examplesMenu = require('json-loader!static/docs/examples/menu.json')
      }
    }
  }
})

export default store
