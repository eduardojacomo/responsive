import {defineStore} from 'pinia';
import {ref, computed} from 'vue'
import api from '../../services/api'
import { useRouter } from 'vue-router';

const router = useRouter();

export const useProtocolos = defineStore("protocolos", ()=>{
    const protocolos = ref ([]);
    const protbymeta = ref ([]);
    const loader = ref(false);
    const respServer = ref(0);
    const protocolo = computed(()=> protocolos.value);

    const protMetas = computed(()=> protbymeta.value);

    async function getProtocolos() {
        try{               
            const response = await api.get("/Protocolo/BuscarProtocolo")
            protocolos.value = await response.data
        } catch{
            protocolos.value=[]
        }
    };
    async function setProtocolos(protocolos){
        loader.value = false;
        try{
            const response = await api.post('/Protocolo', protocolos);
            respServer.value = response.status;
            console.log(respServer.value);
            loader.value = true;
        } catch{
            loader.value = true;
            respServer.value = 404;
            console.log('Não foi possivel cadastrar o protocolo');
        }
    };
     async function getProtocolosbyMeta(idmeta) {     
        
        protbymeta.value = await protocolos.value.filter((x) =>  x.iD_Meta === idmeta);
        console.log(protbymeta.value);
     };

    return{
        setProtocolos,
        getProtocolos,
        getProtocolosbyMeta,
        protocolos,
        protocolo,
        protbymeta, 
        protMetas,
        loader,
        respServer
    }
});