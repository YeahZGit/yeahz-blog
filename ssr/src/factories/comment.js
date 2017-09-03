import clientInstance from './client-instance';

const commentResource = {
	getCommentByBlogId(blogId) {
		return clientInstance.get('/comments/' + blogId);
	},
	getAllComments() {
		return clientInstance.get('/comments');
	},
	deleteComment(id) {
		return clientInstance.delete('/comments/' + id);
	},
	createComment(comment) {
		return clientInstance.post('/comments', comment);
	}
}

export default commentResource;