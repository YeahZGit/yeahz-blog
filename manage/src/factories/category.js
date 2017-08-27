import instance from './instance';

const categoryResource = {
	createCategory(category) {
		return instance.post('/categories', category);
	},
	getAllCategories() {
		return instance.get('/categories');
	},
	updateCategory(id, category) {
		return instance.put('/categories/' + id, category);
	},
	deleteCategory(id) {
		return instance.delete('/categories/' + id);
	}
}

export default categoryResource;