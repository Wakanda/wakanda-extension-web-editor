var webpack = require('webpack'),
	path = require('path'),
	fs = require('fs'),
	ejs = require('ejs'),
	Clean = require('clean-webpack-plugin');

// output build folder
var buildFolder = "./build/";

// environment variables
var environment = process.env.NODE_ENV || "development";
if (process.argv.indexOf('--build-prod') > 0) {
	environment = 'production';
} else if (process.argv.indexOf('--build-test') > 0) {
	environment = 'test';
}

var definePlugin = new webpack.DefinePlugin({
	__BUILD_DIR__ : buildFolder, 
	__NODE_ENV__ : JSON.stringify(environment),
	__DEV__: environment == 'development',
	__PROD__: environment == 'production',
	__TEST__: environment == 'test'
});

// webpack plugin loader
var pluginsToLoad = [
	definePlugin,
	new Clean([buildFolder]),
	new webpack.HotModuleReplacementPlugin()
];

//must end with .build.ejs
var filesToCompile = [
	"index.build.ejs"
];

pluginsToLoad.push(function() {
  this.plugin("done", function(stats) {
    filesToCompile.forEach(function(fileName){
	    var source = fs.readFileSync(path.join(__dirname, 'src/', fileName),{encoding:'utf8'});
	    var target = ejs.render(source, {
	    	env: environment,
	    	buildDir: buildFolder,
	    	hash: stats.hash
	    });
	    var targetFileName = fileName.replace('.build.ejs','.html');
	    fs.writeFileSync(
	    	path.join(__dirname, targetFileName),
	    	target
	    );
	    process.stdout.write('File '+fileName+' processed to '+targetFileName+'\n');
    });
  });
});

module.exports = {
	entry  : {
		main : "./src/main.js"
	},
	output : {
		path     : buildFolder,
		publicPath: buildFolder,
		filename : "[name].build.js"
	},
	resolve : {
		alias : {
			"jquery" : "../jquery-2.1.3.min.js"
		}
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				exclude: /node_modules|ace/, 
				loader: 'babel-loader',
				query: {
			        blacklist: ["useStrict"]
		      	}
  			},
			{ test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'},
			{ test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
		]
	},
  	plugins: pluginsToLoad
};