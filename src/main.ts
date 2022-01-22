import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import registerApp from './global'
import '@/service'
import { setupState } from '@/store'

import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
// 动态路由映射注册要早于app.use(router)
setupState()
app.use(store)
registerApp(app)
app.use(router)
app.mount('#app')
