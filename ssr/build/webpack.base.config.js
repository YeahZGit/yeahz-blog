const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
	devtool: isProd 
	? false 
	: '#cheap-module-source-map',
	output: {
	  path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
	},
	resolve: { 
		extensions: ['.js','.vue'],
		alias: { 
			'vue': 'vue/dist/vue.js' 
		} 
	},
	module: {
		noParse: /es6-promise\.js$/, 
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				extractCSS: process.env.NODE_ENV === 'production',
				preserveWhitespace: false,
				postcss: [
					require('autoprefixer')({
						browsers: ['last 3 versions']
					})
				]
			}
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'url-loader',
			options: {
				limit: 10000,
				name: '[name].[ext]?[hash]'
			}
		},
		{
		  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
	    loader: 'url-loader',
	    options: {
	    	limit: 10000,
	    	name: '[name].[ext]?[hash]'
	    }	
		},
		{
			test: /\.css$/,
			use: isProd
			? ExtractTextPlugin.extract({
				use: 'css-loader?minimize',
				fallback: 'vue-style-loader'
			})
			: ['vue-style-loader', 'css-loader']
		}]
	},
	performance: {
		maxEntrypointSize: 300000,
		hints: isProd ? 'warning' : false
	},
	plugins: isProd
    ? [
	    	new webpack.optimize.UglifyJsPlugin({
	        compress: { warnings: false }
	      }),
	      new ExtractTextPlugin({
	        filename: 'common.[chunkhash].css'
	      })
      ]
    : [new FriendlyErrorsPlugin()] 
}