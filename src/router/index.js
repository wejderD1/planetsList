import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/planets',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: ':id',
        name: 'Id',
        component: () => import('@/components/PlanetCard.vue')
      }
    ]
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Gallery.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
