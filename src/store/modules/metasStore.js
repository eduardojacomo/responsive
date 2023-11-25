import {defineStore} from 'pinia';
import api from '../../services/api'
import { loginData } from '../../services/loginData';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useMetas = defineStore("metas", {
    //const autenticated = ref(false);
    state: () => ({
        
            metas: [],
            metabyid:[]
  
    }),
    //getmetas:{meta: (state) => state.metas}
    getters:{
        meta() {
            return this.metas.value
        },
        getMetaById: (state) => (metaId) => {
            return state.metas.find((metas) => metas.id === metaId);
          },
         
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
        async setMetas(metas){
            try{
                const response = await api.post('/MetaTerapia', metas);
                console.log(response);
            } catch{
                console.log('Não foi possivel cadastrar a meta');
            }
        }
        
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