import instance from './instance';

const commentResource = {
	getCommentByBlogId(blogId) {
		return instance.get('/comments/' + blogId);
	},
	getAllComments() {
		return instance.get('/comments');
	},
	deleteComment(id) {
		return instance.delete('/comments/' + id);
	}
}

export default commentResource;