import type { UserMenus } from '@/service/login/types'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 动态路由映射
 * 用户在登陆成功时，会根据用户的id获取用户的菜单列表，不同的用户权限不同，所以先创建的所有权限路由对象
 * 然后根据获取到的用户菜单列表进行路由的映射，加载对应的路由对象
 * @param userMenus 用户的菜单信息
 * @returns routes
 */
export function mapMenusToRoutes(userMenus: UserMenus[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先加载所有的路由对象
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    // key = ./analysis/dashboard/dishboard.ts
    // 导入路由对象
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 根据菜单获取需要添加的routes
  // 只有当type === 2时才进行路由映射，当type === 1时，遍历children
  const _recurseGetRoute = (menus: UserMenus[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
