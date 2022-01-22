import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import type { MyStore } from './types'

const store = createStore({
  state: () => {
    return {
      name: 'GuYun',
    }
  },

  modules: {
    login,
    system,
  },
})

export function setupState() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<MyStore> {
  return useVuexStore()
}

export default store
