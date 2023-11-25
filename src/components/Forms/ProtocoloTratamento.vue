<script setup>
import { reactive, ref, onBeforeMount, computed, watch } from 'vue';
import AutoComplete from './AutoComplete.vue';
import {useMetas, useMetasAdd} from '@/store/modules/metasStore'
import { useAcoesAdd, useAcoes} from '@/store/modules/acoesStore'
import api from '../../services/api';

const usemetas = useMetas();
const useacoes = useAcoes();
const usemetasadd = useMetasAdd();
const useacoesadd = useAcoesAdd();
const testemetas = reactive ({});
const metaselected = ref('');
const metasadd = ref('');
const metanome = ref('');

const teste = ref('');
const acoes = ref ([]);
const focus = ref(null);
const componentKey = ref(0);

const forceRerender = () => {
  componentKey.value += 1;
};

 function addacao(id, acao){

    if (!metasadd.value){
        alert("Não foi informada a meta")
    }
    else{
        useacoesadd.setAcoesAdd({
         id: id,
         acaoTerapia: acao,
         idMeta: metasadd.value,
         metaTerapia: metanome.value,
        })
        focusInput();
    }

 }

const fetchAcoes = async () => {
        const response = await api.get('/AcaoTerapia/BuscarAcaoTerapia');
        acoes.value = await response.data;
    };   
    fetchAcoes();

const filteredAcoes = computed(()  => {
        return acoes.value.filter((acao) => acao.acaoTerapia.toLowerCase().includes(teste.value.toLowerCase()));

      });

function focusInput() {
  
    focus.value.focus();
  
};

function selectedMetas(id, metaTerapia){
    metasadd.value=id;
    metanome.value=metaTerapia;
    console.log(metasadd.value);
    console.log(metanome.value);
    // metabyId(id);
}

 async function loadMetas(){
  await usemetas.getMetas();
}

const data = ref(useacoesadd.acaoadicionada);
const groupedData = ref([])
function groupDataByCategory() {
                    groupedData.value = data.value.reduce((acc, cur) => {
                        const category = cur.metaTerapia;
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(cur);
                        return acc;
                    }, {});
                    console.log("data by group")
                    console.log(groupedData)
                }

const fetchItems = async () => {
    testemetas.value = await usemetas.metas;
    // testeacoes.value = await useacoes.acoes;
    };   
    fetchItems();

function setAcoes(){
    const verifyacoes = acoes.value.filter((acao) => acao.acaoTerapia.toLowerCase().includes(teste.value.toLowerCase()));
    if(teste.value && verifyacoes.length===0){
        useacoes.setAcoes({
            acaoTerapia:teste.value,
            status:"A"
        })
    }
    fetchAcoes();    
}

watch(data.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
  groupDataByCategory();
});

onBeforeMount(async() => {
        await loadMetas();  
    });

</script>

<template>
    <div class="main_content">
        
        <div class="mountplan">
            <div class="formulario">
                <h2>Plano de tratamento</h2>
                <!-- <label>
                    <input name="planosProtocolo" class="input" id="planosProtolo" type="text" placeholder="" required >
                    <span>Plano Tratamento</span>
                </label> -->
            </div>
        
            <div class="metas_add">
                <AutoComplete :resultmetas = "testemetas.value" v-model="metaselected" :key="componentKey" />

                <div class="metasadd_container">
                    <div  v-for="m in usemetasadd.metaadicionada" :key="m.id" class="box">
                        <label @click="selectedMetas(m.id, m.metaTerapia)">
                            {{ m.metaTerapia }}
                        </label>
                        <input type="radio" class="checkmetas" name="metasadd" :value="m.id" v-model="m.id" checked=""
                        > 
                    </div>
                </div>
            </div>

            <div class="acoes__add">
                <div class="form_acoes">
                <div>
                    <h2>Inserir ações</h2>
                </div>
                <div class="formulario">
                    <label>
                        <input name="planosProtocolo" class="input" id="planosProtolo" type="text" v-model="teste" 
                        ref="focus" placeholder="" required
                        @focus="$event.target.select()" >
                        <span>Ações</span>
                    </label>
                    <button type="submit" @click="setAcoes"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                </div>
                
            </div>

            <div>
                <table id="acoes" class="table_acoes">
                    <tr class="titulo_tabela">
                    <th>Acao</th>
                    <th> </th>
                    </tr>
                    <tr v-for="a in filteredAcoes" :key="a.id">
                    <td>{{a.acaoTerapia}}</td>
                    <td>
                        <button @click="addacao(a.id, a.acaoTerapia)" class="btn-table-pac"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                    </td>
                    </tr>
                </table>
            </div>

            </div>
            
        </div>

        <div class="showplan">
            <div class="wordstyle">
                <h3>Protocolo de Tratamento </h3>
                <div>
    
                     <h4 v-if="metasadd">{{ metanome }}</h4>
                     <!-- {{ metabyId(metasadd) }} -->
                     <ul>
                        <li v-for="(group, metaTerapia) in groupedData" :key="metaTerapia">
                            <h3 v-if="metaTerapia">{{ metaTerapia }}</h3> 
                            <!-- {{ metabyId(idMeta) }} -->
                            <ul>
                                <li v-for="item in group" :key="item.id">
                                    <input type="checkbox" class="checkacoes" :value="item.id" checked>
                                    <label>{{ item.acaoTerapia }}</label>
                                </li>
                            </ul>
                        </li>
                    </ul>
    
                </div>

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

    .showplan{
        width: 100%;
        height: 550px;
    }

    .form_acoes{
        display: flex;
        flex-direction: column;
    }
    .formulario{
        display: flex;
        flex-direction: row;
    }

    .formulario label .input {
        width: 20vw;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .formulario button {
        float: left;
        width: 20%;
        padding: 10px;
        background: var(--color-detail2-blue);
        color: var(color-text);
        font-size: 17px;
        border: 1px solid var(--color-border2);
        border-left: none; /* Prevent double borders */
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }

  .formulario button:hover {
    background: var(--color-detail1-blue);
  }

    .metas_add{
        display: flex;
        flex-direction: column;
        gap: 1rem;
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

    .wordstyle{
        display: flex;
        flex-direction: column;
        background-color: var(--color-background-mute);
        border: solid 1px var(--color-border);
        box-shadow: 0px 0px 5px 0px var(--tema2-divider-dark-2);
        width: 100%;
        height: 100%;
        margin: 1rem 0;
        padding: 1rem;
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