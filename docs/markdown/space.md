# 间距

使用的 flex 布局，所以间距使用的是 flex 的属性，具体可以参考 [flex 布局](https://www.runoob.com/w3cnote/flex-grammar.html)

## 属性

| 属性名 | 说明 | 对应 flex 属性 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 主轴方向 | `flex-direction` | `row` `column` `row-reverse` `column-reverse` | `row` |
| justify | 主轴对齐方式 | `justify-content` | `flex-start` `flex-end` `center` `space-between` `space-around` | `flex-start` |
| align | 交叉轴对齐方式 | `align-items` | `flex-start` `flex-end` `center` `baseline` `stretch` | `start` |
| wrap | 是否换行 | `flex-wrap` | `nowrap` `wrap` `wrap-reverse` | `wrap` |
| gap | 间距 | `gap` | `string`（`px`/`vw`/`vh`/`%`/`em`/`rem` 等） | `16px` |

## 示例

<Space direction="row-reverse" justify="flex-start" align="center" wrap="nowrap" gap="3em">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</Space>

```html
<Space direction="row-reverse" justify="flex-start" align="center" wrap="nowrap" gap="3em">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</Space>
```

<script setup>
import Space from '../../packages/space/index.vue'
</script>

