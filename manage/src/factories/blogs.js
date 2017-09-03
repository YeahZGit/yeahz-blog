import instance from './instance';

var blogResource = {
	addBlog: function(data){
		return instance.post('/blogs', data);
	},
	getBlogs: function(){
		return instance.get('/blogs?sort=-create_at');
	},
	getBlogById: function(id){
		return instance.get('/blogs/' + id);
	},
	deleteBlog: function(id){
		return instance.delete('/blogs/' + id);
	},
	updateBlog: function(id, data){
		return instance.put('/blogs/' + id, data);
	}
}

export default blogResource;