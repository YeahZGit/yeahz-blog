import instance from './instance';

var tagResource = {
	getTags: function() {
		return instance.get('/tags');
	}
}

module.exports = tagResource;