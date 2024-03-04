<script setup>
import { ref, onMounted, computed } from 'vue'
import Tab from '../components/Tabs/Tab.vue'
import TabWrapper from '../components/Tabs/TabWrapper.vue'
import { usePacientes } from '@/store/modules/pacienteStore';
import { storeToRefs } from 'pinia';
import { useSessao } from '../store/modules/sessaoStore';
import Toast from '@/components/Tools/Toast.vue';
import Loader from '@/components/Tools/Loader.vue';

const usepacientes = usePacientes();
const { getPacientes, getPAcientebyId } = usepacientes;
const { paciente, pacientebyid, idpaciente } = storeToRefs(usepacientes);
const usesessao = useSessao();
const { getSessoes, setSessoes, getSessoesbyPaciente } = usesessao;
const { sessao, sessaobyPaciente, sessaoData, loader, respServer } = storeToRefs(usesessao);

const message = ref('');
const titulo = ref('');
const state = ref(false);
const dataSessao = ref('');
const horaSessao = ref('');
const registroSessao = ref('');
const selectpac = ref('');
const pacadd = ref([]);
const isOpen = ref(false);
const showContent = ref(false);
const showpac = ref(false);
const idselect = ref(0);
const searchPaciente = computed(() => {
    return paciente.value.filter((p) => p.nome.toLowerCase().includes(selectpac.value.toLowerCase()));
});


async function setSessao() {
    if (dataSessao.value && horaSessao.value && registroSessao.value) {
        sessaoData.value.horaSessao = horaSessao.value;
        sessaoData.value.codigoPaciente = pacadd.value.id;
        sessaoData.value.codigoProfissional = 1;
        sessaoData.value.status = "A";
        sessaoData.value.dataSessao = dataSessao.value;
        sessaoData.value.registro = registroSessao.value;
        await setSessoes(sessaoData.value);
        await responseServer();
    } else {
        alert('falta dados')
    }
}

function showhideContent(tempid){
    showContent.value = !showContent.value;
    idselect.value = tempid
}
const handleeInput = event => {
    isOpen.value = true
    selectpac.value = event.target.value
};

async function setSelected(pacselected) {
    pacadd.value = pacselected;
    isOpen.value = false;
    showpac.value = true;
    await getSessoesbyPaciente(pacadd.value.id);
}

async function responseServer(){
    if (respServer.value === 200){
        message.value = "Sessao Adicionada com sucesso";
        titulo.value= "Sucesso";
        loader.value = false;
        showToast()
    }
    else
    {
        message.value = "Não foi possivel salvar os dados";
        titulo.value= "Erro";
        loader.value = false;
        showToast();

    }
}


function showToast(){
    state.value = !state.value;
    setTimeout(()=>{
        state.value = !state.value;
    }, 5000);
}

onMounted(async () => {
    await getPacientes();
}
);
</script>

<template>
    <div class="main">
        <transition :duration="550" name="nested">
            <div v-show="state" class="inner">
                <Toast :msg="message" :titulo="titulo" />
    
            </div>

        </transition>
        <div class="loader">
            <Loader v-if="loader"/>
        </div>
        <div class="sessao">
            <div class="paciente">
                <h2>Selecionar o paciente</h2>
                <div class="formulario localizapaciente">
                    <label>
                        <input name="selecionapaciente" id="selecionapac" class="input" type="text" placeholder="" required
                            autocomplete="off" :value="modelValue" @input="handleeInput" ref="focus"
                            @focus="$event.target.select()" onfocus="this.value=''">
                        <span>Paciente</span>
                    </label>

                </div>
                <div class="pacienteResult" v-if="isOpen">
                    <ul>
                        <li v-for="result in searchPaciente" :key="result.id" @click="setSelected(result)">
                            <button>
                                {{ result.nome }}

                            </button>
                        </li>
                    </ul>
                </div>
                <div class="pacselecionado" v-if="showpac">
                    <div class="rows">
                        <img src="../assets/p1.png" class="avatar_pac">
                        <div class="card_data">
                            <h3>{{ pacadd.nome }}</h3>
                            <h4>{{ pacadd.celular }}</h4>
                            <h4>{{ pacadd.email }}</h4>
                        </div>
                    </div>
                    <div class="separador">
                        <p></p>
                    </div>
                    <div class="rows">
                        <h4 class="titulo_card">Dia Terapia: </h4>
                        <h4>Terça-Feira</h4>
                    </div>
                    <div class="rows">
                        <h4 class="titulo_card">Hora Terapia: </h4>
                        <h4>10:00</h4>
                    </div>
                    <div class="rows">
                        <h4 class="titulo_card">Tipo: </h4>
                        <h4>Presencial</h4>
                    </div>
                </div>
            </div>
            <div class="content">
                <TabWrapper>
                    <tab title='Registro de Sessao'>
                        <div class="formulario">
                            <h2>Registro</h2>
                            <div class="rows">
                                <label>
                                    <input name="dataSessao" class="input" type="date" placeholder="" required
                                        v-model="dataSessao">
                                    <span>Data da Sessao</span>
                                </label>
                                <label>
                                    <input name="horaSessao" class="input" type="time" placeholder="" required
                                        v-model="horaSessao">
                                    <span>Hora</span>
                                </label>
                            </div>
                            <label>
                                <!-- <input name="Registro da Sessao" class="input" type="text" placeholder="" required >
                                <span>Registro da Sessao</span> -->
                                <textarea class="textarea" v-model="registroSessao"></textarea>
                                <span>Registro da Sessao</span>
                            </label>

                            <div class="botoes">

                                <button class="btn-descartar">Descartar</button>
                                <button class="btn-salvar" @click="setSessao">Salvar</button>
                            </div>
                        </div>
                    </tab>
                    <tab title='Plano de Tratamento'>
                        <h2>Registro</h2>
                    </tab>
                    <tab title='Prontuário'>
                        <div v-show="sessaobyPaciente" class="prontuario">
                            <ul>
                                <li v-for="s in sessaobyPaciente" :key="s.id" class="accordion_itens">
                                    <div class="historico">
                                        <button class="accordion" @click="showhideContent(s.id)">
                                            <div class="button_accordion">

                                                <div class="tittle_accordion">
                                                    <font-awesome-icon icon="fa-solid fa-notes-medical" />
                                                    Número da Sessão: {{ s.numeroSessao }}| Data da Sessão:{{ s.dataSessao
                                                    }}
                                                </div>
                                                <div class="button_icon">
                                                    <font-awesome-icon icon="fa-solid fa-caret-down" />

                                                </div>
                                            </div>
                                            <div v-if="showContent && s.id==idselect" class="content_accordion">
                                                {{ s.registro }}
                                            </div>
                                        </button>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </tab>
                </TabWrapper>

            </div>
        </div>
    </div>
