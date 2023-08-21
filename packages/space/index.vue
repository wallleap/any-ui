<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps({
  size: {
    type: String, // 'large' | 'middle' | 'small',
    default: ''
  },
  direction: {
    type: String, // 'row' | 'row-reverse' | 'column' | 'column-reverse',
    default: 'row'
  },
  align: {
    type: String, // 'start' | 'end' | 'center' | 'baseline' | 'stretch',
    default: 'start'
  },
  justify: {
    type: String, // 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly',
    default: 'start'
  },
  wrap: {
    type: String, // 'nowrap' | 'wrap' | 'wrap-reverse',
    default: 'wrap'
  },
  gap: {
    type: String, // 'nowrap' | 'wrap' | 'wrap-reverse',
    default: '16px'
  },
})

const styleObj = computed(() => {
  return {
    display: 'flex',
    flexDirection: props.direction,
    alignItems: props.align,
    justifyContent: props.justify,
    flexWrap: props.wrap,
    gap: props.gap,
  }
}) as unknown as CSSProperties
</script>

<template>
  <div class="any-space" :style="styleObj"><slot /></div>
</template>
