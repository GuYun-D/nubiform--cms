import { getPageListData } from '@/service/main/system/system'
import { RootState } from '@/store/types'
import { Module } from 'vuex'
import type { SystemState, SystemPayload } from './types'
import { SystemMutations } from './types'
import type { UserInfo } from '@/service/main/system/types'

const systemModule: Module<SystemState, RootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
    }
  },

  mutations: {
    [SystemMutations.CHANGE_USER_COUNT](state, count: number) {
      state.userCount = count
    },

    [SystemMutations.CHANGE_USER_LIST](state, list: UserInfo[]) {
      state.userList = list
    },
  },

  actions: {
    async getPageListAction({ commit }, payload: SystemPayload) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )

      console.log(pageResult)

      const { list, totalCount } = pageResult.data

      commit(SystemMutations.CHANGE_USER_COUNT, totalCount)
      commit(SystemMutations.CHANGE_USER_LIST, list)
    },
  },
}

export default systemModule
