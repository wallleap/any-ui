import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import './style.scss'
import App from './App.vue'
import routes from './routes'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
