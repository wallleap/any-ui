# Any-UI -- A simple UI library based on Vue 3 and Vite 4

[![GitHub license](https://img.shields.io/github/license/any86/any-ui)]()
[![GitHub stars](https://img.shields.io/github/stars/any86/any-ui)]()
[![GitHub issues](https://img.shields.io/github/issues/any86/any-ui)]()
[![GitHub forks](https://img.shields.io/github/forks/any86/any-ui)]()

## 介绍

Any-UI 是一个基于 Vue 3 和 Vite 4 的简单 UI 库，目前包含 10+ 个组件，后续会持续更新。

## 安装

```shell
# npm
npm install any-ui
# pnpm
pnpm add any-ui
```

## 使用

### 全局注册

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import AnyUI from 'any-ui'
import 'any-ui/lib/style.css'

const app = createApp(App)
app.use(AnyUI)
app.mount('#app')
```

其他页面中就可以直接使用组件了：

```html
<any-button>按钮</any-button>
```

### 按需引入

main.js 中提前引入样式：

```javascript
import 'any-ui/lib/style.css'
```

其他页面中按需引入组件：

```html
<script setup>
import { AnyButton } from 'any-ui'
</script>

<template>
  <AnyButton>按钮</AnyButton> <!-- 或者 <any-button>按钮</any-button> -->
</template>
```

## 组件

[组件文档](https://any86.github.io/any-ui/)

## 贡献

如果你在使用 Any-UI 时遇到问题，或者有好的建议，欢迎给我提 [Issue]()

## License

[MIT]()
