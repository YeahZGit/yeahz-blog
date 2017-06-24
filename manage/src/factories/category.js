import instance from './instance';

const categoryResource = {
	createCategory(category) {
		return instance.post('/categories', category);
	},
	getAllCategories() {
		return instance.get('/categories');
	}
}

export default categoryResource;