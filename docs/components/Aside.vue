<script setup lang="ts">
import { inject } from 'vue'
import { Ref } from 'vue'
import { useRouter } from 'vue-router'

const asideVisible = inject('asideVisible') as Ref<boolean>
const maskVisible = inject('maskVisible') as Ref<boolean>
const toggleVisible = () => {
  asideVisible.value = false
  maskVisible.value = false
}
const router = useRouter()
router.beforeEach((to, from, next) => {
  if (window.innerWidth < 768) {
    asideVisible.value = false
    maskVisible.value = false
  }
  next()
})
</script>

<template>
  <transition name="slide">
    <aside v-if="asideVisible" class="aside-bar">
      <div class="controls">
        <router-link to="/">
          <img class="logo" src="/vite.svg" alt="Vue logo" />
        </router-link>
        <div class="aside-visible" @click="toggleVisible">
          <svg version="1.1" id="menu-fold" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
            <g>
              <path d="M41.2,102.5l18.5,10.8c4,2.3,9.1,1,11.4-3c0.7-1.2,1.1-2.6,1.1-4.1l0.3-21c0.1-4.6-3.6-8.4-8.2-8.5c-1.4,0-2.8,0.3-4.1,1
                  L41.4,88v0c-4,2.2-5.6,7.2-3.4,11.3C38.8,100.6,39.8,101.8,41.2,102.5z" />
              <path
                d="M152.8,86.4H96.7c-5.5,0-10,4.5-10,10s4.5,10,10,10h56.1c5.5,0,10-4.5,10-10S158.3,86.4,152.8,86.4z" />
              <path d="M49,51h103.7c5.5,0,10-4.5,10-10s-4.5-10-10-10H49c-5.5,0-10,4.5-10,10S43.5,51,49,51z" />
              <path
                d="M152.8,141.8H49c-5.5,0-10,4.5-10,10s4.5,10,10,10h103.7c5.5,0,10-4.5,10-10S158.3,141.8,152.8,141.8z" />
            </g>
          </svg>
        </div>
      </div>
      <ul>
        <li class="text">开始</li>
        <li class="link">
          <router-link to="/docs/intro">Guide</router-link>
        </li>
        <li class="link">
          <router-link to="/docs/install">Install</router-link>
        </li>
        <li class="text">组件</li>
        <li class="link">
          <router-link to="/docs/all">所有的组件展示</router-link>
        </li>
        <li class="text">通用</li>
        <li class="link">
          <router-link to="/docs/button">按钮</router-link>
        </li>
      </ul>
    </aside>
  </transition>
  <div v-if="maskVisible" class="mask" @click="toggleVisible"></div>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.aside-bar {
  position: fixed;
  height: 100vh;
  margin-top: -4.6rem;
  width: 80%;
  max-width: 260px;
  background-color: #fff;
  border-right: .5px solid #e7e7e7;
  overflow-y: auto;
  z-index: 200;

  .controls {
    padding: 0 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
    user-select: none;

    .logo {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      cursor: pointer;
    }

    .aside-visible {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background-color: #e7e7e7;
      border-radius: 8px;
      cursor: pointer;

      &>svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }

  ul {
    padding: 0 1rem;

    .text {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
      padding: 0 1rem;
      font-size: 0.8rem;
      color: #999;
    }

    .link {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #333;

      &>a {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding: 0.5rem 1rem;
        color: #333;
        border-radius: 8px;

        &:hover {
          color: var(--any-primary);
        }

        &.router-link-exact-active {
          color: var(--any-primary);
          background-color: #f5f5f5;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    & {
      position: unset;
      width: 260px;
      z-index: 99;
    }

    .controls {
      .aside-visible {
        display: none;
      }
    }
  }
}

.mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 199;
}
</style>
