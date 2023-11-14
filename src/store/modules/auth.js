import {defineStore} from 'pinia';
import api from '../../services/api'
import { loginData } from '../../services/loginData';
import { useRouter } from 'vue-router';

const router = useRouter();
export const useAuth = defineStore("auth", {
    //const autenticated = ref(false);
    state: () => ({
        authUser: false
    }),
    getters:{
        user: (state) => state.authUser
    },
    actions:{
        async getAuth() {
            try{
                await api.get("/Usuario/BuscarUsuarios")
                this.authUser=true

            } catch{
                this.authUser=false
            }
            
        },
        
        async loginAuth(){
            await api.post('/usuario/login', loginData.value, {withCredentials:true})
   
            .then((response) => {  
            if (response.status === 200) {
                // const token = response.data;
                // localStorage.setItem('token', token);
                //auth.user=true;
                this.authUser=true;
                this.router.push('/');
            }
            })
            .catch((error) => {
                console.error(error);
                this.authUser=false;
            });
        },
        async logoutAuth(){
            await api.post('/usuario/logout', '', {withCredentials:true})
            .then((response) => {
                if (response.status === 200) {
                    this.authUser=false;
                    this.router.push('/login');
                }
                })
            .catch((error) => {
                console.error(error);
                this.authUser=true;
            });

        }
    }
} )