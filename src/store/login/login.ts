import { Module } from 'vuex'
import type { LoginState } from './types'
import { LoginMutations } from './types'
import type { RootState } from '../types'
import router from '@/router'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId,
} from '@/service/login/login'
import type { Account, UserInfo, UserMenus } from '@/service/login/types'
import localCache from '@/utils/cache'
import { mapMenusToRoutes, mapMeunsToPermissions } from '@/utils/map-menus'

const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: [],
      permissions: [],
    }
  },

  mutations: {
    [LoginMutations.CHANGE_TOKEN](state, token: string) {
      state.token = token
    },

    [LoginMutations.CHANGE_USER_INFO](state, userInfo: UserInfo) {
      state.userInfo = userInfo
    },

    [LoginMutations.CHANGE_USER_MENUS](state, userMenus: UserMenus[]) {
      state.userMenus = userMenus

      // 路由映射
      const routes = mapMenusToRoutes(userMenus)

      // 将路由动态添加到路由中
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮的权限
      const permissions = mapMeunsToPermissions(userMenus)
      state.permissions = permissions
    },
  },

  actions: {
    async acountLoginAction({ commit }, paylload: Account) {
      // 登录逻辑
      const loginResult = await accountLoginRequest(paylload)
      const { id, token } = loginResult.data
      commit(LoginMutations.CHANGE_TOKEN, token)
      localCache.setCache('TOKEN', token)

      // 获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit(LoginMutations.CHANGE_USER_INFO, userInfo)
      localCache.setCache('USERINFO', userInfo)

      // 获取用户菜单树
      const userMenusResult = await requestUserMenuByRoleId(id)
      const userMenus = userMenusResult.data
      commit(LoginMutations.CHANGE_USER_MENUS, userMenus)
      localCache.setCache('USERMENUS', userMenus)

      // 跳转至首页
      router.push('/main')
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('TOKEN')
      if (token) {
        commit(LoginMutations.CHANGE_TOKEN, token)
      }

      const userInfo = localCache.getCache('USER_INFO')
      if (userInfo) {
        commit(LoginMutations.CHANGE_USER_INFO, userInfo)
      }

      const userMenus = localCache.getCache('USER_MENUS')
      if (userMenus) {
        commit(LoginMutations.CHANGE_USER_MENUS, userMenus)
      }
    },
  },
}

export default loginModule
