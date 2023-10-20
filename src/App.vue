<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Headers from './components/Headers.vue';
import SideBars from './components/SideBars.vue';
import Home from './views/Home.vue';



</script>

<template>
  <header class="header__app">
    <Headers />
    <div id="tema">
    <ThemeSwitcher />
  </div>
  </header>
  <div class="content">
    <div class="container__sidebar">
      <SideBars/>
    </div>
    <div class="container__main">
      <!-- <Home/> -->

    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
}

.container__sidebar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-shrink: 0;
  z-index: 2;
}

.container__sidebar{
  width: 200;
}

.header__app{
  height: 50px;
  width: 100vw;
  position: fixed;
  z-index: 1;
}
.container__main{
  display: flex;
}

.app{
  min-height: 100vh;
  position: relative;
}
#tema{
  position:absolute;
  z-index: 0;
  top:50px;
  left: 50px;
}

@media screen and (max-width: 450px){
  .header__app{
    display: block;
    width: 100vw;
    position: fixed;
    z-index: 1;
  }
}
</style>
