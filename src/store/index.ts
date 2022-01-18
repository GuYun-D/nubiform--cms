import { createStore } from 'vuex'
import login from './login/login'

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

export default store
