const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var tagController = {};

tagController.getAllTags = (req, res, next) => {
	Blog.getBlogs({}).then(blogs => {
		var tags = new Set();
		blogs.forEach(val => {
			if(val.tag)
				tags.add(val.tag);
		})
		var tagsArr = [...tags];
		res.success(tagsArr);
	}).catch(next);
}

module.exports = tagController;