import Editor from "../Editor";

class EditorPHP extends Editor {
  constructor(...args){
    super(...args);
    
    this.mode = "php";
    
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

export default EditorPHP;