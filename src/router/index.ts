import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import SeriesDetailView from '@/views/SeriesDetailView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/favorites',
    name: 'Your favorites',
    component: FavoritesView
  },
  {
    path: '/series/:id',
    name: 'Detail serie',
    component: SeriesDetailView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
