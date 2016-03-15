import Editor from "../Editor";

class EditorYAML extends Editor {
  constructor(...args){
    super(...args);
    
    this.mode = "yaml";
    
    this.initMode();
  }
  
  initMode() {
    require("../../../../../lib/ace-min-noconflict/ext-language_tools.js");
    this.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });
  }
}

export default EditorYAML;