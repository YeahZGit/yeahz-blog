const Tag = require('../models').Tag;
const HttpError = require('some-http-error');

var tagController = {};

tagController.createTag = (req, res, next) => {
	var tag = Object.assign(new Tag(), req.body);
	Tag.createTag(tag).then(tag => {
		res.success(tag);
	}).catch(next)
}

tagController.removeTag = (req, res, next) => {
	var tagId = req.params.tagId;
	Tag.removeTag(tagId).then(() => {
		res.success(null, 204);
	}).catch(next)
} 

tagController.updateTag = (req, res, next) => {
	let tagId = req.params.tagId;
	let body = req.body;
	Tag.getTagById(tagId).then(tag => {
		Object.assign(tag, body);
		return Tag.updateTag(tag);
	}).then(tag => {
		res.success(tag);
	}).catch(next); 
}

tagController.getAllTags = (req, res, next) => {
	Tag.getAllTags().then(tags => {
		res.success(tags);
	}).catch(next)
}

module.exports = tagController;