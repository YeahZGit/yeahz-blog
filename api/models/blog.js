var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var blogSchema = new Schema({
	title_img: String,
	title: String,
	category: { type: ObjectId, ref: 'Category'},
	tag: { type: ObjectId, ref: 'Tag' },
	content: String,
	cover_url: {type: String},
	create_at: {type: Date, default: Date.now},
	update_at: {type: Date, default: Date.now}
})

blogSchema.pre('save',function(next){	
	this.update_at = Date.now();
	next();
});

blogSchema.statics = {
	getBlogs: function(query, opt){
		return this.find(query, {}, opt).exec();
	},

	getBlogById: function(blogId){
		return this.findById(blogId).exec();
	},

	removeBlogById: function(blogId){
		return this.remove({'_id': blogId}).exec();
	},

	createBlog: function(blog){
		return blog.save();
	},

	updateBlog: function(blog){
		return blog.save();
	},

	getBlogByArchive: function() {
		return this.aggregate([
			{ '$project': { year: { '$year': '$create_at' }, blog: { title: '$title', create_at: '$create_at', _id: '$_id'}}},
			{ '$sort': { 'blog.create_at': -1 }},
			{ '$group': { _id: '$year', blogs: { "$push": "$blog" }}},
			{ '$project': { _id: 0, year: '$_id', blogs: 1 }}
		])
	}
}

module.exports = blogSchema;