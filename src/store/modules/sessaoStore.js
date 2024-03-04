import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import api from '../../services/api';


export const useSessao = defineStore("sessao", ()=> {
    //new state
    const sessoes = ref([]);
    
    const sessaoByPaciente = ref([]);
    //new getters:
    const sessao = computed(()=> sessoes.value);
    const sessaoData = ref({
        horaSessao: '',
        codigoPaciente: 0,
        codigoProfissional: 1,
        status: "A",
        dataSessao: '',
        registro: '',
    });
    const sessaobyPaciente = computed(()=> sessaoByPaciente.value);
    // const sessaoTemp = computed(()=> temp.value);
    const loader = ref(false);
    const respServer = ref(0);
    //new actions:
    async function getSessoes(){
        try{

            const response = await api.get("/Sessao/BuscarSessao")
            sessoes.value = await response.data
                        
        
           } catch(err){
            console.log(err);
            sessoes=[]
          }

    }

    async function getSessoesbyPaciente(codigopaciente){
        try{
            const response = await api.get("/Sessao/SessaoByPaciente/"+codigopaciente)
            sessaoByPaciente.value = await response.data
                        
        
           } catch(err){
            console.log(err);
            sessaoByPaciente=[]
          }

    }
    async function setSessoes(sessaoData){
        
        try{
            const response = await api.post("/Sessao", sessaoData);
            respServer.value = response.status;
            loader.value = true;
        } catch{
            console.log('Não foi possivel cadastrar a sessao');
            respServer.value = 404;
            loader.value = true;
        }

    }
    return {
        sessoes,
        sessaoByPaciente,
        sessaobyPaciente,
        getSessoesbyPaciente,
        sessao,
        getSessoes,
        setSessoes,
        sessaoData, 
        loader,
        respServer
    }
    
});

// export const useAcoesAdd = defineStore("acoesAdd", ()=> {
    
//     const acaoadicionada =  ref([]);
//     const tempacao = ref([])
    
//     const acoesadd = computed(()=> acaoadicionada.value);

//     function setAcoesAdd(acaoadd){
    
//             const temp = acaoadicionada.value.filter((a) => a.acaoTerapia.includes(acaoadd.acaoTerapia));
                
//             acaoadicionada.value.push(acaoadd);
//             console.log(acaoadicionada.value);
//             localStorage.setItem("protocolotemp", JSON.stringify(acaoadicionada.value));
//     };

//     function getAcoesAdd(){
//         const storageProtocolo = localStorage.getItem("protocolotemp");
       
        
//         if (storageProtocolo){
//             acaoadicionada.value = JSON.parse(storageProtocolo)
//             console.log(acaoadicionada.value)
            
//         }
//     };

//     function defaultAcoesAdd(){
//         acaoadicionada.value.length=0;
//     }

        
//     return{
//         acaoadicionada,
//         acoesadd,
//         setAcoesAdd,
//         getAcoesAdd,
//         defaultAcoesAdd
//     }

// });
