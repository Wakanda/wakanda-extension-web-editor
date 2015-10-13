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
	"editor",
	"studioManager"
]);

IDE.Core.onReady(function(){

	IDE.plugins.onPluginsLoaded(function(){
		IDE.plugins.activate("history");
		IDE.plugins.activate("save");
		IDE.plugins.activate("studioPreferences");
		IDE.plugins.events.emit("all_activated");
	});

	IDE.plugins.loadMultiple([
		"history",
		"save",
		"studioPreferences"
	]);	
});
