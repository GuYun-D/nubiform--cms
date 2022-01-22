import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue'),
  },
  {
    path: '/:pathMach(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/index.vue'),
  },
]

export default routes
