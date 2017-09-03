import clientInstance from './client-instance';

const categoryResource = {
	getCategory: function() {
		return clientInstance.get('/categories');
	}
}

export default categoryResource;