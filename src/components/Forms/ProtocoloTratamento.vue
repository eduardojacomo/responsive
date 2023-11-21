<script setup>
import { reactive, ref, onBeforeMount } from 'vue';
import {useProtocolo} from '@/store/modules/protocoloStore';
import AutoComplete from './AutoComplete.vue';
import AutoCompleteAcoes from './AutoCompleteAcoes.vue';
import {useMetas, useMetasAdd} from '@/store/modules/metasStore'
import {useAcoes, useAcoesAdd} from '@/store/modules/acoesStore'

const usemetas = useMetas();
const usemetasadd = useMetasAdd();
const useacoes = useAcoes();
const useacoesadd = useAcoesAdd();
const testemetas = reactive ({});
const testeacoes = reactive ({});
// const searchmetas = ref('');
// const useprotocolo= useProtocolo();
 const planos = reactive({
     metas:'',
     acoes:'',
     concluido:'',
     status: ''
 });
const metaselected = ref('');
const metasadd = ref('');
const acaoselected = ref('');
const acoesadd = ref('');



function selectedMetas(id){
    console.log(id);
    metasadd.value=id;
}

function selectedAcoes(id){
    console.log(id);
    acoesaddadd.value=id;
    planos.metas.value = metasadd.value;
    planos.acoes.value = acoesadd.value;
    planos.concluido = '0';
    planos.status = 'A';
}

 async function loadMetas(){
  await usemetas.getMetas();
}

// const loadMetasAdd= async() => {
//   await usemetas.metaadicionada;
// }
// loadMetasAdd();
async function loadAcoes(){
  await useacoes.getAcoes();
}

const fetchItems = async () => {
    testemetas.value = await usemetas.metas;
    testeacoes.value = await useacoes.acoes;
    };   
    fetchItems();

onBeforeMount(async() => {
        // getUserLogin();
        await loadMetas();
        await loadAcoes();
    });
</script>

<template>
    <div class="main_content">
        
        <div class="mountplan">
            <div class="formulario">
                <h2>Plano de tratamento</h2>
                <label>
                    <input name="planosProtocolo" class="input" id="planosProtolo" type="text" placeholder="" required >
                    <span>Protocolo</span>
                </label>
            </div>
        
            <div class="metas_add">
                <AutoComplete :resultmetas = "testemetas.value" v-model="metaselected"/>
            </div>

            <div class="metas_add">
                <AutoCompleteAcoes :resultacoes = "testeacoes.value" v-model="acaoselected"/>
            </div>
            
        </div>

        <div class="showplan">
            <h3>Protocolo de Tratamento </h3>
            <div class="metasadd_container">
                <div  v-for="m in usemetasadd.metaadicionada"  :key="m.id" class="box">
                    <label @click="selectedMetas(m.id)">
                        {{ m.metaTerapia }}
                    </label>
                    <input type="radio" class="checkmetas" name="metasadd" :value="m.id" v-model="m.id" checked=""> 
                </div>
            </div>
            <div v-show="metasadd >0">

                 <h4>{{ metasadd }}</h4>
                 

            </div>
            <div>
                <ul>
                    <li v-for="a in useacoesadd.acaoadicionada" :key="a.id">
                        <input type="checkbox" class="checkacoes" :value="a.id" checked>
                        <label>{{ a.acaoTerapia }} </label>
                    </li>
                 </ul>
            </div>
            
        </div>
        
    
    </div>
</template>

<style scoped>
    .main_content{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
    }
    .showplan, .mountplan {
        display: flex;
        flex-direction: column;
        gap:1rem;
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

    .metasadd_container{
        display: flex;
        gap: .5rem;
    }

    .box{
        display: flex;
        gap: .5rem;
        flex-direction: column;
    }

    .checkmetas{
    
       display: none;

    /* visibility: hidden; */
  }
  .box label {
    background-color: var(--color-background-mute);
	color: var(--color-text);
	font-size: 14px;
	line-height: 1;
	text-align: center;
	padding: 8px 16px;
	margin-right: -1px;
	border: 1px solid var(--color-border);
    cursor:pointer;
	/* transition: all 0.1s ease-in-out; */
  }

    .box label:hover {
        border-color: var(--color-detail2-blue);
    }
    .box .checkmetas:checked + label{
		background-color: var(--color-detail2-blue); 
		color: var(--color-text1);
		border-color: var(--tema-border);
	}
    /* .checkmetas{
        display: none;      
         
    } */

    /* .metasadd_container label{
        color: var(--color-text);
        font-size: 14px;
        padding: 1rem;
        border: solid 1px var(--color-detail2-blue);
        background-color: var(--color-background);
        cursor: pointer;
        display: flex;
        width: 100px;
        height: 70px;
        flex-direction: column;
    }

    .checkmetas:checked, .metasadd_container label {
        background-color: var(--color-detail2-blue);
        transition: all 300ms ease-in-out;
    } */
</style>