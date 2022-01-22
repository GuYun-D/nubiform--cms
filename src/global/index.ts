import { App } from 'vue'
import registerElement from './registerElement'
import registerProperities from './registerProperites'

export default function registerApp(app: App) {
  registerElement(app)
  registerProperities(app)
}
