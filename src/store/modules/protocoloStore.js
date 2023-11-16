import {defineStore} from 'pinia';
import axios from 'axios'
import { pacienteData } from '@/services/pacienteData';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useProtocolo = defineStore("protocoloStore", {
    //const autenticated = ref(false);
    state: () => {
        return{
            protocolo: {
                metas:'',
                planos:'',
                concluido: false

            }

        }
    },
    getters:{
        consultaProtocolo: (state) => state.protocoloStore
    },
    actions:{
        async getProtocolo() {
            
            
            
            
        },
        
        async addProtocolo(){
            if (meta.content.value.trim()==='' || planos.content.value.trim()===''){
                return
            }
            this.protocolo.value.push({
                metas : meta.content.value,
                planos : planos.content.value,
                concluido: false,
            })
            localStorage.setItem('protocolo', JSON.stringify(protocolo));
        },
        
    }
} )