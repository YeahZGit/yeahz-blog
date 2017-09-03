import clientInstance from './client-instance';

const aboutResource = {
	getAbout(id) {
		return clientInstance.get('/about/' + id);
	}
}

export default aboutResource;