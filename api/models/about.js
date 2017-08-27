var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const aboutSchema = new Schema({
	content: String,
	create_at: { type: Date, default: Date.now() },
	update_at: { type: Date, default: Date.now() }
})

aboutSchema.pre('save', function(next){	
	this.update_at = Date.now();
	next();
});

aboutSchema.statics = {
	getAboutById(aboutId) {
		return this.findById(aboutId);
	},
	updateAbout(about) {
		return about.save();
	}
}

module.exports = aboutSchema;