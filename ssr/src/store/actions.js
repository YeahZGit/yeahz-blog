import blogResource from '../factories/blogs';
import aboutResource from '../factories/about';
import tagResource from '../factories/tag';
import categoryResource from '../factories/category';

export default {
	GET_BLOG_BY_ID: ({ commit, state }, { id }) => {
		return state.blogs[id] 
		? Promise.resolve(state.blogs[id])
		: blogResource.getBlogById(id).then(res => {
			let blog = res.data;
			commit('SET_BLOGS', { id, blog })
		})
	},

	GET_BLOGS: ({ commit, state }) => {
		return state.blogList.length
		? Promise.resolve(state.blogList)
		: blogResource.getBlogs().then(res => {
			let blogs = res.data;
			commit('SET_BLOG_LIST', { blogs });
		})
	},

	GET_ABOUT: ({ commit, state }, { id }) => {
		return state.about[id]
		? Promise.resolve(state.about)
		: aboutResource.getAbout(id).then(res => {
			let about = res.data;
			commit('SET_ABOUT', { about });
		})
	},

	GET_TAGS: ({ commit, state }) => {
		return state.tags.length
		? Promise.resolve(state.tags)
		: tagResource.getTags().then(res => {
			let tags = res.data;
			commit('SET_TAGS', { tags });
		})
	},

	GET_ARCHIVES: ({ commit, state }) => {
		return state.archivesList.length
		? Promise.resolve(state.archivesList)
		: blogResource.getBlogsByArchives().then(res => {
			let archivesList = res.data;
			commit('SET_ARCHIVES', { archivesList });
		})
	}
}