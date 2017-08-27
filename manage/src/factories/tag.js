import instance from './instance';

const tagResource = {
	createTag(tag) {
		return instance.post('/tags', tag);
	},
	getAllTags() {
		return instance.get('/tags');
	},
	updateTag(id, tag) {
		return instance.put('/tags/' + id, tag);
	},
	deleteTag(id) {
		return instance.delete('/tags/' + id);
	}
}

export default tagResource;