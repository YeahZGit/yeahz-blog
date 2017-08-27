function getBlogsByCateCode(blogs, code) {
	let list = [];
	blogs.forEach(function(val) {
		if(val.category.code == code) {
			list.push(val);
		}
	})
	return list;
}

function getBlogsByTagCode(blogs, code) {
	let list = [];
	blogs.forEach(function(val) {
		for(let i = 0; i < val.tag.length; i ++) {
			if(val.tag[i].code == code) {
				list.push(val);
			}
		}
	})
	return list;
}

function getBlogsByYearCode(blogs, code) {
	let list = [];
	blogs.forEach(function(val) {
		if(new Date(val.create_at).getFullYear() == code) {
			list.push(val);
		}
	})
	return list;
}

export default function(blogs, url, code) {
	if(url.search(/(categories)[\S*]/) != -1) {
		return getBlogsByCateCode(blogs, code);
	}
	else if(url.search(/(tags)[\S*]/) != -1) {
		return getBlogsByTagCode(blogs, code);
	}
	else if(url.search(/(archives)[\S*]/) != -1) {
		return getBlogsByYearCode(blogs, code);
	}
	else {
		return blogs;
	}
}