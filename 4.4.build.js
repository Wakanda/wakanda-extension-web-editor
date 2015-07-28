webpackJsonp([4],{

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Editor = (function () {
		function Editor(_ref) {
			var lib = _ref.lib;
			var _ref$id = _ref.id;
			var id = _ref$id === undefined ? "editor" : _ref$id;
			var _ref$theme = _ref.theme;
			var theme = _ref$theme === undefined ? "monokai" : _ref$theme;
			var _ref$mode = _ref.mode;
			var mode = _ref$mode === undefined ? "javascript" : _ref$mode;
			var _ref$options = _ref.options;
			var options = _ref$options === undefined ? {} : _ref$options;

			_classCallCheck(this, Editor);

			this.lib = lib;
			this.mode = this.mode || mode;
			this.theme = theme;
			this.options = options;
			this._dirty = false;

			var _EventEmitter = __webpack_require__(22);
			this.events = new _EventEmitter();

			this.init(id);
		}

		_createClass(Editor, {
			init: {
				value: function init(id) {
					this.editor = this.create(id);

					this.setTheme(this.theme);
					this.setMode(this.mode);
					this.setOptions(this.options);

					this.ready();
				}
			},
			registerEvents: {
				value: function registerEvents() {
					var _this = this;

					var document = this.document || this.editor.session.getDocument();

					document.on("change", function () {
						for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
							args[_key] = arguments[_key];
						}

						//alert ('in registerEvents, set dirty to true');
						setTimeout(function () {
							return _this.dirty = true;
						}, 0);
						setTimeout(function () {
							return _this.events.emit("editor.onchange", { name: "editor.onchange", params: args });
						}, 0);
					});
				}
			},
			readTextFile: {

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

				value: function readTextFile(filePath) {
					var rawFile = new XMLHttpRequest();
					var allText = "";
					rawFile.open("GET", filePath, false);
					rawFile.onreadystatechange = function () {
						if (rawFile.readyState === 4) {
							if (rawFile.status === 200 || rawFile.status == 0) {
								allText = rawFile.responseText;
								//studio.alert(allText);
							}
						}
					};
					rawFile.send(null);
					return allText;
				}
			},
			loadFile: {
				value: function loadFile() {
					var path = IDE.qParams.path;
					//studio.alert('loadFile ' + path);

					if (IDE.qParams.path.indexOf(".html", this.length - ".html".length) !== -1) IDE.qParams.mode = "html";else if (IDE.qParams.path.indexOf(".css", this.length - ".css".length) !== -1) IDE.qParams.mode = "css";else IDE.qParams.mode = "html";

					var content = this.readTextFile(path);

					this.setContent(content);
					this.setMode(IDE.qParams.mode);
					this.editor.session.setUndoManager(new this.lib.UndoManager());
					//alert ('in loadFile, set dirty to false');
					//this.dirty = false;		
					this.registerEvents();
				}
			},
			ready: {
				value: function ready() {
					var _this = this;

					setTimeout(function () {
						return _this.events.emit("editor.onready", { name: "editor.onready" });
					}, 0);
				}
			},
			create: {
				value: function create(id) {
					return this.lib.edit(id);
				}
			},
			setContent: {
				value: function setContent(content) {
					this.editor.setValue(content, -1);
				}
			},
			getContent: {
				value: function getContent() {
					return this.editor.getValue();
				}
			},
			setReadOnly: {
				value: function setReadOnly(value) {
					this.editor.setReadOnly(value);
				}
			},
			setOptions: {
				value: function setOptions(options) {
					this.editor.setOptions(options);
				}
			},
			setTheme: {
				value: function setTheme(theme) {
					this.editor.setTheme("ace/theme/" + theme);
				}
			},
			setMode: {
				value: function setMode(mode) {
					this.editor.setOption("mode", "ace/mode/" + mode);
				}
			},
			undo: {
				value: function undo() {
					this.editor.undo();
				}
			},
			redo: {
				value: function redo() {
					this.editor.redo();
				}
			},
			dirty: {
				set: function (value) {
					if (value && !this._dirty) {
						//alert ('set dirty to true');
						this._dirty = true;
						this.events.emit("editor.ondirty", { name: "editor.ondirty" });
					} else if (!value && this._dirty) {
						//alert ('set dirty to false');
						this._dirty = false;
						this.events.emit("editor.onclean", { name: "editor.onclean" });
					} else {}
				},
				get: function () {
					return this._dirty;
				}
			},
			onDirty: {
				value: function onDirty(callback) {
					this.events.on("editor.ondirty", callback);
				}
			},
			onClean: {
				value: function onClean(callback) {
					this.events.on("editor.onclean", callback);
				}
			},
			onChange: {
				value: function onChange(callback) {
					this.events.on("editor.onchange", callback);
				}
			},
			onReady: {
				value: function onReady(callback) {
					this.events.on("editor.onready", callback);
				}
			}
		});

		return Editor;
	})();

	module.exports = Editor;

	//alert ('set dirty to nothing');

/***/ }

});