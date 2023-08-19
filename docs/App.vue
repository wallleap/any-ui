<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <main class="main-content">
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
.main-content {
  margin-top: 4.6rem;
}
</style>
