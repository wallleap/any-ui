import Home from './views/Home.vue'
import Guide from './views/Guide.vue'

// 使用默认导出，方便导入时重命名
// routes、menus
export default [
  { path: '/', name: 'home', component: Home },
  { path: '/guide', name: 'guide', component: Guide },
]