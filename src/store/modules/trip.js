import TripService from '@/services/TripService.js'

export default {
  namespaced: true,
  state: {
    trips: []
  },
  mutations: {
    SET_TRIPS(state, trips) {
      state.trips = trips
    }
  },
  actions: {
    search({ commit }, searchArgs) {
      TripService.search(searchArgs).then(response => {
        console.log(response)
        commit('SET_TRIPS', response.data)
      })
    }
  }
}