</template>

<style scoped>
.main {
    padding: 0 0 0 .5rem;
}

.sessao {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 2rem;
}

.paciente {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 0 0;
    width: 300px;
}

#selecionapac {
    width: 280px;
}

.content {
    display: flex;
    min-width: 730px;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.pacienteResult {
    display: flex;
    position: relative;
    width: 280px;
    top: 10px;
    border: solid 1px var(--color-border);
    background-color: var(--color-background-soft);
    gap: 0.5rem;

}

.pacienteResult li {
    list-style-type: none;
    font-size: medium;
    margin-left: -40px;

}

.pacienteResult button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--color-text);
    width: 280px;
    height: 30px;
    text-align: left;
    padding: 0 20px;
}

.pacienteResult button:hover {
    background-color: var(--color-detail2-blue);
}

.pacselecionado {
    display: flex;
    flex-direction: column;
    width: 280px;
    border: solid 1px var(--color-border);
    background-color: var(--color-background-soft);
    border-radius: 8px;

    padding: 5px 10px;
    margin-top: 10px;
}

.rows {
    display: flex;
    gap: .5rem
}

.separador {
    border-top: solid 1px var(--color-border);
    margin: 5px 0;
}

.card_data {
    display: flex;
    flex-direction: column;
}

.titulo_card {
    font-weight: bold;
}

.avatar_pac {
    width: 80px;
    height: 80px;
    vertical-align: middle;
    border: solid 1px var(--color-border);
    border-radius: 50%;
}

.botoes {
    display: flex;
    justify-content: space-between;
    gap: .5rem;

}

.btn-salvar {
    padding: 10px;
    background: var(--color-detail2-blue);
    color: var(color-text);
    font-size: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
}

.btn-descartar {
    padding: 10px;
    background: var(--color-detail1-red);
    color: var(color-text);
    font-size: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
}
.prontuario{
    display: flex;
    width: 100%;
    padding: .5rem;
}
.historico {
    display: flex;
    width: 100%;
    flex-direction: column;
}

.accordion {
    /* background-color: var(--color-background-mute); */
   

    /* border: solid 1px var(--color-border); */
    border: none;
    border-bottom: solid 1px var(--color-border);
    background-color: transparent;
    cursor: pointer;
    padding: 16px;
    /* margin: .5rem 0 0 0; */
    width: 100%;
    text-align: left;
    color: var(--color-text);
}

.button_accordion{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    
}

.tittle_accordion{
    display: flex;
    /* gap: 0.5rem; */
    text-align: left;
    margin-bottom: .5rem;
    
}

.content_accordion{
    display: flex;
    padding: 1rem 0.5rem;
    text-align: left;
    /* border: solid 1px var(--color-border); */
    background-color: var(--color-background-mute);
    border-top: none;    
}
.button_icon{
    display: flex;
}

input {
    color-scheme: dark;
}
/* input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
} */

.accordion_itens{
    list-style-type: none;
    width: 600px;
    padding: 0 0.5rem 0 -100px
}

.loader{
    display: flex;
    position:absolute;
    top:50%;
    left:50%;
    z-index: 200;
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
</style>