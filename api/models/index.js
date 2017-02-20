var mongoose = require('mongoose');
var configs = require('../configs');

mongoose.connect(configs.mongodb);

exports.Blog = mongoose.model('Blog', require('./blog'));
exports.Admin = mongoose.model('Admin', require('./admin'));