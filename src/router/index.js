import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shopTwo',
      name: 'shopTwo',
      component:() => import('@/views/shopTwo.vue'),
    },
    {
      path: '/shopThree',
      name: 'shopThree',
      component:() => import('@/views/shopThree.vue'),
    },
    {
      path: '/shopFour',
      name: 'shopFour',
      component:() => import('@/views/shopFour.vue'),
    },
  ]
})

export default router
