import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import registerApp from './global'
import '@/service'
import { setupState } from '@/store'

import 'normalize.css'
import '@/assets/css/index.less'

setupState()

const app = createApp(App)
app.use(router)
app.use(store)

registerApp(app)

app.mount('#app')
