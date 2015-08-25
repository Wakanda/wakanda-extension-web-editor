
var Module =  {
	activate(loaded) {
		//Core Plugin Editor
		if(!__PROD__) {
			console.log(IDE.qParams.mode)
		}
		
		switch(IDE.qParams.mode){
			case "html":
				require.ensure(["./EditorHTML.js"], function(require){
					var Editor  = require("./EditorHTML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "css":
				require.ensure(["./EditorCSS.js"], function(require){
					var Editor  = require("./EditorCSS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "javascript":
				require.ensure(["./EditorJS.js"], function(require){
					var Editor  = require("./EditorJS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			default:
				require.ensure(["./EditorHTML.js"], function(require){
					var Editor  = require("./EditorHTML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
		}
	}
}

export default Module;