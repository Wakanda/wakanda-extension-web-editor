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




IDE.selectByTextOffset = function(start, end) {
	//studio.alert('selectByTextOffset called');
//studio.alert(start + ' - ' + end);
	//IDE.editor.editor.selection.selectLine();
	
	var aceStartPos;
	var aceEndPos;
	var doc = IDE.editor.editor.getSession().getDocument();
	var lines = doc.getAllLines();
	
	function posFromOffset( offsetPos ) {
		var row = 0, col = 0;
		var pos = 0;
		while (row < lines.length && pos + lines[row].length < offsetPos) {
			pos += lines[row].length;
			pos++; /*pos++;*/ // for the newline 0x0A 0x0D
			row++;
		}
		col = offsetPos - pos;
		return {row: row, column: col};
	}

	//if (typeof option.start != "undefined")
	aceStartPos = posFromOffset(start);
	aceEndPos = posFromOffset( end );


	var sel = IDE.editor.editor.getSelection();
	var range = sel.getRange();
	
//studio.alert('raw: ' + aceStartPos.row + '     col: ' + aceStartPos.column);
	range.setStart( aceStartPos.row, aceStartPos.column );
//studio.alert('raw: ' + aceEndPos.row + '     col: ' + aceEndPos.column);
	range.setEnd( aceEndPos.row, aceEndPos.column );
	sel.setSelectionRange( range );
};

IDE.getText = function() {
	var content2Search = IDE.editor.getContent();
	
	// the walkaround of find in files API
	content2Search = content2Search.replace(/(\n)/gm,"");
	
	return content2Search;
};

IDE.getSelectedText = function() {
	studio.alert('getSelectedText() called');
};

IDE.insertText = function() {
	studio.alert('insertText() called');
};
