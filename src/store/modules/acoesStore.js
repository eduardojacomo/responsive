import {defineStore} from 'pinia';
import { useRouter } from 'vue-router';
import {ref, computed} from 'vue';
import api from '../../services/api';

const router = useRouter();

export const useAcoes = defineStore("acoes", ()=> {
    //new state
    const acoes = ref([]);
    const inputacao = ref('');
    //new getters:
    const refacao = computed(()=> acoes.value);
    // const filteredAcoes = computed((inputacao)  => {
    //     return acao.value.filter((a) => a.acaoTerapia.toLowerCase().includes(inputacao.value.toLowerCase()));
    // });
    
    //new actions:
    async function getAcoes(){
        try{
            const response = await api.get("/AcaoTerapia/BuscarAcaoTerapia")
            acoes.value = await response.data
                        
        
           } catch(err){
            console.log(err);
            acoes=[]
          }

    }
    async function setAcoes(acoes){
        try{
            const response = await api.post('/AcaoTerapia', acoes);
            console.log(response);
        } catch{
            console.log('Não foi possivel cadastrar a meta');
        }

    }
    return {
        acoes,
        inputacao,
        refacao,
        getAcoes,
        setAcoes
    }
    
});

export const useAcoesAdd = defineStore("acoesAdd", ()=> {
    
    const acaoadicionada =  ref([]);
    const tempacao = ref([])
    
    const acoesadd = computed(()=> acaoadicionada.value);

    function setAcoesAdd(acaoadd){
    
            const temp = acaoadicionada.value.filter((a) => a.acaoTerapia.includes(acaoadd.acaoTerapia));
                
            acaoadicionada.value.push(acaoadd);
            console.log(acaoadicionada.value);
            localStorage.setItem("protocolotemp", JSON.stringify(acaoadicionada.value));
    };

    function getAcoesAdd(){
        const storageProtocolo = localStorage.getItem("protocolotemp");
       
        
        if (storageProtocolo){
            acaoadicionada.value = JSON.parse(storageProtocolo)
            console.log(acaoadicionada.value)
            
        }
    };

    function defaultAcoesAdd(){
        acaoadicionada.value.length=0;
    }

        
    return{
        acaoadicionada,
        acoesadd,
        setAcoesAdd,
        getAcoesAdd,
        defaultAcoesAdd
    }

});

// export const useAcoesAdd = defineStore("acoesAdd", {
//     state: () => ({
//         acaoadicionada: [],

// }),
//     getters:{
//         acoesadd(){
//             return this.acaoadicionada.value
//         }
//     }, 
//     actions:{
//         setAcoesAdd(acaoadd){
//             //const temp = this.acaoadicionada.filter(t => t.acaoTerapia);
//             const temp = this.acaoadicionada.filter((a) => a.acaoTerapia.includes(acaoadd.acaoTerapia));
//             console.log(this.acaoadicionada);
//             //console.log (this.acaoadicionada);
//             this.acaoadicionada.push(acaoadd);
//             //  if (temp.value.includes(acaoadd.acaoTerapia)){
//             //      console.log('valor duplicado')

//             //  }
//             //  else{
//             //      this.acaoadicionada.push(acaoadd)
//             //  }
//         },

//         getAcoesAdd(){
//             this.acaoadicionada = this.acaoadicionada
//         }
//     }

// })