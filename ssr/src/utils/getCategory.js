export default function(list) {
	let cateList = [];
	for(let i = 0; i < list.length; i ++) {
		let isNewCate = true;
		for(let j = 0; j < cateList.length; j ++) {
			if(list[i].category.code == cateList[j].code) {
				isNewCate = false;
				cateList[j].blogs.push(list[i]);
				break;
			}
		}
		if(isNewCate) {
			let blogs = new Array();
			blogs.push(list[i]);
			cateList.push({
				blogs: blogs,//[].push(list[i]), 
				name: list[i].category.name, 
				code: list[i].category.code
			})
		}
	}
	return cateList;
}