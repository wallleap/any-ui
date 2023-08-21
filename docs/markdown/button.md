# 按钮

主要用于即时操作，表示交互时发生的动作，响应用户点击行为触发相应的业务逻辑，比如添加、保存、删除和注册等。

## 按钮类型

> 由于 HTML 的 `button` 元素本身具有 `type` 属性，因此 AnyButton 组件的 `type` 属性被重命名为 `theme` 属性。

一个区域建议只放一个主按钮，其他按钮应该使用其他类型按钮。

<any-space>
  <any-button theme="primary">主按钮</any-button>
  <any-button>默认/次按钮</any-button>
  <any-button theme="line">线框按钮</any-button>
  <any-button theme="dashed">虚线按钮</any-button>
  <any-button theme="text">文本按钮</any-button>
  <any-button theme="link">链接按钮</any-button>
</any-space>

```html
<any-button theme="primary">主按钮</any-button>
<any-button>默认/次按钮</any-button>
<any-button theme="dashed">虚线按钮</any-button>
<any-button theme="text">文本按钮</any-button>
<any-button theme="link">链接按钮</any-button>
```

## 按钮形状

这里的形状指的是按钮圆角的程度。

由于使用 `round` 作为属性名后面的值不好理解，因此使用 `shape` 作为属性名。

如果需要严格的正方形或圆形，请自行使用 CSS 覆盖实现。

<any-space>
  <any-button theme="primary">默认圆角</any-button>
  <any-button theme="primary" shape="round">圆角按钮</any-button>
  <any-button theme="primary" shape="circle">圆形按钮</any-button>
  <any-button theme="primary" shape="square">方形按钮</any-button>
</any-space>

```html
<any-button theme="primary" shape="circle">圆形按钮</any-button>
<any-button theme="primary" shape="round">圆角按钮</any-button>
<any-button theme="primary">默认按钮</any-button>
<any-button theme="primary" shape="square">方形按钮</any-button>
```

## 按钮尺寸

<any-space align="center">
  <any-button theme="primary" size="large">大型按钮</any-button>
  <any-button theme="primary">默认按钮</any-button>
  <any-button theme="primary" size="small">小型按钮</any-button>
  <any-button theme="primary" size="mini">迷你按钮</any-button>
</any-space>

```html
<any-button theme="primary" size="large">大型按钮</any-button>
<any-button theme="primary">默认按钮</any-button>
<any-button theme="primary" size="small">小型按钮</any-button>
<any-button theme="primary" size="mini">迷你按钮</any-button>
```

## 通栏按钮

<any-space>
  <any-button theme="primary" size="large" block>通栏按钮</any-button>
  <any-button theme="primary" size="large" block shape="round">通栏按钮</any-button>
  <any-button theme="primary" size="large" block shape="circle">通栏按钮</any-button>
  <any-button theme="primary" size="large" block shape="square">通栏按钮</any-button>
</any-space>

```html
<any-button theme="primary" size="large" block>通栏按钮</any-button>
<any-button theme="primary" size="large" block shape="round">通栏按钮</any-button>
<any-button theme="primary" size="large" block shape="circle">通栏按钮</any-button>
<any-button theme="primary" size="large" block shape="square">通栏按钮</any-button>
```

## 按钮加载状态

<any-space>
  <any-button theme="primary" loading>加载中</any-button>
  <any-button theme="primary" loading size="small">加载中</any-button>
  <any-button theme="primary" loading size="mini">加载中</any-button>
</any-space>

```html
<any-button theme="primary" loading>加载中</any-button>
<any-button theme="primary" loading size="small">加载中</any-button>
<any-button theme="primary" loading size="mini">加载中</any-button>
```

## 按钮状态

