import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/global.css'


import { setupStore } from './store'

function setupApp() {
  const app = createApp(App)
  setupStore(app)

  app.mount('#app')
}

setupApp()


