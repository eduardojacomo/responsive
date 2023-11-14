<script setup>
import Tab from '../components/Tabs/Tab.vue';
import TabWrapper from '../components/Tabs/TabWrapper.vue';
import GeraisPaciente from '../components/Forms/GeraisPaciente.vue';
import ProtocoloTratamento from '../components/Forms/ProtocoloTratamento.vue'

name:"CadastroPaciente"
const props = defineProps({
            id: Number,
            required: true
        })


</script>


<template>
    <div class="main">
        <h2>Cadastro de Pacientes</h2>
        <div class="tab-cad">
            <TabWrapper>
                <tab title="Gerais">
                    <div :v-if='id!=0'>
                        <GeraisPaciente :idpac=id />
                    </div>
                    <!-- <div :v-if='id==0'>
                        <GeraisPaciente />

                    </div> -->
                   
                </tab>
    
                <tab title="Financeiro">
    
                </tab>
                <tab title="Terapia">
                    <ProtocoloTratamento />
                </tab>
                <tab title="Documentos">
    
                </tab>
    
            </TabWrapper>
        </div>

        
    </div>
</template>

<style scoped>

.main{
    
    padding: 50px 1rem 0 200px;
}

.tab-cad{
    padding: 1rem 1rem 0.5rem 0;
    
}



@media screen and (max-width: 450px) {
    form{
        flex-direction: column;
    }
    .formulario{
        padding: 0.5rem;
    }
   

    .campos{
        width: 100%;
        margin-top: 1rem;
    }
    .row{
        gap: 0.5rem;
        display: flex;
        flex-direction: row;
        
    }

    #nomePaciente, #rua_pac{
        width: 100vw;
    }
    .formulario input {
        width: 100vw;
    }

  .custom-select {
    width: 72vw;
  }

  .btnconfirmar{
    margin-right: 4px;
}

}

</style>