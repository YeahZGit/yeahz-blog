const Category = require('../models').Category;
const HttpError = require('some-http-error');

var categoryController = {};

categoryController.createCategory = (req, res, next) => {
	var category = Object.assign(new Category(), req.body);
	Category.createCategory(category).then(category => {
		res.success(category);
	}).catch(next)
}

categoryController.removeCategory = (req, res, next) => {
	var categoryId = req.params.categoryId;
	Category.removeCategory(categoryId).then(() => {
		res.success(null, 204);
	}).catch(next)
} 

categoryController.updateCategory = (req, res, next) => {
	var category = Object.assign(new Category(), req.body);
	Category.updateCategory(category).then(category => {
		res.success(category);
	}).catch(next)
}

categoryController.getAllCategories = (req, res, next) => {
	Category.getAllCategories().then(categories => {
		res.success(categories);
	}).catch(next)
}

module.exports = categoryController;