import { createApp } from 'vue'

import '@/styles/tailwind.css'
import SvgIconVue from '@/components/svg-icons/'
import App from './App.vue'
const app = createApp(App)

app.use(SvgIconVue)

app.mount('#app')
