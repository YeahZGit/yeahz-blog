import instance from './instance';

var categoryResource = {
	getCategory: function() {
		return instance.get('/categories');
	}
}

module.exports = categoryResource;