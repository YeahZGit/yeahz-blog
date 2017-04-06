const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var tagController = {};

tagController.getAllTags = (req, res, next) => {
	Blog.getBlogs({}).then(blogs => {
		blogs.forEach(val => {

		})
	})
}

module.exports = tagController;