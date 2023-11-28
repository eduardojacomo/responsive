<template>
    <div class="sidebar">
        <router-link to="/" class="side__link"><font-awesome-icon icon="fa-solid fa-house" /> Home</router-link>
        <router-link to="/pacientes" class="side__link"><font-awesome-icon icon="fa-solid fa-address-card" /> Pacientes</router-link>
        <!-- <router-link to="/agenda" class="side__link"><font-awesome-icon icon="fa-solid fa-calendar" /> Agenda</router-link> -->
        <router-link to="/sessao" class="side__link" @click="showMenu('Sessao')"><font-awesome-icon icon="fa-solid fa-calendar" /> Sessao</router-link>
        <Transition :duration="550" name="nested">
          <div class="content" v-show="expandMenu.Sessao">
            <router-link to="/protocolotratamento" class="side__sublink"><font-awesome-icon icon="fa-solid fa-notes-medical"/> Plano de Tratamento</router-link>
          </div>
        
        </Transition>
        <!-- <router-link to="/financeiro" class="side__link"><font-awesome-icon icon="fa-solid fa-money-bills" /> Financeiro</router-link>
        <router-link to="/documentos" class="side__link"><font-awesome-icon icon="fa-solid fa-notes-medical"/> Documentos</router-link> -->
        <router-link to="/usuarios" class="side__link"><font-awesome-icon icon="fa-solid fa-notes-medical"/> Usuarios</router-link>
        
        <button type="button" class="side__button" @click="showMenu('Configuracao')"> <font-awesome-icon icon="fa-solid fa-gear"/> Configuração</button>
        <Transition :duration="550" name="nested">
          <div class="content" v-show="expandMenu.Configuracao">
            <router-link to="/login" class="side__sublink"><font-awesome-icon icon="fa-solid fa-notes-medical"/> Login</router-link>
          </div>
        
        </Transition>
        
        
  </div>

  <div id="menuToggle" class="hamburguer-menu">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <router-link to="/" class="rounter-hamb" >
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-house"/>Home</li>
      </router-link>
      <router-link to="/pacientes" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-address-card" />Pacientes</li>
      </router-link>
      <!-- <router-link to="/agenda" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-calendar" />Agenda</li> -->
      <!-- </router-link> -->
      <router-link to="/sessao" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-calendar" />Sessao</li>
      </router-link>
      <!-- <router-link to="/financeiro" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-money-bills" />Financeiro</li>
      </router-link>
      <router-link to="/documentos" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-notes-medical"/>Documentos</li>
      </router-link> -->
      <router-link to="/usuarios" class="rounter-hamb">
        <li class="side__link-hamb"><font-awesome-icon icon="fa-solid fa-gear"/>Usuarios</li>
      </router-link>
      
    </ul>
  </div>

</template>

<script setup>
import {ref} from 'vue'

const expandMenu = ref({
  Configuracao: false,
  Sessao: false,
})
//let exp = document.getElementsByClassName("content");
function showMenu(option){
    if (option == "Configuracao"){
      expandMenu.value.Configuracao=!expandMenu.value.Configuracao;
    }else{
      expandMenu.value.Sessao=!expandMenu.value.Sessao;

    }
  
}


</script>

<style scoped>
  .sidebar {
  margin: 40px 0 0 0;
  height: 100%;
  width: 170px;
  position: fixed;
  z-index: 1;
  background-color: var(--color-background-sidebar);
  overflow-x: hidden;
  padding-top: 16px;
}
.side__link, .side__sublink {
  
  
  text-decoration: none;
  font-size: 16px;
  color: var(--color-text);
  display: block;
}

.side__link{
  padding: 6px 8px 6px 16px;
}

.side__sublink{
  padding: 6px 8px 6px 35px;
}

.side__link:hover, .side__button:hover {
  /* background-color: var(--color-detail2-blue); */
  border-left: 5px solid var(--color-detail2-blue);
  /* color: var(--color-detail2-blue); */
}
.side__sublink:hover{
  background-color: var(--color-detail2-blue);
}
.side__sublink:active{
  background-color: var(--color-detail2-green);
}

