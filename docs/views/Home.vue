<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goInstall = () => {
  router.push('/install')
}
</script>

<template>
  <main class="home">
    <img class="logo" src="/vite.svg" alt="Any-UI Logo" />
    <h1>Any-UI</h1>
    <p>Any-UI is a UI library for Vue 3.</p>
    <button @click="goInstall">开始使用→</button>
    <div class="features">
      <div class="feature">
        <svg t="1692468829825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="945" width="200" height="200"><path d="M704 85.333333a170.666667 170.666667 0 0 1 170.666667 170.666667v213.333333h85.333333v320a170.666667 170.666667 0 0 1-170.666667 170.666667H234.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V298.666667h85.333333V256a170.666667 170.666667 0 0 1 170.666667-170.666667h384zM128 362.666667v426.666666a106.666667 106.666667 0 0 0 102.037333 106.56L234.666667 896h554.666666a106.666667 106.666667 0 0 0 106.56-102.037333L896 789.333333V533.333333h-181.333333a213.333333 213.333333 0 0 1-166.4-79.850666L544 448l-19.2-25.6a149.290667 149.290667 0 0 0-22.229333-23.744A213.248 213.248 0 0 0 384 362.666667H128zM704 149.333333H320a106.666667 106.666667 0 0 0-106.56 102.037334L213.333333 256v42.666667h192a213.333333 213.333333 0 0 1 135.744 48.746666 277.525333 277.525333 0 0 1 60.096 56.106667l4.693334 6.08a149.333333 149.333333 0 0 0 113.6 59.626667L725.333333 469.333333h85.333334V256a106.666667 106.666667 0 0 0-97.344-106.261333l-4.693334-0.298667L704 149.333333z" fill="#333333" p-id="946"></path><path d="M234.666667 725.333333m32 0l192 0q32 0 32 32l0 0q0 32-32 32l-192 0q-32 0-32-32l0 0q0-32 32-32Z" fill="#1AB370" p-id="947"></path></svg>
        <div class="text">
          <h2>组件丰富，功能全面</h2>
          <p>精选高质量组件，覆盖 90% 的业务场景，满足绝大部分需求</p>
        </div>
      </div>
      <div class="feature">
        <svg t="1692468871137" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1263" width="200" height="200"><path d="M277.333333 917.333333V384h64v533.333333h-64z" fill="#1AB370" p-id="1264"></path><path d="M602.752 64c-58.090667 0-108.757333 38.442667-121.813333 93.248l-6.506667 31.445333-4.736 22.122667-4.010667 17.770667-2.922666 12.202666-1.642667 6.293334a171.370667 171.370667 0 0 1-0.725333 2.56c-8.170667 28.224-40.234667 65.749333-63.146667 76.8-2.304 1.109333-6.912 2.133333-13.162667 3.050666l-6.784 0.874667-7.68 0.789333-8.512 0.725334-9.130666 0.597333-9.6 0.512-14.976 0.597333-10.133334 0.234667-10.090666 0.128H193.557333C145.706667 333.973333 106.666667 372.373333 106.666667 420.053333v432.533334C106.666667 900.266667 145.621333 938.666667 193.557333 938.666667h506.624c97.194667 0 179.946667-70.165333 194.453334-165.269334l42.410666-278.378666 0.64-4.8c9.856-82.901333-55.829333-156.096-140.8-156.096l-84.074666-0.021334 0.682666-3.114666c2.282667-10.88 4.522667-22.634667 6.677334-35.2 4.757333-27.754667 8.704-57.621333 11.648-89.429334 6.229333-68.629333-42.304-131.242667-110.933334-140.864l-4.821333-0.576A91.605333 91.605333 0 0 0 602.752 64z m0 64c1.792 0 3.562667 0.128 5.354667 0.405333a66.602667 66.602667 0 0 1 59.968 72.106667 1097.6 1097.6 0 0 1-10.986667 84.48l-3.050667 16.981333c-2.090667 10.901333-4.202667 20.992-6.336 30.208l-3.349333 13.738667-2.026667 7.637333-13.610666 44.565334h168.149333c47.701333 0 83.946667 41.386667 76.928 87.253333l-42.410667 278.4C821.653333 827.392 765.930667 874.666667 700.16 874.666667H193.557333C180.757333 874.666667 170.666667 864.704 170.666667 852.586667V420.053333c0-12.138667 10.112-22.08 22.890666-22.08h113.856c16.597333-0.128 35.2-0.682667 53.205334-1.92 29.824-2.069333 50.709333-5.290667 64.533333-12.032 39.082667-18.816 83.477333-70.762667 96.704-116.565333l1.834667-6.613333 2.026666-8.021334 3.413334-14.506666 3.072-13.802667 4.864-22.656 5.589333-27.264C547.84 147.712 572.949333 128 602.752 128z" fill="#333333" p-id="1265"></path></svg>
        <div class="text">
          <h2>质量可靠，贴近业务</h2>
          <p>所有组件从典型业务提炼而成，每一个组件经过充分单元测试</p>
        </div>
      </div>
      <div class="feature">
        <svg t="1692468895506" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1422" width="200" height="200"><path d="M149.333333 874.666667h725.333334a85.333333 85.333333 0 0 1 85.333333 85.333333H64a85.333333 85.333333 0 0 1 85.333333-85.333333z m64-384a106.666667 106.666667 0 0 1 106.666667 106.666666v128a106.666667 106.666667 0 0 1-213.333333 0v-128a106.666667 106.666667 0 0 1 106.666666-106.666666z m0 64a42.666667 42.666667 0 0 0-42.56 39.466666L170.666667 597.333333v128a42.666667 42.666667 0 0 0 85.226666 3.2L256 725.333333v-128a42.666667 42.666667 0 0 0-42.666667-42.666666zM512 85.333333a106.666667 106.666667 0 0 1 106.666667 106.666667v533.333333a106.666667 106.666667 0 0 1-213.333334 0V192a106.666667 106.666667 0 0 1 106.666667-106.666667z m0 64a42.666667 42.666667 0 0 0-42.56 39.466667L469.333333 192v533.333333a42.666667 42.666667 0 0 0 85.226667 3.2L554.666667 725.333333V192a42.666667 42.666667 0 0 0-42.666667-42.666667z" fill="#333333" p-id="1423"></path><path d="M810.666667 277.333333a106.666667 106.666667 0 0 1 106.666666 106.666667v341.333333a106.666667 106.666667 0 0 1-213.333333 0V384a106.666667 106.666667 0 0 1 106.666667-106.666667z m0 64a42.666667 42.666667 0 0 0-42.56 39.466667L768 384v341.333333a42.666667 42.666667 0 0 0 85.226667 3.2L853.333333 725.333333V384a42.666667 42.666667 0 0 0-42.666666-42.666667z" fill="#1AB370" p-id="1424"></path></svg>
        <div class="text">
          <h2>主题定制</h2>
          <p>通过修改 CSS 变量的值来定制自己的组件主题，调整组件样式</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@keyframes gradient {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
  }
}

