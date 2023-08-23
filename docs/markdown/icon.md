# 图标

## 示例

### 基础用法

<any-icon name="like" />

```html
<any-icon name="like" />
```

### 旋转

<any-icon name="like" :rotate="45" />

```html
<any-icon name="like" :rotate="45" />
```

### 旋转动画

<any-icon name="like" spin />

```html
<any-icon name="like" spin />
```

### 自定义样式

<any-icon name="like" style="color: red; font-size: 40px;" />

```html
<any-icon name="like" style="color: red; font-size: 40px;" />
```

## 线性图标

### 方向性图标

### 提示建议性图标

### 网站通用图标

### 品牌和标识

### 应用图标

## 面性图标

## 属性 Attribute

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称 | `string` | - |
| rotate | 旋转角度 | `number` | `0` |
| spin | 是否旋转 | `boolean` | `false` |
| style | 图标样式 | `object` | - |

备注：

1. 由于 `rotate` 使用的是 `transform`，所以不支持 IE9 及以下版本
2. `name` 为必填项，且仅支持使用 `any-icon` 中的图标
3. 如需使用其他图标，可以反馈或者自己封装。

<script setup>
  import AnyIcon from '../../packages/icon/index.vue'
</script>
