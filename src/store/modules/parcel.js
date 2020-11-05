import ParcelService from '@/services/ParcelService.js'

export default {
  namespaced: true,
  state: {
    parcels: []
  },
  mutations: {
    SET_PARCELS(state, parcels) {
      state.parcels = parcels
    }
  },
  actions: {
    search({ commit }, searchArgs) {
      ParcelService.search(searchArgs).then(response => {
        console.log(response)
        commit('SET_PARCELS', response.data)
      })
    }
  },
  getters: {
    isLastParcel: state => parcel => {
      return state.parcels[state.parcels.length - 1] == parcel
    },
    itemsCategoryNames: state => parcel => {
      state
      const names = parcel.items.map(item => item.category.name)
      let unique_names = [...new Set(names)]
      if (unique_names.length == 1) {
        return unique_names[0]
      }

      return (
        unique_names.slice(0, unique_names.length - 1).join(', ') +
        ' and ' +
        unique_names.slice(-1)
      )
    }
  }
}
