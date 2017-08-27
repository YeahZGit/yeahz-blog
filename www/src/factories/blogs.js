import instance from './instance';

var blogResource = {
	getBlogs: function() {
		return instance.get('/blogs');
	},
	getBlogById: function(id) {
		return instance.get('/blogs/' + id);
	},
	getBlogsByArchives: function() {
		return instance.get('/blogs/archives');
	}
}

module.exports = blogResource;