var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tagSchema = new Schema({
	tag_name: String,
	code: String,
	create_at: { type: Date, default: Date.now }
})

tagSchema.statics = {
	createTag: function(tag) {
		return this.save(tag);
	},
	removeTag: function(tagId) {
		return this.remove({ _id: tagId });
	},
	updateTag: function(tag) {
		return this.save(tag);
	},
	getAllTags: function() {
		return this.find();
	}
}

module.exports = tagSchema;