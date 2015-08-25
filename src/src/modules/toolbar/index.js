import Toolbar from "./Toolbar"

var Module =  {
	activate(loaded){
		var toolbar = new Toolbar({
			className : "page_toolbar"
		});
		IDE.toolbar = toolbar;
		
		IDE.plugins.onPluginsLoaded(function(){
			//alert("Plugins Loaded");
		});
		
		IDE.plugins.onPluginsActivated(function(){
			//alert("Plugins Activated");
		});
		
		loaded();
	}
}

export default Module;