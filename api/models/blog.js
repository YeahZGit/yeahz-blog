var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var blogSchema = new Schema({
	title_img: String,
	title: String,
	category: String,
	tag: String,
	content: String,
	cover_url: {type: String},
	create_at: {type: Date, default: Date.now},
	update_at: {type: Date, default: Date.now},
	//comments: {type: String}
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
	}
}

module.exports = blogSchema;