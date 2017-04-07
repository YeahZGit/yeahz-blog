const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var pigeonholeController = {};

pigeonholeController.getPigeonhole = (req, res, next) => {
	Blog.getBlogs({}).then(blogs => {
		var pigeonhole = [];
		blogs.forEach(val => {
			var pigeonholeInfor = {};
			pigeonholeInfor.releaseDate = val.create_at;
			pigeonholeInfor.title = val.title;
			pigeonholeInfor._id = val._id;
			pigeonhole.push(pigeonholeInfor);
		});
		pigeonhole.sort((a, b) => {
			return Date(a.releaseDate) - Date(b.releaseDate);
		})
		res.success(pigeonhole);
	}).catch(next);
}

module.exports = pigeonholeController;