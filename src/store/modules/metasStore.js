import {defineStore} from 'pinia';
import {ref, computed} from 'vue'
import api from '../../services/api'
import { useRouter } from 'vue-router';

const router = useRouter();

export const useMetas = defineStore("metas", ()=>{
    const metas = ref ([]);

    const meta = computed(()=> metas.value);

    async function getMetas() {
        try{               
            const response = await api.get("/MetaTerapia/BuscarMetaTerapia")
            metas.value = await response.data
        } catch{
            metas.value=[]
        }
        };
    async function setMetas(metas){
        try{
            const response = await api.post('/MetaTerapia', metas);
            console.log(response);
        } catch{
            console.log('Não foi possivel cadastrar a meta');
        }
    }

    return{
        setMetas,
        getMetas,
        metas,
        meta
    }
});

export const useMetasAdd = defineStore("metasAdd", ()=> {
    
    const metaadicionada=ref([]);
    const tempmetas = ref([]);

    const metasadd = computed(()=> metaadicionada.value);
        
    function setMetasAdd(metasadd){
            metaadicionada.value.push(metasadd)
            localStorage.setItem("metaadicionadatemp", JSON.stringify(metaadicionada.value));
    };

    function getMetasAdd(){
        const storageMetas = localStorage.getItem("metaadicionadatemp");
        if (storageMetas){
            metaadicionada.value = JSON.parse(storageMetas)
            console.log(metaadicionada.value);
        }
    };

    function defaultMetasAdd(){
        metaadicionada.value.length=0;
        console.log(metaadicionada.value);
    }

    return {
        getMetasAdd,
        setMetasAdd,
        metasadd,
        metaadicionada,
        defaultMetasAdd
    }

});