<script setup>
import { computed, ref, reactive, onMounted} from 'vue'
import {useMetasAdd, useMetas} from '@/store/modules/metasStore'
import {storeToRefs} from 'pinia';
import { useProtocolos } from '../../store/modules/protocoloStore';

const props = defineProps({
  resultmetas: {
    type: Array,
    required: true,
    default : () =>[],
  },
  modelValue: String
})
const usemetasadd = useMetasAdd();
const emit = defineEmits(['update:modelValue']);
const keyword = ref('');
const itemselected = reactive({});
const focus = ref(null);
const usemetas = useMetas();

const {meta} = storeToRefs(usemetas);
const {metaadicionada} = storeToRefs(usemetasadd);
const {setMetas, getMetas} = usemetas;
const {setMetasAdd} = usemetasadd;

const useprotocolos = useProtocolos();
const {protocolo, protMetas} = storeToRefs(useprotocolos);
const {setProtocolos, getProtocolos, getProtocolosbyMeta} = useprotocolos;

const searchResult = computed(() => {
  // console.log(metaadicionada)
  if (keyword.value == '' || !metaadicionada){
    return[]
  }
  
  const filteredMetas = meta.value.filter((item) => {
    const isNotInMetaAdicionada = !metaadicionada.value.some((metaAdicionada) => metaAdicionada.id === item.id);
    const hasMatchingKeyword = item.metaTerapia.toLowerCase().includes(keyword.value.toLowerCase());
    return isNotInMetaAdicionada && hasMatchingKeyword;
  })
  console.log(filteredMetas);
  return filteredMetas;
  });

    // if (meta.value.filter((item)=> {
      // if (item.metaTerapia.toLowerCase().includes(keyword.value.toLowerCase()) )
      // {
      //   console.log('item result print')
      //   console.log(item)
      //   return item
      // }

const isOpen = ref(false);

const setSelected = item =>{
  isOpen.value=false
  keyword.value = item.metaTerapia;
  itemselected.value = item;
  console.log(itemselected.value);
  emit('update:modelValue', keyword.value)
};

const handleeInput = event =>{
  isOpen.value = true
  keyword.value = event.target.value
  emit('update:modelValue', keyword.value)
};

function focusInput() {
  
  focus.value.focus();

};

function limpaItemSelected(){
  itemselected.value.id='0';
  itemselected.value.metaTerapia='Meta';
  itemselected.value.status='I';
  keyword.value = ''
}

function addMetas(){

  if (typeof itemselected === "undefined") {
    alert("myObj is undefined");
 }

  if (itemselected.value.id>0){
    setMetasAdd({
      id: itemselected.value.id,
      metaTerapia: itemselected.value.metaTerapia
      
    })
    getProtocolosbyMeta(itemselected.value.id);
    console.log(protMetas.value);
    focusInput();
    // limpaItemSelected();
  }
  else {
    if (keyword.value){
      setMetas({
         metaTerapia: keyword.value,
         status: 'A',
        })
      
    }
    alert ('Não foi possivel encontrar a meta')
  } 
}

</script>

<template>
    <div class="content">
        <div class="autocomplete_input">
            <input 
            type="text" 
            class="filtro" 
            placeholder="Metas da Terapia.." 
            id="metas_add" 
            autocomplete="off"
            :value="modelValue"
            @input="handleInput"
            ref="focus"
            @focus="$event.target.select()"
            onfocus="this.value=''"
            >
            <button type="submit" @click="addMetas"><font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <div class="result_metas">
          <ul v-show="isOpen" class="listresult">
            <li v-for="result in searchResult" :key="result.metaTerapia" @click="setSelected(result)" class="metas_itens">
              {{ result.metaTerapia }}
            </li>
          </ul>
          
        </div>    
    </div>
</template>

<style scoped>
    /* .content{
        display: flex;
        
    } */

    .autocomplete_input{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
 
}

  .autocomplete_input input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid var(--color-border);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  float: left;
  width: 80%;
  color: var(--color-text);
  background: var(--color-background-soft);
  }

  .autocomplete_input button {
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

  .autocomplete_input button:hover {
    background: var(--color-detail1-blue);
  }

  .result_metas{
    display: flex;
    position: relative;
  }

  .listresult{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: .5rem;
    width: 100%;
    overflow-y: auto;

    /* margin: 0 0 0 -20px; */
    background-color: var(--color-background-soft);
    color: var(--color-text);
    border: solid 1px var(--color-border);
    z-index: 8;
    border-radius: 5px; 
  }

  .metas_itens{
    cursor: pointer;
    border-bottom: solid 1px var(--color-border2);
    list-style-type: none;
    padding: 0 0 0 5px;
    margin: 0 0 0 -40px;
  }

  .metas_itens:hover{
    background-color: var(--color-detail2-blue);
    
  }
  
</style>