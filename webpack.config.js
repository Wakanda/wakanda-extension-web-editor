var webpack = require('webpack');

var environment = process.env.NODE_ENV || "development";

var definePlugin = new webpack.DefinePlugin({
  __NODE_ENV__ : JSON.stringify(environment),
  __DEV__: environment == 'development'
});

module.exports = {
	entry  : {
		main : "./main.js"
	},
	output : {
		filename : "[name].build.js",
		path     : "./"
	},
	resolve : {
		alias : {
			"jquery" : "../jquery-2.1.3.min.js"
		}
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules|ace/, loader: 'babel-loader'},
			{ test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'},
			{ test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
		]
	},
  	plugins: [definePlugin]
};