const Express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');
const proxy = require('http-proxy-middleware');
const resolve = file => path.resolve(__dirname, file)
const config = require('./config');
const server = Express();
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
	template: fs.readFileSync('./src/index.template.html', 'utf-8'),
	clientManifest,
	basedir: resolve('./dist')
})

let isProd = process.env.NODE_ENV === 'production';
const serve = (path, cache) => Express.static(resolve(path), {
  maxAge: isProd ? 1000 * 60 * 60 : 0
})

server.use('/dist', serve('./dist', true));
server.use('/api', proxy(config.PROXY_OPTIONS));

server.get('*', (req, res) => {
	const context = {
		title: 'yeahz博客',
		url: req.url
	}
	renderer.renderToString(context, (err, html) => {
		if(err) {
			res.status(500).end('Internal server error');
			return;
		}
		res.end(html);
	})
})

server.listen(8080, function() {
	console.log('server started on localhost ' + 8080)
});