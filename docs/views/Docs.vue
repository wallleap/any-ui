<script setup lang="ts">
import Aside from '../components/Aside.vue'
</script>

<template>
  <div class="container">
    <Aside />
    <article class="markdown-body">
      <router-view></router-view>
    </article>
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

  .markdown-body {
    flex: 1;
    padding: 0 1rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    .markdown-body {
      padding: 2rem;
      max-width: 786px;
      margin: 0 auto;
    }
  }
}
</style>
