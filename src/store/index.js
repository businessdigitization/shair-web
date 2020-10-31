import Vue from 'vue'
import Vuex from 'vuex'
import TripService from '@/services/TripService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tripSearchArgs: {}
  },
  mutations: {
    SET_DESTINATION_CODE(state, searchArgs) {
      state.tripSearchArgs = searchArgs
    }
  },
  actions: {
    searchTrips({ commit }, searchArgs) {
      commit('SET_DESTINATION_CODE', searchArgs)
      TripService.tripSearch(searchArgs).then(response => {
        console.log(response)
      })
    }
  },
  modules: {}
})
