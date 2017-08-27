export default function(arr, key, value) {
	for(let i = 0; i < arr.length; i ++) {
		if(arr[i][key] == value[key]) {
			arr[i] = value;
		}
	}
}