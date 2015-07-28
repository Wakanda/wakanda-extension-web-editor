
var Module =  {
	activate(loaded) {
		//Core Plugin Editor
		
			console.log(IDE.qParams.mode)
		switch(IDE.qParams.mode){
			case "html":
				require.ensure(["./EditorHTML.js"], function(require){
					var Editor  = require("./EditorHTML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					//studio.alert('mode html');
					loaded();
				});
				break;
			case "css":
				require.ensure(["./EditorCSS.js"], function(require){
					var Editor  = require("./EditorCSS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					//studio.alert('mode css');
					loaded();
				});
				break;
			case "javascript":
				require.ensure(["./EditorJS.js"], function(require){
					var Editor  = require("./EditorJS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					//studio.alert('mode html');
					loaded();
				});
				break;
			default:
				require.ensure(["./Editor.js"], function(require){
					var Editor  = require("./Editor.js");
					IDE.editor = new Editor({id:"editor", lib: ace, mode:IDE.qParams.mode});
					//studio.alert('mode default');
					//IDE.editor.onReady(loaded)
					loaded();
				});
		}
	}
}

export default Module;