var Blog = require('../models').Blog

var blogController = {}

blogController.getAllBlogs = (req, res, next) =>{
	Blog.getBlogs({}).then(blogs =>{
		res.json(blogs)
	})
}

blogController.createBlog = (req, res, next) =>{
	var body = Object.assign(new Blog(), req.body)
	Blog.createBlog(body).then(blog =>{
		res.json(blog)
	})
}

blogController.updateBlog = (req, res, next) =>{
	var blogId = req.params.blogId
	var body = req.body
	Blog.getBlogById(blogId).then(blog =>{
		Object.assign(blog, body)
		return Blog.updateBlog(blog)
	}).then(blog =>{
		res.json(blog)
	})
}

blogController.getBlog = (req, res, next) =>{
	var blogId = req.params.blogId
	Blog.getBlogById(blogId).then(blog =>{
		if(!blog){
			res.end('this blog is not exits')
		}
		else{
			res.json(blog)
		}
	})
}

blogController.deleteBlog = (req, res, next) =>{
	var blogId = req.params.blogId
	Blog.removeBlogById(blogId).then(blog =>{
		res.end('delete success')
	})
}

module.exports = blogController