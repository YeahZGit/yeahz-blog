import axios from 'axios'; 
import configs from '../constants/configs'

var instance = axios.create({
  baseURL: configs.API_BASE,
  timeout: 10000,
  headers: {'Authorization': 'Bearer ' +  window.sessionStorage.getItem('token')}
});

instance.interceptors.response.use(response =>{
	return response;
}, error => {
	alert(error.response.data.message);
	return Promise.reject(error);
})

export default instance;