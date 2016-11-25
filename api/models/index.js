var mongoose = require('mongoose')
var configs = require('../configs')

mongoose.connect(configs.mongodb)

exports.Blog = mongoose.model('Blog', require('./blog'))