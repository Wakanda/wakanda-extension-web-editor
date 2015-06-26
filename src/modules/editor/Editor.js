class Editor {	
	
	constructor({lib, id="editor", theme="monokai", mode="javascript", options={}}){
		this.lib     = lib;
		this.mode    = this.mode || mode;
		this.theme   = theme;
		this.options = options;		
		this._dirty  = false;
		
		var _EventEmitter   = require('../../../lib/micro-events.js');
		this.events = new _EventEmitter();
		
		this.init(id);
	}
	
	init(id) {
		
		this.editor = this.create(id);
		
		this.setTheme(this.theme);
		this.setMode(this.mode);
		this.setOptions(this.options);
		if (IDE.qParams.path){
			this.loadFile();
		} else {
			this.ready();
		}
	}
	
	registerEvents() {
		var document = this.document || this.editor.session.getDocument();
		
		document.on("change", (...args)=> {
			setTimeout(()=>this.dirty = true , 0);
			setTimeout(()=>this.events.emit("editor.onchange", {name : "editor.onchange", params : args}), 0);
		});
	}
	
	/*
	loadFile(){
		var path = IDE.qParams.path;
		
		IDE.fileManager.getFile(path).then((event)=>{
			var content = event.response;
			
			this.setContent(content);
			//
			// Ace Workaround
			// {
			//
			this.editor.session.setUndoManager(new (this.lib.UndoManager)());
			//
			// }
			//
			 
			this.ready();			
		});
	}
	*/
	
	readTextFile(filePath) {
		var rawFile = new XMLHttpRequest();
		var allText = '';
		rawFile.open("GET", filePath, false);
		rawFile.onreadystatechange = function () {
			if(rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status == 0) {
					allText = rawFile.responseText;
					//studio.alert(allText);
				}
			}
		}
		rawFile.send(null);
		return allText;
	}
	
	loadFile(){
		var path = IDE.qParams.path;
		
		var content = this.readTextFile(path);
		
		
		//studio.alert(content);
		
		this.setContent(content);
		this.editor.session.setUndoManager(new (this.lib.UndoManager)());
		this.ready();
	}
	
	ready() {
		this.registerEvents();
		this.events.emit("editor.onready", {name : "editor.onready"});
	}
	
	create(id) {
		return this.lib.edit(id);
	}
	
	setContent(content) {
		this.editor.setValue(content, -1);
	}
	
	getContent() {
		return this.editor.getValue();
	}
	
	setReadOnly(value) {
		this.editor.setReadOnly(value)
	}
	
	setOptions(options) {
		this.editor.setOptions(options);
	}
	
	setTheme(theme) {
		this.editor.setTheme(`ace/theme/${theme}`);
	}
	
	setMode(mode) {
		this.editor.setOption("mode", `ace/mode/${mode}`);
	}
	
	undo() {
		this.editor.undo();
	}
	
	redo() {
		this.editor.redo();
	}
	
	set dirty(value){
		if(value && ! this._dirty){
			this._dirty = true;
			this.events.emit("editor.ondirty", {name : "editor.ondirty"});
		}else if(!value && this._dirty){
			this._dirty = false;
			this.events.emit("editor.onclean", {name : "editor.onclean"});
		}
	}
	
	get dirty(){
		return this._dirty;
	}
	
	onDirty(callback){
		this.events.on("editor.ondirty", callback);
	}
	
	onClean(callback){
		this.events.on("editor.onclean", callback);
	}
	
	onChange(callback){
		this.events.on("editor.onchange", callback);
	}
	
}

export default Editor;