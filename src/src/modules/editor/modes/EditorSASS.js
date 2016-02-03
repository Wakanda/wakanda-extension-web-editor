import Editor from "../Editor";

class EditorSASS extends Editor {
  constructor(...args){
    super(...args);
    
    this.mode = "sass";
    
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

export default EditorSASS;