main, div, h1, h2, p, svg, button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4.6rem);
  padding: 2rem;
  width: 100%;

  .logo {
    width: 8rem;
    height: 8rem;
    margin-bottom: 2rem;
  }

  h1, p {
    margin: 0;
    padding: 0;
    text-align: center;
    max-width: 360px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    background-image: linear-gradient(45deg, var(--any-primary) 0%, #AE3FF5 50%, #FFA600 100%);
    background-size: 400px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: .4rem;
    font-size: 2.5rem;
    font-weight: 700;
    animation: gradient 6s ease infinite;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #606266;
  }
  
  button {
    margin-bottom: 4rem;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.8em 1.4em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: white;
    background-color: var(--any-primary);
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover,
  button:focus {
    filter: brightness(1.2);
  }
  button:active {
    filter: brightness(0.8);
  }

  .features {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.6rem;
    width: 100%;

    .feature {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: calc(100% / 3 - 3.1rem);
      padding: 1rem;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

      & > svg {
        width: 6.8rem;
        height: 6.8rem;
      }

      h2 {
        margin: 0;
        padding: 0;
        margin-bottom: .4rem;
        text-align: left;
        font-size: 1.5rem;
        font-weight: 700;
      }

      p {
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 1rem;
        color: #606266;
      }
      @media screen and (max-width: 1232px) {
        width: calc(100% / 2 - .8rem);
      }

      @media screen and (max-width: 770px) {
        width: 100%;
      }

      @media screen and (max-width: 410px){
        flex-direction: column;
        align-items: start;

        & > svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
}
</style>
