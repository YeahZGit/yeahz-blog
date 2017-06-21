var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var commentSchema = new Schema({
	username: { type: String, default: '游客' },
	content: String,
	blog: { type: ObjectId, ref: 'Blog' },
	create_at: { type: Date, default: Date.now },
	root_id: { type: ObjectId, ref: 'Comment' },
	reply_to: { type: ObjectId, ref: 'Comment' },
	replies: [{ type: ObjectId, ref: 'Comment' }]
})

commentSchema.statics = {
	getAllComments: function() {
		return this.find({ reply_to: null }).populate('blog', { title: 1 }).populate('replies', {});
	},

	getCommentsByBlogId: function(blogId) {
		return this.find({ blog: blogId }).populate('replies', {});
	},

	getCommentById: function(commentId) {
		return this.findById(commentId);
	},

	createComment: function(comment) {
		return comment.save();
	},

	removeComment: function(commentId) {
		return this.remove({ _id: commentId, reply_to: null });
	},

	updateComment: function(commentId) {
		return this.update({ _id: commentId}, {$set: { root_id: commentId }}).exec();
	},

	addReply: function(commentId, replyId) {
		return this.update({ _id: commentId }, {$push: { replies: replyId }}).exec();
	}
}

module.exports = commentSchema;