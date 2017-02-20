import instance from './instance';

var uploadResource = {
	uploadImg: function(file){
		return instance.post('/uploads/pictures', file);
	}
}

module.exports = uploadResource;