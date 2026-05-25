import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import router from './router'

// 导入 Zijid UI
import ZijidUI from 'zijid-ui'
import 'zijid-ui/dist/style.css'

const app = createApp(App)

app.use(router)
app.use(ZijidUI)

app.mount('#app')
