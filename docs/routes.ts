import Home from './views/Home.vue'
import Docs from './views/Docs.vue'
import Intro from './views/children/Intro.vue'
import Install from './views/children/Install.vue'
import All from './views/children/All.vue'

// 使用默认导出，方便导入时重命名
// routes、menus
export default [
  { path: '/', name: 'home', component: Home },
  {
    path: '/docs',
    name: 'docs',
    component: Docs,
    redirect: '/docs/intro',
    children: [
      { path: 'intro', name: 'intro', component: Intro, meta: { title: '介绍', group: '开始', index: 1 } },
      { path: 'install', name: 'install', component: Install, meta: { title: '安装', group: '开始', index: 2 } },
      { path: 'all', name: 'all', component: All, meta: { title: '所有组件', group: '组件', index: 6 } },
    ]
  },
]