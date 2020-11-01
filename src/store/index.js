import Vue from 'vue'
import Vuex from 'vuex'
import TripService from '@/services/TripService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trips: []
  },
  mutations: {
    SET_TRIPS(state, trips) {
      state.trips = trips
    }
  },
  actions: {
    searchTrips({ commit }, searchArgs) {
      TripService.search(searchArgs).then(response => {
        console.log(response)
        commit('SET_TRIPS', response.data)
      })
    }
  },
  modules: {}
})
