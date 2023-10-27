<template>
    <header>
        <!-- <div class="header__container"> -->
            
        <nav class="cabecalho__container">
            <h1 class="logo__item" href="#">LOGO</h1>

            <!-- <div class="cabecalho__pesquisar__item">
                
                    <form action="">
                            
                            <input type="search" placeholder="Pesquisar" id="pesquisar" class="pesquisar__input">
                            <label for="pesquisar" class="pesquisar__label"></label>
                    </form>
                
                    <a href="#" class="cabecalho__botao-pesquisar">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" style="color: #ffffff;" />
                    </a>
                
            </div> -->

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
                </ul>
            </div>

            

            </nav>
        <!-- </div> -->
    </header>
</template>

<script>
export default {
    name:"Headers"
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