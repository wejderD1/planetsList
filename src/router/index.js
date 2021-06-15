import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/planets/:id',
        name: 'id',
        component: () => import('@/components/PlanetCard.vue')
      }
    ]
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/Gallery.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '*', redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
