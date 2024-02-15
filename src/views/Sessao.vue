<script setup>
    import {ref, onMounted, computed} from 'vue' 
    import Tab from '../components/Tabs/Tab.vue'
    import TabWrapper from '../components/Tabs/TabWrapper.vue'
    import { usePacientes} from '@/store/modules/pacienteStore';
    import {storeToRefs} from 'pinia';
    import { useSessao } from '../store/modules/sessaoStore';
    import {useGuid} from '@/store/guidGenerate'

    const usepacientes = usePacientes();
    const {getPacientes, getPAcientebyId} = usepacientes;
    const {paciente, pacientebyid, idpaciente} = storeToRefs(usepacientes);
    const usesessao = useSessao();
    const {getSessoes, setSessoes, getSessoesbyPaciente} = usesessao;
    const {sessao, sessaobyPaciente, sessoes} = storeToRefs(usesessao);
    const useguid = useGuid();
    const {uuidv4} = useguid;
    const {guid} = storeToRefs(useguid);
   

    const dataSessao = ref('');
    const horaSessao = ref('');
    const registroSessao = ref('');
    const selectpac = ref('');
    const pacadd = ref([]);
    const isOpen = ref(false);
    const showpac = ref(false)
    const searchPaciente = computed(() => {
       return paciente.value.filter((p) => p.nome.toLowerCase().includes(selectpac.value.toLowerCase()));
     });

    
    async function setSessao(){
        if(dataSessao.value && horaSessao.value && registroSessao.value){
            // sessoes.value.codigoPaciente = pacadd.value.id;
            // sessoes.value.codigoProfissional = 1;
            // sessoes.value.status = "A";
            // sessoes.value.dataSessao = dataSessao.value;
            // sessoes.value.horaSessao = horaSessao.value;
            // sessoes.value.registro = registroSessao.value;
            await setSessoes({
                codigoPaciente: pacadd.value.id,
                codigoProfissional: 1,
                status: "A",
                dataSessao: dataSessao.value,
                horaSessao: horaSessao.value,
                registro: registroSessao.value
            });

        }else {
            alert('falta dados')
        }
    }
    // const searchPaciente = computed(async ()=> {
  
    //     if (selectpac.value == ''){
    //     return[]
    // }
    
    // const filteredPacientes = await paciente.value.filter((item) => {
    // const isNotInPacienteSelecionado = !pacienteselecionado.value.some((pacienteselecionado) => pacienteselecionado.id === item.id);
    // const hasMatchingKeyword = item.nome.toLowerCase().includes(selectpac.value.toLowerCase());
    // return isNotInPacienteSelecionado && hasMatchingKeyword;

    // })
//   console.log(filteredPacientes);
//   return filteredPacientes;
//  });

const handleeInput = event =>{
  isOpen.value = true
  selectpac.value = event.target.value
};

async function setSelected(pacselected){
    pacadd.value = pacselected;
    
    console.log(pacselected);
    isOpen.value = false;
    showpac.value = true;
    console.log(pacadd.value.id)
    await getSessoesbyPaciente(pacadd.value.id);
    console.log(sessao.value);

}

onMounted(async() => {
    await getPacientes();
    }  
);
</script>

<template>
    <div class="main">
        <div class="sessao">
            <div class="paciente">
                <h2>Selecionar o paciente</h2>
                <div class="formulario localizapaciente">
                    <label>
                        <input name="selecionapaciente" id="selecionapac" class="input" type="text" placeholder="" required
                            autocomplete="off"
                            :value="modelValue"
                            @input="handleeInput"
                            ref="focus"
                            @focus="$event.target.select()"
                            onfocus="this.value=''"
                        >
                        <span>Paciente</span>
                    </label>

                </div>
                <div class="pacienteResult" v-if="isOpen">
                    <ul>
                        <li v-for="result in searchPaciente" :key="result.id" @click="setSelected(result)">
                            <button>
                                {{result.nome}}

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
                            <h4>{{pacadd.email}}</h4>
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
                        <h4  class="titulo_card">Hora Terapia: </h4>
                        <h4>10:00</h4>
                    </div>
                    <div class="rows">
                        <h4  class="titulo_card">Tipo: </h4>
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
                                    <input name="dataSessao" class="input" type="date" placeholder="" required v-model="dataSessao" >
                                    <span>Data da Sessao</span>
                                </label>
                                <label>
                                    <input name="horaSessao" class="input" type="time" placeholder="" required v-model="horaSessao" >
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
                        <div v-show="sessaobyPaciente">
                            <ul>
                            <li v-for="s in sessaobyPaciente" :key="s.id">{{s.numeroSessao}}|{{ s.registro }}</li>
                            
                        </ul>
                        </div>
                    </tab>
                </TabWrapper>

            </div>
        </div>
    </div>
</template>

<style scoped>
    .main{
        padding: 0 0 0 .5rem;
    }

    .sessao{
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 2rem;
    }

    .paciente{
        display: flex;
        flex-direction: column;
        padding: 0 1rem 0 0;
        width: 300px;
    }
    #selecionapac{
        width: 280px;
    }
    .content{
        display: flex;
        min-width: 730px;
    }

    .formulario{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .pacienteResult{
        display: flex;
        position: relative;
        width: 280px;
        top: 10px;
        border: solid 1px var(--color-border);
        background-color: var(--color-background-soft);
        gap: 0.5rem;
     
    }

    .pacienteResult li{
        list-style-type: none;
        font-size: medium;
        margin-left: -40px;
        
    }
    
    .pacienteResult button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: var(--color-text);
        width: 280px;
        height: 30px;
        text-align: left;
        padding: 0 20px;
    }

    .pacienteResult button:hover{
        background-color: var(--color-detail2-blue);
    }

.pacselecionado{
    display: flex;
    flex-direction: column;
    width: 280px;
    border: solid 1px var(--color-border);
    background-color: var(--color-background-soft);
    border-radius: 8px;
    
    padding: 5px 10px;
    margin-top: 10px;
}
.rows{
    display: flex;
    gap:.5rem
}

.separador {
    border-top: solid 1px var(--color-border);
    margin: 5px 0;
}

.card_data{
    display: flex;
    flex-direction: column;
}
.titulo_card{
    font-weight: bold;
}
.avatar_pac{
    width: 80px;
    height: 80px;
    vertical-align: middle;
    border: solid 1px var(--color-border);
    border-radius: 50%;
}

.botoes{
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
}
.btn-salvar{
    padding: 10px;
    background: var(--color-detail2-blue);
    color: var(color-text);
    font-size: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
}

.btn-descartar{
    padding: 10px;
    background: var(--color-detail1-red);
    color: var(color-text);
    font-size: 14px;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    width: 150px;
    cursor: pointer;
}


</style>