<any-space direction="column">
  <any-space>
    <any-button theme="primary">默认按钮</any-button>
    <any-button theme="primary" status="success">成功</any-button>
    <any-button theme="primary" status="warning">警告</any-button>
    <any-button theme="primary" status="danger">危险</any-button>
    <any-button theme="primary" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="plain">次级按钮</any-button>
    <any-button theme="plain" status="success">成功</any-button>
    <any-button theme="plain" status="warning">警告</any-button>
    <any-button theme="plain" status="danger">危险</any-button>
    <any-button theme="plain" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="line">线框按钮</any-button>
    <any-button theme="line" status="success">成功</any-button>
    <any-button theme="line" status="warning">警告</any-button>
    <any-button theme="line" status="danger">危险</any-button>
    <any-button theme="line" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="dashed">虚线按钮</any-button>
    <any-button theme="dashed" status="success">成功</any-button>
    <any-button theme="dashed" status="warning">警告</any-button>
    <any-button theme="dashed" status="danger">危险</any-button>
    <any-button theme="dashed" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="text">文字按钮</any-button>
    <any-button theme="text" status="success">成功</any-button>
    <any-button theme="text" status="warning">警告</any-button>
    <any-button theme="text" status="danger">危险</any-button>
    <any-button theme="text" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="link">链接按钮</any-button>
    <any-button theme="link" status="success">成功</any-button>
    <any-button theme="link" status="warning">警告</any-button>
    <any-button theme="link" status="danger">危险</any-button>
    <any-button theme="link" status="info">信息</any-button>
  </any-space>
</any-space>

```html
<any-space direction="column">
  <any-space>
    <any-button theme="primary">默认按钮</any-button>
    <any-button theme="primary" status="success">成功</any-button>
    <any-button theme="primary" status="warning">警告</any-button>
    <any-button theme="primary" status="danger">危险</any-button>
    <any-button theme="primary" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="plain">次级按钮</any-button>
    <any-button theme="plain" status="success">成功</any-button>
    <any-button theme="plain" status="warning">警告</any-button>
    <any-button theme="plain" status="danger">危险</any-button>
    <any-button theme="plain" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="line">线框按钮</any-button>
    <any-button theme="line" status="success">成功</any-button>
    <any-button theme="line" status="warning">警告</any-button>
    <any-button theme="line" status="danger">危险</any-button>
    <any-button theme="line" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="dashed">虚线按钮</any-button>
    <any-button theme="dashed" status="success">成功</any-button>
    <any-button theme="dashed" status="warning">警告</any-button>
    <any-button theme="dashed" status="danger">危险</any-button>
    <any-button theme="dashed" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="text">文字按钮</any-button>
    <any-button theme="text" status="success">成功</any-button>
    <any-button theme="text" status="warning">警告</any-button>
    <any-button theme="text" status="danger">危险</any-button>
    <any-button theme="text" status="info">信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="link">链接按钮</any-button>
    <any-button theme="link" status="success">成功</any-button>
    <any-button theme="link" status="warning">警告</any-button>
    <any-button theme="link" status="danger">危险</any-button>
    <any-button theme="link" status="info">信息</any-button>
  </any-space>
</any-space>
```

## 禁用状态

<any-space direction="column">
  <any-space>
    <any-button theme="primary" disabled>默认按钮</any-button>
    <any-button theme="primary" status="success" disabled>成功</any-button>
    <any-button theme="primary" status="warning" disabled>警告</any-button>
    <any-button theme="primary" status="danger" disabled>危险</any-button>
    <any-button theme="primary" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="plain" disabled>次级按钮</any-button>
    <any-button theme="plain" status="success" disabled>成功</any-button>
    <any-button theme="plain" status="warning" disabled>警告</any-button>
    <any-button theme="plain" status="danger" disabled>危险</any-button>
    <any-button theme="plain" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="line" disabled>线框按钮</any-button>
    <any-button theme="line" status="success" disabled>成功</any-button>
    <any-button theme="line" status="warning" disabled>警告</any-button>
    <any-button theme="line" status="danger" disabled>危险</any-button>
    <any-button theme="line" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="dashed" disabled>虚线按钮</any-button>
    <any-button theme="dashed" status="success" disabled>成功</any-button>
    <any-button theme="dashed" status="warning" disabled>警告</any-button>
    <any-button theme="dashed" status="danger" disabled>危险</any-button>
    <any-button theme="dashed" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="text" disabled>文字按钮</any-button>
    <any-button theme="text" status="success" disabled>成功</any-button>
    <any-button theme="text" status="warning" disabled>警告</any-button>
    <any-button theme="text" status="danger" disabled>危险</any-button>
    <any-button theme="text" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="link" disabled>链接按钮</any-button>
    <any-button theme="link" status="success" disabled>成功</any-button>
    <any-button theme="link" status="warning" disabled>警告</any-button>
    <any-button theme="link" status="danger" disabled>危险</any-button>
    <any-button theme="link" status="info" disabled>信息</any-button>
  </any-space>
