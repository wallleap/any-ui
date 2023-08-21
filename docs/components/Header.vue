<script setup lang="ts">
import { inject } from 'vue'
import { Ref } from 'vue'

const asideVisible = inject('asideVisible') as Ref<boolean>
const maskVisible = inject('maskVisible') as Ref<boolean>
window.innerWidth < 768 ? asideVisible.value = false : asideVisible.value = true

const toggleVisible = () => {
  asideVisible.value = true
  if (window.innerWidth < 768) {
    maskVisible.value = true
  } else {
    maskVisible.value = false
  }
}
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    asideVisible.value = false
    maskVisible.value = false
  } else {
    asideVisible.value = true
    maskVisible.value = false
  }
})
</script>

<template>
  <header class="top-nav">
    <div class="controls">
      <router-link to="/">
        <img class="logo" src="/vite.svg" alt="Vue logo" />
      </router-link>
      <div class="aside-visible" @click="toggleVisible">
        <svg version="1.1" id="menu-unfold" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
          <g>
            <path d="M158.4,88L158.4,88l-18.9-10.2c-1.3-0.7-2.7-1-4.1-1c-4.6,0.1-8.3,3.9-8.2,8.5l0.3,21c0,1.4,0.4,2.8,1.1,4.1
              c2.3,4,7.4,5.3,11.4,3l18.5-10.8c1.3-0.8,2.4-1.9,3.1-3.2C164,95.3,162.5,90.2,158.4,88z"/>
            <path d="M47.1,106.5h56.1c5.5,0,10-4.5,10-10s-4.5-10-10-10H47.1c-5.5,0-10,4.5-10,10S41.5,106.5,47.1,106.5z"/>
            <path d="M47.1,51h103.7c5.5,0,10-4.5,10-10s-4.5-10-10-10H47.1c-5.5,0-10,4.5-10,10S41.5,51,47.1,51z"/>
            <path d="M150.8,141.8H47.1c-5.5,0-10,4.5-10,10s4.5,10,10,10h103.7c5.5,0,10-4.5,10-10S156.3,141.8,150.8,141.8z"/>
          </g>
        </svg>
      </div>
    </div>
    <nav >
      <div class="nav-control">
        <svg t="1692461711230" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4012" width="200" height="200"><path d="M415.93 223.79c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.003-95.984-95.984zM415.93 511.742c0-52.98 43.004-95.984 95.984-95.984s95.984 43.004 95.984 95.984-43.004 95.984-95.984 95.984-95.984-43.004-95.984-95.984zM415.93 799.866c0-52.98 43.004-95.984 95.984-95.984s95.984 43.003 95.984 95.984-43.004 95.983-95.984 95.983-95.984-43.175-95.984-95.983z" p-id="4013"></path></svg>
      </div>
      <a href="https://github.com/wallleap/any-ui">GitHub</a>
      <div class="nav-items">
        <router-link to="/docs/all">组件</router-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;

  .controls {
    display: flex;
    align-items: center;

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

      & > svg {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    a {
      color: #606266;
      padding: 0 1rem;

      &:hover {
        color: #409eff;
      }
    }

    a.router-link-exact-active {
      color: #409eff;
    }
  }

  .nav-items {
    position: absolute;
    display: none;
    flex-direction: column;
    align-items: center;
    top: 3.4rem;
    right: 1rem;
    padding: .8rem 0rem;
    border-radius: 1rem;
    background-color: #fff;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
    z-index: 101;

    &::before {
      content: '';
      position: absolute;
      top: -1rem;
      right: 1.5rem;
      width: 0;
      height: 0;
      border: 0.5rem solid transparent;
      border-bottom-color: #fff;
    }

    &:hover {
      display: flex;
    }

    a {
      word-break: keep-all;
      display: inline-block;
      padding: .8rem 3rem;
      line-height: 1rem;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s;
    }
  }
  
  .nav-control {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      & ~ .nav-items {
        display: flex;
      }
    }

    & > svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  @media screen and (min-width: 450px) {
    .nav-items {
      display: flex;
      position: unset;
      filter: unset;
      flex-direction: row;
      background-color: transparent;
      padding: 0;

      &::before {
        display: none;
      }
      
      a {
        padding: 0 1rem;
        height: 100%;
        line-height: 4rem;
      }
    }

    .nav-control {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .controls {
      .aside-visible {
        display: none;
      }
    }
  }
}
</style>
