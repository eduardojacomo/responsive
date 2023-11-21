import {defineStore} from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useProtocolo = defineStore("protocolos", {
    //const autenticated = ref(false);
    state: () => ({
        
            ProtocoloTratamento: [],
            ProtocoloTratamentoItens: [],
            ProtocoloTratamentoPaciente: [],
  
    }),
    getters: {
        protocolo() {
            return this.ProtocoloTratamento.value
        },
        protocoloitems(){
            return this.ProtocoloTratamentoItens.value
        },
        protocolopaciente(){
            return this.ProtocoloTratamentoPaciente.value
        }
    },

    actions:{
        async getProtocolo() {
            try{
                
                const response = await api.get("/ProtocoloTratamento/BuscarProtocolo")
                this.protocolo.value = await response.data

            } catch{
                this.protocolo=[]
            }
            
        },

        async getProtocoloItens() {
            try{
                
                const response = await api.get("/ProtocoloTratamento/BuscarProtocoloItems")
                this.protocoloitems.value = await response.data

            } catch{
                this.protocoloitems=[]
            }
            
        },

        async getProtocoloPaciente() {
            try{
                
                const response = await api.get("/ProtocoloTratamento/BuscarProtocoloItems")
                this.protocolopaciente.value = await response.data

            } catch{
                this.protocolopaciente=[]
            }
            
        },
    }
} )