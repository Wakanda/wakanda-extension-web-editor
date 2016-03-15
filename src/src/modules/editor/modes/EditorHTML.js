import Editor from "../Editor";

class Html extends Editor {
	constructor(...args){
		super(...args);
		
		this.mode = "html";
		
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

export default Html;