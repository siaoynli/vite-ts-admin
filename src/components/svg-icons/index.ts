import { App } from 'vue'
import 'virtual:svg-icons-register'
import SvgIcon from "./SvgIcon.vue"

export default {
  install(app: App, prefix?: string) {
    const componentPrefix = (prefix || "svg") + '-icon'
    app.component(componentPrefix, SvgIcon)
  }
}
