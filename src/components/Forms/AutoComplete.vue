<script setup>
import { computed, ref} from 'vue'

const props = defineProps({
  resultmetas: {
    type: Array,
    required: true,
    default : () =>[],
  },
  modelValue: String 
})

const emit = defineEmits(['update:modelValue'])
const keyword = ref('')
console.log(props.resultmetas.value);
const searchResult = computed(() => {
  if (keyword.value == ''){
    return[]
  }

  return props.resultmetas.value.filter((item)=> {
    if (item.metaTerapia.toLowerCase().includes(keyword.value.toLowerCase()))
   
    // const filteredPacientes = computed(() => {
    //    return pacientes.value.filter((paciente) => paciente.nome.toLowerCase().includes(localizapaciente.value.toLowerCase()));
    //  });

    {
      console.log(item);
     return item
    }
  })
});

const isOpen = ref(false);

const setSelected = item =>{
  isOpen.value=false
  keyword.value = item
  emit('update:modelValue', keyword.value)
};

const handleInput = event =>{
  isOpen.value = true
  keyword.value = event.target.value
  emit('update:modelValue', keyword.value)
};
</script>

<template>
    <div class="content">
        <div class="autocomplete_input">
            <input 
            type="text" 
            class="filtro" 
            placeholder="Metas da Terapia.." 
            name="metas_add" 
            autocomplete="false"
            :value="modelValue"
            @input="handleInput"
            >
            <button type="submit"><font-awesome-icon icon="fa-solid fa-plus" /></button>
        </div>
        <div class="result_metas">
          <ul v-show="isOpen" class="listresult">
            <li v-for="result in searchResult" :key="result.metaTerapia" @click="setSelected(result.metaTerapia)" class="metas_itens">
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
    
  }

  .metas_itens:hover{
    background-color: var(--color-detail2-blue);
    
  }
  
</style>