import { getPageListData, deletePageData } from '@/service/main/system/system'
import { RootState } from '@/store/types'
import { Module } from 'vuex'
import type { SystemState, SystemPayload, DeletePayload } from './types'
import type { UserInfo } from '@/service/main/system/types'
import { mutationsCase } from '../../../utils/mutationsCase'

const systemModule: Module<SystemState, RootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
    }
  },

  mutations: {
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },

    changeUsersList(state, list: UserInfo[]) {
      state.usersList = list
    },

    changeRoleList(state, list: any[]) {
      state.roleList = list
    },

    changeRoleCount(state, count: number) {
      state.roleCount = count
    },

    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },

    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },

    changeMenuList(state, list: any[]) {
      state.menuList = list
    },

    changeMenuCount(state, count: number) {
      state.menuCount = count
    },
  },

  actions: {
    async getPageListAction({ commit }, payload: SystemPayload) {
      const pageUrl = `${payload.pageName}/list`
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      commit(`change${mutationsCase(payload.pageName)}Count`, totalCount)
      commit(`change${mutationsCase(payload.pageName)}List`, list)
    },

    async deletePageDataAction({ dispatch }, payload: DeletePayload) {
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      await deletePageData(url)
      // 书信
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      })
    },
  },

  getters: {
    pageListData(state) {
      return (pageName: string) => {
        console.log(pageName)
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    },
  },
}

export default systemModule
