const HttpError = require('some-http-error');

const errorHandling = (err, req, res, next) => {
	if(err instanceof HttpError){
		res.error(err.message, err.statusCode);
	}
	else{
		res.error(err.message);
	}
}

module.exports = errorHandling;