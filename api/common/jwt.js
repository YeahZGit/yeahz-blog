var jwt = require('jsonwebtoken');

exports.create = (obj, time, cert) => {
	cert = cert || 'yeahz';
	return jwt.sign(obj, cert, {
		algorithm: 'HS256',
		expiresIn: time || '24h' 
	})
};

exports.verify = (token, cert, callback) => {
	return new Promise((resolve, reject) => {
		if (typeof cert === 'function') {
			callback = cert;
			cert = 'yeahz';
		}
		jwt.verify(token, cert, (err, decoded) => {
			if (err) {
				reject(err);
			} else {
				resolve(decoded);
			}
			callback(err, decoded);
		});
	})
};