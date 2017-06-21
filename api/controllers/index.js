var router = require('express').Router();
var adminController = require('./admin');
var blogController = require('./blog');
var categoryController = require('./category');
var tagController = require('./tag');
var uploadController = require('./upload');
var commentController = require('./comment');
var multer = require('multer');
var auth = require('../middlewares/auth');
const HttpError = require('some-http-error');
// var upload = multer({dest: './uploads/pictures'})

router.route('/blogs')
	.get(blogController.getAllBlogs)
	.post(auth.adminRequired, blogController.createBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blogs/archives')
	.get(blogController.getBlogByArchive)
	.all(() => {throw new HttpError.MethodNotAllowedError()})

router.route('/blogs/:blogId')
	.get(blogController.getBlog)
	.put(auth.adminRequired, blogController.updateBlog)
	.delete(auth.adminRequired, blogController.deleteBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/comments')
	.get(auth.adminRequired, commentController.getAllComments)
	.post(commentController.createComment)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/comments/:blogId')
	.get(commentController.getCommentByBlogId)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/categories')
	.get(categoryController.getAllCategories)
	.post(auth.adminRequired, categoryController.createCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/categories/:categoryId')
	.put(auth.adminRequired, categoryController.updateCategory)
	.delete(auth.adminRequired, categoryController.removeCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()})

router.route('/tags')
	.get(tagController.getAllTags)
	.post(auth.adminRequired, tagController.createTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tags/:tagId')
	.put(auth.adminRequired, tagController.updateTag)
	.delete(auth.adminRequired, tagController.removeTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});
	
router.route('/uploads/pictures')
	.post(auth.adminRequired, multer({storage: multer.diskStorage(uploadController.storagePicture)}).single('picture'),
		uploadController.handleResult)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/authorization')
	.post(adminController.authorize)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

module.exports = router;