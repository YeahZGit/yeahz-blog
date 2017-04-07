import instance from './instance';

var pigeonholeResource = {
	getPigeonhole: function() {
		return instance.get('/pigeonhole');
	}
}

module.exports = pigeonholeResource;