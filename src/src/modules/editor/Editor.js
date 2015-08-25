class Editor {	
	
	constructor({lib, id="editor", theme="monokai", mode="javascript", options={}}){
		this.lib     = lib;
		this.mode    = this.mode || mode;
		this.theme   = theme;
		this.options = options;		
		this._dirty  = false;
		
		var _EventEmitter   = require('../../../../lib/micro-events.js');
		this.events = new _EventEmitter();
		
		this.init(id);
	}
	
	init(id) {
		this.editor = this.create(id);
		
		this.setTheme(this.theme);
		this.setMode(this.mode);
		this.setOptions(this.options);
		
		this.ready();
	}
	
	registerEvents() {
		var document = this.document || this.editor.session.getDocument();
		
		document.on("change", (...args)=> {
			//alert ('in registerEvents, set dirty to true');
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
				}
			}
		}
		rawFile.send(null);
		return allText;
	}
	
	loadFile(){
		var path = IDE.qParams.path;
		
		if (IDE.qParams.path.indexOf('.html', this.length - '.html'.length) !== -1)
			IDE.qParams.mode = 'html';
		else if (IDE.qParams.path.indexOf('.css', this.length - '.css'.length) !== -1)
			IDE.qParams.mode = 'css';
		else
			IDE.qParams.mode = 'html';
	
		var content = this.readTextFile(path);
		
		
		
		this.setContent(content);
		this.setMode(IDE.qParams.mode);
		this.editor.session.setUndoManager(new (this.lib.UndoManager)());
		//alert ('in loadFile, set dirty to false');
		//this.dirty = false;		
		this.registerEvents();
	}
	
	ready() {
		setTimeout(()=>this.events.emit("editor.onready", {name : "editor.onready"}), 0);		
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
	
	selectAll() {
		this.editor.selectAll();
	}
	
	selectTo(x, y) {
		this.editor.selectTo(x, y);
	}
	
	set dirty(value){
		if (value && ! this._dirty) {
			//alert ('set dirty to true');
			this._dirty = true;
			this.events.emit("editor.ondirty", {name : "editor.ondirty"});
		} else if (!value && this._dirty) {
			//alert ('set dirty to false');
			this._dirty = false;
			this.events.emit("editor.onclean", {name : "editor.onclean"});
		} else {
			//alert ('set dirty to nothing');
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
	
	onReady(callback){
		this.events.on("editor.onready", callback);
	}
	
}

export default Editor;