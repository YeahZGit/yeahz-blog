export default function(arr, key, value) {
	for(let i = 0; i < arr.length; i ++) {
		if(arr[i][key] == value) {
			arr.splice(i, 1);
		}
	}
}