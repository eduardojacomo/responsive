<template>
    <div class="main">
        <!-- Usuarios
        <input type="text" v-model="usuario" placeholder="usuario">{{ usuario }}
        <input type="password" v-model="senha" placeholder="senha">{{ senha }}
        <input type="email" v-model="email" placeholder="email">{{ email }}

        <button @click="postUser">Cadastrar</button> -->
        <ProtocoloTranstorno/>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import ProtocoloTranstorno from './ProtocoloTranstorno.vue';
import api from '../services/api';
const usuario = ref('');
const senha = ref('');
const email = ref('');

async function postUser(){
   
    api.post('/usuario', {
    usuario: usuario.value,
    senha: senha.value,
    email: email.value
  })
  .then((response) => {
          console.log(response)
  })
  .catch((error) => {
    console.error(error);
  });
}

</script>

<style scoped>
    .main{
        padding: 50px 0 0 250px;
        display: flex;
        flex-direction: column;
    }
    input{
        width: 250px;
    }
    button{
        width: 150px;
    }
</style>