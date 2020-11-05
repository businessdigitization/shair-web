import Vue from 'vue'
import VueRouter from 'vue-router'
import Trips from '../views/Trips.vue'
import Parcels from '../views/Parcels.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Trips',
    component: Trips
  },
  {
    path: '/parcels',
    name: 'Parcels',
    component: Parcels
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
