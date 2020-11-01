import Vue from 'vue'
import Vuex from 'vuex'
import trip from '@/store/modules/trip.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    trip
  }
})
