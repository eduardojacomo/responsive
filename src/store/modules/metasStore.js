import {defineStore} from 'pinia';
import api from '../../services/api'
import { loginData } from '../../services/loginData';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useMetas = defineStore("metas", {
    //const autenticated = ref(false);
    state: () => ({
        
            metas: [],
  
    }),
    //getmetas:{meta: (state) => state.metas}
    getters:{
        meta() {
            return this.metas.value
        }
         
    },
    actions:{
        async getMetas() {
            try{
                
                const response = await api.get("/MetaTerapia/BuscarMetaTerapia")
                this.metas.value = await response.data

            } catch{
                this.metas=[]
            }
            
        },
        
    }
} )

export const useMetasAdd = defineStore("metasAdd", {
    state: () => ({
        metaadicionada: [],

}),
    getters:{
        metasadd(){
            return this.metaadicionada.value
        }
    }, 
    actions:{
        setMetasAdd(metasadd){
            this.metaadicionada.push(metasadd)
        },

        getMetasAdd(){
            this.metaadicionada = this.metaadicionada
        }
    }

})