const Comment = require('../models').Comment;
const HttpError = require('some-http-error');

const commentController = {};

commentController.createComment = (req, res, next) => {
	let comment = Object.assign(new Comment(), req.body);

	Comment.createComment(comment).then(comment => {
		if(comment.reply_to) {
			Comment.addReply(comment.root_id, comment._id);
			return Comment.getCommentById(comment._id);
		}
		else {
			Comment.updateComment(comment._id);//设置root_id属性
			return Comment.getCommentById(comment._id);
		}
	}).then(comment => {
		res.success(comment)
	}).catch(next)
}

commentController.getCommentByBlogId = (req, res, next) => {
	let blogId = req.params.blogId;
	Comment.getCommentsByBlogId(blogId).then(comments => {
		res.success(comments);
	}).catch(next)
}

commentController.getAllComments = (req, res, next) => {
	Comment.getAllComments().then(comments => {
		res.success(comments);
	}).catch(next)
}

commentController.removeComment = (req, res, next) => {
	Comment.removeComment(req.params.commentId).then(() => {
		res.success(null, 204);
	}).catch(next)
}

module.exports = commentController;