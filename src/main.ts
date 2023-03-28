import { createApp } from 'vue'
import App from './App.vue'


import SvgIcon from "@/components/icons"

const app = createApp(App);

app.use(SvgIcon);

app.mount('#app')
