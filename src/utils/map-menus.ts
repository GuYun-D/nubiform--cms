import { GYBreadcrumb } from '@/base-ui/breadcrumb'
import menu from '@/router/main/system/menu/menu'
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
 * 获取面包屑的数据
 * @param userMenus
 * @param currentPath
 * @returns 面包屑数据数组
 */
export function pathMapBreadcrumbToMenu(
  userMenus: UserMenus[],
  currentPath: string
): GYBreadcrumb[] {
  const breadcrumbs: GYBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
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
  currentPath: string,
  breadcrumbs?: GYBreadcrumb[]
): UserMenus | undefined {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({
          name: menu.name,
        })

        breadcrumbs?.push({
          name: findMenu.name,
        })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }

/**
 * 获取用户权限按钮
 * @param userMenus
 * @returns
 */
export function mapMeunsToPermissions(userMenus: any[]): string[] {
  const permissions: string[] = []

  const _recurseGetPermissions = function (menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermissions(userMenus)

  return permissions
}

/**
 * 用于获取角色的权限，用于编辑回显
 * 只设置叶子节点
 * @param menuList
 */
export function mapMenuLeafKeys(menuList: any[]): number[] {
  const leafKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)
  _recurseGetLeaf(menuList)
  return leafKeys
}
