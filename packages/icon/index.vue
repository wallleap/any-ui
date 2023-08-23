<script setup lang="ts">
import { computed } from 'vue'
import { CSSProperties } from 'vue';
import './svg'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  rotate: {
    type: Number,
    default: 0
  },
  spin: {
    type: Boolean,
    default: false
  },
  style: {
    type: Object,
    default: () => ({})
  }
})
const styleObj = computed(() => {
  return [{
    transform: `rotate(${props.rotate}deg)`
  }, props.style]
}) as unknown as CSSProperties
const className = computed(() => {
  return {
    'any-icon': true,
    [`icon-${props.name}`]: true,
    'spin': props.spin
  }
})
</script>

<template>
  <svg :class="className" :style="styleObj" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
}

.any-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

  &.spin {
    animation: spin 2s linear infinite;
  }
}
</style>
