import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7170/api/",
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

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accesstoken');
      config.withCredentials = true;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
  
    (error) => {
      return Promise.reject(error);
    }
  );

export default api;