<script setup>
import { reactive, ref, onBeforeMount } from 'vue';
import {useProtocolo} from '@/store/modules/protocoloStore';
import AutoComplete from './AutoComplete.vue';
import {useMetas} from '@/store/modules/metasStore'

const usemetas = useMetas();
const testemetas = reactive ({});
// const searchmetas = ref('');
// const useprotocolo= useProtocolo();
 const protocolo = reactive({
     metas:'',
     planos:'',
     concluido:''
 });
const metaselected = ref('');
 async function loadMetas(){
  await usemetas.getMetas();
  console.log(usemetas.metas);
}

const fetchItems = async () => {
    testemetas.value = await usemetas.metas;
    console.log(testemetas.value);
    };   
    fetchItems();


onBeforeMount(async() => {
        // getUserLogin();
        await loadMetas();
    });


 console.log(usemetas.metas.value);
 console.log(testemetas);
</script>

<template>

    

    <div class="main_content">
        <h2>Plano de tratamento</h2>
        <div class="metas_add">
            <h4>{{ metaselected }}</h4>
            <AutoComplete :resultmetas = "testemetas.value" v-model="metaselected"/>
            
        <!-- <label>
            <input name="metasProtocolo" class="input" id="metasProtocolo" v-model="protocolo.metas" type="text" placeholder="" required >
            <span>Metas</span>
        </label> -->
    </div>
    <div>
        <input type="radio" name="metas" v-model="protocolo.metas" value="ansiedade"> Ansiedade
        <input type="radio" name="metas" v-model="protocolo.metas" value="depressão"> Depressão
        <input type="radio" name="metas" v-model="protocolo.metas" value="organização"> Organização
        <div class="formulario">
            <!-- <label>
                <input name="metasProtocolo" class="input" id="metasProtocolo" v-model="protocolo.metas" type="text" placeholder="" required >
                <span>Metas</span>
            </label> -->
            <label>
                <input name="planosProtocolo" class="input" id="planosProtolo" v-model="protocolo.planos" type="text" placeholder="" required >
                <span>Protocolo</span>
            </label>
    
        </div>
    </div>
     {{ protocolo.planos }}
     {{ protocolo.metas }}
    </div>
</template>

<style scoped>
    .main_content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .formulario{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .metas_add{
        display: flex;
        flex-direction: row;
    }
</style>