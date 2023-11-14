import {defineStore} from 'pinia';
import axios from 'axios'
import { pacienteData } from '../../services/pacienteData';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useCep = defineStore("pacienteStore", {
    //const autenticated = ref(false);
    state: () => {
        return{
            cep: []

        }
    },
    getters:{
        consultacep: (state) => state.pacienteStore
    },
    actions:{
        async getCep() {
            
            console.log("cheguei aqui");
            cep= await axios.get(`https://viacep.com.br/ws/${ cep }/json/`).default;
            console.log(cep);
                // try{
                //     await axios.get(`https://viacep.com.br/ws/${ cep }/json/`)
                //     .then(async (response) => {
                //         cep.value=response.data;
                //         console.log(response);
                //         //pacienteData.endereco = await cepGet.value.logradouro;
                //     }
                //     )
                // } catch{
                    
                // }

            
            
        },
        
        
        
    }
} )