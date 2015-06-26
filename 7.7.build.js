webpackJsonp([7],{

/***/ 68:
/*!**************************************!*\
  !*** ./src/modules/editor/Editor.js ***!
  \**************************************/
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
			this.init(id);
		}
	
		_createClass(Editor, {
			init: {
				value: function init(id) {
	
					this.editor = this.create(id);
	
					this.setTheme(this.theme);
					this.setMode(this.mode);
					this.setOptions(this.options);
					if (IDE.qParams.path) {
						this.loadFile();
					} else {
						this.ready();
					}
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
	
						setTimeout(function () {
							return _this.dirty = true;
						}, 0);
						setTimeout(function () {
							return IDE.EventManager.emit("editor.onchange", { name: "editor.onchange", params: args });
						}, 0);
					});
				}
			},
			loadFile: {
				value: function loadFile() {
					var _this = this;
	
					var path = IDE.qParams.path;
					IDE.fileManager.getFile(path).then(function (event) {
						var content = event.response;
	
						_this.setContent(content);
						/*
	      * Ace Workaround
	      * {
	      */
						_this.editor.session.setUndoManager(new _this.lib.UndoManager());
						/*
	      * }
	      */
	
						_this.ready();
					});
				}
			},
			ready: {
				value: function ready() {
					this.registerEvents();
					IDE.EventManager.emit("editor.onready", { name: "editor.onready" });
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
						this._dirty = true;
						IDE.EventManager.emit("editor.ondirty", { name: "editor.ondirty" });
					} else if (!value && this._dirty) {
						this._dirty = false;
						IDE.EventManager.emit("editor.onclean", { name: "editor.onclean" });
					}
				},
				get: function () {
					return this._dirty;
				}
			}
		});
	
		return Editor;
	})();
	
	module.exports = Editor;

/***/ }

});
//# sourceMappingURL=7.7.build.js.map