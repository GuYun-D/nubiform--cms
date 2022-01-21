import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import LocalCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

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

  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
