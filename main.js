var IDE = window.IDE = {};

require("./styles/common.css");
require("./styles/editor.css");
require("./styles/tree.css");

//- LOAD CORE -//
import Core from "./src/core"

//- INITIALIZE CORE -//
IDE.Core = new Core([
	"plugins",
	"qParams",
	"toolbar",
	"fileManager",
	//"explorer",
	"editor"
	//"tabManager"	
]);
IDE.Core.onReady(function(){
	//studio.alert('ready');
	IDE.plugins.onPluginsLoaded(function(){
		IDE.plugins.activate("history");
		IDE.plugins.activate("save");
		IDE.plugins.events.emit("all_activated");
	});
	//studio.alert('gogo');
	IDE.plugins.loadMultiple([
		"history",
		"save"
	]);
});
IDE.shortcut_plugins_save_save = function() {
	IDE['plugins']['plugins']['save']['code']['save']();
}