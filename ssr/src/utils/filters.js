var filters = {
	dateFilter(date = new Date().toISOString(), format = 'yyyy-MM-dd HH:mm:ss') {
		let time = date.match(/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/);
		let dateStr = format;
		let fmt = {
			'yyyy': time[1],
			'MM': time[2],
			'dd': time[3],
			'HH': time[4],
			'mm': time[5],
			'ss': time[6]
		}
		for(let key in fmt) {
			if(new RegExp(key).test(format)) {
				dateStr = dateStr.replace(key, fmt[key]);
			}
		}
		return dateStr;
	},
	lengthFilter(str, len) {
		return str.length < len ? str : str.substr(0, len) +　'...';
	},
	htmlFilter: function(value, length) {
		if(!value){
			return '';
		}
		length = length || 50;
		var text = value.toString();
		text = text.replace(/<[^>]*>|&nbsp;| /g, '').substr(0, length);
		return text.length < length ? text : text + '...';
	}
}

module.exports = filters;