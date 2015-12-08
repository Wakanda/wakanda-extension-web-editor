require("./style.css");

var IDE = window.IDE;

export default {
	
	activate(){
		IDE.editor.onDirty(this.onDirty);
		IDE.editor.onClean(this.onClean);
	},
	
	/*
	save(){
		
		IDE.toolbar.removeClassToItem("save", "save-enabled");
		
		IDE.editor.setReadOnly(true);
		
		IDE.fileManager.setFile(IDE.qParams.path, IDE.editor.getContent()).then(function(){
			IDE.editor.dirty = false;
			IDE.editor.setReadOnly(false);
		});
	},
	*/
	
	saveTextAsFile(fileNameToSaveAs, textToWrite) {
		var file2Save = studio.File(fileNameToSaveAs);
		if ( !file2Save.exists )
		{
			var	bCreated = file2Save.create ( );
			if ( !bCreated )
			{
				debug_alert ( "Failed to create " + gitIgnorePath );
				return;
			}
		}
		studio.saveText(textToWrite, file2Save);
	},
  
	save(){
		
		IDE.toolbar.removeClassToItem("save", "save-enabled");
		
		IDE.editor.setReadOnly(true);

		this.saveTextAsFile(IDE.qParams.path, IDE.editor.getContent());
		
		studio.editor.setDirty(false);
		IDE.editor.dirty = false;
		IDE.editor.setReadOnly(false);
		//studio.alert('sauve!');
		studio.extension.syncBufferTimestamp(IDE.qParams.path);
	},
	
	onDirty(){
		//document.title = `(*) ${document.title}`;
		//alert('on dirty, by whom?');
		studio.editor.setDirty(true);
		IDE.toolbar.addClassToItem("save", "save-enabled");
	},
	
	onClean(){
		document.title = document.title.substr(4);
	}
}