var mongoose = require('mongoose')

var Schema = mongoose.Schema

var blogSchema = new Schema({
	title: String,
	category: String,
	//key_word: String,
	content: String,
	cover_url: {type: String},
	create_at: {type: Date, default: Date.now()},
	update_at: {type: Date, default: Date.now()},
	//comments: {type: String}
})

// articleSchema.pre('save',function(next){
// 	if(this.isNew){
// 		create_date = update_date = Date.now();
// 	}
// 	else{
// 		update_date = Date.new();
// 	}
// })

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