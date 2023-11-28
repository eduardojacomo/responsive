<script setup>

import Headers from './components/Menus/Headers.vue';
import SideBars from './components/Menus/SideBars.vue';
import { useAuth } from './store/modules/auth';

const auth = useAuth();
</script>

<template>
  <main class="modo-escuro" :class="{ 'modo-escuro':modoEscuroAtivo}">
    <header class="header__app" >
      <Headers @aoTemaAlterado="trocarTema"/>
      
    </header>
    <div class="content">
      <div class="container__sidebar">
        <SideBars v-if="auth.user"/>
      </div>
      <div class="container__main">
       
        <RouterView />
  
      </div>
    </div>

  </main>
</template>

<style>

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
  padding: 60px 1rem 1rem 180px;
}

.app{
  min-height: 100vh;
  position: relative;
}

</style>
