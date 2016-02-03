import Editor from "../Editor";

class EditorLESS extends Editor {
	constructor(...args){
		super(...args);
		
		this.mode = "less";
		
		this.initMode();
	}
	
	initMode() {
		require("../../../../../lib/ace-min-noconflict/ext-language_tools.js");
		require("../../../../../lib/ace-min-noconflict/ext-emmet.js");
		this.setOptions({
			enableEmmet : true,
			enableBasicAutocompletion: true,
			enableSnippets: true,
			enableLiveAutocompletion: true
		});
	}
}

export default EditorLESS;