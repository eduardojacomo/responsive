<template>
    <div class="main">
        <div class="formulario">
            <label>
                <!-- <input name="nomePaciente" v-model="pacienteData.nome" class="input" id="nomePaciente" type="text" placeholder="" required > -->
                <input v-model="filtro" placeholder="" class="input" required="false">
                <span>Nome</span>
            </label>
            <label>
                <!-- <input name="nomePaciente" v-model="pacienteData.nome" class="input" id="nomePaciente" type="text" placeholder="" required > -->
                <input v-model="filtro1" placeholder="" class="input" required>
                <span>teste</span>
            </label>
        </div>
        
        {{ filtro }}
        <div class="result">
            <ul>
        <li v-for="paciente in filteredPacientes" :key="paciente.id">
            {{ paciente.nome }}
            {{ paciente.cidade }}
         </li>
        </ul>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import api from '../services/api';
      
    const filtro = ref('');
    const pacientes = ref ([]);
    
    const fetchItems = async () => {
        const response = await api.get('/Paciente/PacientesCompleto');
        pacientes.value = await response.data;
    };   
    fetchItems();

    const filteredPacientes = computed(() => {
        return pacientes.value.filter((paciente) => paciente.nome.includes(filtro.value));
    });

</script>

<style scoped>
.filter{
    color: var(--color-text)
}
.main{
    display: flex;
    flex-direction: column;
    width: auto;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 50px 1rem 1rem 205px  ;
    align-items: center;
    /* position: absolute;
    align-content: center;
    text-align: center; */
    height:100%;
    /* background-color: white ; */
}
.result{
    display: flex;
}

</style>