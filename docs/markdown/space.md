# 间距

主要用于元素之间添加间隙，还可以控制元素的排列方向、对齐方式、换行方式等

使用的 flex 布局，具体可以参考 [flex 布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout)

## 属性

| 属性名 | 说明 | 对应 flex 属性 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 主轴方向 | `flex-direction` | `row` `column` `row-reverse` `column-reverse` | `row` |
| justify | 主轴对齐方式 | `justify-content` | `flex-start` `flex-end` `center` `space-between` `space-around` | `flex-start` |
| align | 交叉轴对齐方式 | `align-items` | `flex-start` `flex-end` `center` `baseline` `stretch` | `start` |
| wrap | 是否换行 | `flex-wrap` | `nowrap` `wrap` `wrap-reverse` | `wrap` |
| gap | 间距 | `gap` | `string`（单位 `px`/`vw`/`vh`/`%`/`em`/`rem` 等）或 `[string string]` | `16px` |

## 示例

<Space direction="row-reverse" justify="flex-start" align="center" wrap="wrap" gap="2em 10em">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
</Space>

```html
<Space direction="row-reverse" justify="flex-start" align="center" wrap="wrap" gap="2em 10em">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
  <div class="box">8</div>
  <div class="box">9</div>
</Space>
```

<script setup>
import Space from '../../packages/space/index.vue'
</script>
