var filters = {
	timeFilter: function(value){
		if(!value){
			return '';
		}

		var timeString = value.toString();
		timeString = timeString.substr(0, 19).replace('T', ' ');
		
		return timeString;
	},
	lengthFilter: function(value, length){
		if(!value){
			return '';
		}

		length = length || 50;
		var text = value.toString();
		text = text.replace(/<[^>]*>|&nbsp;| /g, '').substr(0, length);
		return text;
	}
}

module.exports = filters;
