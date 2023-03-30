import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.css'


import { setupStore } from '@/store'
import { setupRouter } from '@/router'

function setupApp() {
  const app = createApp(App)
  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupApp()


