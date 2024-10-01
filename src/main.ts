import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from "./App.vue"
import router from './router'
import { Utils } from '@/utils'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Utils)

app.mount('#app')
