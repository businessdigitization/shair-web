import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tripSearchArgs: {}
  },
  mutations: {
    SET_ORIGIN_CODE(state, code) {
      state.tripSearchArgs.originCode = code
    },
    SET_DESTINATION_CODE(state, code) {
      state.tripSearchArgs.destinationCode = code
    }
  },
  actions: {},
  modules: {}
})
