import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'
import login from './login/login'
import type { MyStore } from './types'

const store = createStore({
  state: () => {
    return {
      name: 'GuYun',
    }
  },

  modules: {
    login,
  },
})

export function setupState() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<MyStore> {
  return useVuexStore()
}

export default store
