var router = require('express').Router();
var adminController = require('./admin');
var blogController = require('./blog');
var uploadController = require('./upload');
var multer = require('multer');
var auth = require('../middlewares/auth');
const HttpError = require('some-http-error');
// var upload = multer({dest: './uploads/pictures'})

router.route('/blogs')
	.get(blogController.getAllBlogs)
	.post(auth.adminRequired, blogController.createBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blogs/:blogId')
	.get(blogController.getBlog)
	.put(auth.adminRequired, blogController.updateBlog)
	.delete(auth.adminRequired, blogController.deleteBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/uploads/pictures')
	.post(auth.adminRequired, multer({storage: multer.diskStorage(uploadController.storagePicture)}).single('picture'),
		uploadController.handleResult)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/authorization')
	.post(adminController.authorize)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

module.exports = router;