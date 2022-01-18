import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import LocalCache from '@/utils/cache'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('TOKEN')
    if (!token) {
      return '/login'
    }
  }
})

export default router
