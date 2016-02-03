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
			setTimeout(()=>this.dirty = true , 0);
			setTimeout(()=>this.events.emit("editor.onchange", {name : "editor.onchange", params : args}), 0);
		});
	}
	
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
		var extension = IDE.qParams.path.split('.').pop();
		switch (extension) {
			case "css":
				IDE.qParams.mode = "css";
				break;
			case "html":
			case "xhtml":
			case "htm":
				IDE.qParams.mode = "html";
				break;
			case "jade":
				IDE.qParams.mode = "jade";
				break;
			case "java":
			case "jsp":
				IDE.qParams.mode = "java";
				break;
			case "js":
			case "jsm":
			case "jsx":
				IDE.qParams.mode = "javascript";
				break;
			case "less":
				IDE.qParams.mode = "less";
				break;
			case "md":
			case "markdown":
				IDE.qParams.mode = "markdown";
				break;
			case "php":
			case "phtml":
			case "ctp":
			case "phpt":
			case "phps":
				IDE.qParams.mode = "php";
				break;
			case "pl":
			case "pm":
				IDE.qParams.mode = "perl";
				break;
			case "py":
			case "pyc":
			case "pyo":
				IDE.qParams.mode = "python";
				break;
			case "rb":
			case "ru":
			case "gemspec":
			case "rake":
				IDE.qParams.mode = "ruby";
				break;
			case "twig":
			case "swig":
				IDE.qParams.mode = "twig";
				break;
			case "sass":
				IDE.qParams.mode = "sass";
				break;
			case "scss":
				IDE.qParams.mode = "scss";
				break;
			case "yml":
			case "yaml":
				IDE.qParams.mode = "yaml";
				break;
			default:
				IDE.qParams.mode = "plain_text";
				break;
		}
		var content = this.readTextFile(path);
		this.setContent(content);
		this.mode = IDE.qParams.mode;
		this.setMode(IDE.qParams.mode);
		this.editor.session.setUndoManager(new (this.lib.UndoManager)());
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
			this._dirty = true;
			this.events.emit("editor.ondirty", {name : "editor.ondirty"});
		} else if (!value && this._dirty) {
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
	
	onReady(callback){
		this.events.on("editor.onready", callback);
	}
	
}

export default Editor;