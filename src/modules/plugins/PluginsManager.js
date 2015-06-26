var IDE = window.IDE;

class PluginsManager {
	constructor(){
		
		var _EventEmitter   = require('../../../lib/micro-events.js');
		this.events = new _EventEmitter();
		
		this.toolbarElements  = [];
		this.plugins          = {};		
	}
	
	get(pluginName) {
		return this.plugins[pluginName]
	}
	
	load(pluginName) {
		this.plugins[pluginName]          = {};
		this.plugins[pluginName].code     = require(`../../../plugins/${pluginName}/index.js`);
		this.plugins[pluginName].manifest = require(`../../../plugins/${pluginName}/manifest.js`);
	}
	
	loadMultiple(plugins) {
		plugins.forEach((plugin)=>this.load(plugin));		
		/*
		var that = this;
		plugins.forEach(function(plugin){
			that.load(plugin);
		});
		*/
		
		//For now the load is Synchronous
		IDE.plugins.events.emit("all_loaded");
	}
	
	activate(pluginName){
		/*
		 * Behaviour to be discussed
		 */
		this.registerPluginToolbarElements(pluginName);
		try{
			this.plugins[pluginName].code.activate();
		}catch(e){
			
		}
		
		this.events.emit("plugin_activated", this.plugins[pluginName]);
	}
	
	registerPluginToolbarElements(pluginName) {
		var toolbarElements = this.plugins[pluginName].manifest.toolbar;
		
		toolbarElements.forEach((element)=>{
			element.plugin = pluginName;
			this.toolbarElements.push(element);
		});
	}
	
	getToolbarElements() {
		return this.toolbarElements;
	}
	
	onPluginActivated(callback){
		this.events.on("plugin_activated", callback );
	}
	
	onPluginsLoaded(callback){
		this.events.on("all_loaded", callback );
	}
	
	onPluginsActivated(callback){
		this.events.on("all_activated", callback );
	}
}

export default PluginsManager;