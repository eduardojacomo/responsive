<template>
    <div class="main">
        <div>
        <input type="text" v-model="novaAcao">
        <button @click="addAcoes()"> Add</button>
    </div>
    <div>
        <ul>
            <li v-for="a in refacao" :key="a.id"> {{ a.acaoTerapia }}</li>
        </ul>
    </div>
    </div>
</template>

<script setup>
import {ref, onBeforeMount} from 'vue'
import {useAcoes} from '../../store/modules/acoesStore'
import {storeToRefs} from 'pinia'
//import {useStorage} from '@vueuse/core'

// const storage = useStorage("acao-terapia". refacao);

const useacoes = useAcoes();

const {refacao} = storeToRefs(useacoes);
const {setAcoes, getAcoes} = useacoes;

const novaAcao = ref('')

async function addAcoes(){
    await setAcoes({
            acaoTerapia:novaAcao.value,
            status:"A"
        });
    await getAcoes();
}

onBeforeMount(async() => {
        await getAcoes();
       
    });
</script>
