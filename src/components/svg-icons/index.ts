import { App } from 'vue'
import 'virtual:svg-icons-register'

export default {
  install(app: App, prefix?: string) {
    const componentPrefix = (prefix || 'svg') + '-icon'
    app.component(componentPrefix, import('./index.vue'))
  }
}