.side__link:focus, .side__button:focus{
  border-left: 5px solid var(--color-detail2-green);
}

 .side__button{
  background-color: var(--color-background-sidebar);
  color: var(--color-text);
  cursor: pointer;
  padding: 10px 8px 10px 16px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  display: block;
  font-size: 16px;
} 
.content{
  padding: 0;
  display: block;
  /* overflow: hidden; */
   background-color: var(--color-background-mute);
}

.active {
  border-left: 5px solid var(--color-detail2-blue);
}

#menuToggle {
   display:none;
   z-index: 1;
   -webkit-user-select: none;
   user-select: none;
 }
 
 #menuToggle span:first-child {
   transform-origin: 0% 0%;
 }
 
 #menuToggle span:nth-last-child(2) {
   transform-origin: 0% 100%;
 }
 
 #menuToggle input {
   position: absolute;
   cursor: pointer;
   opacity: 0;
   width: 50px;
  height: 50px;;
   z-index: 2; /* in order to place the checkbox over the hamburguer */
   -webkit-touch-callout: none;
 }
 
 #menuToggle span {
   display: none; /* to ensure that each span element occupies its own line. */
   width: 33px;
   height: 4px;
   top:10px;
   left: 5px;
   margin-bottom: 5px; /* create some spacing between the span elements. */
   position: relative; /* allow for positioning changes in relation to the parent div.*/
   background: var(--color-text);
   border-radius: 3px;
   z-index: 1; /* ensure that the span element is under the checkbox */
   transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
     background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
   transform-origin: 4px 0px; /* set to 4px 0px to specify the center of rotation for the transform property above. */
 }
 
 #menuToggle input:checked ~ span {
   opacity: 1;
   transform: rotate(45deg) translate(-2px, -1px);
   background: var(--color-detail2-blue);
 }
 
 #menuToggle input:checked ~ span:nth-last-child(3) {
   opacity: 0;
   transform: rotate(0deg) scale(0.2, 0.2);
 }
 
 #menuToggle input:checked ~ span:nth-last-child(2) {
   transform: rotate(-45deg) translate(0, -1px);
 }
 #menu {
   position: absolute;
   left: -300px;
   top: 80px;
   width: 250px;
   height:100vh;
   margin: -100px 0 0 -75px;
   /* padding: 50px; */
   padding-top: 75px;
   background: var(--color-background-soft);
   list-style-type: none;
   -webkit-font-smoothing: antialiased;
 
   transition: left 0.5s;
   
 }
 
 #menu li {
   font-size: 22px;
 }
 #menuToggle input:checked ~ ul {
   left: 40px;
 }

 .nested-enter-active, .nested-leave-active {
	transition: all 0.5s ease-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

@media screen and (max-width: 450px) {
  .sidebar {
    padding-top: 15px;
    display: none;
  }
  
  .side__link-hamb {
    font-size: 12px;
    
    color: var(--color-text);
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 1rem;
  }
  .side__link-hamb:hover {
  background-color: var(--color-detail2-blue);
  /* color: var(--color-detail2-blue); */
  }

  .rounter-hamb{
    /* font-size: 12px;
    padding: 3px 1px 3px 1px;
    width: 100%; */
    padding: 1px 1px 0px 1px;
    color: var(--color-text);
    
    text-decoration: none;
  }
  #menuToggle{
  display: block;
}

}

@media screen and (max-width: 750px) {
  .sidebar {
    padding-top: 15px;
    display: none;
  }
  .side__link-hamb {
    font-size: 12px;
    padding: 1px 1px 0px 1px;
    color: var(--color-text);
    text-decoration: none;
  }
  .router-hamb{
    text-decoration: none;
    color: var(--color-text)
  }
  .side__link-hamb:hover {
  background-color: var(--color-detail2-blue);
  /* color: var(--color-detail2-blue); */
  }


}

#menuToggle span {
  display: block;
}

</style>