import { createApp } from 'vue'
import App from './App.vue'

import SvgIconVue from '@/components/svg-icons/'

const app = createApp(App)

app.use(SvgIconVue)

app.mount('#app')
