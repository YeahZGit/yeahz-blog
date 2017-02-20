const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var blogController = {};

blogController.getAllBlogs = (req, res, next) =>{
	Blog.getBlogs({}).then(blogs =>{
		res.success(blogs);
	}).catch(next);
}

blogController.createBlog = (req, res, next) =>{
	var body = Object.assign(new Blog(), req.body);
	Blog.createBlog(body).then(blog =>{
		res.success(blog);
	});
}

blogController.updateBlog = (req, res, next) =>{
	var blogId = req.params.blogId;
	var body = req.body;
	Blog.getBlogById(blogId).then(blog =>{
		Object.assign(blog, body);
		return Blog.updateBlog(blog);
	}).then(blog =>{
		res.success(blog);
	})
}

blogController.getBlog = (req, res, next) =>{
	var blogId = req.params.blogId;
	Blog.getBlogById(blogId).then(blog =>{
		if(!blog){
			throw new HttpError.NotFoundError("The article is not exist");
		}
		res.success(blog, 200);
	}).catch(next);
}

blogController.deleteBlog = (req, res, next) =>{
	var blogId = req.params.blogId;
	Blog.removeBlogById(blogId).then(blog =>{
		res.success(null, 204);
	}).catch(next);
}

module.exports = blogController;