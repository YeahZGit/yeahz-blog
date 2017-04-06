const Blog = require('../models').Blog;
const HttpError = require('some-http-error');

var categoryController = {};

categoryController.getAllCategory = (req, res, next) => {
	Blog.getBlogs({}).then(blogs => {
		var categoryList = [];
		blogs.forEach(val => {
			var mask = false;
			var category = [];
			var categoryInfor = {};

			categoryInfor.category = val.category;
			categoryInfor.releaseDate = val.create_at;
			categoryInfor.title = val.title;
			categoryInfor._id = val._id;

			for(var i = 0; i < categoryList.length; i++){
				if(categoryInfor.category === categoryList[i][0].category){
					categoryList[i].push(categoryInfor);
					mask = true;
					break;
				}
			}
			if(mask === false){
				categoryList.push([categoryInfor]);
			}
		});
		res.success(categoryList);
	}).catch(next);
}

module.exports = categoryController;