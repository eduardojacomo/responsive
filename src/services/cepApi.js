import axios from "axios";

const cepApi = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    withCredentials: true,
    
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials':true,
         'Access-Control-Allow-Methods': '*',
         'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With'
        
    }
    
    
});

export default cepApi;