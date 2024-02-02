<script setup>
import { reactive, ref, onBeforeMount, computed, watch } from 'vue';
import AutoComplete from './AutoComplete.vue';
import {useMetas, useMetasAdd} from '@/store/modules/metasStore';
import { useAcoesAdd, useAcoes} from '@/store/modules/acoesStore';
import { useProtocolos } from '../../store/modules/protocoloStore';
import {storeToRefs} from 'pinia';
import Toast from '../Tools/Toast.vue';
import Loader from '../Tools/Loader.vue';


const usemetas = useMetas();
const useacoes = useAcoes();
const usemetasadd = useMetasAdd();
const useacoesadd = useAcoesAdd();

const metaselected = ref('');
const metasadd = ref('');
const metanome = ref('');
const useprotocolos = useProtocolos();
const teste = ref('');
const temp = ref([]);
const message = ref('');
const titulo = ref('');
const state = ref(false);

const {refacao} = storeToRefs(useacoes);
const {acaoadicionada} = storeToRefs(useacoesadd);
const {setAcoes, getAcoes} = useacoes;
const {getAcoesAdd, setAcoesAdd, defaultAcoesAdd} =useacoesadd;

const {meta} = storeToRefs(usemetas);
const {metaadicionada} = storeToRefs(usemetas);
const {setMetas, getMetas} = usemetas;
const {getMetasAdd, defaultMetasAdd} = usemetasadd;


const {setProtocolos, getProtocolos, getProtocolosbyMeta} = useprotocolos;
const {protbymeta, loader, respServer} = storeToRefs(useprotocolos);


const focus = ref(null);
const data = ref([acaoadicionada]);
const groupedData = ref([]);

async function getProtbyMetas(idmeta) {
      const tempProtocolo = protbymeta.value
        .filter((protocolo) => protocolo.iD_Meta === idmeta)
        .map((protocolo) => {
          const tempmeta = meta.value.find((m) => m.id === protocolo.iD_Meta);
          const acaotemp = refacao.value.find((a) => a.id === protocolo.iD_Acao);

          return {
            ...protocolo,
            metaTerapia: tempmeta.metaTerapia,
            acaoTerapia: acaotemp.acaoTerapia,
          };
        });
        return tempProtocolo
    }


function addacao(id, acao){
    if (!metasadd.value){
        alert("Não foi informada a meta")
    }
    else{
        const verifyacoes = acaoadicionada.value.filter((v)=> v.id === id && v.idMeta === metasadd.value)
        if (verifyacoes.length===0){
            setAcoesAdd({
             id: id,
             acaoTerapia: acao,
             idMeta: metasadd.value,
             metaTerapia: metanome.value,
             status:'I'
            })
            focusInput();
        }
        else {
            alert("Ação já foi adicionada para essa meta");
        }
        
    } 
 }

 const filteredAcoes = computed(()  => {
        if (!refacao) {
            return [];
        }
         return refacao.value.filter((a) => a.acaoTerapia.toLowerCase().includes(teste.value.toLowerCase()));
     });

function focusInput() {  
    focus.value.focus();
};

async function selectedMetas(id, metaTerapia){
    metasadd.value=id;
    metanome.value=metaTerapia;
    if(acaoadicionada.value.length == 0 || !(acaoadicionada.value.some((a)=> a.idMeta === id))){
        await getProtocolos();
        await getProtocolosbyMeta(id);
        temp.value = await getProtbyMetas(id);
        if (temp.value){
             temp.value.forEach(element => {
                 setAcoesAdd({
                  id: element.iD_Acao,
                  acaoTerapia: element.acaoTerapia,
                  idMeta: element.iD_Meta,
                  metaTerapia: element.metaTerapia,
                  status:'U'
                 })
             });
         }
    }
    
}

function groupDataByCategory() {
                    groupedData.value = acaoadicionada.value.reduce((acc, cur) => {
                        const category = cur.metaTerapia;
                        if (!acc[category]) {
                            acc[category] = [];
                        }
                        acc[category].push(cur);
                        return acc;
                    }, {});
                }

async function addAcoes(){
    if (!refacao) {
            return [];
        }
    const verifyacoes = refacao.value.filter((a) => a.acaoTerapia.toLowerCase().includes(teste.value.toLowerCase()));
    if(teste.value && verifyacoes.length===0){
        await setAcoes({
            acaoTerapia:teste.value,
            status:"A"
        })
    }
    await getAcoes();
}

 watch(data.value, (newValue, oldValue) => {
     console.log(newValue);
    
   groupDataByCategory();
});

async function addProtocolo(){
    console.log(acaoadicionada.value);
    const storage = localStorage.setItem("protocolo", JSON.stringify(data.value));

    const newprotocolo = acaoadicionada.value.filter(protocolo => protocolo.status === 'I').map((protocolo) => ({
        iD_Meta: protocolo.idMeta,
        iD_Acao: protocolo.id,
        status: 'A',
    }));
    await setProtocolos(newprotocolo);
    localStorage.removeItem("protocolo");
    localStorage.removeItem("metaadicionadatemp");
    localStorage.removeItem("protocolotemp");
    responseServer();
}

async function responseServer(){
    if (respServer.value === 200){
        message.value = "Protocolo Adicionado com sucesso";
        titulo.value= "Sucesso";
        loader.value = false;
        defaultMetasAdd();
        defaultAcoesAdd();
        showToast()
    }
    else
    {
        message.value = "Não foi possivel salvar os dados";
        titulo.value= "Erro";
        loader.value;
        showToast();

    }
}

function showToast(){
    // if (respServer.value === 200){
    //     message.value = "Protocolo Adicionado com sucesso";
    //     titulo.value= "Sucesso";
        
    //     loader.value = false;
    //     defaultMetasAdd();
    //     defaultAcoesAdd();
    // }
    
    state.value = !state.value;
    
    setTimeout(()=>{
        state.value = !state.value;
    }, 5000);

    
}


onBeforeMount(async() => {
        
        await getAcoes();
        await getAcoesAdd();
        await groupDataByCategory();
        await getMetas();
        await getMetasAdd();
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
                <AutoComplete v-model="metaselected"/>

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
                            <button type="submit" @click="addAcoes"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                        </div>
                    
                    </div>
                
                    <div class="tabela_acoes">
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
                <h2>Plano de Tratamento </h2>
                <div>
    
                        <!-- <h4 v-if="metasadd">{{ metanome }}</h4> -->
                        <ul>
                        <li v-for="(group, metaTerapia) in groupedData" :key="metaTerapia">
                            <h3 v-if="metaTerapia">{{ metaTerapia }}</h3> 
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
            <div>
                <button @click="addProtocolo">Cadastrar</button>
                <button @click="showToast">teste</button>
            </div>
        </div>
           
        
        
        <transition :duration="550" name="nested">
            <div v-show="state" class="inner">
                <Toast :msg="message" :titulo="titulo" />
    
            </div>

        </transition>
        <div class="loader">
            <Loader v-if="loader"/>
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
    .mountplan{
        width: 33%;
    }   

    .showplan{
        width: 67%;
        height: 600px;
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

  .loader{
    display: flex;
    position:absolute;
    top:50%;
    left:50%;
    z-index: 200;
  }

    .metas_add{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .metasadd_container{
        display: flex;
        gap: .5rem;
        flex-wrap: wrap;
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

    
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active.inner{
    transition: all 0.3s ease-in-out;
}

.inner { 
display: flex;
position: absolute;
right: 300px;     
z-index: 50;
}

.nested-enter-active .inner {
	transition-delay: 0.25s;
}
.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(25px);
  opacity: 0.001;
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