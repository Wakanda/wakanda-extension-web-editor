import Editor from "./Editor";

class EditorJS extends Editor {	
	constructor(...args){
		this.mode = "javascript";
		super(...args);
		
		this.initMode();
	}
	
	initMode() {
		studio.alert('Editor JS loading')
		require("../../../lib/ace-min-noconflict/ext-language_tools");
		this.setOptions({
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true,
			enableSnippets: true
		});
	}
}

export default EditorJS;