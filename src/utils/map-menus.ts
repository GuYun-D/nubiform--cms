import type { UserMenus } from '@/service/login/types'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 为main路由做重定向
 * 登陆进来之后是'main'没有对应的组件，在遍历所有菜单时赋值为第一个菜单组件，全局路由守卫中进行重定向
 */
let firstMenu: any = null

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

/**
 * 用于动态修改menu组件的default-active的值
 * 菜单栏的默认显示在刷新的时候显示的是死的active，使用该函数当active发生变化时动态修改active的值
 * @param userMenus 总的用户菜单
 * @param currentPath 当前路径下的url
 * @returns menu
 */
export function pathMapToMenu(
  userMenus: UserMenus[],
  currentPath: string
): UserMenus | undefined {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
