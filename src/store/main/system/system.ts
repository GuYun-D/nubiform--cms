import { getPageListData } from '@/service/main/system/system'
import { RootState } from '@/store/types'
import { Module } from 'vuex'
import type { SystemState, SystemPayload } from './types'
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
  },

  actions: {
    async getPageListAction({ commit }, payload: SystemPayload) {
      const pageUrl = `${payload.pageName}/list`
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      const { list, totalCount } = pageResult.data

      commit(`change${mutationsCase(payload.pageName)}Count`, totalCount)
      commit(`change${mutationsCase(payload.pageName)}List`, list)
    },
  },

  getters: {
    pageListData(state) {
      return (pageName: string) => {
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
