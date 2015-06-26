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
	}
};