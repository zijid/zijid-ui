import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入 Zijid UI
import ZijidUI from 'zijid-ui'
import 'zijid-ui/styles/index.css'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(ZijidUI)

app.mount('#app')
