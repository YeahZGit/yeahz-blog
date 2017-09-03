import axios from 'axios'; 
import configs from '../constants/configs'

const clientInstance = axios.create({
  baseURL: configs.API_BASE,
  timeout: 10000
});

clientInstance.interceptors.response.use(response =>{
	return response;
}, error => {
	return Promise.reject(error);
})

export default clientInstance;