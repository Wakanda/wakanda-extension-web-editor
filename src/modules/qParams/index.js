import {query, mapExtToEditorMode} from "../Utils"


var Module = {
	activate(loaded){
		//Core Plugin qParams
		var qParams    = query();
		var mode       = qParams.mode;
		IDE.qParams    = qParams;

		IDE.qParams.path  = studio.extension.storage.getItem( 'file' );

		// Q&D! to rewrite!
		if (IDE.qParams.path.indexOf('.html', this.length - '.html'.length) !== -1)
			IDE.qParams.mode = 'html';
		else if (IDE.qParams.path.indexOf('.css', this.length - '.css'.length) !== -1)
			IDE.qParams.mode = 'css';
		
		if(IDE.qParams.path){
			var extResult = IDE.qParams.path.match(/([^\/\.]+)\.?([^\.]+)$/);	
			console.log(extResult)
			if (extResult){
				IDE.filename   = extResult[0];
				if(!mode ){
					//studio.alert('mode: ' + mode);
					mode = mapExtToEditorMode(extResult[2].toLowerCase());
				}
				console.log(mode)
				document.title = IDE.filename;
			}
		}
		
		loaded();
	}
}

export default Module;