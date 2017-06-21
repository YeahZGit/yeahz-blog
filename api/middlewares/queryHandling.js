const queryHandling = (req, res, next) => {
	var query = req.query;
	if(query.page_no || query.page_size) {
		var pageNo = parseInt(query.page_no) || 1;
		var pageSize = parseInt(query.page_size) || 10;
		var pageObj = {
			skip: (pageNo - 1) * pageSize,
			limit: pageSize
		}
		req.pageObj = pageObj;
	}
	else {
		req.pageObj = {};
	}
	if(query.sort) {
		var sortObj = {};
		var sortParams = query.sort.split(',');
		sortParams.forEach(sortParam => {
			var field = sortParam.match(/\w+/)[0];
			var order = sortParam[0] == '-' ? -1 : 1;
			sortObj[field] = order;
		})
		req.sortObj = sortObj;
	}
	else {
		req.sortObj = {};
	}
	next();
}

module.exports = queryHandling;