import { createApp } from 'vue'
import App from './App.vue'

import SvgIconVue from '@/components/svg-icons/'
import naive from 'naive-ui'
const app = createApp(App)

app.use(SvgIconVue)
app.use(naive)

app.mount('#app')
