const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
	module: {
	  rules: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	},
	devServer: {
	  contentBase: path.join(__dirname, "dist"),
	  port: 3000
	}
};