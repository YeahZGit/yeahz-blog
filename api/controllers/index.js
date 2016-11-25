var router = require('express').Router()
var blogController = require('./blog')
var uploadController = require('./upload')
var multer = require('multer')
// var upload = multer({dest: './uploads/pictures'})

router.route('/blogs')
	.get(blogController.getAllBlogs)
	.post(blogController.createBlog)

router.route('/blogs/:blogId')
	.get(blogController.getBlog)
	.post(blogController.updateBlog)
	.delete(blogController.deleteBlog)

router.route('/uploads/pictures')
	.post(multer({storage: multer.diskStorage(uploadController.storagePicture)}).single('picture'),
		uploadController.handleResult)


module.exports = router