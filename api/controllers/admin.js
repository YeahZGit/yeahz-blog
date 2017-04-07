var Admin = require('../models').Admin;
var jwt = require('../common/jwt'); 
var HttpError = require('some-http-error');

var adminController = {};

adminController.authorize = (req, res, next) => {
	var body = req.body;
	Admin.getAdmin(body.username, body.password).then(admin => {
		if(admin){
			var token = jwt.create({name: body.username});
			res.success({token: token});
		}
		else{
			next(new HttpError.BadRequestError('Username or password error'));
		}
	}).catch(next);
};

module.exports = adminController;