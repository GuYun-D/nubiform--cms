import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import type { MyStore } from './types'
import { EntireDataMutations } from './types'
import { getPageListData } from '../service/main/system/system'

const store = createStore({
  state: () => {
    return {
      name: 'GuYun',
      entireDepartment: [],
      entireRole: [],
    }
  },

  mutations: {
    [EntireDataMutations.changeEntireDepartment](state, payload: any[]) {
      ;(state.entireDepartment as any[]) = payload
    },

    [EntireDataMutations.changeEntireRole](state, payload: any[]) {
      ;(state.entireRole as any[]) = payload
    },
  },

  actions: {
    async getInitialDataAction({ commit }) {
      const departmentListResult = await getPageListData('/department/list', {
        offset: 0,
        size: 100,
      })
      const { list: departmentList } = departmentListResult.data

      const roleListResult = await getPageListData('/role/list', {
        offset: 0,
        size: 100,
      })
      const { list: roleList } = roleListResult.data

      commit(EntireDataMutations.changeEntireDepartment, departmentList)
      commit(EntireDataMutations.changeEntireRole, roleList)
    },
  },

  modules: {
    login,
    system,
  },
})

export function setupState() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<MyStore> {
  return useVuexStore()
}

export default store
