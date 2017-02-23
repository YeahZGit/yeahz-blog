# manager

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9000
npm run dev

amend： 1.simditor.js
		row 4442: img_path = '/api' + result.url;
		
		2.uploader.js
		row 147 add：'Authorization': 'Bearer ' +  window.sessionStorage.getItem('token'),