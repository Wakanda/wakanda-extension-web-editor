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
		studio.editor.loaded();
	});

	//studio.alert('gogo');
	IDE.plugins.loadMultiple([
		"history",
		"save"
	]);	
});

IDE.loadFile = function(fn) {
	IDE.qParams.path = fn;
	//alert("IDE.qParams.path =  " + IDE.qParams.path);

	IDE.editor.loadFile();
};

	
IDE.shortcut_plugins_save_save = function() {
	studio.alert('save() called');
	IDE['plugins']['plugins']['save']['code']['save']();
};

IDE.selectByTextOffset = function(offset, length) {
	//studio.alert('selectByTextOffset called');
	studio.alert(offset + ' + ' + length);
};

IDE.getText = function() {
	studio.alert('getText() called');
	return "";
};

IDE.getSelectedText = function() {
	studio.alert('getSelectedText() called');
};

IDE.insertText = function() {
	studio.alert('insertText() called');
};
