<script>
import { RouterLink, RouterView } from 'vue-router'
import Headers from './components/Headers.vue';
import SideBars from './components/SideBars.vue';
import Home from './views/Home.vue';

export default{
  components:{
    Headers,
    SideBars,
    RouterLink, RouterView
  },
  data(){
    return{
        modeoEscuro: true
    }
  },
  methods:{
    trocarTema (modeoEscuroAtivo){
      console.log(modoEscuro)
      // this.modeoEscuroAtivo=modeoEscuroAtivo
    }
  }
}

</script>

<template>
  <main class="modo-escuro" :class="{ 'modo-escuro': modoEscuro}">
    <header class="header__app" >
      <Headers @aoTemaAlterao="trocarTema"/>
      
    </header>
    <div class="content">
      <div class="container__sidebar">
        <SideBars/>
      </div>
      <div class="container__main">
       
  
      </div>
    </div>
    <RouterView />

  </main>
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

h2{
  color: var(--color-text);
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
