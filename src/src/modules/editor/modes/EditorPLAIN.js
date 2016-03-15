import Editor from "../Editor";

class EditorPLAIN_TEXT extends Editor {
  constructor(...args){
    super(...args);
    
    this.mode = "plain_text";
    
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

export default EditorPLAIN_TEXT;