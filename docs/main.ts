import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import './style.scss'
import 'github-markdown-css'
import 'prismjs/themes/prism-tomorrow.min.css'
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
