<script setup lang="ts">
import { ref, provide } from 'vue'
import Header from './components/Header.vue'

let asideVisible = ref(false)
let maskVisible = ref(false)
provide('asideVisible', asideVisible)
provide('maskVisible', maskVisible)
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
