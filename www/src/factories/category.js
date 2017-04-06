import instance from './instance';

var categoryResource = {
	getCategory: function() {
		return instance.get('/category');
	}
}

module.exports = categoryResource;