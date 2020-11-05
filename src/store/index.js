import Vue from 'vue'
import Vuex from 'vuex'
import trip from '@/store/modules/trip.js'
import parcel from '@/store/modules/parcel.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    trip,
    parcel
  }
})
