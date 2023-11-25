import {defineStore} from 'pinia';
import { useRouter } from 'vue-router';
import api from '../../services/api';

const router = useRouter();
export const useAcoes = defineStore("acoes", {
    //const autenticated = ref(false);
    state: () => ({
        
            acoes: []
    }),
    getters: {
        acao() {
            return this.acoes.value
        }
    },

    actions:{
        async getAcoes() {
            try{
                const response = await api.get("/AcaoTerapia/BuscarAcaoTerapia")
                this.acoes.value = await response.data
                console.log(response.data)

            } catch(err){
                console.log(err);
                this.acoes=[]
            }
            
        },
        
        async setAcoes(acoes){
            // await api.post("/AcaoTerapia", acoes.value )
            // .then((response) => {  
            //     if (response.status === 200) {
            //         console.log(response)
            //     }
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
            try{
                const response = await api.post('/AcaoTerapia', acoes);
                console.log(response);
            } catch{
                console.log('Não foi possivel cadastrar a meta');
            }
        }
            
    }
} );

export const useAcoesAdd = defineStore("acoesAdd", {
    state: () => ({
        acaoadicionada: [],

}),
    getters:{
        acoesadd(){
            return this.acaoadicionada.value
        }
    }, 
    actions:{
        setAcoesAdd(acaoadd){
            //const temp = this.acaoadicionada.filter(t => t.acaoTerapia);
            const temp = this.acaoadicionada.filter((a) => a.acaoTerapia.includes(acaoadd.acaoTerapia));
            console.log(this.acaoadicionada);
            //console.log (this.acaoadicionada);
            this.acaoadicionada.push(acaoadd);
            //  if (temp.value.includes(acaoadd.acaoTerapia)){
            //      console.log('valor duplicado')

            //  }
            //  else{
            //      this.acaoadicionada.push(acaoadd)
            //  }
        },

        getAcoesAdd(){
            this.acaoadicionada = this.acaoadicionada
        }
    }

})