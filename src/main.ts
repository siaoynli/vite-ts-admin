import { createApp } from 'vue'
import App from './views/App.vue'

import * as RemixIcons from 'remix-icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(RemixIcons)) {
  app.component(key, component)
}

app.mount('#app')
