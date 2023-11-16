<script setup>
    
    import { loginData } from '../services/loginData';
    import { useRouter } from 'vue-router';
    import { useAuth } from '../store/modules/auth';

    const auth = useAuth();
    const router = useRouter();

    async function login (){
        await auth.loginAuth();
        // if(auth.user){
        //     router.push('/');
        // }   
}

</script>

<template>
    <div class="main">
        <div class="box-login">
            <div class="titulo-login">
                <h2>Bem vindo a MinhaTerapia.com</h2>
                <h4>Digite seu usário e senha para acessar.</h4>
            </div>    
            <div class="formulario">
                
                <label>
                    <input v-model="loginData.email" placeholder="" class="input" required="false">
                    <span>Usuario</span>
                </label>
            <label>
                <!-- <input name="nomePaciente" v-model="pacienteData.nome" class="input" id="nomePaciente" type="text" placeholder="" required > -->
                <input v-model="loginData.senha" placeholder="" class="input" required>
                <span>Senha</span>
            </label>
            <div class="row">
                <div>
                    <input type="checkbox">
                    <label>Lembrar de mim </label>
                </div>
                <div>
                    <router-link class="routerlink" to="recuperarsenha">Esqueceu a senha?</router-link>

                </div>

            </div>
            <button @click="login">Entrar</button>
            <router-link class="routerlink" to="recuperarsenha">Deseja criar uma conta?</router-link>

        </div>
        </div>
    </div>
</template>

<style scoped>
    .main  {
       /* padding: 60px 0 0 200px; */
       width: 100vw;
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
    }

.box-login{
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 420px;
    height: 420px;
    padding: 50px;
    gap: 1rem;
    background-color: var(--color-background-soft);
    justify-content: space-between;
}  

.row{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: -15px 0 0 0;
}

.titulo-login{
    display: flex;
    flex-direction: column  ;
    align-items: center;
}

    .formulario{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: flex-start;
        align-items: center;
    }
    .formulario button{
        width: 340px;
        height: 38px;
        background-color: var(--color-detail2-blue);
        color: var(--tema1-white);
        border: 0px;
        border-radius: 8px;
        cursor: pointer;
    }

    .formulario button:hover{
        background-color: var(--color-detail1-blue);
        
    }

    .routerlink{
        text-decoration: none;
        color: var(--color-text)
    }
</style>