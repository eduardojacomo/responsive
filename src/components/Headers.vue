<template>
    <header>
        <!-- <div class="header__container"> -->
            
        <nav class="cabecalho__container">
            <h1 class="logo__item" href="#">LOGO</h1>

            <div class="cabecalho__indicadores">
                <ul class="cabecalho__icones">
                    <li>
                        <button class="cabecalho__icones-items" href="#">
                            <font-awesome-icon icon="fa-solid fa-bell" style="color: #ffffff;" />
                        </button>
                    </li>
                    <li>
                        <div class="dropdown">
                
                            <div class="dropdown-content">
                                <a href="#">Perfil</a>
                                <a href="#">Configurar</a>
                                <a href="#">Sair</a>
                            </div>
                            
                            <a class="cabecalho__avatar"> <img src="../assets/p21.png" class="avatar"></a>
                        </div>

                    </li>
                    <li>
                        <label class="switch">
                            <input type="checkbox" @click="alterarTema">
                            <span class="slider"></span>
                        </label>
                    </li>
                </ul>
            </div>

            

            </nav>
        <!-- </div> -->
    </header>
</template>

<script>
export default {
    name:"Headers",
    emits: ['aoTemaAlterado'],
    data(){
        return{
            modeoEscuroAtivo: false
        }
    },
    methods:{
        alterarTema(){
            this.modeoEscuroAtivo = !this.modeoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modeoEscuroAtivo)
            console.log("alterado")
        }
    }
}
</script>

<style scoped>

.header__container{
    background-color: var(--tema-indigo);
   
}
    .cabecalho__container{
        display: flex;
        height: 40px;
        justify-content: space-between;
        padding: 1vh 2vw ;
        align-items: center;
        background-color: var(--tema2-blue2-dark);   
    }

    .cabecalho__pesquisar__item{
        display: none;
    }

    .cabecalho__icones-items{
        background-color: transparent;
        border-radius: 90%;
        height: 30px;
        width: 30px;
        padding: 5px;
        border: 0px;
    }
    .cabecalho__icones-items:hover{
        background-color: var(--tema2-blue1-dark);
    }

    .pesquisar__input{
        background-color: transparent;
        border: 1px solid var(--tema2-text-dark-1);
        border-radius: 24px;
        width: 100%;
        font-size: 12px;
        padding: 11px;
        color: var(--tema2-text-dark-1);
    }

    .pesquisar__input:checked{
        border: 1px solid var(--tema2-text-dark-1);
    }

    .pesquisar__input:hover{
        border: 1px solid var(--tema2-text-dark-2);
    }
    .pesquisar__label{
        color: var(--tema2-text-dark-2);
    }

    .nav__router-link{
        color: var(--tema2-text-dark-1);
        font-size: 16px;
        text-decoration: none;
    }

    .cabecalho__icones{
        display:flex;
        justify-content: flex-end;
        margin: 0 2px;
        gap: 1rem;
        align-items: center;
        list-style-type: none;
    }

    .cabecalho__icones a :hover{
        background-color: var(--tema2-blue1-dark);
    }
    .avatar {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        border-radius: 50%;
}

    .dropdown {
        position: relative;
        display: inline-block;
  
    }

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  left: -100px;
  top: 30px;
}

.dropdown-content a {
  color: var(--color-text);
  padding: 10px 14px;
  text-decoration: none;
  font-size: 12px;
  display: block;
}

.dropdown-content a:hover {background-color: var(--color-detail2-blue);}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: #3e8e41;}

.switch {
  font-size: 14px;
  position: relative;
 
  display: inline-block;
  width: 3.5em;
  height: 1.5em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--tema2-blue3-light);
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1em;
  width: 1em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: var(--tema1-white);
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--tema2-blue1-dark);
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(1.5em);
}

    @media screen and (max-width: 720px) {
        .cabecalho__pesquisar__item{
        display: flex;
        gap: 1rem;
        text-align: center;
        align-items: center;
        }
        
    }

    @media screen and (max-width: 450px){
        .logo__item{
                display: none;
         }
         .cabecalho__container{
            justify-content: flex-end;
            display: block;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
         }

    }

</style>