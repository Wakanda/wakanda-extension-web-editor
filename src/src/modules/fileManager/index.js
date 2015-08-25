import FileManager from "./FileManager"

var Module =  {
	activate(loaded){
		var fileManager    = new FileManager();
		IDE.fileManager    = fileManager;
		
		loaded();
	}
}

export default Module;