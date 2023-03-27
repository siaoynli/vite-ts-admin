import { createApp } from 'vue'
import App from './App.vue'


import Icons from "@/icons/index"

const app = createApp(App);

app.use(Icons);

app.mount('#app')
