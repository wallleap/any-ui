<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#000'
  }
})
const styleObj = computed(() => {
  return {
    backgroundColor: props.color
  }
}) as unknown as CSSProperties
</script>

<template>
  <div class="color" :style="styleObj"></div>
</template>

<style lang="scss" scoped>
.color {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}
</style>
