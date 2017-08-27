const About = require('../models').About;
const HttpError = require('some-http-error');

const aboutController = {};

aboutController.updateAbout = (req, res, next) => {
	let aboutId = req.params.aboutId;
	let body = req.body;
	About.getAboutById(aboutId).then(about => {
		Object.assign(about, body);
		return About.updateAbout(about);
	}).then(about => {
		res.success(about);
	}).catch(next);
}

aboutController.getAbout = (req, res, next) => {
	let aboutId = req.params.aboutId;
	About.getAboutById(aboutId).then(about => {
		res.success(about);
	}).catch(next); 
}

module.exports = aboutController;