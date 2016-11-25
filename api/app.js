var configs = require('./configs')
var express = require('express')
var bodyParser = require('body-parser')
var controllers = require('./controllers')
var app = express()

app.use(bodyParser.json())

app.use(controllers)


app.listen(configs.port, function(){
	console.log('server start on localhost', configs.port)
})