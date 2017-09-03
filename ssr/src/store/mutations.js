import Vue from 'vue';

function addReply(comments, comment) {
	comments.forEach(val => {
		if(val._id == comment.root_id) {
			val.replies.push(comment);
		}
	})
	return comments;
}

function addComment(comments, comment) {
	comments.push(comment);
	return comments; 
}

export default {
	SET_BLOGS: (state, { id, blog }) => {
		Vue.set(state.blogs, id, blog);
	},

	SET_BLOG_LIST: (state, { blogs }) => {
		state.blogList = blogs;
	},

	PAGE_CHANGE: (state, { page }) => {
		state.currentPage = page;
	},

	SET_ABOUT: (state, { about }) => {
		state.about = about;
	},

	SET_TAGS: (state, { tags }) => {
		state.tags = tags;
	},

	SET_ARCHIVES: (state, { archivesList }) => {
		state.archivesList = archivesList;
	},

	SET_COMMENTS: (state, { comments }) => {
		state.comments = comments;
	},

	ADD_REPLY: (state, { comment }) => {
		state.comments = addReply(state.comments, comment);
	},

	ADD_COMMENT: (state, { comment }) => {
		state.comments = addComment(state.comments, comment);
	}
 }