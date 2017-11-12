const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'build.js',
    publicPath: '/'
  },
	module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
	plugins: [
    	new UglifyJSPlugin(),
    	new webpack.DefinePlugin({
			  'process.env':{
			    'NODE_ENV': JSON.stringify('production')
			  }
			}),
  ],
	devServer: {
	  contentBase: path.join(__dirname, "www"),
	  port: 3000
	}
};