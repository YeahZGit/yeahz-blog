import clientInstance from './client-instance';

const tagResource = {
	getTags: function() {
		return clientInstance.get('/tags');
	}
}

export default tagResource;