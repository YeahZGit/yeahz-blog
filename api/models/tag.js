var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var tagSchema = new Schema({
	name: String,
	code: String,
	create_at: { type: Date, default: Date.now }
})

tagSchema.statics = {
	createTag: function(tag) {
		return tag.save(tag);
	},
	removeTag: function(tagId) {
		return this.remove({ _id: tagId });
	},
	getTagById: function(tagId) {
		return this.findById(tagId);
	},
	updateTag: function(tag) {
		return tag.save(tag);
	},
	getAllTags: function() {
		return this.find();
	}
}

module.exports = tagSchema;