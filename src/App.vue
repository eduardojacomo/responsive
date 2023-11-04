<script>
import {ref} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Headers from './components/Headers.vue';
import SideBars from './components/SideBars.vue';

export default{
  components:{
    Headers,
    SideBars,
    RouterLink, RouterView
  },
  data(){
    return{
        modeoEscuroAtivo: false,
        
    }
  },
  methods:{
    trocarTema (modeoEscuroAtivo){
      // console.log(modoEscuro),
      this.modeoEscuroAtivo=modeoEscuroAtivo;
      const theme= ref('');
      if(modeoEscuroAtivo) {
        theme.value= 'dark';
        console.log(theme);
        document.documentElement.className = theme.value;
      }
      else{
        theme.value= 'light';
        console.log(theme)
        document.documentElement.className = theme.value;
      }
       
      // const setTheme = theme => document.documentElement.className = theme;
    }
  }
}

</script>

<template>
  <main class="modo-escuro" :class="{ 'modo-escuro':modoEscuroAtivo}">
    <header class="header__app" >
      <Headers @aoTemaAlterado="trocarTema"/>
      
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
}

.app{
  min-height: 100vh;
  position: relative;
}


h2, h3, h4, h5{
  color: var(--color-text);
}

.formulario label {
  position: relative;
  }

  .formulario label .input {

    font-size:16px;
    border:1px solid var(--tema-border);
    border-radius: 8px;
    padding:15px 5px 5px 10px;
    background: var(--color-background);
    color: var(--color-text);
    width: 25vw;
    height: 40px;
    display: flex;
    flex-flow: 1 0 250px;
  outline: 0;
}

.formulario label .input + span {
  color: var(--color-text);
  position: absolute;
  left: 15px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.formulario label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 1em;
}

.formulario label .input:focus + span,
.formulario label .input:valid + span {
  color: var(--color-label-blue);
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
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