</any-space>

```html
<any-space direction="column">
  <any-space>
    <any-button theme="primary" disabled>默认按钮</any-button>
    <any-button theme="primary" status="success" disabled>成功</any-button>
    <any-button theme="primary" status="warning" disabled>警告</any-button>
    <any-button theme="primary" status="danger" disabled>危险</any-button>
    <any-button theme="primary" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="plain" disabled>次级按钮</any-button>
    <any-button theme="plain" status="success" disabled>成功</any-button>
    <any-button theme="plain" status="warning" disabled>警告</any-button>
    <any-button theme="plain" status="danger" disabled>危险</any-button>
    <any-button theme="plain" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="line" disabled>线框按钮</any-button>
    <any-button theme="line" status="success" disabled>成功</any-button>
    <any-button theme="line" status="warning" disabled>警告</any-button>
    <any-button theme="line" status="danger" disabled>危险</any-button>
    <any-button theme="line" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="dashed" disabled>虚线按钮</any-button>
    <any-button theme="dashed" status="success" disabled>成功</any-button>
    <any-button theme="dashed" status="warning" disabled>警告</any-button>
    <any-button theme="dashed" status="danger" disabled>危险</any-button>
    <any-button theme="dashed" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="text" disabled>文字按钮</any-button>
    <any-button theme="text" status="success" disabled>成功</any-button>
    <any-button theme="text" status="warning" disabled>警告</any-button>
    <any-button theme="text" status="danger" disabled>危险</any-button>
    <any-button theme="text" status="info" disabled>信息</any-button>
  </any-space>
  <any-space>
    <any-button theme="link" disabled>链接按钮</any-button>
    <any-button theme="link" status="success" disabled>成功</any-button>
    <any-button theme="link" status="warning" disabled>警告</any-button>
    <any-button theme="link" status="danger" disabled>危险</any-button>
    <any-button theme="link" status="info" disabled>信息</any-button>
  </any-space>
</any-space>
```

### 点击事件

<any-button v-on:click="console.log(1)">点击事件</any-button>

```html
<any-button v-on:click="console.log(1)">点击事件</any-button>
```

## API

### 属性 Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| theme | 主题 | string | `primary` `plain` `line` `dashed` `text` `link` | - |
| shape | 形状 | string | `circle` `round` `square` | - |
| status | 状态 | string | `success` `warning` `danger` `info` | - |
| size | 尺寸 | string | `large` `medium` `small` `mini` | - |
| disabled | 是否禁用 | boolean | - | `false` |
| loading | 是否加载中 | boolean | - | `false` |
| block | 是否块级元素 | boolean | - | `false` |

备注：

1. 按钮的原生属性 `type` 并未被占用，故可直接添加，例如 `<any-button type="button">按钮</any-button>`
2. `any-button` 没有提供 `icon` 属性，如果需要在按钮中使用图标，可以直接在使用，例如：左 `<any-button><any-icon name="left" /> 左</any-button>`，右 `<any-button>右 <any-icon name="right" /></any-button>`、图标 `<any-button><any-icon name="search" /></any-button>`。

### 事件 Events

| 事件名称 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| click | 点击按钮时触发 | event: Event |

### 插槽 Slots

| 插槽名称 | 说明 |
| ---- | ---- |
| - | 按钮内容 |

<script setup>
import AnyButton from '../../packages/button/index.vue'
import AnySpace from '../../packages/space/index.vue'
</script>
