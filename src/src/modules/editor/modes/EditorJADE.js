import Editor from "../Editor";

class EditorJADE extends Editor {
  constructor(...args){
    super(...args);
    
    this.mode = "jade";
    
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

export default EditorJADE;