import {defineStore} from 'pinia';
import {ref, computed, reactive} from 'vue'
import api from '../../services/api'
import axios from 'axios'
import {pacienteData} from '../../services/pacienteData'

export const usePacientes = defineStore("pacientes", ()=>{
    const pacientes = ref ([]);
    const pacientebyid = ref ([]);


    const idpaciente = ref('');
    const IdPaciente = computed(()=> idpaciente.value);
    const paciente = computed(()=> pacientes.value);
    const pacienteID = computed(()=> pacientebyid.value);

    async function getPacientes() {
        try{               
            const response = await api.get("/Paciente/BuscarPacientes")
            pacientes.value = await response.data
        } catch{
            pacientes.value=[]
        }
    };
    async function setPacientes(pacienteData){
        loader.value = false;
        try{
            const response = await api.post('/Paciente', pacienteData);
            respServer.value = response.status;
            console.log(respServer.value);
            loader.value = true;
        } catch{
            loader.value = true;
            respServer.value = 404;
            console.log('Não foi possivel cadastrar o protocolo');
        }
    };
     async function getPAcientebyId(idpaciente) {     
        try{               
            const response = await api.get("/Paciente/"+idpaciente)
            pacientebyid.value = await response.data
           
        } catch{
            pacientebyid.value=[]
            pacienteData.value=[]
        }
 
     };

    return{
        setPacientes,
        getPacientes,
        getPAcientebyId,
        paciente,
        pacientebyid,
        pacienteID, 
        idpaciente,
        IdPaciente
    }
});

export const usePacientesAdd = defineStore("pacientesAdd", ()=> {
    
    const pacienteadicionado=ref([]);
    
    const pacienteadd = computed(()=> metaadicionada.value);
        
    function setPacienteAdd(pacienteadd){
            pacienteadicionado.value.push(pacienteadd)
            //localStorage.setItem("metaadicionadatemp", JSON.stringify(metaadicionada.value));
    };

    // function getPacienteAdd(){
    //     const storageMetas = localStorage.getItem("metaadicionadatemp");
    //     if (storageMetas){
    //         metaadicionada.value = JSON.parse(storageMetas)
    //         console.log(metaadicionada.value);
    //     }
    // };

    // function defaultMetasAdd(){
    //     metaadicionada.value.length=0;
    //     console.log(metaadicionada.value);
    // }

    return {
        setPacienteAdd,
        pacienteadd,
        pacienteadicionado
    }

});


export const useCep = defineStore("consultaCep", ()=>{

const consultacep = ref ([]);
const cep = computed(()=> consultacep.value);

async function getCep() {        
    try{               
        const response = axios.get(`https://viacep.com.br/ws/${ cep }/json/`)
        consultacep.value = await response.data
    } 
    catch{
        consultacep.value=[]
    }
 }

 return{
    
    getCep,
    cep    
}

})
