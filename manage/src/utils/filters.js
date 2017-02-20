var filters = {
	timeFilter: function(value){
		if(!value){
			return '';
		}
		var timeString = value.toString();
		timeString = timeString.substr(0, 19).replace('T', ' ');
		
		return timeString;
	}
}

module.exports = filters;
