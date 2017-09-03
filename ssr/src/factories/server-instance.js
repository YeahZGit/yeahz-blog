import axios from 'axios';
import configs from '../constants/configs';

const serverInstance = axios.create({
	proxy: {
    host: '127.0.0.1',
    port: 3000
  },
	timeout: 10000
});

serverInstance.interceptors.response.use(response =>{
	return response;
}, error => {
	return Promise.reject(error);
})

export default serverInstance;