var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	name: String,
	code: String,
	create_at: { type: Date, default: Date.now }
})

categorySchema.statics = {
	createCategory: function(category) {
		return category.save(category);
	},
	removeCategory: function(categoryId) {
		return this.remove({ _id: categoryId });
	},
	getCategoryById: function(categoryId) {
		return this.findById(categoryId);
	},
	updateCategory: function(category) {
		return category.save(category);
	},
	getAllCategories: function() {
		return this.find();
	}
}

module.exports = categorySchema;