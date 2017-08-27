import axios from 'axios'; 
import configs from '../constants/configs'

var instance = axios.create({
  baseURL: configs.API_BASE,
  timeout: 10000
});

instance.interceptors.response.use(response =>{
	return response;
}, error => {
	console.log(error.response)//.data.message);
	return Promise.reject(error);
})

export default instance;