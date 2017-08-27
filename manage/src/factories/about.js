import instance from './instance';

const aboutResource = {
	getAbout(id) {
		return instance.get('/about/' + id);
	},
	updateAbout(id, about) {
		return instance.put('/about/' + id, about);
	}
}

export default aboutResource;