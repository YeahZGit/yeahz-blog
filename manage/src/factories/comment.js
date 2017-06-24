import instance from './instance';

const commentResource = {
	getCommentByBlogId(blogId) {
		return instance.get('comments' + '/' + blogId);
	}
}

export default commentResource;