import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gifts from '../views/Gifts.vue'
import Attire from '../views/Attire.vue'
import Attractions from '../views/Attractions.vue'
import Accomodations from '../views/Accomodations.vue'
import PortAustin from '../views/PortAustin.vue'
import Caseville from '../views/Caseville.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gifts',
    name: 'Gifts',
    component: Gifts
  },
  {
    path: '/attire',
    name: 'Attire',
    component: Attire
  },
  {
    path: '/accomodations',
    name: 'Stay',
    component: Accomodations
  },
  {
    path: '/attractions',
    name: 'Fun Stuff',
    component: Attractions,
    children: [
      { path: '', component: PortAustin },
      { path: '/attractions/caseville', component: Caseville}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "exact-active"
})

export default router
