import { App } from 'vue'
import 'virtual:svg-icons-register'

export default {
  install(app: App<Element>) {
    app.component('svg-icon', import('./SvgIcon.vue'))
  }
}
