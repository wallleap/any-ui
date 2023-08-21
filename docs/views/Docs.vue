<script setup lang="ts">
import Aside from '../components/Aside.vue'
</script>

<template>
  <div class="container">
    <Aside />
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}
</style>
