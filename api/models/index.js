var mongoose = require('mongoose');
var configs = require('../configs');

mongoose.connect(configs.mongodb);

exports.Blog = mongoose.model('Blog', require('./blog'));
exports.Admin = mongoose.model('Admin', require('./admin'));
exports.Comment = mongoose.model('Comment', require('./comment'));
exports.Category = mongoose.model('Category', require('./category'));
exports.Tag = mongoose.model('Tag', require('./tag'));
exports.About = mongoose.model('About', require('./about'));