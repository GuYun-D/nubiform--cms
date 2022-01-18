import type { App } from 'vue'
import 'element-plus/theme-chalk/index.css'

import {
  ElButton,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElAvatar,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
} from 'element-plus'

const components = [
  ElButton,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElAvatar,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
]

// 遍历components数组，进行element-plus标签全局注册
export default function registerElement(app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
