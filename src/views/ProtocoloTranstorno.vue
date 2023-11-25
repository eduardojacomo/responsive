<script setup>
import { ref, computed} from 'vue'
import {useAcoesAdd} from '../store/modules/acoesStore'
import api from '../services/api';

const useacoesadd = useAcoesAdd();
const teste = ref('');
const acoes = ref ([]);

 function addacao(id, acao){
     useacoesadd.setAcoesAdd({
      id: id,
      acaoTerapia: acao,
      idMeta: "1"
    })
 }

const fetchItems = async () => {
        const response = await api.get('/AcaoTerapia/BuscarAcaoTerapia');
        acoes.value = await response.data;
    };   
    fetchItems();

const filteredAcoes = computed(()  => {
        return acoes.value.filter((acao) => acao.acaoTerapia.toLowerCase().includes(teste.value.toLowerCase()));
      });

async function loadacoes(){

}
</script>

<template>
    <div class="main_content">
        
        <div class="mountplan">
            <div class="formulario">
                <h2>Plano de tratamento</h2>
                <label>
                    <input name="planosProtocolo" class="input" id="planosProtolo" type="text" v-model="teste" placeholder="" required >
                    <span>Ações</span>
                </label>
            </div>

            <table id="acoes" class="table_acoes">
                <tr class="titulo_tabela">
                  <th>Acao</th>
                  <th> </th>
                </tr>
                <tr v-for="acoes in filteredAcoes" :key="acoes.id">
                  <td>{{acoes.acaoTerapia}}</td>
                  <td>
                    <button @click="addacao(acoes.id, acoes.acaoTerapia)" class="btn-table-pac"><font-awesome-icon icon="fa-solid fa-plus" /></button>
                  </td>
                </tr>
            </table>
        </div>
        <div class="acoesselected">
            <ul>
               <li v-for="a in useacoesadd.acaoadicionada" :key="a.id">
                        <input type="checkbox" class="checkacoes" :value="a.id" checked>
                        <label>{{ a.acaoTerapia }} </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>