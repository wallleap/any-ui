# 开始使用

## 安装

```bash
# use npm
npm install any-ui
# use yarn
yarn add any-ui
# use pnpm
pnpm add any-ui
```

## 使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import AnyUI from 'any-ui'
import 'any-ui/dist/any-ui.css'

createApp(App).use(AnyUI).mount('#app')
```

## 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from 'any-ui'
import 'any-ui/dist/any-ui.css'

createApp(App).use(Button).mount('#app')
```

## CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/any-ui/dist/any-ui.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/any-ui"></script>
```

## 浏览器支持

现代浏览器和 IE11 及以上（需要 polyfill）

## 贡献

如果你在使用 any-ui 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/wallleap/any-ui/issues) 或 [Pull Request](https://github.com/wallleap/any-ui/pulls)。

## 开发

```bash
# 克隆项目
git clone
# 安装依赖
pnpm install
# 启动服务
pnpm run dev
```

## 相关链接

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Jest](https://jestjs.io/)
- [Vue Test Utils](https://next.vue-test-utils.vuejs.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PostCSS](https://postcss.org/)
- [Tailwind CSS](https://tailwindcss.com/)
