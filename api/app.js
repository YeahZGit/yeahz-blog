var configs = require('./configs');
var express = require('express');
var path = require('path');  
var bodyParser = require('body-parser');
var middlewares = require('./middlewares');
var controllers = require('./controllers');
var app = express();

app.use(middlewares.response);
app.use(bodyParser.json());
app.use(middlewares.authorization);
app.use(middlewares.queryHandling);
app.use(controllers);
app.use(middlewares.errorHandling);
app.use(express.static(path.join(__dirname,'/uploads'))); 

app.listen(configs.port, function(){
	console.log('server start on localhost', configs.port);
});