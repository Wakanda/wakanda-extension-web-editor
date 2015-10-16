import Request from "./Request";

class FileManager {
	
	constructor() {
		//super();
		this.client = new Request();
	}
	
	getTree(path) {
		return this.client.createRequest("/folders")
		.withHeader("Content-Type", "application/json")
		.withParams({path})
		.asGet()	
		.send();
	}
	
	getFile(path){
		return this.client.createRequest("/files")
		.withParams({path})
		.asGet()	
		.send();
	}
	
	setFile(path, content){
		return this.client.createRequest("/files")
		.withParams({path})
		.asPut()
		.withContent(content)
		.send();
	}
	
}

export default FileManager;	