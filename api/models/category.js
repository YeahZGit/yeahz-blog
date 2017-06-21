var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	cate_name: String,
	code: String,
	create_at: { type: Date, default: Date.now }
})

categorySchema.statics = {
	createCategory: function(category) {
		return this.save(category);
	},
	removeCategory: function(categoryId) {
		return this.remove({ _id: categoryId });
	},
	updateCategory: function(category) {
		return this.save(category);
	},
	getAllCategories: function() {
		return this.find();
	}
}

module.exports = categorySchema;