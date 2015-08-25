import Editor from "./Editor";

class EditorJS extends Editor {	
	constructor(...args){
		super(...args);
		
		this.mode = "javascript";
		
		this.initMode();
	}
	
	initMode() {
		require("../../../lib/ace-min-noconflict/ext-language_tools");
		this.setOptions({
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			enableSnippets: true
		});
	}
}

export default EditorJS;