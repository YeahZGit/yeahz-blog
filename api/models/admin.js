var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
	username: String,
	password: String
})

adminSchema.statics = {
	getAdmin: function(username, password){
		return this.findOne({username, password});
	}
}

module.exports = adminSchema;