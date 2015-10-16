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

		this.editor.selection.on('changeCursor', (...args)=> {
			setTimeout(()=>this.events.emit("editor.oncursorpositionchange", {name : "editor.oncursorpositionchange", params : args}), 0);
		});
	}

	loadFile(){
		var path = IDE.qParams.path;
		
		IDE.fileManager.getFile(path).then((event)=>{
			var content = event.response;

			if (IDE.qParams.path.indexOf('.html', this.length - '.html'.length) !== -1) {
				IDE.qParams.mode = 'html';
			} else if (IDE.qParams.path.indexOf('.css', this.length - '.css'.length) !== -1) {
				IDE.qParams.mode = 'css';
			} else {
				IDE.qParams.mode = 'html';
			}
			this.setMode(IDE.qParams.mode);

			this.setContent(content);
			// Ace Workaround
			this.editor.session.setUndoManager(new (this.lib.UndoManager)());
			// end - Ace Workaround
			 
			this.ready();			
		}).catch((e)=>{
			console.error(e)
		});
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
	
	selectAll() {
		this.editor.selectAll();
	}
	
	selectTo(x, y) {
		this.editor.selectTo(x, y);
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
	
	onCursorPositionChange(callback){
		this.events.on("editor.oncursorpositionchange", callback);
	}
	
}

export default Editor;