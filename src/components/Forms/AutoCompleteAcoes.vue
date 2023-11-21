<script setup>
import { computed, ref, reactive} from 'vue'
import {useAcoesAdd} from '@/store/modules/acoesStore'


const props = defineProps({
  resultacoes: {
    type: Array,
    required: true,
    default : () =>[],
  },
  modelValue: String
})
const useacoesadd = useAcoesAdd();
const emit = defineEmits(['update:modelValue']);

const keyword = ref('');
const itemselected = reactive({});

const searchResult = computed(() => {
  if (keyword.value == ''){
    return[]
  }

  return props.resultacoes.value.filter((item)=> {
    if (item.acaoTerapia.toLowerCase().includes(keyword.value.toLowerCase()))
    {
      
      return item
    }
  })
});

const isOpen = ref(false);

const setSelected = item =>{
  isOpen.value=false
  
  keyword.value = item.acaoTerapia;
  itemselected.value = item;
//   console.log(itemselected.value);
  emit('update:modelValue', keyword.value)
};

const handleInput = event =>{
  isOpen.value = true
  keyword.value = event.target.value
  emit('update:modelValue', keyword.value)
};

function setAcoes(){
  console.log(itemselected.value.id);
  if (itemselected.value.id>0){
    useacoesadd.setAcoesAdd({
      id: itemselected.value.id,
      acaoTerapia: itemselected.value.acaoTerapia
    })
  }
//   console.log(itemselected.value.id);
  
}
</script>

<template>
    <div class="content">
        <div class="autocomplete_input">
            <input 
            type="text" 
            class="filtro" 
            placeholder="Ações da Terapia.." 
            name="acoes_add" 
            autocomplete="off"
            :value="modelValue"
            @input="handleInput"
            >
            <button type="submit" @click="setAcoes"><font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <div class="result_acoes">
          <ul v-show="isOpen" class="listresult">
            <li v-for="result in searchResult" :key="result.acaoTerapia" @click="setSelected(result)" class="acoes_itens">
              {{ result.acaoTerapia }}
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

  .result_acoes{
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

  .acoes_itens{
    cursor: pointer;
    border-bottom: solid 1px var(--color-border2);
    list-style-type: none;
    padding: 0 0 0 5px;
    margin: 0 0 0 -40px;
  }

  .acoes_itens:hover{
    background-color: var(--color-detail2-blue);
    
  }
  
</style>