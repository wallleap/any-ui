<script setup lang="ts">
import Aside from '../components/Aside.vue'
</script>

<template>
  <div class="container">
    <Aside />
    <router-view class="markdown-body"></router-view>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  .markdown-body {
    width: 100%;
    padding: 2rem 1rem;
    padding-top: 0;
  }

  @media screen and (min-width: 768px) {
    padding-left: 16rem;

    .markdown-body {
      padding: 2rem;
      max-width: 786px;
      margin: 0 auto;
    }
  }
}
</style>
