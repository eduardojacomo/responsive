import {defineStore} from 'pinia';
import {ref, computed} from 'vue';


export const useGuid = defineStore("guid", ()=> {
    //new state
    const newGuid = ref([]);
    
    //new getters:
    const guid = computed(()=> newGuid.value);
    

    //new actions:
    function ide(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, 
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        
    }
    function uuidv4() {
        newGuid.value = ide();
    }

    return {
        guid,
        newGuid,
        uuidv4
    }
    
});

