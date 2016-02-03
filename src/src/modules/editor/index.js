var Module =  {
	activate(loaded) {
		if(!__PROD__) {
			console.log(IDE.qParams.mode)
		}		
		switch(IDE.qParams.mode){
			case "css":
				require.ensure(["./modes/EditorCSS.js"], function(require){
					var Editor  = require("./modes/EditorCSS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "html":
				require.ensure(["./modes/EditorHTML.js"], function(require){
					var Editor  = require("./modes/EditorHTML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "jade":
				require.ensure(["./modes/EditorJADE.js"], function(require){
					var Editor  = require("./modes/EditorJADE.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "java":
				require.ensure(["./modes/EditorJAVA.js"], function(require){
					var Editor  = require("./modes/EditorJAVA.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "javascript":
				require.ensure(["./modes/EditorJS.js"], function(require){
					var Editor  = require("./modes/EditorJS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "less":
				require.ensure(["./modes/EditorLESS.js"], function(require){
					var Editor  = require("./modes/EditorLESS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "markdown":
				require.ensure(["./modes/EditorMD.js"], function(require){
					var Editor  = require("./modes/EditorMD.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "perl":
				require.ensure(["./modes/EditorPERL.js"], function(require){
					var Editor  = require("./modes/EditorPERL.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "php":
				require.ensure(["./modes/EditorPHP.js"], function(require){
					var Editor  = require("./modes/EditorPHP.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "plain_text":
				require.ensure(["./modes/EditorPLAIN.js"], function(require){
					var Editor  = require("./modes/EditorPLAIN.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "python":
				require.ensure(["./modes/EditorPYTHON.js"], function(require){
					var Editor  = require("./modes/EditorPYTHON.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "ruby":
				require.ensure(["./modes/EditorRUBY.js"], function(require){
					var Editor  = require("./modes/EditorRUBY.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "sass":
				require.ensure(["./modes/EditorSASS.js"], function(require){
					var Editor  = require("./modes/EditorSASS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "scss":
				require.ensure(["./modes/EditorSCSS.js"], function(require){
					var Editor  = require("./modes/EditorSCSS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "yaml":
				require.ensure(["./modes/EditorYAML.js"], function(require){
					var Editor  = require("./modes/EditorYAML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			default:
				require.ensure(["./modes/EditorPLAIN.js"], function(require){
					var Editor  = require("./modes/EditorPLAIN.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
		}
	}
}

export default Module;