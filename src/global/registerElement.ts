import type { App } from 'vue'
import 'element-plus/theme-chalk/index.css'

import { ElButton } from 'element-plus'

const components = [ElButton]

// 遍历components数组，进行element-plus标签全局注册
export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}