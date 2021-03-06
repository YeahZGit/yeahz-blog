const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var blogController = {};

blogController.getAllBlogs = (req, res, next) =>{
	var sort = { sort: req.sortObj };
	var opt = Object.assign(sort, req.pageObj);
	Blog.getBlogs({}, opt).then(blogs =>{
		res.success(blogs);
	}).catch(next);
}

blogController.createBlog = (req, res, next) =>{
	var body = Object.assign(new Blog(), req.body);
	Blog.createBlog(body).then(blog =>{
		res.success(blog);
	}).catch(next);
}

blogController.updateBlog = (req, res, next) =>{
	var blogId = req.params.blogId;
	var body = req.body;
	Blog.getBlogById(blogId).then(blog =>{
		Object.assign(blog, body);
		return Blog.updateBlog(blog);
	}).then(blog =>{
		res.success(blog);
	}).catch(next);
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

blogController.getBlogByArchive = (req, res, next) => {
	Blog.getBlogByArchive().then(archives => {
		res.success(archives);
	}).catch(next)
}

module.exports = blogController;