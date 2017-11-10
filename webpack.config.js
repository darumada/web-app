const path = require('path');
module.exports = {
  entry: './src/index.js',
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
	devServer: {
	  contentBase: path.join(__dirname, "www"),
	  port: 3000
	}
};