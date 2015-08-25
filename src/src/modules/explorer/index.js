import Tree from "./Tree"

var Module =  {
	activate(loaded){
		var explorer    = new Tree({
			className : "cloud-ide-tree",
			path      : IDE.qParams.path,
			project   : IDE.qParams.project
		});
		IDE.explorer = explorer;
		
		loaded();
	}
}

export default Module;