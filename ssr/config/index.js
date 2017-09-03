module.exports =  {
	PROXY_OPTIONS: {
		target: 'http://localhost:3000',
	 	changeOrigin: true,
	  pathRewrite: {
	  	'^/api': ''
	  }  
	}
}