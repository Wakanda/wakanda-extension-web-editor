import {query, mapExtToEditorMode} from "../Utils"


var Module = {
	activate(loaded){
		//Core Plugin qParams
		var qParams    = query();
		var mode       = qParams.mode;
		IDE.qParams    = qParams;
		
		IDE.qParams.path  = '';
		
		loaded();
	}
}

export default Module;