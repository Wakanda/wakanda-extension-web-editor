
var IDE = window.IDE;


class Core {
	constructor(coreModules){
		var that = this;
		
		if( IDE.Core ) {
			throw "Only one instance of core is allowed.";
		}
		
		this.activatedPlugins = [];
		this.plugins          = {};
		
		var _EventEmitter   = require('../lib/micro-events.js');
		this.events = new _EventEmitter();
		
		coreModules.forEach(function(moduleName){
			console.log(moduleName);
			var module = require(`./modules/${moduleName}/index.js`);
			
			module.activate(function(){
				that.activatedPlugins.push(moduleName);
				
				if(that.activatedPlugins.length === coreModules.length){
					that.events.emit("ready");
				}
			});
		});		
	}
 
	get(pluginName) {
		return this.plugins[pluginName]
	}

	load(pluginName) {
		this.plugins[pluginName]          = {};
		this.plugins[pluginName].code     = require(`../plugins/${pluginName}/index.js`);
		this.plugins[pluginName].manifest = require(`../plugins/${pluginName}/manifest.js`);
	}

	activate(pluginName) {
		if (!this.plugins[pluginName]) {
			throw "Plugin \"" + pluginName + "\" doesn't exist.";
		}
		this.plugins[pluginName].isActivated = true;
	}
	
	onReady(callback) {
		this.events.on("ready", callback);
	}
}

export default Core;
