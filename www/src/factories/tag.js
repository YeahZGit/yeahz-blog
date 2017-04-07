import instance from './instance';

var tagResource = {
	getTags: function() {
		return instance.get('/tag');
	}
}

module.exports = tagResource;