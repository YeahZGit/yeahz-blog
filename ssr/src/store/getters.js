import blogsHandler from '../utils/blogsHandler';
import getCategory from '../utils/getCategory';
import matchReply from '../utils/matchReply';

export default {
	getCurPageBlogs(state) {
		let blogs = [];
		//符合当前分类的blogs
		blogs = blogsHandler(state.blogList, state.route.path, state.route.params.code);
		state.currentBlogs = blogs;
		
		let currentPage = state.currentPage;
		let pageSize = state.pageSize;

		blogs = blogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);
		return blogs;
	},

	getCateList(state) {
		return getCategory(state.blogList);
	},

	getComments(state) {
		return matchReply(state.comments);
	}
}