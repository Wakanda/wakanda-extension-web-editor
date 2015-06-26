import Editor from "./Editor";

class EditorHTML extends Editor {
	constructor(...args){
		this.mode = "html";
		super(...args);
		
		this.initMode();
	}
	
	initMode() {
		require("../../../lib/ace-min-noconflict/ext-emmet.js");
		this.setOptions({
			"enableEmmet" : true
		});
	}
}

export default EditorHTML;