/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".build.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var IDE = window.IDE = {};

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);

	//- LOAD CORE -//

	var Core = _interopRequire(__webpack_require__(21));

	//- INITIALIZE CORE -//
	IDE.Core = new Core(["plugins", "qParams", "toolbar", "fileManager",
	//"explorer",
	"editor"
	//"tabManager"	
	]);

	IDE.Core.onReady(function () {
		//studio.alert('ready');
		IDE.plugins.onPluginsLoaded(function () {
			IDE.plugins.activate("history");
			IDE.plugins.activate("save");
			IDE.plugins.events.emit("all_activated");
			studio.editor.loaded();
		});

		//studio.alert('gogo');
		IDE.plugins.loadMultiple(["history", "save"]);
	});

	IDE.loadFile = function (fn) {
		IDE.qParams.path = fn;
		//alert("IDE.qParams.path =  " + IDE.qParams.path);

		IDE.editor.loadFile();
	};

	IDE.shortcut_plugins_save_save = function () {
		IDE.plugins.plugins.save.code.save();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\common.css", function() {
			var newContent = require("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\common.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "/*\r\n * Ribbon\r\n */\r\n.page_ribbon {\r\n\tbackground-color:black;\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n\theight: 45px;\r\n}\r\n.page_ribbon_logo {\r\n\tmargin-top: 8px;\r\n\tmargin-left: 5px;\r\n}\r\n\r\n/*\r\n * Toolbar\r\n */\r\n.page_toolbar {\r\n\tbackground-color:#fff;\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n\theight: 32px;\r\n\tborder-bottom: 1px solid #F9F9F9;\r\n }\r\n \r\n.page-toolbar-items {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tposition: absolute;\r\n\tmargin: 0;\r\n}\r\n\r\n.page-toolbar-item {\r\n\tfloat: left;\r\n\theight: 32px;\r\n\twidth: 32px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n}\r\n\r\n.page-toolbar-item-separator {\r\n\twidth: 0.4rem;\r\n\tborder-right: 1px solid #ccc;\r\n}\r\n/*\r\n * Tree\r\n */\r\n.cloud-ide-tree{\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\twidth:290px;\r\n\ttop:78px;\r\n\tbottom:0px;\r\n\t/*resize: horizontal;*/\r\n\toverflow: auto;\r\n}\r\n/*\r\n * Editor\r\n */\r\n.cloud-ide-editor{\r\n\tposition:absolute;\r\n\tleft:0px;\r\n\tright:0px;\r\n\ttop:34px;\r\n\tbottom:0px;\r\n}\r\n/*\r\n * Tree-Editor-Handle\r\n */\r\n.cloud-ide-tree-editor-handle{\r\n\tposition:absolute;\r\n\tleft:290px;\r\n\twidth:10px;\r\n\ttop:78px;\r\n\tbottom:0px;\r\n\tbackground-color: #E2E2E2;\r\n\tcursor: ew-resize;\r\n}\r\n.cloud-ide-tree-editor-handle div{\r\n\tposition:absolute;\r\n\ttop:50%;\r\n\twidth:100%;\r\n\ttext-align: center;\r\n\tfont-size: 18px;\r\n\tfont-weight: bolder;\r\n\tcolor: white;\r\n\ttext-shadow: 1px 1px 1px rgba(73, 69, 69, 1);\r\n}\r\n\r\n.unselectable {\r\n\t-webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}", ""]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\editor.css", function() {
			var newContent = require("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\editor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, "#ace_settingsmenu{\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tfont-family: 'Open Sans', sans-serif !important;\r\n\tfont-size: 13px !important;\r\n\tcolor: #818181 !important;\r\n\tbox-shadow: none !important;\r\n}", ""]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\tree.css", function() {
			var newContent = require("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\styles\\tree.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, ".cloud-ide-tree-ext-home {\r\n\tbackground-image: url("+__webpack_require__(9)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-waperm {\r\n\tbackground-image: url("+__webpack_require__(10)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-waproject {\r\n\tbackground-image: url("+__webpack_require__(11)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-wadirectory {\r\n\tbackground-image: url("+__webpack_require__(12)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-wasolution{\r\n\tbackground-image: url("+__webpack_require__(13)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-wasettings {\r\n\t/*background-image: url(\"../images/tree/settings.png\") !important;*/\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-wamodel {\r\n\tbackground-image: url("+__webpack_require__(14)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-folder {\r\n\tbackground-image: url("+__webpack_require__(15)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-css {\r\n\tbackground-image: url("+__webpack_require__(16)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-html {\r\n\tbackground-image: url("+__webpack_require__(17)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-js {\r\n\tbackground-image: url("+__webpack_require__(18)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-json {\r\n\tbackground-image: url("+__webpack_require__(19)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}\r\n\r\n.cloud-ide-tree-ext-unknown {\r\n\tbackground-image: url("+__webpack_require__(20)+") !important;\r\n\tbackground-size: 16px 16px;\r\n\tbackground-position: 4px 4px !important;\r\n}", ""]);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0EzQjJEMjYzODM3MTFFNEEzQkVGQTJCOTg4RENDQUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0EzQjJEMjczODM3MTFFNEEzQkVGQTJCOTg4RENDQUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQTNCMkQyNDM4MzcxMUU0QTNCRUZBMkI5ODhEQ0NBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQTNCMkQyNTM4MzcxMUU0QTNCRUZBMkI5ODhEQ0NBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlmWvb8AAAGbSURBVDhPvZTLK0VRFMa/fe5FQigTEzKTRymSiQw8ykwGRibKhPwDBqYmjIyYMCQzFOl65eaV8kyh5JG8X3mm6+zPvudsrqN7TpT8arXW3vusb611zu4IKvAHGNq7w5AObGQgWVmKXkXwFOLFCOR0Jng+pHcUbw86cOIiRHCvHVypUbEEV2vB/Q7rRBT0A7FpVuwg/I4cvD1SrtbRHDMod9vI0D3lTivNUUG50UCar+TzgX44grOjl0PIxVLwahKicBiIS4ecyQISc1UnA+DpIORyFeBL0AkRIkK3Qcj5YtW7H0bJLHDSD241A6FrcL0euJ6CUTypih1ALpQAT9s6URNuSx51q1FiKLdayPs1msE8NYo99VdvzhWRd0s0F8toBlIoL8etszAiPD+P+yCyO61uuNkImI+6TBRiUiHye1WHE+BRD0ROF0RGExwXUo4JHdkY1bT2Pvwn/mQYlXd6YeN5jz6SvxeIhqcQ/EnWKNG+0nfchXzxMCpuld3AKD/Tm+64C4lYZT479iXa3gPv0X7Bnwn94//oRwDvr/zp7bg7rZ0AAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyOUZDMzc1NDNCNTYxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOUZDMzc1MzNCNTYxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5YjU5ZWE1Ny1kNjE0LTRiZDItYTRlMC0wOWE5Mzc2MGU0NzUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUVGMjNBMUQyNDYwMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4U3flAAAAAQElEQVQoU2MMSy78z0ACYILSRAM6alhZ/gaO8QEWKA0G4Z0iWDWBxGGAKCchG4CiASYBMhFmKrLpIDD044GBAQCcnReDeUAGNwAAAABJRU5ErkJggg=="

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI3NTJCMDNCNTYxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI3NTJBRjNCNTYxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMzQ1QTQ2NTM4MzcxMUU0QTNCRUZBMkI5ODhEQ0NBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMzQ1QTQ2NjM4MzcxMUU0QTNCRUZBMkI5ODhEQ0NBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgqjJp0AAAF4SURBVDhPY/wPBAwUAKwGHDl5jmHhig0Mnz5/AfMlxUUZ8lJjGJQUZMF8FAAyAB2kFtb937Hv8H+gAf+/fP32f/+RU/8LazqgsqiACWoOCvj46TODq70VAy8PNwM3FyeDraUxw7MXr6CyqIDx4LHT/2ctXMXw+88fqBBxAGR4fEQAAzMzj3jD9x8/ocLEg1+/fjNcuHKDgeXzl69ggerCdAY9bXUwmxC4dvMOQ2P3NLAh8DBgZWVh2LbnEMPla7cY3r7/wPDv3z+oDAPYe+8/fgLLbdqxn+HHz19QGQYGFijNoKmmzCABjK6TZy4ybNl1gOEpMND+//vP8PfvXwYmZiYGSTFRBl1tNQZLEwMGcVFhqC5gIIYlF4LTwco5fWABYkF4ShGYxhqNMBCXXcGQmFsFSitQEUyA14BFUzsY5k9uY2BkZISKYAK4AVdv3IGyCIMbt+9DWcAwiMks+w+KDnIBU2ZCBAMfLw+USxrQUFXEnhuJBwwMAEsbtt1l28PtAAAAAElFTkSuQmCC"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0ZDRjhCRTNCNUUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0ZDRjhCRDNCNUUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNzY4OTJkOS0yODcwLTQyZTYtYmI0NS00NjdhNGYxYzNmNDUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0UyRkQwMTMyMjM1MTFFNEFCNzFBMjZBRTZFNTVDRTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xa0XkAAAA00lEQVQoU2MMSy78z0ACYILSRAMMDX7m3xlm5bxjmJT+nsFc/SdUFAFQNOjI/2aIdvjKwM/9j0Fc4C9Drs8XBiHef1BZCEDRoCD+B8qCAFaW/wwywn+hPAhA0XDhHhvDXyQDP35lYrjznAXKgwAUDS/eMzNcf8wK5TEwHL3OzvDtJyOUBwEoGmIdv4L9AQNeJt8ZPIx+QHkQANfAx/WPwdXwO5SHACE2XxmYkYyFM9Wk/6BIwAAv538GeTFEYMCVsDBjj/A/wEBiYYZygIDEpMHAAABAMTVAE67jMQAAAABJRU5ErkJggg=="

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowOEQ2OUZDQzNCNTkxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowOEQ2OUZDQjNCNTkxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpiOTI5OGVkNS1iNGEwLTQ4NzEtOWFlMC1lOGNhYzdkMDliNWYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ5Mjg3Q0EyNDYwMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sakLnAAABr0lEQVQ4T62TvUucQRDGn9nXU+9QCImHELnziJVBTIqz00aEhOQvCLaKhYUff4WFQTsVU9oLSUQLtdFOC4OJdpFcCpFLQJNTOHV3MjMXOb81kB8s7D67z7zz7swSCzgHF7bA39+B8/Pgox3TKPEElHwJSvWAap6adkY5QDhG2B5GyE1IlGDSFcjBpXrhmseAKF6SLICY/fpr8I9FE++CHnUiapsHXCWcCmF76N5mhX8uW7YKhd+f2a88E9WbcG8oQtTxCU4v7J/NinjU6zi/YOsTTyie2B/dSvG0fE69jo++2mJx8wFG3jfgVALdhO6NfmjA1FK9rdVbYTMhUeUxu/bQhuIkTnd7HrXV3gw+lAMPvdotTUiqoE2itDUV0Jo+BMm5yDGqYwEzq0lMijkWsQ0lkyziReu+zSneCPJbgxx2xk24zNu5x9g7iGHkzTfL6DIuMyBl/LXJfvX5tZU4lgtjJlRJNlfQMrZvSODaFrh031/1IpUVfL1ZUI96/08r6yTKzsE19svuLb2gj0m+HGU/mscky+AcXPgCzk1bk1iPyEGKZ0B1XaXnLGmXAf4ALRW19e/09vgAAAAASUVORK5CYII="

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADa2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRCMjgwRjJDMjIyRDExRTRBQjcxQTI2QUU2RTU1Q0U3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVFNTA4QUE5M0I1RDExRTQ4QzQ0RDMyRUZFNUIzRjlFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVFNTA4QUE4M0I1RDExRTQ4QzQ0RDMyRUZFNUIzRjlFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ5MWMzNDZlLTAzZGYtNDM2Ni1hMDRjLTE2MDgxMTM4ZTBlMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QjI4MEYyQzIyMkQxMUU0QUI3MUEyNkFFNkU1NUNFNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PumLs9kAAABESURBVChTYwxLLvzPQAJggtJEA7iGleVv4BgfIN8GYgFcQ3inCAqNC1DXSdgCAkPDvPy3cIwN4I04ZJNhfqN1TDMwAABZ/x2v5MJwyQAAAABJRU5ErkJggg=="

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDODZBRDhFMjNCNTQxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyOTE2NTRCNjNCNDkxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTIwOGU5NS0wNDZmLTRkODYtYTUzMi1iYzZmNGI4MjdlM2UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjcwREVBQTEyNDVGMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz751qXmAAAAU0lEQVQoU2P8DwQMJADG6IzS/79//4FyIYCJiYlh+aweKA8VkG5DXcek/zdu34dy8QMNVUUGJmIVgwBILROUTTQYjBpAPicWqKsokh4PJDqJgQEA+tcemb3Wi9kAAAAASUVORK5CYII="

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRTUwOEFBRDNCNUQxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRTUwOEFBQzNCNUQxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphOGEwMWRkZS0yNjQzLTRkYjctYTJiMi02N2NhOWRmNTdiZWUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODY5OEYxNUUyNDVGMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4jzsduAAAAOUlEQVQoU2OUWz3hPwMJgAlKEw2oo+FhSD4cowMMP4AUya+ZCOVhggHyAz6ANR6QPYvun0EXcQwMAG71FGEPR5VdAAAAAElFTkSuQmCC"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNEQ4MjA5MTNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNEQ4MjA5MDNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2YmMwN2RlNi04Zjk0LTQwMzktYjIzMy0wMTZkZjQzYmZmMDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTZCRUQ5NDkyNDYwMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz74jzfRAAAAOklEQVQoU2M0mX77PwMJgAlKEw0o13A6QwXKQmXDAHWcBDIZm+kggFWD6Yw7YIwNUMdJ+MCgizgGBgDcPg4PVuZNUQAAAABJRU5ErkJggg=="

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NEI3QTdENDNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NEI3QTdEMzNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYzY3ZTA4My01Mjc0LTQ2MmMtOTRiOS05MDI2YzhmZGNhNTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NENCMjgzMzYyNDYwMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mdsJMAAAANElEQVQoU2N8Vqf0n4EEwASliQbU1SDZeBfKQoABdhI2gKEBm7uRAVYbQJpwaRx0EcfAAADougr9zUJPhgAAAABJRU5ErkJggg=="

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTU1REE4RDNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTU1REE4QzNCNTUxMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YjFiMmZhMy1lNGFhLTQ2ZmItOGE4NS1iMzI2OTRhNzFmZTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUVGMjNBMTUyNDYwMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DPxqGAAAANElEQVQoU2P85Cj0n4EEwASliQbU1cC77y2UhQAD7CRsAEMDNncjA6w2gDTh0jjoIo6BAQAoTAt/jr9aUwAAAABJRU5ErkJggg=="

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADb2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmI4ODc2MTc3LTQxNDItNDI5ZC04ZjE5LTE3M2JjYzdiNDQ3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NDBGNzQyMjNCNUExMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NDBGNzQyMTNCNUExMUU0OEM0NEQzMkVGRTVCM0Y5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplMWNmNDE5NS00ZTU3LTRiOTctYmQxYi1kNmE4ODM5OTI3NWYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ4NkI5M0EyNDdGMTFFNEE3QTZCMzU2NzIyQkM4MjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hRYMpAAAAQUlEQVQoU2M8YKn9n4EEwASliQbU0WB/7AoYYwMYGkAKD1rpgDE2TRgaQArxAayhBDMZm2bqBCsuD4PAoIs4BgYAKwIYU/OeoB0AAAAASUVORK5CYII="

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var IDE = window.IDE;

	var Core = (function () {
		function Core(coreModules) {
			_classCallCheck(this, Core);

			var that = this;

			if (IDE.Core) {
				throw "Only one instance of core is allowed.";
			}

			this.activatedPlugins = [];
			this.plugins = {};

			var _EventEmitter = __webpack_require__(22);
			this.events = new _EventEmitter();

			coreModules.forEach(function (moduleName) {
				console.log(moduleName);
				var module = __webpack_require__(24)("./" + moduleName + "/index.js");

				module.activate(function () {
					that.activatedPlugins.push(moduleName);

					if (that.activatedPlugins.length === coreModules.length) {
						that.events.emit("ready");
					}
				});
			});
		}

		_createClass(Core, {
			get: {
				value: function get(pluginName) {
					return this.plugins[pluginName];
				}
			},
			load: {
				value: function load(pluginName) {
					this.plugins[pluginName] = {};
					this.plugins[pluginName].code = __webpack_require__(53)("./" + pluginName + "/index.js");
					this.plugins[pluginName].manifest = __webpack_require__(65)("./" + pluginName + "/manifest.js");
				}
			},
			activate: {
				value: function activate(pluginName) {
					if (!this.plugins[pluginName]) {
						throw "Plugin \"" + pluginName + "\" doesn't exist.";
					}
					this.plugins[pluginName].isActivated = true;
				}
			},
			onReady: {
				value: function onReady(callback) {
					this.events.on("ready", callback);
				}
			}
		});

		return Core;
	})();

	module.exports = Core;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {//     micro-events 1.0.0
	//     (c) 2014 Alexander Gugel <alexander.gugel@gmail.com>
	//     micro-events may be freely distributed under the ISC license.

	"use strict";

	(function () {
	    function _each(arr, func, thisArg) {
	        for (var i = 0; i < arr.length; i++) {
	            func.call(thisArg, arr[i]);
	        }
	    }

	    function _remove(arr, element) {
	        var index = arr.indexOf(element);
	        if (index !== -1) {
	            arr.splice(index, 1);
	        }
	    }

	    function _contains(arr, element) {
	        return arr.indexOf(element) !== -1;
	    }

	    function EventEmitter() {
	        this.listeners = {};
	        this.pipedTo = [];
	    }

	    EventEmitter.prototype.maxListeners = 10;

	    function _validateEventName(eventName) {
	        if (typeof eventName !== "string") {
	            throw "eventName is not a string";
	        }
	    }

	    function _validateListener(listener) {
	        if (typeof listener !== "function") {
	            throw "listener is not a function";
	        }
	    }

	    function _checkPipeable(eventEmitter) {
	        if (typeof eventEmitter.emit !== "function") {
	            throw "Can't pipe to object without emit method";
	        }
	    }

	    EventEmitter.prototype.on = function (eventName, listener) {
	        _validateEventName(eventName);
	        _validateListener(listener);
	        this.listeners[eventName] = this.listeners[eventName] || [];
	        if (this.listeners[eventName].length > this.maxListeners) {
	            throw "Exceeded maxListeners - You might have a memory leak";
	        }
	        if (!_contains(this.listeners[eventName], listener)) {
	            this.listeners[eventName].push(listener);
	            this.emit("on", {
	                eventName: eventName,
	                listener: listener
	            });
	        }
	        return this;
	    };

	    EventEmitter.prototype.emit = function (eventName, event) {
	        _validateEventName(eventName);
	        var events = Array.prototype.slice.call(arguments, 1);
	        _each(this.listeners[eventName] || [], function (listener) {
	            listener.apply(this, events);
	        }, this);

	        var args = arguments;
	        _each(this.pipedTo, function (eventEmitter) {
	            eventEmitter.emit.apply(eventEmitter, args);
	        }, this);

	        return this;
	    };

	    EventEmitter.prototype.off = function (eventName, listener) {
	        _validateEventName(eventName);
	        _validateListener(listener);
	        _remove(this.listeners[eventName] || [], listener);

	        this.emit("off", {
	            eventName: eventName,
	            listener: listener
	        });
	        return this;
	    };

	    EventEmitter.prototype.pipe = function (eventEmitter) {
	        _checkPipeable(eventEmitter);
	        if (!_contains(this.pipedTo, eventEmitter)) {
	            this.pipedTo.push(eventEmitter);
	        }
	        return this;
	    };

	    EventEmitter.prototype.unpipe = function (eventEmitter) {
	        _checkPipeable(eventEmitter);
	        _remove(this.pipedTo, eventEmitter);
	        return this;
	    };

	    EventEmitter.prototype.clearListeners = function (eventName) {
	        _validateEventName(eventName);
	        this.listeners[eventName] = null;
	        return this;
	    };

	    if (module) {
	        module.exports = EventEmitter;
	    } else if (typeof global.window.define == "function" && global.window.define.amd) {
	        global.window.define("micro-events", function () {
	            return EventEmitter;
	        });
	    } else {
	        global.window.MicroEvents = EventEmitter;
	    }
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)(module), (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./editor/index.js": 25,
		"./explorer/index.js": 32,
		"./fileManager/index.js": 38,
		"./plugins/index.js": 51,
		"./qParams/index.js": 68,
		"./tabManager/index.js": 70,
		"./toolbar/index.js": 72
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 24;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Module = {
		activate: function activate(loaded) {
			//Core Plugin Editor

			console.log(IDE.qParams.mode);
			switch (IDE.qParams.mode) {
				case "html":
					__webpack_require__.e/* nsure */(1, function (require) {
						var Editor = __webpack_require__(26);
						IDE.editor = new Editor({ id: "editor", lib: ace });
						//studio.alert('mode html');
						loaded();
					});
					break;
				case "css":
					__webpack_require__.e/* nsure */(2, function (require) {
						var Editor = __webpack_require__(29);
						IDE.editor = new Editor({ id: "editor", lib: ace });
						//studio.alert('mode css');
						loaded();
					});
					break;
				case "javascript":
					__webpack_require__.e/* nsure */(3, function (require) {
						var Editor = __webpack_require__(30);
						IDE.editor = new Editor({ id: "editor", lib: ace });
						//studio.alert('mode html');
						loaded();
					});
					break;
				default:
					__webpack_require__.e/* nsure */(1/* duplicate */, function (require) {
						var Editor = __webpack_require__(26);
						IDE.editor = new Editor({ id: "editor", lib: ace });
						//studio.alert('mode html');
						loaded();
					});
			}
		}
	};

	module.exports = Module;

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Tree = _interopRequire(__webpack_require__(33));

	var Module = {
		activate: function activate(loaded) {
			var explorer = new Tree({
				className: "cloud-ide-tree",
				path: IDE.qParams.path,
				project: IDE.qParams.project
			});
			IDE.explorer = explorer;

			loaded();
		}
	};

	module.exports = Module;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var IDE = window.IDE;

	var Tree = (function () {
		function Tree(options) {
			_classCallCheck(this, Tree);

			this.className = options.className;

			var container = document.getElementsByClassName(this.className)[0];

			this.container = container;

			var _EventEmitter = __webpack_require__(22);
			this.events = new _EventEmitter();

			this.create(options);
		}

		_createClass(Tree, {
			render: {
				value: function render() {
					var _this = this;

					var jstree = __webpack_require__(34);
					var $ = __webpack_require__(35);

					this.$container = $(this.container);

					this.$container.jstree({
						core: {
							data: Tree.fetcher
						}
					}).on("activate_node.jstree", Tree.onselect).on("loaded.jstree", function () {
						return _this.events.emit("ready");
					});
				}
			},
			hookEvents: {
				value: function hookEvents() {
					var _this = this;

					this.events.on("ready", function () {
						return _this.init();
					});
					var that = this;
					var interact = __webpack_require__(37);

					interact(".cloud-ide-tree-editor-handle").draggable({
						restrict: {
							//restriction: "parent",
							elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
						},
						onmove: function onmove(event) {
							//debugger;
							var target = event.target;
							var x = event.dx;

							// translate the element
							var newValue = target.offsetLeft + x;
							newValue = newValue > 0 ? newValue : 0;
							target.style.left = newValue + "px";
							editor.style.left = newValue + target.offsetWidth + "px";
							that.container.style.width = newValue - that.container.offsetLeft + "px";
						}
					});
				}
			},
			init: {
				value: function init(project, path) {
					var arrPath = IDE.qParams.path.split("/");
					arrPath.splice(0, 1);
					this.navigateToPath("/", arrPath);
				}
			},
			navigateToPath: {
				value: function navigateToPath(currentPath, arrNext) {
					var _this = this;

					var next = arrNext.splice(0, 1);

					this.navigateToNode(currentPath, function () {
						if (next.length) {
							_this.navigateToPath(("" + currentPath + "/" + next).replace(/\/\//g, "/"), arrNext);
						} else {
							_this.selectNode(currentPath);
						}
					});
				}
			},
			selectNode: {
				value: function selectNode(path) {
					this.$container.jstree().select_node(path, true);
				}
			},
			navigateToNode: {
				value: function navigateToNode(path, callback) {

					var node = this.$container.jstree().get_node("[id=\"" + path + "\"]");
					this.$container.jstree().open_node(node, callback);
				}
			},
			create: {
				value: function create(options) {
					this.render();
					this.hookEvents();
				}
			}
		}, {
			fetcher: {
				value: function fetcher(node, callback) {
					var path = node.id !== "#" ? node.id : "/";

					IDE.fileManager.getTree(path).then(Tree.mapper(node, callback));
				}
			},
			mapper: {
				value: function mapper(node, callback) {
					return function (response) {
						var obj = response.content.map(function (element) {
							return Tree.adaptToNodeFormat(element);
						});

						if (node.parent === null) {
							obj = [{
								id: "/",
								text: "/",
								icon: "cloud-ide-tree-ext-home",
								children: obj
							}];
						}

						callback(obj);
					};
				}
			},
			extensionMapper: {
				value: function extensionMapper(extension) {
					var known = {
						wasolution: "wasolution",
						wadirectory: "wadirectory",
						waproject: "waproject",
						wamodel: "wamodel",
						waperm: "waperm",
						html: "html",
						js: "js",
						json: "json",
						css: "css",
						folder: "folder"
					};

					var className = known[extension] || "unknown";

					return className;
				}
			},
			adaptToNodeFormat: {
				value: function adaptToNodeFormat(element) {

					var extension = "";
					if (element.type !== "folder") {
						var pos = element.name.lastIndexOf(".");

						extension = pos > -1 ? element.name.substr(pos + 1).toLowerCase() : "unknown";
					}

					return {
						id: element.path,
						text: element.name,
						icon: "cloud-ide-tree-ext-" + Tree.extensionMapper(extension || "folder"),
						children: element.type === "folder" ? true : false
					};
				}
			},
			onselect: {
				value: function onselect(event, element) {
					var path = element.node.id;

					if (IDE.tabs.list[path]) {
						IDE.tabs.focusTab(path);
					} else if (path == IDE.qParams.path) {} else {
						var url = window.location.origin + window.location.pathname + "?project=" + IDE.qParams.project + "&path=" + path;
						IDE.tabs.createTab(url);
					}
				}
			}
		});

		return Tree;
	})();

	module.exports = Tree;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";(function(factory){"use strict";if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(typeof exports === "object"){factory(require("jquery"));}else {factory(jQuery);}})(function($, undefined){"use strict";if($.jstree){return;}var instance_counter=0, ccp_node=false, ccp_mode=false, ccp_inst=false, themes_loaded=[], src=$("script:last").attr("src"), document=window.document, _node=document.createElement("LI"), _temp1, _temp2;_node.setAttribute("role", "treeitem");_temp1 = document.createElement("I");_temp1.className = "jstree-icon jstree-ocl";_temp1.setAttribute("role", "presentation");_node.appendChild(_temp1);_temp1 = document.createElement("A");_temp1.className = "jstree-anchor";_temp1.setAttribute("href", "#");_temp1.setAttribute("tabindex", "-1");_temp2 = document.createElement("I");_temp2.className = "jstree-icon jstree-themeicon";_temp2.setAttribute("role", "presentation");_temp1.appendChild(_temp2);_node.appendChild(_temp1);_temp1 = _temp2 = null;$.jstree = {version:"3.1.0", defaults:{plugins:[]}, plugins:{}, path:src && src.indexOf("/") !== -1?src.replace(/\/[^\/]+$/, ""):"", idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g};$.jstree.create = function(el, options){var tmp=new $.jstree.core(++instance_counter), opt=options;options = $.extend(true, {}, $.jstree.defaults, options);if(opt && opt.plugins){options.plugins = opt.plugins;}$.each(options.plugins, function(i, k){if(i !== "core"){tmp = tmp.plugin(k, options[k]);}});$(el).data("jstree", tmp);tmp.init(el, options);return tmp;};$.jstree.destroy = function(){$(".jstree:jstree").jstree("destroy");$(document).off(".jstree");};$.jstree.core = function(id){this._id = id;this._cnt = 0;this._wrk = null;this._data = {core:{themes:{name:false, dots:false, icons:false}, selected:[], last_error:{}, working:false, worker_queue:[], focused:null}};};$.jstree.reference = function(needle){var tmp=null, obj=null;if(needle && needle.id && (!needle.tagName || !needle.nodeType)){needle = needle.id;}if(!obj || !obj.length){try{obj = $(needle);}catch(ignore) {}}if(!obj || !obj.length){try{obj = $("#" + needle.replace($.jstree.idregex, "\\$&"));}catch(ignore) {}}if(obj && obj.length && (obj = obj.closest(".jstree")).length && (obj = obj.data("jstree"))){tmp = obj;}else {$(".jstree").each(function(){var inst=$(this).data("jstree");if(inst && inst._model.data[needle]){tmp = inst;return false;}});}return tmp;};$.fn.jstree = function(arg){var is_method=typeof arg === "string", args=Array.prototype.slice.call(arguments, 1), result=null;if(arg === true && !this.length){return false;}this.each(function(){var instance=$.jstree.reference(this), method=is_method && instance?instance[arg]:null;result = is_method && method?method.apply(instance, args):null;if(!instance && !is_method && (arg === undefined || $.isPlainObject(arg))){$.jstree.create(this, arg);}if(instance && !is_method || arg === true){result = instance || false;}if(result !== null && result !== undefined){return false;}});return result !== null && result !== undefined?result:this;};$.expr[":"].jstree = $.expr.createPseudo(function(search){return function(a){return $(a).hasClass("jstree") && $(a).data("jstree") !== undefined;};});$.jstree.defaults.core = {data:false, strings:false, check_callback:false, error:$.noop, animation:200, multiple:true, themes:{name:false, url:false, dir:false, dots:true, icons:true, stripes:false, variant:false, responsive:false}, expand_selected_onload:true, worker:true, force_text:false, dblclick_toggle:true};$.jstree.core.prototype = {plugin:function plugin(deco, opts){var Child=$.jstree.plugins[deco];if(Child){this._data[deco] = {};Child.prototype = this;return new Child(opts, this);}return this;}, init:function init(el, options){this._model = {data:{"#":{id:"#", parent:null, parents:[], children:[], children_d:[], state:{loaded:false}}}, changed:[], force_full_redraw:false, redraw_timeout:false, default_state:{loaded:true, opened:false, selected:false, disabled:false}};this.element = $(el).addClass("jstree jstree-" + this._id);this.settings = options;this._data.core.ready = false;this._data.core.loaded = false;this._data.core.rtl = this.element.css("direction") === "rtl";this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl");this.element.attr("role", "tree");if(this.settings.core.multiple){this.element.attr("aria-multiselectable", true);}if(!this.element.attr("tabindex")){this.element.attr("tabindex", "0");}this.bind();this.trigger("init");this._data.core.original_container_html = this.element.find(" > ul > li").clone(true);this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return this.nodeType === 3 && (!this.nodeValue || /^\s+$/.test(this.nodeValue));}).remove();this.element.html("<" + "ul class='jstree-container-ul jstree-children' role='group'><" + "li id='j" + this._id + "_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='tree-item'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");this.element.attr("aria-activedescendant", "j" + this._id + "_loading");this._data.core.li_height = this.get_container_ul().children("li").first().height() || 24;this.trigger("loading");this.load_node("#");}, destroy:function destroy(keep_html){if(this._wrk){try{window.URL.revokeObjectURL(this._wrk);this._wrk = null;}catch(ignore) {}}if(!keep_html){this.element.empty();}this.teardown();}, teardown:function teardown(){this.unbind();this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class", function(){return this.className.replace(/jstree[^ ]*|$/ig, "");});this.element = null;}, bind:function bind(){var word="", tout=null, was_click=0;this.element.on("dblclick.jstree", function(){if(document.selection && document.selection.empty){document.selection.empty();}else {if(window.getSelection){var sel=window.getSelection();try{sel.removeAllRanges();sel.collapse();}catch(ignore) {}}}}).on("mousedown.jstree", $.proxy(function(e){if(e.target === this.element[0]){e.preventDefault();was_click = +new Date();}}, this)).on("mousedown.jstree", ".jstree-ocl", function(e){e.preventDefault();}).on("click.jstree", ".jstree-ocl", $.proxy(function(e){this.toggle_node(e.target);}, this)).on("dblclick.jstree", ".jstree-anchor", $.proxy(function(e){if(this.settings.core.dblclick_toggle){this.toggle_node(e.target);}}, this)).on("click.jstree", ".jstree-anchor", $.proxy(function(e){e.preventDefault();if(e.currentTarget !== document.activeElement){$(e.currentTarget).focus();}this.activate_node(e.currentTarget, e);}, this)).on("keydown.jstree", ".jstree-anchor", $.proxy(function(e){if(e.target.tagName === "INPUT"){return true;}if(e.which !== 32 && e.which !== 13 && (e.shiftKey || e.ctrlKey || e.altKey || e.metaKey)){return true;}var o=null;if(this._data.core.rtl){if(e.which === 37){e.which = 39;}else if(e.which === 39){e.which = 37;}}switch(e.which){case 32:if(e.ctrlKey){e.type = "click";$(e.currentTarget).trigger(e);}break;case 13:e.type = "click";$(e.currentTarget).trigger(e);break;case 37:e.preventDefault();if(this.is_open(e.currentTarget)){this.close_node(e.currentTarget);}else {o = this.get_parent(e.currentTarget);if(o && o.id !== "#"){this.get_node(o, true).children(".jstree-anchor").focus();}}break;case 38:e.preventDefault();o = this.get_prev_dom(e.currentTarget);if(o && o.length){o.children(".jstree-anchor").focus();}break;case 39:e.preventDefault();if(this.is_closed(e.currentTarget)){this.open_node(e.currentTarget, function(o){this.get_node(o, true).children(".jstree-anchor").focus();});}else if(this.is_open(e.currentTarget)){o = this.get_node(e.currentTarget, true).children(".jstree-children")[0];if(o){$(this._firstChild(o)).children(".jstree-anchor").focus();}}break;case 40:e.preventDefault();o = this.get_next_dom(e.currentTarget);if(o && o.length){o.children(".jstree-anchor").focus();}break;case 106:this.open_all();break;case 36:e.preventDefault();o = this._firstChild(this.get_container_ul()[0]);if(o){$(o).children(".jstree-anchor").filter(":visible").focus();}break;case 35:e.preventDefault();this.element.find(".jstree-anchor").filter(":visible").last().focus();break;}}, this)).on("load_node.jstree", $.proxy(function(e, data){if(data.status){if(data.node.id === "#" && !this._data.core.loaded){this._data.core.loaded = true;if(this._firstChild(this.get_container_ul()[0])){this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);}this.trigger("loaded");}if(!this._data.core.ready){setTimeout($.proxy(function(){if(!this.get_container_ul().find(".jstree-loading").length){this._data.core.ready = true;if(this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var tmp=[], i, j;for(i = 0, j = this._data.core.selected.length; i < j; i++) {tmp = tmp.concat(this._model.data[this._data.core.selected[i]].parents);}tmp = $.vakata.array_unique(tmp);for(i = 0, j = tmp.length; i < j; i++) {this.open_node(tmp[i], false, 0);}}this.trigger("changed", {action:"ready", selected:this._data.core.selected});}this.trigger("ready");}}, this), 0);}}}, this)).on("keypress.jstree", $.proxy(function(e){if(e.target.tagName === "INPUT"){return true;}if(tout){clearTimeout(tout);}tout = setTimeout(function(){word = "";}, 500);var chr=String.fromCharCode(e.which).toLowerCase(), col=this.element.find(".jstree-anchor").filter(":visible"), ind=col.index(document.activeElement) || 0, end=false;word += chr;if(word.length > 1){col.slice(ind).each($.proxy(function(i, v){if($(v).text().toLowerCase().indexOf(word) === 0){$(v).focus();end = true;return false;}}, this));if(end){return;}col.slice(0, ind).each($.proxy(function(i, v){if($(v).text().toLowerCase().indexOf(word) === 0){$(v).focus();end = true;return false;}}, this));if(end){return;}}if(new RegExp("^" + chr + "+$").test(word)){col.slice(ind + 1).each($.proxy(function(i, v){if($(v).text().toLowerCase().charAt(0) === chr){$(v).focus();end = true;return false;}}, this));if(end){return;}col.slice(0, ind + 1).each($.proxy(function(i, v){if($(v).text().toLowerCase().charAt(0) === chr){$(v).focus();end = true;return false;}}, this));if(end){return;}}}, this)).on("init.jstree", $.proxy(function(){var s=this.settings.core.themes;this._data.core.themes.dots = s.dots;this._data.core.themes.stripes = s.stripes;this._data.core.themes.icons = s.icons;this.set_theme(s.name || "default", s.url);this.set_theme_variant(s.variant);}, this)).on("loading.jstree", $.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"]();this[this._data.core.themes.icons?"show_icons":"hide_icons"]();this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"]();}, this)).on("blur.jstree", ".jstree-anchor", $.proxy(function(e){this._data.core.focused = null;$(e.currentTarget).filter(".jstree-hovered").mouseleave();this.element.attr("tabindex", "0");}, this)).on("focus.jstree", ".jstree-anchor", $.proxy(function(e){var tmp=this.get_node(e.currentTarget);if(tmp && tmp.id){this._data.core.focused = tmp.id;}this.element.find(".jstree-hovered").not(e.currentTarget).mouseleave();$(e.currentTarget).mouseenter();this.element.attr("tabindex", "-1");}, this)).on("focus.jstree", $.proxy(function(){if(+new Date() - was_click > 500 && !this._data.core.focused){was_click = 0;this.get_node(this.element.attr("aria-activedescendant"), true).find("> .jstree-anchor").focus();}}, this)).on("mouseenter.jstree", ".jstree-anchor", $.proxy(function(e){this.hover_node(e.currentTarget);}, this)).on("mouseleave.jstree", ".jstree-anchor", $.proxy(function(e){this.dehover_node(e.currentTarget);}, this));}, unbind:function unbind(){this.element.off(".jstree");$(document).off(".jstree-" + this._id);}, trigger:function trigger(ev, data){if(!data){data = {};}data.instance = this;this.element.triggerHandler(ev.replace(".jstree", "") + ".jstree", data);}, get_container:function get_container(){return this.element;}, get_container_ul:function get_container_ul(){return this.element.children(".jstree-children").first();}, get_string:function get_string(key){var a=this.settings.core.strings;if($.isFunction(a)){return a.call(this, key);}if(a && a[key]){return a[key];}return key;}, _firstChild:function _firstChild(dom){dom = dom?dom.firstChild:null;while(dom !== null && dom.nodeType !== 1) {dom = dom.nextSibling;}return dom;}, _nextSibling:function _nextSibling(dom){dom = dom?dom.nextSibling:null;while(dom !== null && dom.nodeType !== 1) {dom = dom.nextSibling;}return dom;}, _previousSibling:function _previousSibling(dom){dom = dom?dom.previousSibling:null;while(dom !== null && dom.nodeType !== 1) {dom = dom.previousSibling;}return dom;}, get_node:function get_node(obj, as_dom){if(obj && obj.id){obj = obj.id;}var dom;try{if(this._model.data[obj]){obj = this._model.data[obj];}else if(typeof obj === "string" && this._model.data[obj.replace(/^#/, "")]){obj = this._model.data[obj.replace(/^#/, "")];}else if(typeof obj === "string" && (dom = $("#" + obj.replace($.jstree.idregex, "\\$&"), this.element)).length && this._model.data[dom.closest(".jstree-node").attr("id")]){obj = this._model.data[dom.closest(".jstree-node").attr("id")];}else if((dom = $(obj, this.element)).length && this._model.data[dom.closest(".jstree-node").attr("id")]){obj = this._model.data[dom.closest(".jstree-node").attr("id")];}else if((dom = $(obj, this.element)).length && dom.hasClass("jstree")){obj = this._model.data["#"];}else {return false;}if(as_dom){obj = obj.id === "#"?this.element:$("#" + obj.id.replace($.jstree.idregex, "\\$&"), this.element);}return obj;}catch(ex) {return false;}}, get_path:function get_path(obj, glue, ids){obj = obj.parents?obj:this.get_node(obj);if(!obj || obj.id === "#" || !obj.parents){return false;}var i, j, p=[];p.push(ids?obj.id:obj.text);for(i = 0, j = obj.parents.length; i < j; i++) {p.push(ids?obj.parents[i]:this.get_text(obj.parents[i]));}p = p.reverse().slice(1);return glue?p.join(glue):p;}, get_next_dom:function get_next_dom(obj, strict){var tmp;obj = this.get_node(obj, true);if(obj[0] === this.element[0]){tmp = this._firstChild(this.get_container_ul()[0]);while(tmp && tmp.offsetHeight === 0) {tmp = this._nextSibling(tmp);}return tmp?$(tmp):false;}if(!obj || !obj.length){return false;}if(strict){tmp = obj[0];do{tmp = this._nextSibling(tmp);}while(tmp && tmp.offsetHeight === 0);return tmp?$(tmp):false;}if(obj.hasClass("jstree-open")){tmp = this._firstChild(obj.children(".jstree-children")[0]);while(tmp && tmp.offsetHeight === 0) {tmp = this._nextSibling(tmp);}if(tmp !== null){return $(tmp);}}tmp = obj[0];do{tmp = this._nextSibling(tmp);}while(tmp && tmp.offsetHeight === 0);if(tmp !== null){return $(tmp);}return obj.parentsUntil(".jstree", ".jstree-node").nextAll(".jstree-node:visible").first();}, get_prev_dom:function get_prev_dom(obj, strict){var tmp;obj = this.get_node(obj, true);if(obj[0] === this.element[0]){tmp = this.get_container_ul()[0].lastChild;while(tmp && tmp.offsetHeight === 0) {tmp = this._previousSibling(tmp);}return tmp?$(tmp):false;}if(!obj || !obj.length){return false;}if(strict){tmp = obj[0];do{tmp = this._previousSibling(tmp);}while(tmp && tmp.offsetHeight === 0);return tmp?$(tmp):false;}tmp = obj[0];do{tmp = this._previousSibling(tmp);}while(tmp && tmp.offsetHeight === 0);if(tmp !== null){obj = $(tmp);while(obj.hasClass("jstree-open")) {obj = obj.children(".jstree-children").first().children(".jstree-node:visible:last");}return obj;}tmp = obj[0].parentNode.parentNode;return tmp && tmp.className && tmp.className.indexOf("jstree-node") !== -1?$(tmp):false;}, get_parent:function get_parent(obj){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}return obj.parent;}, get_children_dom:function get_children_dom(obj){obj = this.get_node(obj, true);if(obj[0] === this.element[0]){return this.get_container_ul().children(".jstree-node");}if(!obj || !obj.length){return false;}return obj.children(".jstree-children").children(".jstree-node");}, is_parent:function is_parent(obj){obj = this.get_node(obj);return obj && (obj.state.loaded === false || obj.children.length > 0);}, is_loaded:function is_loaded(obj){obj = this.get_node(obj);return obj && obj.state.loaded;}, is_loading:function is_loading(obj){obj = this.get_node(obj);return obj && obj.state && obj.state.loading;}, is_open:function is_open(obj){obj = this.get_node(obj);return obj && obj.state.opened;}, is_closed:function is_closed(obj){obj = this.get_node(obj);return obj && this.is_parent(obj) && !obj.state.opened;}, is_leaf:function is_leaf(obj){return !this.is_parent(obj);}, load_node:function load_node(obj, callback){var k, l, i, j, c;if($.isArray(obj)){this._load_nodes(obj.slice(), callback);return true;}obj = this.get_node(obj);if(!obj){if(callback){callback.call(this, obj, false);}return false;}if(obj.state.loaded){obj.state.loaded = false;for(k = 0, l = obj.children_d.length; k < l; k++) {for(i = 0, j = obj.parents.length; i < j; i++) {this._model.data[obj.parents[i]].children_d = $.vakata.array_remove_item(this._model.data[obj.parents[i]].children_d, obj.children_d[k]);}if(this._model.data[obj.children_d[k]].state.selected){c = true;this._data.core.selected = $.vakata.array_remove_item(this._data.core.selected, obj.children_d[k]);}delete this._model.data[obj.children_d[k]];}obj.children = [];obj.children_d = [];if(c){this.trigger("changed", {action:"load_node", node:obj, selected:this._data.core.selected});}}obj.state.failed = false;obj.state.loading = true;this.get_node(obj, true).addClass("jstree-loading").attr("aria-busy", true);this._load_node(obj, $.proxy(function(status){obj = this._model.data[obj.id];obj.state.loading = false;obj.state.loaded = status;obj.state.failed = !obj.state.loaded;var dom=this.get_node(obj, true);if(obj.state.loaded && !obj.children.length && dom && dom.length && !dom.hasClass("jstree-leaf")){dom.removeClass("jstree-closed jstree-open").addClass("jstree-leaf");}dom.removeClass("jstree-loading").attr("aria-busy", false);this.trigger("load_node", {node:obj, status:status});if(callback){callback.call(this, obj, status);}}, this));return true;}, _load_nodes:function _load_nodes(nodes, callback, is_callback){var r=true, c=function c(){this._load_nodes(nodes, callback, true);}, m=this._model.data, i, j, tmp=[];for(i = 0, j = nodes.length; i < j; i++) {if(m[nodes[i]] && (!m[nodes[i]].state.loaded && !m[nodes[i]].state.failed || !is_callback)){if(!this.is_loading(nodes[i])){this.load_node(nodes[i], c);}r = false;}}if(r){for(i = 0, j = nodes.length; i < j; i++) {if(m[nodes[i]] && m[nodes[i]].state.loaded){tmp.push(nodes[i]);}}if(callback && !callback.done){callback.call(this, tmp);callback.done = true;}}}, load_all:function load_all(obj, callback){if(!obj){obj = "#";}obj = this.get_node(obj);if(!obj){return false;}var to_load=[], m=this._model.data, c=m[obj.id].children_d, i, j;if(obj.state && !obj.state.loaded){to_load.push(obj.id);}for(i = 0, j = c.length; i < j; i++) {if(m[c[i]] && m[c[i]].state && !m[c[i]].state.loaded){to_load.push(c[i]);}}if(to_load.length){this._load_nodes(to_load, function(){this.load_all(obj, callback);});}else {if(callback){callback.call(this, obj);}this.trigger("load_all", {node:obj});}}, _load_node:function _load_node(obj, callback){var s=this.settings.core.data, t;if(!s){if(obj.id === "#"){return this._append_html_data(obj, this._data.core.original_container_html.clone(true), function(status){callback.call(this, status);});}else {return callback.call(this, false);}}if($.isFunction(s)){return s.call(this, obj, $.proxy(function(d){if(d === false){callback.call(this, false);}this[typeof d === "string"?"_append_html_data":"_append_json_data"](obj, typeof d === "string"?$($.parseHTML(d)).filter(function(){return this.nodeType !== 3;}):d, function(status){callback.call(this, status);});}, this));}if(typeof s === "object"){if(s.url){s = $.extend(true, {}, s);if($.isFunction(s.url)){s.url = s.url.call(this, obj);}if($.isFunction(s.data)){s.data = s.data.call(this, obj);}return $.ajax(s).done($.proxy(function(d, t, x){var type=x.getResponseHeader("Content-Type");if(type && type.indexOf("json") !== -1 || typeof d === "object"){return this._append_json_data(obj, d, function(status){callback.call(this, status);});}if(type && type.indexOf("html") !== -1 || typeof d === "string"){return this._append_html_data(obj, $($.parseHTML(d)).filter(function(){return this.nodeType !== 3;}), function(status){callback.call(this, status);});}this._data.core.last_error = {error:"ajax", plugin:"core", id:"core_04", reason:"Could not load node", data:JSON.stringify({id:obj.id, xhr:x})};this.settings.core.error.call(this, this._data.core.last_error);return callback.call(this, false);}, this)).fail($.proxy(function(f){callback.call(this, false);this._data.core.last_error = {error:"ajax", plugin:"core", id:"core_04", reason:"Could not load node", data:JSON.stringify({id:obj.id, xhr:f})};this.settings.core.error.call(this, this._data.core.last_error);}, this));}t = $.isArray(s) || $.isPlainObject(s)?JSON.parse(JSON.stringify(s)):s;if(obj.id === "#"){return this._append_json_data(obj, t, function(status){callback.call(this, status);});}else {this._data.core.last_error = {error:"nodata", plugin:"core", id:"core_05", reason:"Could not load node", data:JSON.stringify({id:obj.id})};this.settings.core.error.call(this, this._data.core.last_error);return callback.call(this, false);}}if(typeof s === "string"){if(obj.id === "#"){return this._append_html_data(obj, $($.parseHTML(s)).filter(function(){return this.nodeType !== 3;}), function(status){callback.call(this, status);});}else {this._data.core.last_error = {error:"nodata", plugin:"core", id:"core_06", reason:"Could not load node", data:JSON.stringify({id:obj.id})};this.settings.core.error.call(this, this._data.core.last_error);return callback.call(this, false);}}return callback.call(this, false);}, _node_changed:function _node_changed(obj){obj = this.get_node(obj);if(obj){this._model.changed.push(obj.id);}}, _append_html_data:function _append_html_data(dom, data, cb){dom = this.get_node(dom);dom.children = [];dom.children_d = [];var dat=data.is("ul")?data.children():data, par=dom.id, chd=[], dpc=[], m=this._model.data, p=m[par], s=this._data.core.selected.length, tmp, i, j;dat.each($.proxy(function(i, v){tmp = this._parse_model_from_html($(v), par, p.parents.concat());if(tmp){chd.push(tmp);dpc.push(tmp);if(m[tmp].children_d.length){dpc = dpc.concat(m[tmp].children_d);}}}, this));p.children = chd;p.children_d = dpc;for(i = 0, j = p.parents.length; i < j; i++) {m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);}this.trigger("model", {nodes:dpc, parent:par});if(par !== "#"){this._node_changed(par);this.redraw();}else {this.get_container_ul().children(".jstree-initial-node").remove();this.redraw(true);}if(this._data.core.selected.length !== s){this.trigger("changed", {action:"model", selected:this._data.core.selected});}cb.call(this, true);}, _append_json_data:function _append_json_data(dom, data, cb, force_processing){dom = this.get_node(dom);dom.children = [];dom.children_d = [];if(data.d){data = data.d;if(typeof data === "string"){data = JSON.parse(data);}}if(!$.isArray(data)){data = [data];}var w=null, args={df:this._model.default_state, dat:data, par:dom.id, m:this._model.data, t_id:this._id, t_cnt:this._cnt, sel:this._data.core.selected}, func=function func(data, undefined){if(data.data){data = data.data;}var dat=data.dat, par=data.par, chd=[], dpc=[], add=[], df=data.df, t_id=data.t_id, t_cnt=data.t_cnt, m=data.m, p=m[par], sel=data.sel, tmp, i, j, rslt, parse_flat=(function(_parse_flat){var _parse_flatWrapper=function parse_flat(_x, _x2, _x3){return _parse_flat.apply(this, arguments);};_parse_flatWrapper.toString = function(){return _parse_flat.toString();};return _parse_flatWrapper;})(function(d, p, ps){if(!ps){ps = [];}else {ps = ps.concat();}if(p){ps.unshift(p);}var tid=d.id.toString(), i, j, c, e, tmp={id:tid, text:d.text || "", icon:d.icon !== undefined?d.icon:true, parent:p, parents:ps, children:d.children || [], children_d:d.children_d || [], data:d.data, state:{}, li_attr:{id:false}, a_attr:{href:"#"}, original:false};for(i in df) {if(df.hasOwnProperty(i)){tmp.state[i] = df[i];}}if(d && d.data && d.data.jstree && d.data.jstree.icon){tmp.icon = d.data.jstree.icon;}if(tmp.icon === undefined || tmp.icon === null || tmp.icon === ""){tmp.icon = true;}if(d && d.data){tmp.data = d.data;if(d.data.jstree){for(i in d.data.jstree) {if(d.data.jstree.hasOwnProperty(i)){tmp.state[i] = d.data.jstree[i];}}}}if(d && typeof d.state === "object"){for(i in d.state) {if(d.state.hasOwnProperty(i)){tmp.state[i] = d.state[i];}}}if(d && typeof d.li_attr === "object"){for(i in d.li_attr) {if(d.li_attr.hasOwnProperty(i)){tmp.li_attr[i] = d.li_attr[i];}}}if(!tmp.li_attr.id){tmp.li_attr.id = tid;}if(d && typeof d.a_attr === "object"){for(i in d.a_attr) {if(d.a_attr.hasOwnProperty(i)){tmp.a_attr[i] = d.a_attr[i];}}}if(d && d.children && d.children === true){tmp.state.loaded = false;tmp.children = [];tmp.children_d = [];}m[tmp.id] = tmp;for(i = 0, j = tmp.children.length; i < j; i++) {c = parse_flat(m[tmp.children[i]], tmp.id, ps);e = m[c];tmp.children_d.push(c);if(e.children_d.length){tmp.children_d = tmp.children_d.concat(e.children_d);}}delete d.data;delete d.children;m[tmp.id].original = d;if(tmp.state.selected){add.push(tmp.id);}return tmp.id;}), parse_nest=(function(_parse_nest){var _parse_nestWrapper=function parse_nest(_x, _x2, _x3){return _parse_nest.apply(this, arguments);};_parse_nestWrapper.toString = function(){return _parse_nest.toString();};return _parse_nestWrapper;})(function(d, p, ps){if(!ps){ps = [];}else {ps = ps.concat();}if(p){ps.unshift(p);}var tid=false, i, j, c, e, tmp;do{tid = "j" + t_id + "_" + ++t_cnt;}while(m[tid]);tmp = {id:false, text:typeof d === "string"?d:"", icon:typeof d === "object" && d.icon !== undefined?d.icon:true, parent:p, parents:ps, children:[], children_d:[], data:null, state:{}, li_attr:{id:false}, a_attr:{href:"#"}, original:false};for(i in df) {if(df.hasOwnProperty(i)){tmp.state[i] = df[i];}}if(d && d.id){tmp.id = d.id.toString();}if(d && d.text){tmp.text = d.text;}if(d && d.data && d.data.jstree && d.data.jstree.icon){tmp.icon = d.data.jstree.icon;}if(tmp.icon === undefined || tmp.icon === null || tmp.icon === ""){tmp.icon = true;}if(d && d.data){tmp.data = d.data;if(d.data.jstree){for(i in d.data.jstree) {if(d.data.jstree.hasOwnProperty(i)){tmp.state[i] = d.data.jstree[i];}}}}if(d && typeof d.state === "object"){for(i in d.state) {if(d.state.hasOwnProperty(i)){tmp.state[i] = d.state[i];}}}if(d && typeof d.li_attr === "object"){for(i in d.li_attr) {if(d.li_attr.hasOwnProperty(i)){tmp.li_attr[i] = d.li_attr[i];}}}if(tmp.li_attr.id && !tmp.id){tmp.id = tmp.li_attr.id.toString();}if(!tmp.id){tmp.id = tid;}if(!tmp.li_attr.id){tmp.li_attr.id = tmp.id;}if(d && typeof d.a_attr === "object"){for(i in d.a_attr) {if(d.a_attr.hasOwnProperty(i)){tmp.a_attr[i] = d.a_attr[i];}}}if(d && d.children && d.children.length){for(i = 0, j = d.children.length; i < j; i++) {c = parse_nest(d.children[i], tmp.id, ps);e = m[c];tmp.children.push(c);if(e.children_d.length){tmp.children_d = tmp.children_d.concat(e.children_d);}}tmp.children_d = tmp.children_d.concat(tmp.children);}if(d && d.children && d.children === true){tmp.state.loaded = false;tmp.children = [];tmp.children_d = [];}delete d.data;delete d.children;tmp.original = d;m[tmp.id] = tmp;if(tmp.state.selected){add.push(tmp.id);}return tmp.id;});if(dat.length && dat[0].id !== undefined && dat[0].parent !== undefined){for(i = 0, j = dat.length; i < j; i++) {if(!dat[i].children){dat[i].children = [];}m[dat[i].id.toString()] = dat[i];}for(i = 0, j = dat.length; i < j; i++) {m[dat[i].parent.toString()].children.push(dat[i].id.toString());p.children_d.push(dat[i].id.toString());}for(i = 0, j = p.children.length; i < j; i++) {tmp = parse_flat(m[p.children[i]], par, p.parents.concat());dpc.push(tmp);if(m[tmp].children_d.length){dpc = dpc.concat(m[tmp].children_d);}}for(i = 0, j = p.parents.length; i < j; i++) {m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);}rslt = {cnt:t_cnt, mod:m, sel:sel, par:par, dpc:dpc, add:add};}else {for(i = 0, j = dat.length; i < j; i++) {tmp = parse_nest(dat[i], par, p.parents.concat());if(tmp){chd.push(tmp);dpc.push(tmp);if(m[tmp].children_d.length){dpc = dpc.concat(m[tmp].children_d);}}}p.children = chd;p.children_d = dpc;for(i = 0, j = p.parents.length; i < j; i++) {m[p.parents[i]].children_d = m[p.parents[i]].children_d.concat(dpc);}rslt = {cnt:t_cnt, mod:m, sel:sel, par:par, dpc:dpc, add:add};}if(typeof window === "undefined" || typeof window.document === "undefined"){postMessage(rslt);}else {return rslt;}}, rslt=(function(_rslt){var _rsltWrapper=function rslt(_x, _x2){return _rslt.apply(this, arguments);};_rsltWrapper.toString = function(){return _rslt.toString();};return _rsltWrapper;})(function(rslt, worker){this._cnt = rslt.cnt;this._model.data = rslt.mod;if(worker){var i, j, a=rslt.add, r=rslt.sel, s=this._data.core.selected.slice(), m=this._model.data;if(r.length !== s.length || $.vakata.array_unique(r.concat(s)).length !== r.length){for(i = 0, j = r.length; i < j; i++) {if($.inArray(r[i], a) === -1 && $.inArray(r[i], s) === -1){m[r[i]].state.selected = false;}}for(i = 0, j = s.length; i < j; i++) {if($.inArray(s[i], r) === -1){m[s[i]].state.selected = true;}}}}if(rslt.add.length){this._data.core.selected = this._data.core.selected.concat(rslt.add);}this.trigger("model", {nodes:rslt.dpc, parent:rslt.par});if(rslt.par !== "#"){this._node_changed(rslt.par);this.redraw();}else {this.redraw(true);}if(rslt.add.length){this.trigger("changed", {action:"model", selected:this._data.core.selected});}cb.call(this, true);});if(this.settings.core.worker && window.Blob && window.URL && window.Worker){try{if(this._wrk === null){this._wrk = window.URL.createObjectURL(new window.Blob(["self.onmessage = " + func.toString()], {type:"text/javascript"}));}if(!this._data.core.working || force_processing){this._data.core.working = true;w = new window.Worker(this._wrk);w.onmessage = $.proxy(function(e){rslt.call(this, e.data, true);try{w.terminate();w = null;}catch(ignore) {}if(this._data.core.worker_queue.length){this._append_json_data.apply(this, this._data.core.worker_queue.shift());}else {this._data.core.working = false;}}, this);if(!args.par){if(this._data.core.worker_queue.length){this._append_json_data.apply(this, this._data.core.worker_queue.shift());}else {this._data.core.working = false;}}else {w.postMessage(args);}}else {this._data.core.worker_queue.push([dom, data, cb, true]);}}catch(e) {rslt.call(this, func(args), false);if(this._data.core.worker_queue.length){this._append_json_data.apply(this, this._data.core.worker_queue.shift());}else {this._data.core.working = false;}}}else {rslt.call(this, func(args), false);}}, _parse_model_from_html:function _parse_model_from_html(d, p, ps){if(!ps){ps = [];}else {ps = [].concat(ps);}if(p){ps.unshift(p);}var c, e, m=this._model.data, data={id:false, text:false, icon:true, parent:p, parents:ps, children:[], children_d:[], data:null, state:{}, li_attr:{id:false}, a_attr:{href:"#"}, original:false}, i, tmp, tid;for(i in this._model.default_state) {if(this._model.default_state.hasOwnProperty(i)){data.state[i] = this._model.default_state[i];}}tmp = $.vakata.attributes(d, true);$.each(tmp, function(i, v){v = $.trim(v);if(!v.length){return true;}data.li_attr[i] = v;if(i === "id"){data.id = v.toString();}});tmp = d.children("a").first();if(tmp.length){tmp = $.vakata.attributes(tmp, true);$.each(tmp, function(i, v){v = $.trim(v);if(v.length){data.a_attr[i] = v;}});}tmp = d.children("a").first().length?d.children("a").first().clone():d.clone();tmp.children("ins, i, ul").remove();tmp = tmp.html();tmp = $("<div />").html(tmp);data.text = this.settings.core.force_text?tmp.text():tmp.html();tmp = d.data();data.data = tmp?$.extend(true, {}, tmp):null;data.state.opened = d.hasClass("jstree-open");data.state.selected = d.children("a").hasClass("jstree-clicked");data.state.disabled = d.children("a").hasClass("jstree-disabled");if(data.data && data.data.jstree){for(i in data.data.jstree) {if(data.data.jstree.hasOwnProperty(i)){data.state[i] = data.data.jstree[i];}}}tmp = d.children("a").children(".jstree-themeicon");if(tmp.length){data.icon = tmp.hasClass("jstree-themeicon-hidden")?false:tmp.attr("rel");}if(data.state.icon){data.icon = data.state.icon;}if(data.icon === undefined || data.icon === null || data.icon === ""){data.icon = true;}tmp = d.children("ul").children("li");do{tid = "j" + this._id + "_" + ++this._cnt;}while(m[tid]);data.id = data.li_attr.id?data.li_attr.id.toString():tid;if(tmp.length){tmp.each($.proxy(function(i, v){c = this._parse_model_from_html($(v), data.id, ps);e = this._model.data[c];data.children.push(c);if(e.children_d.length){data.children_d = data.children_d.concat(e.children_d);}}, this));data.children_d = data.children_d.concat(data.children);}else {if(d.hasClass("jstree-closed")){data.state.loaded = false;}}if(data.li_attr["class"]){data.li_attr["class"] = data.li_attr["class"].replace("jstree-closed", "").replace("jstree-open", "");}if(data.a_attr["class"]){data.a_attr["class"] = data.a_attr["class"].replace("jstree-clicked", "").replace("jstree-disabled", "");}m[data.id] = data;if(data.state.selected){this._data.core.selected.push(data.id);}return data.id;}, _parse_model_from_flat_json:function _parse_model_from_flat_json(d, p, ps){if(!ps){ps = [];}else {ps = ps.concat();}if(p){ps.unshift(p);}var tid=d.id.toString(), m=this._model.data, df=this._model.default_state, i, j, c, e, tmp={id:tid, text:d.text || "", icon:d.icon !== undefined?d.icon:true, parent:p, parents:ps, children:d.children || [], children_d:d.children_d || [], data:d.data, state:{}, li_attr:{id:false}, a_attr:{href:"#"}, original:false};for(i in df) {if(df.hasOwnProperty(i)){tmp.state[i] = df[i];}}if(d && d.data && d.data.jstree && d.data.jstree.icon){tmp.icon = d.data.jstree.icon;}if(tmp.icon === undefined || tmp.icon === null || tmp.icon === ""){tmp.icon = true;}if(d && d.data){tmp.data = d.data;if(d.data.jstree){for(i in d.data.jstree) {if(d.data.jstree.hasOwnProperty(i)){tmp.state[i] = d.data.jstree[i];}}}}if(d && typeof d.state === "object"){for(i in d.state) {if(d.state.hasOwnProperty(i)){tmp.state[i] = d.state[i];}}}if(d && typeof d.li_attr === "object"){for(i in d.li_attr) {if(d.li_attr.hasOwnProperty(i)){tmp.li_attr[i] = d.li_attr[i];}}}if(!tmp.li_attr.id){tmp.li_attr.id = tid;}if(d && typeof d.a_attr === "object"){for(i in d.a_attr) {if(d.a_attr.hasOwnProperty(i)){tmp.a_attr[i] = d.a_attr[i];}}}if(d && d.children && d.children === true){tmp.state.loaded = false;tmp.children = [];tmp.children_d = [];}m[tmp.id] = tmp;for(i = 0, j = tmp.children.length; i < j; i++) {c = this._parse_model_from_flat_json(m[tmp.children[i]], tmp.id, ps);e = m[c];tmp.children_d.push(c);if(e.children_d.length){tmp.children_d = tmp.children_d.concat(e.children_d);}}delete d.data;delete d.children;m[tmp.id].original = d;if(tmp.state.selected){this._data.core.selected.push(tmp.id);}return tmp.id;}, _parse_model_from_json:function _parse_model_from_json(d, p, ps){if(!ps){ps = [];}else {ps = ps.concat();}if(p){ps.unshift(p);}var tid=false, i, j, c, e, m=this._model.data, df=this._model.default_state, tmp;do{tid = "j" + this._id + "_" + ++this._cnt;}while(m[tid]);tmp = {id:false, text:typeof d === "string"?d:"", icon:typeof d === "object" && d.icon !== undefined?d.icon:true, parent:p, parents:ps, children:[], children_d:[], data:null, state:{}, li_attr:{id:false}, a_attr:{href:"#"}, original:false};for(i in df) {if(df.hasOwnProperty(i)){tmp.state[i] = df[i];}}if(d && d.id){tmp.id = d.id.toString();}if(d && d.text){tmp.text = d.text;}if(d && d.data && d.data.jstree && d.data.jstree.icon){tmp.icon = d.data.jstree.icon;}if(tmp.icon === undefined || tmp.icon === null || tmp.icon === ""){tmp.icon = true;}if(d && d.data){tmp.data = d.data;if(d.data.jstree){for(i in d.data.jstree) {if(d.data.jstree.hasOwnProperty(i)){tmp.state[i] = d.data.jstree[i];}}}}if(d && typeof d.state === "object"){for(i in d.state) {if(d.state.hasOwnProperty(i)){tmp.state[i] = d.state[i];}}}if(d && typeof d.li_attr === "object"){for(i in d.li_attr) {if(d.li_attr.hasOwnProperty(i)){tmp.li_attr[i] = d.li_attr[i];}}}if(tmp.li_attr.id && !tmp.id){tmp.id = tmp.li_attr.id.toString();}if(!tmp.id){tmp.id = tid;}if(!tmp.li_attr.id){tmp.li_attr.id = tmp.id;}if(d && typeof d.a_attr === "object"){for(i in d.a_attr) {if(d.a_attr.hasOwnProperty(i)){tmp.a_attr[i] = d.a_attr[i];}}}if(d && d.children && d.children.length){for(i = 0, j = d.children.length; i < j; i++) {c = this._parse_model_from_json(d.children[i], tmp.id, ps);e = m[c];tmp.children.push(c);if(e.children_d.length){tmp.children_d = tmp.children_d.concat(e.children_d);}}tmp.children_d = tmp.children_d.concat(tmp.children);}if(d && d.children && d.children === true){tmp.state.loaded = false;tmp.children = [];tmp.children_d = [];}delete d.data;delete d.children;tmp.original = d;m[tmp.id] = tmp;if(tmp.state.selected){this._data.core.selected.push(tmp.id);}return tmp.id;}, _redraw:function _redraw(){var nodes=this._model.force_full_redraw?this._model.data["#"].children.concat([]):this._model.changed.concat([]), f=document.createElement("UL"), tmp, i, j, fe=this._data.core.focused;for(i = 0, j = nodes.length; i < j; i++) {tmp = this.redraw_node(nodes[i], true, this._model.force_full_redraw);if(tmp && this._model.force_full_redraw){f.appendChild(tmp);}}if(this._model.force_full_redraw){f.className = this.get_container_ul()[0].className;f.setAttribute("role", "group");this.element.empty().append(f);}if(fe !== null){tmp = this.get_node(fe, true);if(tmp && tmp.length && tmp.children(".jstree-anchor")[0] !== document.activeElement){tmp.children(".jstree-anchor").focus();}else {this._data.core.focused = null;}}this._model.force_full_redraw = false;this._model.changed = [];this.trigger("redraw", {nodes:nodes});}, redraw:function redraw(full){if(full){this._model.force_full_redraw = true;}this._redraw();}, draw_children:function draw_children(node){var obj=this.get_node(node), i=false, j=false, k=false, d=document;if(!obj){return false;}if(obj.id === "#"){return this.redraw(true);}node = this.get_node(node, true);if(!node || !node.length){return false;}node.children(".jstree-children").remove();node = node[0];if(obj.children.length && obj.state.loaded){k = d.createElement("UL");k.setAttribute("role", "group");k.className = "jstree-children";for(i = 0, j = obj.children.length; i < j; i++) {k.appendChild(this.redraw_node(obj.children[i], true, true));}node.appendChild(k);}}, redraw_node:function redraw_node(node, deep, is_callback, force_render){var obj=this.get_node(node), par=false, ind=false, old=false, i=false, j=false, k=false, c="", d=document, m=this._model.data, f=false, s=false, tmp=null, t=0, l=0;if(!obj){return false;}if(obj.id === "#"){return this.redraw(true);}deep = deep || obj.children.length === 0;node = !document.querySelector?document.getElementById(obj.id):this.element[0].querySelector("#" + ("0123456789".indexOf(obj.id[0]) !== -1?"\\3" + obj.id[0] + " " + obj.id.substr(1).replace($.jstree.idregex, "\\$&"):obj.id.replace($.jstree.idregex, "\\$&")));if(!node){deep = true;if(!is_callback){par = obj.parent !== "#"?$("#" + obj.parent.replace($.jstree.idregex, "\\$&"), this.element)[0]:null;if(par !== null && (!par || !m[obj.parent].state.opened)){return false;}ind = $.inArray(obj.id, par === null?m["#"].children:m[obj.parent].children);}}else {node = $(node);if(!is_callback){par = node.parent().parent()[0];if(par === this.element[0]){par = null;}ind = node.index();}if(!deep && obj.children.length && !node.children(".jstree-children").length){deep = true;}if(!deep){old = node.children(".jstree-children")[0];}f = node.children(".jstree-anchor")[0] === document.activeElement;node.remove();}node = _node.cloneNode(true);c = "jstree-node ";for(i in obj.li_attr) {if(obj.li_attr.hasOwnProperty(i)){if(i === "id"){continue;}if(i !== "class"){node.setAttribute(i, obj.li_attr[i]);}else {c += obj.li_attr[i];}}}if(!obj.a_attr.id){obj.a_attr.id = obj.id + "_anchor";}node.setAttribute("aria-selected", !!obj.state.selected);node.setAttribute("aria-level", obj.parents.length);node.setAttribute("aria-labelledby", obj.a_attr.id);if(obj.state.disabled){node.setAttribute("aria-disabled", true);}if(obj.state.loaded && !obj.children.length){c += " jstree-leaf";}else {c += obj.state.opened && obj.state.loaded?" jstree-open":" jstree-closed";node.setAttribute("aria-expanded", obj.state.opened && obj.state.loaded);}if(obj.parent !== null && m[obj.parent].children[m[obj.parent].children.length - 1] === obj.id){c += " jstree-last";}node.id = obj.id;node.className = c;c = (obj.state.selected?" jstree-clicked":"") + (obj.state.disabled?" jstree-disabled":"");for(j in obj.a_attr) {if(obj.a_attr.hasOwnProperty(j)){if(j === "href" && obj.a_attr[j] === "#"){continue;}if(j !== "class"){node.childNodes[1].setAttribute(j, obj.a_attr[j]);}else {c += " " + obj.a_attr[j];}}}if(c.length){node.childNodes[1].className = "jstree-anchor " + c;}if(obj.icon && obj.icon !== true || obj.icon === false){if(obj.icon === false){node.childNodes[1].childNodes[0].className += " jstree-themeicon-hidden";}else if(obj.icon.indexOf("/") === -1 && obj.icon.indexOf(".") === -1){node.childNodes[1].childNodes[0].className += " " + obj.icon + " jstree-themeicon-custom";}else {node.childNodes[1].childNodes[0].style.backgroundImage = "url(" + obj.icon + ")";node.childNodes[1].childNodes[0].style.backgroundPosition = "center center";node.childNodes[1].childNodes[0].style.backgroundSize = "auto";node.childNodes[1].childNodes[0].className += " jstree-themeicon-custom";}}if(this.settings.core.force_text){node.childNodes[1].appendChild(d.createTextNode(obj.text));}else {node.childNodes[1].innerHTML += obj.text;}if(deep && obj.children.length && (obj.state.opened || force_render) && obj.state.loaded){k = d.createElement("UL");k.setAttribute("role", "group");k.className = "jstree-children";for(i = 0, j = obj.children.length; i < j; i++) {k.appendChild(this.redraw_node(obj.children[i], deep, true));}node.appendChild(k);}if(old){node.appendChild(old);}if(!is_callback){if(!par){par = this.element[0];}for(i = 0, j = par.childNodes.length; i < j; i++) {if(par.childNodes[i] && par.childNodes[i].className && par.childNodes[i].className.indexOf("jstree-children") !== -1){tmp = par.childNodes[i];break;}}if(!tmp){tmp = d.createElement("UL");tmp.setAttribute("role", "group");tmp.className = "jstree-children";par.appendChild(tmp);}par = tmp;if(ind < par.childNodes.length){par.insertBefore(node, par.childNodes[ind]);}else {par.appendChild(node);}if(f){t = this.element[0].scrollTop;l = this.element[0].scrollLeft;node.childNodes[1].focus();this.element[0].scrollTop = t;this.element[0].scrollLeft = l;}}if(obj.state.opened && !obj.state.loaded){obj.state.opened = false;setTimeout($.proxy(function(){this.open_node(obj.id, false, 0);}, this), 0);}return node;}, open_node:function open_node(obj, callback, animation){var t1, t2, d, t;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.open_node(obj[t1], callback, animation);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}animation = animation === undefined?this.settings.core.animation:animation;if(!this.is_closed(obj)){if(callback){callback.call(this, obj, false);}return false;}if(!this.is_loaded(obj)){if(this.is_loading(obj)){return setTimeout($.proxy(function(){this.open_node(obj, callback, animation);}, this), 500);}this.load_node(obj, function(o, ok){return ok?this.open_node(o, callback, animation):callback?callback.call(this, o, false):false;});}else {d = this.get_node(obj, true);t = this;if(d.length){if(animation && d.children(".jstree-children").length){d.children(".jstree-children").stop(true, true);}if(obj.children.length && !this._firstChild(d.children(".jstree-children")[0])){this.draw_children(obj);}if(!animation){this.trigger("before_open", {node:obj});d[0].className = d[0].className.replace("jstree-closed", "jstree-open");d[0].setAttribute("aria-expanded", true);}else {this.trigger("before_open", {node:obj});d.children(".jstree-children").css("display", "none").end().removeClass("jstree-closed").addClass("jstree-open").attr("aria-expanded", true).children(".jstree-children").stop(true, true).slideDown(animation, function(){this.style.display = "";t.trigger("after_open", {node:obj});});}}obj.state.opened = true;if(callback){callback.call(this, obj, true);}if(!d.length){this.trigger("before_open", {node:obj});}this.trigger("open_node", {node:obj});if(!animation || !d.length){this.trigger("after_open", {node:obj});}}}, _open_to:function _open_to(obj){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}var i, j, p=obj.parents;for(i = 0, j = p.length; i < j; i += 1) {if(i !== "#"){this.open_node(p[i], false, 0);}}return $("#" + obj.id.replace($.jstree.idregex, "\\$&"), this.element);}, close_node:function close_node(obj, animation){var t1, t2, t, d;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.close_node(obj[t1], animation);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}if(this.is_closed(obj)){return false;}animation = animation === undefined?this.settings.core.animation:animation;t = this;d = this.get_node(obj, true);if(d.length){if(!animation){d[0].className = d[0].className.replace("jstree-open", "jstree-closed");d.attr("aria-expanded", false).children(".jstree-children").remove();}else {d.children(".jstree-children").attr("style", "display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").attr("aria-expanded", false).children(".jstree-children").stop(true, true).slideUp(animation, function(){this.style.display = "";d.children(".jstree-children").remove();t.trigger("after_close", {node:obj});});}}obj.state.opened = false;this.trigger("close_node", {node:obj});if(!animation || !d.length){this.trigger("after_close", {node:obj});}}, toggle_node:function toggle_node(obj){var t1, t2;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.toggle_node(obj[t1]);}return true;}if(this.is_closed(obj)){return this.open_node(obj);}if(this.is_open(obj)){return this.close_node(obj);}}, open_all:function open_all(obj, animation, original_obj){if(!obj){obj = "#";}obj = this.get_node(obj);if(!obj){return false;}var dom=obj.id === "#"?this.get_container_ul():this.get_node(obj, true), i, j, _this;if(!dom.length){for(i = 0, j = obj.children_d.length; i < j; i++) {if(this.is_closed(this._model.data[obj.children_d[i]])){this._model.data[obj.children_d[i]].state.opened = true;}}return this.trigger("open_all", {node:obj});}original_obj = original_obj || dom;_this = this;dom = this.is_closed(obj)?dom.find(".jstree-closed").addBack():dom.find(".jstree-closed");dom.each(function(){_this.open_node(this, function(node, status){if(status && this.is_parent(node)){this.open_all(node, animation, original_obj);}}, animation || 0);});if(original_obj.find(".jstree-closed").length === 0){this.trigger("open_all", {node:this.get_node(original_obj)});}}, close_all:function close_all(obj, animation){if(!obj){obj = "#";}obj = this.get_node(obj);if(!obj){return false;}var dom=obj.id === "#"?this.get_container_ul():this.get_node(obj, true), _this=this, i, j;if(!dom.length){for(i = 0, j = obj.children_d.length; i < j; i++) {this._model.data[obj.children_d[i]].state.opened = false;}return this.trigger("close_all", {node:obj});}dom = this.is_open(obj)?dom.find(".jstree-open").addBack():dom.find(".jstree-open");$(dom.get().reverse()).each(function(){_this.close_node(this, animation || 0);});this.trigger("close_all", {node:obj});}, is_disabled:function is_disabled(obj){obj = this.get_node(obj);return obj && obj.state && obj.state.disabled;}, enable_node:function enable_node(obj){var t1, t2;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.enable_node(obj[t1]);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}obj.state.disabled = false;this.get_node(obj, true).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled", false);this.trigger("enable_node", {node:obj});}, disable_node:function disable_node(obj){var t1, t2;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.disable_node(obj[t1]);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}obj.state.disabled = true;this.get_node(obj, true).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled", true);this.trigger("disable_node", {node:obj});}, activate_node:function activate_node(obj, e){if(this.is_disabled(obj)){return false;}this._data.core.last_clicked = this._data.core.last_clicked && this._data.core.last_clicked.id !== undefined?this.get_node(this._data.core.last_clicked.id):null;if(this._data.core.last_clicked && !this._data.core.last_clicked.state.selected){this._data.core.last_clicked = null;}if(!this._data.core.last_clicked && this._data.core.selected.length){this._data.core.last_clicked = this.get_node(this._data.core.selected[this._data.core.selected.length - 1]);}if(!this.settings.core.multiple || !e.metaKey && !e.ctrlKey && !e.shiftKey || e.shiftKey && (!this._data.core.last_clicked || !this.get_parent(obj) || this.get_parent(obj) !== this._data.core.last_clicked.parent)){if(!this.settings.core.multiple && (e.metaKey || e.ctrlKey || e.shiftKey) && this.is_selected(obj)){this.deselect_node(obj, false, e);}else {this.deselect_all(true);this.select_node(obj, false, false, e);this._data.core.last_clicked = this.get_node(obj);}}else {if(e.shiftKey){var o=this.get_node(obj).id, l=this._data.core.last_clicked.id, p=this.get_node(this._data.core.last_clicked.parent).children, c=false, i, j;for(i = 0, j = p.length; i < j; i += 1) {if(p[i] === o){c = !c;}if(p[i] === l){c = !c;}if(c || p[i] === o || p[i] === l){this.select_node(p[i], true, false, e);}else {this.deselect_node(p[i], true, e);}}this.trigger("changed", {action:"select_node", node:this.get_node(obj), selected:this._data.core.selected, event:e});}else {if(!this.is_selected(obj)){this.select_node(obj, false, false, e);}else {this.deselect_node(obj, false, e);}}}this.trigger("activate_node", {node:this.get_node(obj)});}, hover_node:function hover_node(obj){obj = this.get_node(obj, true);if(!obj || !obj.length || obj.children(".jstree-hovered").length){return false;}var o=this.element.find(".jstree-hovered"), t=this.element;if(o && o.length){this.dehover_node(o);}obj.children(".jstree-anchor").addClass("jstree-hovered");this.trigger("hover_node", {node:this.get_node(obj)});setTimeout(function(){t.attr("aria-activedescendant", obj[0].id);}, 0);}, dehover_node:function dehover_node(obj){obj = this.get_node(obj, true);if(!obj || !obj.length || !obj.children(".jstree-hovered").length){return false;}obj.children(".jstree-anchor").removeClass("jstree-hovered");this.trigger("dehover_node", {node:this.get_node(obj)});}, select_node:function select_node(obj, supress_event, prevent_open, e){var dom, t1, t2, th;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.select_node(obj[t1], supress_event, prevent_open, e);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}dom = this.get_node(obj, true);if(!obj.state.selected){obj.state.selected = true;this._data.core.selected.push(obj.id);if(!prevent_open){dom = this._open_to(obj);}if(dom && dom.length){dom.attr("aria-selected", true).children(".jstree-anchor").addClass("jstree-clicked");}this.trigger("select_node", {node:obj, selected:this._data.core.selected, event:e});if(!supress_event){this.trigger("changed", {action:"select_node", node:obj, selected:this._data.core.selected, event:e});}}}, deselect_node:function deselect_node(obj, supress_event, e){var t1, t2, dom;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.deselect_node(obj[t1], supress_event, e);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}dom = this.get_node(obj, true);if(obj.state.selected){obj.state.selected = false;this._data.core.selected = $.vakata.array_remove_item(this._data.core.selected, obj.id);if(dom.length){dom.attr("aria-selected", false).children(".jstree-anchor").removeClass("jstree-clicked");}this.trigger("deselect_node", {node:obj, selected:this._data.core.selected, event:e});if(!supress_event){this.trigger("changed", {action:"deselect_node", node:obj, selected:this._data.core.selected, event:e});}}}, select_all:function select_all(supress_event){var tmp=this._data.core.selected.concat([]), i, j;this._data.core.selected = this._model.data["#"].children_d.concat();for(i = 0, j = this._data.core.selected.length; i < j; i++) {if(this._model.data[this._data.core.selected[i]]){this._model.data[this._data.core.selected[i]].state.selected = true;}}this.redraw(true);this.trigger("select_all", {selected:this._data.core.selected});if(!supress_event){this.trigger("changed", {action:"select_all", selected:this._data.core.selected, old_selection:tmp});}}, deselect_all:function deselect_all(supress_event){var tmp=this._data.core.selected.concat([]), i, j;for(i = 0, j = this._data.core.selected.length; i < j; i++) {if(this._model.data[this._data.core.selected[i]]){this._model.data[this._data.core.selected[i]].state.selected = false;}}this._data.core.selected = [];this.element.find(".jstree-clicked").removeClass("jstree-clicked").parent().attr("aria-selected", false);this.trigger("deselect_all", {selected:this._data.core.selected, node:tmp});if(!supress_event){this.trigger("changed", {action:"deselect_all", selected:this._data.core.selected, old_selection:tmp});}}, is_selected:function is_selected(obj){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}return obj.state.selected;}, get_selected:function get_selected(full){return full?$.map(this._data.core.selected, $.proxy(function(i){return this.get_node(i);}, this)):this._data.core.selected.slice();}, get_top_selected:function get_top_selected(full){var tmp=this.get_selected(true), obj={}, i, j, k, l;for(i = 0, j = tmp.length; i < j; i++) {obj[tmp[i].id] = tmp[i];}for(i = 0, j = tmp.length; i < j; i++) {for(k = 0, l = tmp[i].children_d.length; k < l; k++) {if(obj[tmp[i].children_d[k]]){delete obj[tmp[i].children_d[k]];}}}tmp = [];for(i in obj) {if(obj.hasOwnProperty(i)){tmp.push(i);}}return full?$.map(tmp, $.proxy(function(i){return this.get_node(i);}, this)):tmp;}, get_bottom_selected:function get_bottom_selected(full){var tmp=this.get_selected(true), obj=[], i, j;for(i = 0, j = tmp.length; i < j; i++) {if(!tmp[i].children.length){obj.push(tmp[i].id);}}return full?$.map(obj, $.proxy(function(i){return this.get_node(i);}, this)):obj;}, get_state:function get_state(){var state={core:{open:[], scroll:{left:this.element.scrollLeft(), top:this.element.scrollTop()}, selected:[]}}, i;for(i in this._model.data) {if(this._model.data.hasOwnProperty(i)){if(i !== "#"){if(this._model.data[i].state.opened){state.core.open.push(i);}if(this._model.data[i].state.selected){state.core.selected.push(i);}}}}return state;}, set_state:function set_state(state, callback){if(state){if(state.core){var res, n, t, _this, i;if(state.core.open){if(!$.isArray(state.core.open) || !state.core.open.length){delete state.core.open;this.set_state(state, callback);}else {this._load_nodes(state.core.open, function(nodes){this.open_node(nodes, false, 0);delete state.core.open;this.set_state(state, callback);}, true);}return false;}if(state.core.scroll){if(state.core.scroll && state.core.scroll.left !== undefined){this.element.scrollLeft(state.core.scroll.left);}if(state.core.scroll && state.core.scroll.top !== undefined){this.element.scrollTop(state.core.scroll.top);}delete state.core.scroll;this.set_state(state, callback);return false;}if(state.core.selected){_this = this;this.deselect_all();$.each(state.core.selected, function(i, v){_this.select_node(v, false, true);});delete state.core.selected;this.set_state(state, callback);return false;}for(i in state) {if(state.hasOwnProperty(i) && i !== "core" && $.inArray(i, this.settings.plugins) === -1){delete state[i];}}if($.isEmptyObject(state.core)){delete state.core;this.set_state(state, callback);return false;}}if($.isEmptyObject(state)){state = null;if(callback){callback.call(this);}this.trigger("set_state");return false;}return true;}return false;}, refresh:function refresh(skip_loading, forget_state){this._data.core.state = forget_state === true?{}:this.get_state();if(forget_state && $.isFunction(forget_state)){this._data.core.state = forget_state.call(this, this._data.core.state);}this._cnt = 0;this._model.data = {"#":{id:"#", parent:null, parents:[], children:[], children_d:[], state:{loaded:false}}};var c=this.get_container_ul()[0].className;if(!skip_loading){this.element.html("<" + "ul class='" + c + "' role='group'><" + "li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='treeitem' id='j" + this._id + "_loading'><i class='jstree-icon jstree-ocl'></i><" + "a class='jstree-anchor' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>" + this.get_string("Loading ...") + "</a></li></ul>");this.element.attr("aria-activedescendant", "j" + this._id + "_loading");}this.load_node("#", function(o, s){if(s){this.get_container_ul()[0].className = c;if(this._firstChild(this.get_container_ul()[0])){this.element.attr("aria-activedescendant", this._firstChild(this.get_container_ul()[0]).id);}this.set_state($.extend(true, {}, this._data.core.state), function(){this.trigger("refresh");});}this._data.core.state = null;});}, refresh_node:function refresh_node(obj){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}var opened=[], to_load=[], s=this._data.core.selected.concat([]);to_load.push(obj.id);if(obj.state.opened === true){opened.push(obj.id);}this.get_node(obj, true).find(".jstree-open").each(function(){opened.push(this.id);});this._load_nodes(to_load, $.proxy(function(nodes){this.open_node(opened, false, 0);this.select_node(this._data.core.selected);this.trigger("refresh_node", {node:obj, nodes:nodes});}, this));}, set_id:function set_id(obj, id){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}var i, j, m=this._model.data;id = id.toString();m[obj.parent].children[$.inArray(obj.id, m[obj.parent].children)] = id;for(i = 0, j = obj.parents.length; i < j; i++) {m[obj.parents[i]].children_d[$.inArray(obj.id, m[obj.parents[i]].children_d)] = id;}for(i = 0, j = obj.children.length; i < j; i++) {m[obj.children[i]].parent = id;}for(i = 0, j = obj.children_d.length; i < j; i++) {m[obj.children_d[i]].parents[$.inArray(obj.id, m[obj.children_d[i]].parents)] = id;}i = $.inArray(obj.id, this._data.core.selected);if(i !== -1){this._data.core.selected[i] = id;}i = this.get_node(obj.id, true);if(i){i.attr("id", id).children(".jstree-anchor").attr("id", id + "_anchor").end().attr("aria-labelledby", id + "_anchor");if(this.element.attr("aria-activedescendant") === obj.id){this.element.attr("aria-activedescendant", id);}}delete m[obj.id];obj.id = id;obj.li_attr.id = id;m[id] = obj;return true;}, get_text:function get_text(obj){obj = this.get_node(obj);return !obj || obj.id === "#"?false:obj.text;}, set_text:function set_text(obj, val){var t1, t2;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.set_text(obj[t1], val);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}obj.text = val;if(this.get_node(obj, true).length){this.redraw_node(obj.id);}this.trigger("set_text", {obj:obj, text:val});return true;}, get_json:function get_json(obj, options, flat){obj = this.get_node(obj || "#");if(!obj){return false;}if(options && options.flat && !flat){flat = [];}var tmp={id:obj.id, text:obj.text, icon:this.get_icon(obj), li_attr:$.extend(true, {}, obj.li_attr), a_attr:$.extend(true, {}, obj.a_attr), state:{}, data:options && options.no_data?false:$.extend(true, {}, obj.data)}, i, j;if(options && options.flat){tmp.parent = obj.parent;}else {tmp.children = [];}if(!options || !options.no_state){for(i in obj.state) {if(obj.state.hasOwnProperty(i)){tmp.state[i] = obj.state[i];}}}if(options && options.no_id){delete tmp.id;if(tmp.li_attr && tmp.li_attr.id){delete tmp.li_attr.id;}if(tmp.a_attr && tmp.a_attr.id){delete tmp.a_attr.id;}}if(options && options.flat && obj.id !== "#"){flat.push(tmp);}if(!options || !options.no_children){for(i = 0, j = obj.children.length; i < j; i++) {if(options && options.flat){this.get_json(obj.children[i], options, flat);}else {tmp.children.push(this.get_json(obj.children[i], options));}}}return options && options.flat?flat:obj.id === "#"?tmp.children:tmp;}, create_node:function create_node(par, node, pos, callback, is_loaded){if(par === null){par = "#";}par = this.get_node(par);if(!par){return false;}pos = pos === undefined?"last":pos;if(!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)){return this.load_node(par, function(){this.create_node(par, node, pos, callback, true);});}if(!node){node = {text:this.get_string("New node")};}if(typeof node === "string"){node = {text:node};}if(node.text === undefined){node.text = this.get_string("New node");}var tmp, dpc, i, j;if(par.id === "#"){if(pos === "before"){pos = "first";}if(pos === "after"){pos = "last";}}switch(pos){case "before":tmp = this.get_node(par.parent);pos = $.inArray(par.id, tmp.children);par = tmp;break;case "after":tmp = this.get_node(par.parent);pos = $.inArray(par.id, tmp.children) + 1;par = tmp;break;case "inside":case "first":pos = 0;break;case "last":pos = par.children.length;break;default:if(!pos){pos = 0;}break;}if(pos > par.children.length){pos = par.children.length;}if(!node.id){node.id = true;}if(!this.check("create_node", node, par, pos)){this.settings.core.error.call(this, this._data.core.last_error);return false;}if(node.id === true){delete node.id;}node = this._parse_model_from_json(node, par.id, par.parents.concat());if(!node){return false;}tmp = this.get_node(node);dpc = [];dpc.push(node);dpc = dpc.concat(tmp.children_d);this.trigger("model", {nodes:dpc, parent:par.id});par.children_d = par.children_d.concat(dpc);for(i = 0, j = par.parents.length; i < j; i++) {this._model.data[par.parents[i]].children_d = this._model.data[par.parents[i]].children_d.concat(dpc);}node = tmp;tmp = [];for(i = 0, j = par.children.length; i < j; i++) {tmp[i >= pos?i + 1:i] = par.children[i];}tmp[pos] = node.id;par.children = tmp;this.redraw_node(par, true);if(callback){callback.call(this, this.get_node(node));}this.trigger("create_node", {node:this.get_node(node), parent:par.id, position:pos});return node.id;}, rename_node:function rename_node(obj, val){var t1, t2, old;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.rename_node(obj[t1], val);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}old = obj.text;if(!this.check("rename_node", obj, this.get_parent(obj), val)){this.settings.core.error.call(this, this._data.core.last_error);return false;}this.set_text(obj, val);this.trigger("rename_node", {node:obj, text:val, old:old});return true;}, delete_node:function delete_node(obj){var t1, t2, par, pos, tmp, i, j, k, l, c;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.delete_node(obj[t1]);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}par = this.get_node(obj.parent);pos = $.inArray(obj.id, par.children);c = false;if(!this.check("delete_node", obj, par, pos)){this.settings.core.error.call(this, this._data.core.last_error);return false;}if(pos !== -1){par.children = $.vakata.array_remove(par.children, pos);}tmp = obj.children_d.concat([]);tmp.push(obj.id);for(k = 0, l = tmp.length; k < l; k++) {for(i = 0, j = obj.parents.length; i < j; i++) {pos = $.inArray(tmp[k], this._model.data[obj.parents[i]].children_d);if(pos !== -1){this._model.data[obj.parents[i]].children_d = $.vakata.array_remove(this._model.data[obj.parents[i]].children_d, pos);}}if(this._model.data[tmp[k]].state.selected){c = true;pos = $.inArray(tmp[k], this._data.core.selected);if(pos !== -1){this._data.core.selected = $.vakata.array_remove(this._data.core.selected, pos);}}}this.trigger("delete_node", {node:obj, parent:par.id});if(c){this.trigger("changed", {action:"delete_node", node:obj, selected:this._data.core.selected, parent:par.id});}for(k = 0, l = tmp.length; k < l; k++) {delete this._model.data[tmp[k]];}this.redraw_node(par, true);return true;}, check:function check(chk, obj, par, pos, more){obj = obj && obj.id?obj:this.get_node(obj);par = par && par.id?par:this.get_node(par);var tmp=chk.match(/^move_node|copy_node|create_node$/i)?par:obj, chc=this.settings.core.check_callback;if(chk === "move_node" || chk === "copy_node"){if((!more || !more.is_multi) && (obj.id === par.id || $.inArray(obj.id, par.children) === pos || $.inArray(par.id, obj.children_d) !== -1)){this._data.core.last_error = {error:"check", plugin:"core", id:"core_01", reason:"Moving parent inside child", data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};return false;}}if(tmp && tmp.data){tmp = tmp.data;}if(tmp && tmp.functions && (tmp.functions[chk] === false || tmp.functions[chk] === true)){if(tmp.functions[chk] === false){this._data.core.last_error = {error:"check", plugin:"core", id:"core_02", reason:"Node data prevents function: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};}return tmp.functions[chk];}if(chc === false || $.isFunction(chc) && chc.call(this, chk, obj, par, pos, more) === false || chc && chc[chk] === false){this._data.core.last_error = {error:"check", plugin:"core", id:"core_03", reason:"User config for core.check_callback prevents function: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};return false;}return true;}, last_error:function last_error(){return this._data.core.last_error;}, move_node:function move_node(obj, par, pos, callback, is_loaded, skip_redraw, origin){var t1, t2, old_par, old_pos, new_par, old_ins, is_multi, dpc, tmp, i, j, k, l, p;par = this.get_node(par);pos = pos === undefined?0:pos;if(!par){return false;}if(!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)){return this.load_node(par, function(){this.move_node(obj, par, pos, callback, true, false, origin);});}if($.isArray(obj)){if(obj.length === 1){obj = obj[0];}else {for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {if(tmp = this.move_node(obj[t1], par, pos, callback, is_loaded, false, origin)){par = tmp;pos = "after";}}this.redraw();return true;}}obj = obj && obj.id?obj:this.get_node(obj);if(!obj || obj.id === "#"){return false;}old_par = (obj.parent || "#").toString();new_par = !pos.toString().match(/^(before|after)$/) || par.id === "#"?par:this.get_node(par.parent);old_ins = origin?origin:this._model.data[obj.id]?this:$.jstree.reference(obj.id);is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;old_pos = old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children?$.inArray(obj.id, old_ins._model.data[old_par].children):-1;if(old_ins || old_ins._id){obj = old_ins._model.data[obj.id];}if(is_multi){if(tmp = this.copy_node(obj, par, pos, callback, is_loaded, false, origin)){if(old_ins){old_ins.delete_node(obj);}return tmp;}return false;}if(par.id === "#"){if(pos === "before"){pos = "first";}if(pos === "after"){pos = "last";}}switch(pos){case "before":pos = $.inArray(par.id, new_par.children);break;case "after":pos = $.inArray(par.id, new_par.children) + 1;break;case "inside":case "first":pos = 0;break;case "last":pos = new_par.children.length;break;default:if(!pos){pos = 0;}break;}if(pos > new_par.children.length){pos = new_par.children.length;}if(!this.check("move_node", obj, new_par, pos, {core:true, origin:origin, is_multi:old_ins && old_ins._id && old_ins._id !== this._id, is_foreign:!old_ins || !old_ins._id})){this.settings.core.error.call(this, this._data.core.last_error);return false;}if(obj.parent === new_par.id){dpc = new_par.children.concat();tmp = $.inArray(obj.id, dpc);if(tmp !== -1){dpc = $.vakata.array_remove(dpc, tmp);if(pos > tmp){pos--;}}tmp = [];for(i = 0, j = dpc.length; i < j; i++) {tmp[i >= pos?i + 1:i] = dpc[i];}tmp[pos] = obj.id;new_par.children = tmp;this._node_changed(new_par.id);this.redraw(new_par.id === "#");}else {tmp = obj.children_d.concat();tmp.push(obj.id);for(i = 0, j = obj.parents.length; i < j; i++) {dpc = [];p = old_ins._model.data[obj.parents[i]].children_d;for(k = 0, l = p.length; k < l; k++) {if($.inArray(p[k], tmp) === -1){dpc.push(p[k]);}}old_ins._model.data[obj.parents[i]].children_d = dpc;}old_ins._model.data[old_par].children = $.vakata.array_remove_item(old_ins._model.data[old_par].children, obj.id);for(i = 0, j = new_par.parents.length; i < j; i++) {this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(tmp);}dpc = [];for(i = 0, j = new_par.children.length; i < j; i++) {dpc[i >= pos?i + 1:i] = new_par.children[i];}dpc[pos] = obj.id;new_par.children = dpc;new_par.children_d.push(obj.id);new_par.children_d = new_par.children_d.concat(obj.children_d);obj.parent = new_par.id;tmp = new_par.parents.concat();tmp.unshift(new_par.id);p = obj.parents.length;obj.parents = tmp;tmp = tmp.concat();for(i = 0, j = obj.children_d.length; i < j; i++) {this._model.data[obj.children_d[i]].parents = this._model.data[obj.children_d[i]].parents.slice(0, p * -1);Array.prototype.push.apply(this._model.data[obj.children_d[i]].parents, tmp);}if(old_par === "#" || new_par.id === "#"){this._model.force_full_redraw = true;}if(!this._model.force_full_redraw){this._node_changed(old_par);this._node_changed(new_par.id);}if(!skip_redraw){this.redraw();}}if(callback){callback.call(this, obj, new_par, pos);}this.trigger("move_node", {node:obj, parent:new_par.id, position:pos, old_parent:old_par, old_position:old_pos, is_multi:old_ins && old_ins._id && old_ins._id !== this._id, is_foreign:!old_ins || !old_ins._id, old_instance:old_ins, new_instance:this});return obj.id;}, copy_node:function copy_node(obj, par, pos, callback, is_loaded, skip_redraw, origin){var t1, t2, dpc, tmp, i, j, node, old_par, new_par, old_ins, is_multi;par = this.get_node(par);pos = pos === undefined?0:pos;if(!par){return false;}if(!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)){return this.load_node(par, function(){this.copy_node(obj, par, pos, callback, true, false, origin);});}if($.isArray(obj)){if(obj.length === 1){obj = obj[0];}else {for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {if(tmp = this.copy_node(obj[t1], par, pos, callback, is_loaded, true, origin)){par = tmp;pos = "after";}}this.redraw();return true;}}obj = obj && obj.id?obj:this.get_node(obj);if(!obj || obj.id === "#"){return false;}old_par = (obj.parent || "#").toString();new_par = !pos.toString().match(/^(before|after)$/) || par.id === "#"?par:this.get_node(par.parent);old_ins = origin?origin:this._model.data[obj.id]?this:$.jstree.reference(obj.id);is_multi = !old_ins || !old_ins._id || this._id !== old_ins._id;if(old_ins || old_ins._id){obj = old_ins._model.data[obj.id];}if(par.id === "#"){if(pos === "before"){pos = "first";}if(pos === "after"){pos = "last";}}switch(pos){case "before":pos = $.inArray(par.id, new_par.children);break;case "after":pos = $.inArray(par.id, new_par.children) + 1;break;case "inside":case "first":pos = 0;break;case "last":pos = new_par.children.length;break;default:if(!pos){pos = 0;}break;}if(pos > new_par.children.length){pos = new_par.children.length;}if(!this.check("copy_node", obj, new_par, pos, {core:true, origin:origin, is_multi:old_ins && old_ins._id && old_ins._id !== this._id, is_foreign:!old_ins || !old_ins._id})){this.settings.core.error.call(this, this._data.core.last_error);return false;}node = old_ins?old_ins.get_json(obj, {no_id:true, no_data:true, no_state:true}):obj;if(!node){return false;}if(node.id === true){delete node.id;}node = this._parse_model_from_json(node, new_par.id, new_par.parents.concat());if(!node){return false;}tmp = this.get_node(node);if(obj && obj.state && obj.state.loaded === false){tmp.state.loaded = false;}dpc = [];dpc.push(node);dpc = dpc.concat(tmp.children_d);this.trigger("model", {nodes:dpc, parent:new_par.id});for(i = 0, j = new_par.parents.length; i < j; i++) {this._model.data[new_par.parents[i]].children_d = this._model.data[new_par.parents[i]].children_d.concat(dpc);}dpc = [];for(i = 0, j = new_par.children.length; i < j; i++) {dpc[i >= pos?i + 1:i] = new_par.children[i];}dpc[pos] = tmp.id;new_par.children = dpc;new_par.children_d.push(tmp.id);new_par.children_d = new_par.children_d.concat(tmp.children_d);if(new_par.id === "#"){this._model.force_full_redraw = true;}if(!this._model.force_full_redraw){this._node_changed(new_par.id);}if(!skip_redraw){this.redraw(new_par.id === "#");}if(callback){callback.call(this, tmp, new_par, pos);}this.trigger("copy_node", {node:tmp, original:obj, parent:new_par.id, position:pos, old_parent:old_par, old_position:old_ins && old_ins._id && old_par && old_ins._model.data[old_par] && old_ins._model.data[old_par].children?$.inArray(obj.id, old_ins._model.data[old_par].children):-1, is_multi:old_ins && old_ins._id && old_ins._id !== this._id, is_foreign:!old_ins || !old_ins._id, old_instance:old_ins, new_instance:this});return tmp.id;}, cut:function cut(obj){if(!obj){obj = this._data.core.selected.concat();}if(!$.isArray(obj)){obj = [obj];}if(!obj.length){return false;}var tmp=[], o, t1, t2;for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {o = this.get_node(obj[t1]);if(o && o.id && o.id !== "#"){tmp.push(o);}}if(!tmp.length){return false;}ccp_node = tmp;ccp_inst = this;ccp_mode = "move_node";this.trigger("cut", {node:obj});}, copy:function copy(obj){if(!obj){obj = this._data.core.selected.concat();}if(!$.isArray(obj)){obj = [obj];}if(!obj.length){return false;}var tmp=[], o, t1, t2;for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {o = this.get_node(obj[t1]);if(o && o.id && o.id !== "#"){tmp.push(o);}}if(!tmp.length){return false;}ccp_node = tmp;ccp_inst = this;ccp_mode = "copy_node";this.trigger("copy", {node:obj});}, get_buffer:function get_buffer(){return {mode:ccp_mode, node:ccp_node, inst:ccp_inst};}, can_paste:function can_paste(){return ccp_mode !== false && ccp_node !== false;}, paste:function paste(obj, pos){obj = this.get_node(obj);if(!obj || !ccp_mode || !ccp_mode.match(/^(copy_node|move_node)$/) || !ccp_node){return false;}if(this[ccp_mode](ccp_node, obj, pos, false, false, false, ccp_inst)){this.trigger("paste", {parent:obj.id, node:ccp_node, mode:ccp_mode});}ccp_node = false;ccp_mode = false;ccp_inst = false;}, clear_buffer:function clear_buffer(){ccp_node = false;ccp_mode = false;ccp_inst = false;this.trigger("clear_buffer");}, edit:function edit(obj, default_text){var rtl, w, a, s, t, h1, h2, fn, tmp;obj = this.get_node(obj);if(!obj){return false;}if(this.settings.core.check_callback === false){this._data.core.last_error = {error:"check", plugin:"core", id:"core_07", reason:"Could not edit node because of check_callback"};this.settings.core.error.call(this, this._data.core.last_error);return false;}tmp = obj;default_text = typeof default_text === "string"?default_text:obj.text;this.set_text(obj, "");obj = this._open_to(obj);tmp.text = default_text;rtl = this._data.core.rtl;w = this.element.width();a = obj.children(".jstree-anchor");s = $("<span>");t = default_text;h1 = $("<" + "div />", {css:{position:"absolute", top:"-200px", left:rtl?"0px":"-1000px", visibility:"hidden"}}).appendTo("body");h2 = $("<" + "input />", {value:t, "class":"jstree-rename-input", css:{padding:"0", border:"1px solid silver", "box-sizing":"border-box", display:"inline-block", height:this._data.core.li_height + "px", lineHeight:this._data.core.li_height + "px", width:"150px"}, blur:$.proxy(function(){var i=s.children(".jstree-rename-input"), v=i.val();if(v === ""){v = t;}h1.remove();s.replaceWith(a);s.remove();this.set_text(obj, t);if(this.rename_node(obj, $("<div></div>").text(v)[this.settings.core.force_text?"text":"html"]()) === false){this.set_text(obj, t);}}, this), keydown:function keydown(event){var key=event.which;if(key === 27){this.value = t;}if(key === 27 || key === 13 || key === 37 || key === 38 || key === 39 || key === 40 || key === 32){event.stopImmediatePropagation();}if(key === 27 || key === 13){event.preventDefault();this.blur();}}, click:function click(e){e.stopImmediatePropagation();}, mousedown:function mousedown(e){e.stopImmediatePropagation();}, keyup:function keyup(event){h2.width(Math.min(h1.text("pW" + this.value).width(), w));}, keypress:function keypress(event){if(event.which === 13){return false;}}});fn = {fontFamily:a.css("fontFamily") || "", fontSize:a.css("fontSize") || "", fontWeight:a.css("fontWeight") || "", fontStyle:a.css("fontStyle") || "", fontStretch:a.css("fontStretch") || "", fontVariant:a.css("fontVariant") || "", letterSpacing:a.css("letterSpacing") || "", wordSpacing:a.css("wordSpacing") || ""};s.attr("class", a.attr("class")).append(a.contents().clone()).append(h2);a.replaceWith(s);h1.css(fn);h2.css(fn).width(Math.min(h1.text("pW" + h2[0].value).width(), w))[0].select();}, set_theme:function set_theme(theme_name, theme_url){if(!theme_name){return false;}if(theme_url === true){var dir=this.settings.core.themes.dir;if(!dir){dir = $.jstree.path + "/themes";}theme_url = dir + "/" + theme_name + "/style.css";}if(theme_url && $.inArray(theme_url, themes_loaded) === -1){$("head").append("<" + "link rel=\"stylesheet\" href=\"" + theme_url + "\" type=\"text/css\" />");themes_loaded.push(theme_url);}if(this._data.core.themes.name){this.element.removeClass("jstree-" + this._data.core.themes.name);}this._data.core.themes.name = theme_name;this.element.addClass("jstree-" + theme_name);this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-" + theme_name + "-responsive");this.trigger("set_theme", {theme:theme_name});}, get_theme:function get_theme(){return this._data.core.themes.name;}, set_theme_variant:function set_theme_variant(variant_name){if(this._data.core.themes.variant){this.element.removeClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);}this._data.core.themes.variant = variant_name;if(variant_name){this.element.addClass("jstree-" + this._data.core.themes.name + "-" + this._data.core.themes.variant);}}, get_theme_variant:function get_theme_variant(){return this._data.core.themes.variant;}, show_stripes:function show_stripes(){this._data.core.themes.stripes = true;this.get_container_ul().addClass("jstree-striped");}, hide_stripes:function hide_stripes(){this._data.core.themes.stripes = false;this.get_container_ul().removeClass("jstree-striped");}, toggle_stripes:function toggle_stripes(){if(this._data.core.themes.stripes){this.hide_stripes();}else {this.show_stripes();}}, show_dots:function show_dots(){this._data.core.themes.dots = true;this.get_container_ul().removeClass("jstree-no-dots");}, hide_dots:function hide_dots(){this._data.core.themes.dots = false;this.get_container_ul().addClass("jstree-no-dots");}, toggle_dots:function toggle_dots(){if(this._data.core.themes.dots){this.hide_dots();}else {this.show_dots();}}, show_icons:function show_icons(){this._data.core.themes.icons = true;this.get_container_ul().removeClass("jstree-no-icons");}, hide_icons:function hide_icons(){this._data.core.themes.icons = false;this.get_container_ul().addClass("jstree-no-icons");}, toggle_icons:function toggle_icons(){if(this._data.core.themes.icons){this.hide_icons();}else {this.show_icons();}}, set_icon:function set_icon(obj, icon){var t1, t2, dom, old;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.set_icon(obj[t1], icon);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}old = obj.icon;obj.icon = icon === true || icon === null || icon === undefined || icon === ""?true:icon;dom = this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon");if(icon === false){this.hide_icon(obj);}else if(icon === true || icon === null || icon === undefined || icon === ""){dom.removeClass("jstree-themeicon-custom " + old).css("background", "").removeAttr("rel");if(old === false){this.show_icon(obj);}}else if(icon.indexOf("/") === -1 && icon.indexOf(".") === -1){dom.removeClass(old).css("background", "");dom.addClass(icon + " jstree-themeicon-custom").attr("rel", icon);if(old === false){this.show_icon(obj);}}else {dom.removeClass(old).css("background", "");dom.addClass("jstree-themeicon-custom").css("background", "url('" + icon + "') center center no-repeat").attr("rel", icon);if(old === false){this.show_icon(obj);}}return true;}, get_icon:function get_icon(obj){obj = this.get_node(obj);return !obj || obj.id === "#"?false:obj.icon;}, hide_icon:function hide_icon(obj){var t1, t2;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.hide_icon(obj[t1]);}return true;}obj = this.get_node(obj);if(!obj || obj === "#"){return false;}obj.icon = false;this.get_node(obj, true).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden");return true;}, show_icon:function show_icon(obj){var t1, t2, dom;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.show_icon(obj[t1]);}return true;}obj = this.get_node(obj);if(!obj || obj === "#"){return false;}dom = this.get_node(obj, true);obj.icon = dom.length?dom.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):true;if(!obj.icon){obj.icon = true;}dom.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden");return true;}};$.vakata = {};$.vakata.attributes = function(node, with_values){node = $(node)[0];var attr=with_values?{}:[];if(node && node.attributes){$.each(node.attributes, function(i, v){if($.inArray(v.name.toLowerCase(), ["style", "contenteditable", "hasfocus", "tabindex"]) !== -1){return;}if(v.value !== null && $.trim(v.value) !== ""){if(with_values){attr[v.name] = v.value;}else {attr.push(v.name);}}});}return attr;};$.vakata.array_unique = function(array){var a=[], i, j, l, o={};for(i = 0, l = array.length; i < l; i++) {if(o[array[i]] === undefined){a.push(array[i]);o[array[i]] = true;}}return a;};$.vakata.array_remove = function(array, from, to){var rest=array.slice((to || from) + 1 || array.length);array.length = from < 0?array.length + from:from;array.push.apply(array, rest);return array;};$.vakata.array_remove_item = function(array, item){var tmp=$.inArray(item, array);return tmp !== -1?$.vakata.array_remove(array, tmp):array;};var _i=document.createElement("I");_i.className = "jstree-icon jstree-checkbox";_i.setAttribute("role", "presentation");$.jstree.defaults.checkbox = {visible:true, three_state:true, whole_node:true, keep_selected_style:true, cascade:"", tie_selection:true};$.jstree.plugins.checkbox = function(options, parent){this.bind = function(){parent.bind.call(this);this._data.checkbox.uto = false;this._data.checkbox.selected = [];if(this.settings.checkbox.three_state){this.settings.checkbox.cascade = "up+down+undetermined";}this.element.on("init.jstree", $.proxy(function(){this._data.checkbox.visible = this.settings.checkbox.visible;if(!this.settings.checkbox.keep_selected_style){this.element.addClass("jstree-checkbox-no-clicked");}if(this.settings.checkbox.tie_selection){this.element.addClass("jstree-checkbox-selection");}}, this)).on("loading.jstree", $.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]();}, this));if(this.settings.checkbox.cascade.indexOf("undetermined") !== -1){this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree", $.proxy(function(){if(this._data.checkbox.uto){clearTimeout(this._data.checkbox.uto);}this._data.checkbox.uto = setTimeout($.proxy(this._undetermined, this), 50);}, this));}if(!this.settings.checkbox.tie_selection){this.element.on("model.jstree", $.proxy(function(e, data){var m=this._model.data, p=m[data.parent], dpc=data.nodes, i, j;for(i = 0, j = dpc.length; i < j; i++) {m[dpc[i]].state.checked = m[dpc[i]].original && m[dpc[i]].original.state && m[dpc[i]].original.state.checked;if(m[dpc[i]].state.checked){this._data.checkbox.selected.push(dpc[i]);}}}, this));}if(this.settings.checkbox.cascade.indexOf("up") !== -1 || this.settings.checkbox.cascade.indexOf("down") !== -1){this.element.on("model.jstree", $.proxy(function(e, data){var m=this._model.data, p=m[data.parent], dpc=data.nodes, chd=[], c, i, j, k, l, tmp, s=this.settings.checkbox.cascade, t=this.settings.checkbox.tie_selection;if(s.indexOf("down") !== -1){if(p.state[t?"selected":"checked"]){for(i = 0, j = dpc.length; i < j; i++) {m[dpc[i]].state[t?"selected":"checked"] = true;}this._data[t?"core":"checkbox"].selected = this._data[t?"core":"checkbox"].selected.concat(dpc);}else {for(i = 0, j = dpc.length; i < j; i++) {if(m[dpc[i]].state[t?"selected":"checked"]){for(k = 0, l = m[dpc[i]].children_d.length; k < l; k++) {m[m[dpc[i]].children_d[k]].state[t?"selected":"checked"] = true;}this._data[t?"core":"checkbox"].selected = this._data[t?"core":"checkbox"].selected.concat(m[dpc[i]].children_d);}}}}if(s.indexOf("up") !== -1){for(i = 0, j = p.children_d.length; i < j; i++) {if(!m[p.children_d[i]].children.length){chd.push(m[p.children_d[i]].parent);}}chd = $.vakata.array_unique(chd);for(k = 0, l = chd.length; k < l; k++) {p = m[chd[k]];while(p && p.id !== "#") {c = 0;for(i = 0, j = p.children.length; i < j; i++) {c += m[p.children[i]].state[t?"selected":"checked"];}if(c === j){p.state[t?"selected":"checked"] = true;this._data[t?"core":"checkbox"].selected.push(p.id);tmp = this.get_node(p, true);if(tmp && tmp.length){tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked");}}else {break;}p = this.get_node(p.parent);}}}this._data[t?"core":"checkbox"].selected = $.vakata.array_unique(this._data[t?"core":"checkbox"].selected);}, this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree", $.proxy(function(e, data){var obj=data.node, m=this._model.data, par=this.get_node(obj.parent), dom=this.get_node(obj, true), i, j, c, tmp, s=this.settings.checkbox.cascade, t=this.settings.checkbox.tie_selection;if(s.indexOf("down") !== -1){this._data[t?"core":"checkbox"].selected = $.vakata.array_unique(this._data[t?"core":"checkbox"].selected.concat(obj.children_d));for(i = 0, j = obj.children_d.length; i < j; i++) {tmp = m[obj.children_d[i]];tmp.state[t?"selected":"checked"] = true;if(tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined){tmp.original.state.undetermined = false;}}}if(s.indexOf("up") !== -1){while(par && par.id !== "#") {c = 0;for(i = 0, j = par.children.length; i < j; i++) {c += m[par.children[i]].state[t?"selected":"checked"];}if(c === j){par.state[t?"selected":"checked"] = true;this._data[t?"core":"checkbox"].selected.push(par.id);tmp = this.get_node(par, true);if(tmp && tmp.length){tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked");}}else {break;}par = this.get_node(par.parent);}}if(s.indexOf("down") !== -1 && dom.length){dom.find(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked").parent().attr("aria-selected", true);}}, this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree", $.proxy(function(e, data){var obj=this.get_node("#"), m=this._model.data, i, j, tmp;for(i = 0, j = obj.children_d.length; i < j; i++) {tmp = m[obj.children_d[i]];if(tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined){tmp.original.state.undetermined = false;}}}, this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree", $.proxy(function(e, data){var obj=data.node, dom=this.get_node(obj, true), i, j, tmp, s=this.settings.checkbox.cascade, t=this.settings.checkbox.tie_selection;if(obj && obj.original && obj.original.state && obj.original.state.undetermined){obj.original.state.undetermined = false;}if(s.indexOf("down") !== -1){for(i = 0, j = obj.children_d.length; i < j; i++) {tmp = this._model.data[obj.children_d[i]];tmp.state[t?"selected":"checked"] = false;if(tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined){tmp.original.state.undetermined = false;}}}if(s.indexOf("up") !== -1){for(i = 0, j = obj.parents.length; i < j; i++) {tmp = this._model.data[obj.parents[i]];tmp.state[t?"selected":"checked"] = false;if(tmp && tmp.original && tmp.original.state && tmp.original.state.undetermined){tmp.original.state.undetermined = false;}tmp = this.get_node(obj.parents[i], true);if(tmp && tmp.length){tmp.attr("aria-selected", false).children(".jstree-anchor").removeClass(t?"jstree-clicked":"jstree-checked");}}}tmp = [];for(i = 0, j = this._data[t?"core":"checkbox"].selected.length; i < j; i++) {if((s.indexOf("down") === -1 || $.inArray(this._data[t?"core":"checkbox"].selected[i], obj.children_d) === -1) && (s.indexOf("up") === -1 || $.inArray(this._data[t?"core":"checkbox"].selected[i], obj.parents) === -1)){tmp.push(this._data[t?"core":"checkbox"].selected[i]);}}this._data[t?"core":"checkbox"].selected = $.vakata.array_unique(tmp);if(s.indexOf("down") !== -1 && dom.length){dom.find(".jstree-anchor").removeClass(t?"jstree-clicked":"jstree-checked").parent().attr("aria-selected", false);}}, this));}if(this.settings.checkbox.cascade.indexOf("up") !== -1){this.element.on("delete_node.jstree", $.proxy(function(e, data){var p=this.get_node(data.parent), m=this._model.data, i, j, c, tmp, t=this.settings.checkbox.tie_selection;while(p && p.id !== "#") {c = 0;for(i = 0, j = p.children.length; i < j; i++) {c += m[p.children[i]].state[t?"selected":"checked"];}if(c === j){p.state[t?"selected":"checked"] = true;this._data[t?"core":"checkbox"].selected.push(p.id);tmp = this.get_node(p, true);if(tmp && tmp.length){tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked");}}else {break;}p = this.get_node(p.parent);}}, this)).on("move_node.jstree", $.proxy(function(e, data){var is_multi=data.is_multi, old_par=data.old_parent, new_par=this.get_node(data.parent), m=this._model.data, p, c, i, j, tmp, t=this.settings.checkbox.tie_selection;if(!is_multi){p = this.get_node(old_par);while(p && p.id !== "#") {c = 0;for(i = 0, j = p.children.length; i < j; i++) {c += m[p.children[i]].state[t?"selected":"checked"];}if(c === j){p.state[t?"selected":"checked"] = true;this._data[t?"core":"checkbox"].selected.push(p.id);tmp = this.get_node(p, true);if(tmp && tmp.length){tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked");}}else {break;}p = this.get_node(p.parent);}}p = new_par;while(p && p.id !== "#") {c = 0;for(i = 0, j = p.children.length; i < j; i++) {c += m[p.children[i]].state[t?"selected":"checked"];}if(c === j){if(!p.state[t?"selected":"checked"]){p.state[t?"selected":"checked"] = true;this._data[t?"core":"checkbox"].selected.push(p.id);tmp = this.get_node(p, true);if(tmp && tmp.length){tmp.attr("aria-selected", true).children(".jstree-anchor").addClass(t?"jstree-clicked":"jstree-checked");}}}else {if(p.state[t?"selected":"checked"]){p.state[t?"selected":"checked"] = false;this._data[t?"core":"checkbox"].selected = $.vakata.array_remove_item(this._data[t?"core":"checkbox"].selected, p.id);tmp = this.get_node(p, true);if(tmp && tmp.length){tmp.attr("aria-selected", false).children(".jstree-anchor").removeClass(t?"jstree-clicked":"jstree-checked");}}else {break;}}p = this.get_node(p.parent);}}, this));}};this._undetermined = function(){var i, j, k, l, o={}, m=this._model.data, t=this.settings.checkbox.tie_selection, s=this._data[t?"core":"checkbox"].selected, p=[], tt=this;for(i = 0, j = s.length; i < j; i++) {if(m[s[i]] && m[s[i]].parents){for(k = 0, l = m[s[i]].parents.length; k < l; k++) {if(o[m[s[i]].parents[k]] === undefined && m[s[i]].parents[k] !== "#"){o[m[s[i]].parents[k]] = true;p.push(m[s[i]].parents[k]);}}}}this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var tmp=tt.get_node(this), tmp2;if(!tmp.state.loaded){if(tmp.original && tmp.original.state && tmp.original.state.undetermined && tmp.original.state.undetermined === true){if(o[tmp.id] === undefined && tmp.id !== "#"){o[tmp.id] = true;p.push(tmp.id);}for(k = 0, l = tmp.parents.length; k < l; k++) {if(o[tmp.parents[k]] === undefined && tmp.parents[k] !== "#"){o[tmp.parents[k]] = true;p.push(tmp.parents[k]);}}}}else {for(i = 0, j = tmp.children_d.length; i < j; i++) {tmp2 = m[tmp.children_d[i]];if(!tmp2.state.loaded && tmp2.original && tmp2.original.state && tmp2.original.state.undetermined && tmp2.original.state.undetermined === true){if(o[tmp2.id] === undefined && tmp2.id !== "#"){o[tmp2.id] = true;p.push(tmp2.id);}for(k = 0, l = tmp2.parents.length; k < l; k++) {if(o[tmp2.parents[k]] === undefined && tmp2.parents[k] !== "#"){o[tmp2.parents[k]] = true;p.push(tmp2.parents[k]);}}}}}});this.element.find(".jstree-undetermined").removeClass("jstree-undetermined");for(i = 0, j = p.length; i < j; i++) {if(!m[p[i]].state[t?"selected":"checked"]){s = this.get_node(p[i], true);if(s && s.length){s.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined");}}}};this.redraw_node = function(obj, deep, is_callback, force_render){obj = parent.redraw_node.apply(this, arguments);if(obj){var i, j, tmp=null;for(i = 0, j = obj.childNodes.length; i < j; i++) {if(obj.childNodes[i] && obj.childNodes[i].className && obj.childNodes[i].className.indexOf("jstree-anchor") !== -1){tmp = obj.childNodes[i];break;}}if(tmp){if(!this.settings.checkbox.tie_selection && this._model.data[obj.id].state.checked){tmp.className += " jstree-checked";}tmp.insertBefore(_i.cloneNode(false), tmp.childNodes[0]);}}if(!is_callback && this.settings.checkbox.cascade.indexOf("undetermined") !== -1){if(this._data.checkbox.uto){clearTimeout(this._data.checkbox.uto);}this._data.checkbox.uto = setTimeout($.proxy(this._undetermined, this), 50);}return obj;};this.show_checkboxes = function(){this._data.core.themes.checkboxes = true;this.get_container_ul().removeClass("jstree-no-checkboxes");};this.hide_checkboxes = function(){this._data.core.themes.checkboxes = false;this.get_container_ul().addClass("jstree-no-checkboxes");};this.toggle_checkboxes = function(){if(this._data.core.themes.checkboxes){this.hide_checkboxes();}else {this.show_checkboxes();}};this.is_undetermined = function(obj){obj = this.get_node(obj);var s=this.settings.checkbox.cascade, i, j, t=this.settings.checkbox.tie_selection, d=this._data[t?"core":"checkbox"].selected, m=this._model.data;if(!obj || obj.state[t?"selected":"checked"] === true || s.indexOf("undetermined") === -1 || s.indexOf("down") === -1 && s.indexOf("up") === -1){return false;}if(!obj.state.loaded && obj.original.state.undetermined === true){return true;}for(i = 0, j = obj.children_d.length; i < j; i++) {if($.inArray(obj.children_d[i], d) !== -1 || !m[obj.children_d[i]].state.loaded && m[obj.children_d[i]].original.state.undetermined){return true;}}return false;};this.activate_node = function(obj, e){if(this.settings.checkbox.tie_selection && (this.settings.checkbox.whole_node || $(e.target).hasClass("jstree-checkbox"))){e.ctrlKey = true;}if(this.settings.checkbox.tie_selection || !this.settings.checkbox.whole_node && !$(e.target).hasClass("jstree-checkbox")){return parent.activate_node.call(this, obj, e);}if(this.is_disabled(obj)){return false;}if(this.is_checked(obj)){this.uncheck_node(obj, e);}else {this.check_node(obj, e);}this.trigger("activate_node", {node:this.get_node(obj)});};this.check_node = function(obj, e){if(this.settings.checkbox.tie_selection){return this.select_node(obj, false, true, e);}var dom, t1, t2, th;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.check_node(obj[t1], e);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}dom = this.get_node(obj, true);if(!obj.state.checked){obj.state.checked = true;this._data.checkbox.selected.push(obj.id);if(dom && dom.length){dom.children(".jstree-anchor").addClass("jstree-checked");}this.trigger("check_node", {node:obj, selected:this._data.checkbox.selected, event:e});}};this.uncheck_node = function(obj, e){if(this.settings.checkbox.tie_selection){return this.deselect_node(obj, false, e);}var t1, t2, dom;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.uncheck_node(obj[t1], e);}return true;}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}dom = this.get_node(obj, true);if(obj.state.checked){obj.state.checked = false;this._data.checkbox.selected = $.vakata.array_remove_item(this._data.checkbox.selected, obj.id);if(dom.length){dom.children(".jstree-anchor").removeClass("jstree-checked");}this.trigger("uncheck_node", {node:obj, selected:this._data.checkbox.selected, event:e});}};this.check_all = function(){if(this.settings.checkbox.tie_selection){return this.select_all();}var tmp=this._data.checkbox.selected.concat([]), i, j;this._data.checkbox.selected = this._model.data["#"].children_d.concat();for(i = 0, j = this._data.checkbox.selected.length; i < j; i++) {if(this._model.data[this._data.checkbox.selected[i]]){this._model.data[this._data.checkbox.selected[i]].state.checked = true;}}this.redraw(true);this.trigger("check_all", {selected:this._data.checkbox.selected});};this.uncheck_all = function(){if(this.settings.checkbox.tie_selection){return this.deselect_all();}var tmp=this._data.checkbox.selected.concat([]), i, j;for(i = 0, j = this._data.checkbox.selected.length; i < j; i++) {if(this._model.data[this._data.checkbox.selected[i]]){this._model.data[this._data.checkbox.selected[i]].state.checked = false;}}this._data.checkbox.selected = [];this.element.find(".jstree-checked").removeClass("jstree-checked");this.trigger("uncheck_all", {selected:this._data.checkbox.selected, node:tmp});};this.is_checked = function(obj){if(this.settings.checkbox.tie_selection){return this.is_selected(obj);}obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}return obj.state.checked;};this.get_checked = function(full){if(this.settings.checkbox.tie_selection){return this.get_selected(full);}return full?$.map(this._data.checkbox.selected, $.proxy(function(i){return this.get_node(i);}, this)):this._data.checkbox.selected;};this.get_top_checked = function(full){if(this.settings.checkbox.tie_selection){return this.get_top_selected(full);}var tmp=this.get_checked(true), obj={}, i, j, k, l;for(i = 0, j = tmp.length; i < j; i++) {obj[tmp[i].id] = tmp[i];}for(i = 0, j = tmp.length; i < j; i++) {for(k = 0, l = tmp[i].children_d.length; k < l; k++) {if(obj[tmp[i].children_d[k]]){delete obj[tmp[i].children_d[k]];}}}tmp = [];for(i in obj) {if(obj.hasOwnProperty(i)){tmp.push(i);}}return full?$.map(tmp, $.proxy(function(i){return this.get_node(i);}, this)):tmp;};this.get_bottom_checked = function(full){if(this.settings.checkbox.tie_selection){return this.get_bottom_selected(full);}var tmp=this.get_checked(true), obj=[], i, j;for(i = 0, j = tmp.length; i < j; i++) {if(!tmp[i].children.length){obj.push(tmp[i].id);}}return full?$.map(obj, $.proxy(function(i){return this.get_node(i);}, this)):obj;};this.load_node = function(obj, callback){var k, l, i, j, c, tmp;if(!$.isArray(obj) && !this.settings.checkbox.tie_selection){tmp = this.get_node(obj);if(tmp && tmp.state.loaded){for(k = 0, l = tmp.children_d.length; k < l; k++) {if(this._model.data[tmp.children_d[k]].state.checked){c = true;this._data.checkbox.selected = $.vakata.array_remove_item(this._data.checkbox.selected, tmp.children_d[k]);}}}}return parent.load_node.apply(this, arguments);};this.get_state = function(){var state=parent.get_state.apply(this, arguments);if(this.settings.checkbox.tie_selection){return state;}state.checkbox = this._data.checkbox.selected.slice();return state;};this.set_state = function(state, callback){var res=parent.set_state.apply(this, arguments);if(res && state.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var _this=this;$.each(state.checkbox, function(i, v){_this.check_node(v);});}delete state.checkbox;this.set_state(state, callback);return false;}return res;};};$.jstree.defaults.contextmenu = {select_node:true, show_at_node:true, items:function items(o, cb){return {create:{separator_before:false, separator_after:true, _disabled:false, label:"Create", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);inst.create_node(obj, {}, "last", function(new_node){setTimeout(function(){inst.edit(new_node);}, 0);});}}, rename:{separator_before:false, separator_after:false, _disabled:false, label:"Rename", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);inst.edit(obj);}}, remove:{separator_before:false, icon:false, separator_after:false, _disabled:false, label:"Delete", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);if(inst.is_selected(obj)){inst.delete_node(inst.get_selected());}else {inst.delete_node(obj);}}}, ccp:{separator_before:true, icon:false, separator_after:false, label:"Edit", action:false, submenu:{cut:{separator_before:false, separator_after:false, label:"Cut", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);if(inst.is_selected(obj)){inst.cut(inst.get_top_selected());}else {inst.cut(obj);}}}, copy:{separator_before:false, icon:false, separator_after:false, label:"Copy", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);if(inst.is_selected(obj)){inst.copy(inst.get_top_selected());}else {inst.copy(obj);}}}, paste:{separator_before:false, icon:false, _disabled:function _disabled(data){return !$.jstree.reference(data.reference).can_paste();}, separator_after:false, label:"Paste", action:function action(data){var inst=$.jstree.reference(data.reference), obj=inst.get_node(data.reference);inst.paste(obj);}}}}};}};$.jstree.plugins.contextmenu = function(options, parent){this.bind = function(){parent.bind.call(this);var last_ts=0, cto=null, ex, ey;this.element.on("contextmenu.jstree", ".jstree-anchor", $.proxy(function(e, data){e.preventDefault();last_ts = e.ctrlKey?+new Date():0;if(data || cto){last_ts = +new Date() + 10000;}if(cto){clearTimeout(cto);}if(!this.is_loading(e.currentTarget)){this.show_contextmenu(e.currentTarget, e.pageX, e.pageY, e);}}, this)).on("click.jstree", ".jstree-anchor", $.proxy(function(e){if(this._data.contextmenu.visible && (!last_ts || +new Date() - last_ts > 250)){$.vakata.context.hide();}last_ts = 0;}, this)).on("touchstart.jstree", ".jstree-anchor", function(e){if(!e.originalEvent || !e.originalEvent.changedTouches || !e.originalEvent.changedTouches[0]){return;}ex = e.pageX;ey = e.pageY;cto = setTimeout(function(){$(e.currentTarget).trigger("contextmenu", true);}, 750);}).on("touchmove.vakata.jstree", function(e){if(cto && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] && (Math.abs(ex - e.pageX) > 50 || Math.abs(ey - e.pageY) > 50)){clearTimeout(cto);}}).on("touchend.vakata.jstree", function(e){if(cto){clearTimeout(cto);}});$(document).on("context_hide.vakata.jstree", $.proxy(function(){this._data.contextmenu.visible = false;}, this));};this.teardown = function(){if(this._data.contextmenu.visible){$.vakata.context.hide();}parent.teardown.call(this);};this.show_contextmenu = function(obj, x, y, e){obj = this.get_node(obj);if(!obj || obj.id === "#"){return false;}var s=this.settings.contextmenu, d=this.get_node(obj, true), a=d.children(".jstree-anchor"), o=false, i=false;if(s.show_at_node || x === undefined || y === undefined){o = a.offset();x = o.left;y = o.top + this._data.core.li_height;}if(this.settings.contextmenu.select_node && !this.is_selected(obj)){this.activate_node(obj, e);}i = s.items;if($.isFunction(i)){i = i.call(this, obj, $.proxy(function(i){this._show_contextmenu(obj, x, y, i);}, this));}if($.isPlainObject(i)){this._show_contextmenu(obj, x, y, i);}};this._show_contextmenu = function(obj, x, y, i){var d=this.get_node(obj, true), a=d.children(".jstree-anchor");$(document).one("context_show.vakata.jstree", $.proxy(function(e, data){var cls="jstree-contextmenu jstree-" + this.get_theme() + "-contextmenu";$(data.element).addClass(cls);}, this));this._data.contextmenu.visible = true;$.vakata.context.show(a, {x:x, y:y}, i);this.trigger("show_contextmenu", {node:obj, x:x, y:y});};};(function($){var right_to_left=false, vakata_context={element:false, reference:false, position_x:0, position_y:0, items:[], html:"", is_visible:false};$.vakata.context = {settings:{hide_onmouseleave:0, icons:true}, _trigger:function _trigger(event_name){$(document).triggerHandler("context_" + event_name + ".vakata", {reference:vakata_context.reference, element:vakata_context.element, position:{x:vakata_context.position_x, y:vakata_context.position_y}});}, _execute:function _execute(i){i = vakata_context.items[i];return i && (!i._disabled || $.isFunction(i._disabled) && !i._disabled({item:i, reference:vakata_context.reference, element:vakata_context.element})) && i.action?i.action.call(null, {item:i, reference:vakata_context.reference, element:vakata_context.element, position:{x:vakata_context.position_x, y:vakata_context.position_y}}):false;}, _parse:function _parse(o, is_callback){if(!o){return false;}if(!is_callback){vakata_context.html = "";vakata_context.items = [];}var str="", sep=false, tmp;if(is_callback){str += "<" + "ul>";}$.each(o, function(i, val){if(!val){return true;}vakata_context.items.push(val);if(!sep && val.separator_before){str += "<" + "li class='vakata-context-separator'><" + "a href='#' " + ($.vakata.context.settings.icons?"":"style=\"margin-left:0px;\"") + ">&#160;<" + "/a><" + "/li>";}sep = false;str += "<" + "li class='" + (val._class || "") + (val._disabled === true || $.isFunction(val._disabled) && val._disabled({item:val, reference:vakata_context.reference, element:vakata_context.element})?" vakata-contextmenu-disabled ":"") + "' " + (val.shortcut?" data-shortcut='" + val.shortcut + "' ":"") + ">";str += "<" + "a href='#' rel='" + (vakata_context.items.length - 1) + "'>";if($.vakata.context.settings.icons){str += "<" + "i ";if(val.icon){if(val.icon.indexOf("/") !== -1 || val.icon.indexOf(".") !== -1){str += " style='background:url(\"" + val.icon + "\") center center no-repeat' ";}else {str += " class='" + val.icon + "' ";}}str += "><" + "/i><" + "span class='vakata-contextmenu-sep'>&#160;<" + "/span>";}str += ($.isFunction(val.label)?val.label({item:i, reference:vakata_context.reference, element:vakata_context.element}):val.label) + (val.shortcut?" <span class=\"vakata-contextmenu-shortcut vakata-contextmenu-shortcut-" + val.shortcut + "\">" + (val.shortcut_label || "") + "</span>":"") + "<" + "/a>";if(val.submenu){tmp = $.vakata.context._parse(val.submenu, true);if(tmp){str += tmp;}}str += "<" + "/li>";if(val.separator_after){str += "<" + "li class='vakata-context-separator'><" + "a href='#' " + ($.vakata.context.settings.icons?"":"style=\"margin-left:0px;\"") + ">&#160;<" + "/a><" + "/li>";sep = true;}});str = str.replace(/<li class\='vakata-context-separator'\><\/li\>$/, "");if(is_callback){str += "</ul>";}if(!is_callback){vakata_context.html = str;$.vakata.context._trigger("parse");}return str.length > 10?str:false;}, _show_submenu:function _show_submenu(o){o = $(o);if(!o.length || !o.children("ul").length){return;}var e=o.children("ul"), x=o.offset().left + o.outerWidth(), y=o.offset().top, w=e.width(), h=e.height(), dw=$(window).width() + $(window).scrollLeft(), dh=$(window).height() + $(window).scrollTop();if(right_to_left){o[x - (w + 10 + o.outerWidth()) < 0?"addClass":"removeClass"]("vakata-context-left");}else {o[x + w + 10 > dw?"addClass":"removeClass"]("vakata-context-right");}if(y + h + 10 > dh){e.css("bottom", "-1px");}e.show();}, show:function show(reference, position, data){var o, e, x, y, w, h, dw, dh, cond=true;if(vakata_context.element && vakata_context.element.length){vakata_context.element.width("");}switch(cond){case !position && !reference:return false;case !!position && !!reference:vakata_context.reference = reference;vakata_context.position_x = position.x;vakata_context.position_y = position.y;break;case !position && !!reference:vakata_context.reference = reference;o = reference.offset();vakata_context.position_x = o.left + reference.outerHeight();vakata_context.position_y = o.top;break;case !!position && !reference:vakata_context.position_x = position.x;vakata_context.position_y = position.y;break;}if(!!reference && !data && $(reference).data("vakata_contextmenu")){data = $(reference).data("vakata_contextmenu");}if($.vakata.context._parse(data)){vakata_context.element.html(vakata_context.html);}if(vakata_context.items.length){vakata_context.element.appendTo("body");e = vakata_context.element;x = vakata_context.position_x;y = vakata_context.position_y;w = e.width();h = e.height();dw = $(window).width() + $(window).scrollLeft();dh = $(window).height() + $(window).scrollTop();if(right_to_left){x -= e.outerWidth() - $(reference).outerWidth();if(x < $(window).scrollLeft() + 20){x = $(window).scrollLeft() + 20;}}if(x + w + 20 > dw){x = dw - (w + 20);}if(y + h + 20 > dh){y = dh - (h + 20);}vakata_context.element.css({left:x, top:y}).show().find("a").first().focus().parent().addClass("vakata-context-hover");vakata_context.is_visible = true;$.vakata.context._trigger("show");}}, hide:function hide(){if(vakata_context.is_visible){vakata_context.element.hide().find("ul").hide().end().find(":focus").blur().end().detach();vakata_context.is_visible = false;$.vakata.context._trigger("hide");}}};$(function(){right_to_left = $("body").css("direction") === "rtl";var to=false;vakata_context.element = $("<ul class='vakata-context'></ul>");vakata_context.element.on("mouseenter", "li", function(e){e.stopImmediatePropagation();if($.contains(this, e.relatedTarget)){return;}if(to){clearTimeout(to);}vakata_context.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end();$(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context", "li").addBack().addClass("vakata-context-hover");$.vakata.context._show_submenu(this);}).on("mouseleave", "li", function(e){if($.contains(this, e.relatedTarget)){return;}$(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover");}).on("mouseleave", function(e){$(this).find(".vakata-context-hover").removeClass("vakata-context-hover");if($.vakata.context.settings.hide_onmouseleave){to = setTimeout((function(t){return function(){$.vakata.context.hide();};})(this), $.vakata.context.settings.hide_onmouseleave);}}).on("click", "a", function(e){e.preventDefault();if(!$(this).blur().parent().hasClass("vakata-context-disabled") && $.vakata.context._execute($(this).attr("rel")) !== false){$.vakata.context.hide();}}).on("keydown", "a", function(e){var o=null;switch(e.which){case 13:case 32:e.type = "mouseup";e.preventDefault();$(e.currentTarget).trigger(e);break;case 37:if(vakata_context.is_visible){vakata_context.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus();e.stopImmediatePropagation();e.preventDefault();}break;case 38:if(vakata_context.is_visible){o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first();if(!o.length){o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last();}o.addClass("vakata-context-hover").children("a").focus();e.stopImmediatePropagation();e.preventDefault();}break;case 39:if(vakata_context.is_visible){vakata_context.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus();e.stopImmediatePropagation();e.preventDefault();}break;case 40:if(vakata_context.is_visible){o = vakata_context.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first();if(!o.length){o = vakata_context.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first();}o.addClass("vakata-context-hover").children("a").focus();e.stopImmediatePropagation();e.preventDefault();}break;case 27:$.vakata.context.hide();e.preventDefault();break;default:break;}}).on("keydown", function(e){e.preventDefault();var a=vakata_context.element.find(".vakata-contextmenu-shortcut-" + e.which).parent();if(a.parent().not(".vakata-context-disabled")){a.click();}});$(document).on("mousedown.vakata.jstree", function(e){if(vakata_context.is_visible && !$.contains(vakata_context.element[0], e.target)){$.vakata.context.hide();}}).on("context_show.vakata.jstree", function(e, data){vakata_context.element.find("li:has(ul)").children("a").addClass("vakata-context-parent");if(right_to_left){vakata_context.element.addClass("vakata-context-rtl").css("direction", "rtl");}vakata_context.element.find("ul").hide().end();});});})($);$.jstree.defaults.dnd = {copy:true, open_timeout:500, is_draggable:true, check_while_dragging:true, always_copy:false, inside_pos:0, drag_selection:true, touch:true, large_drop_target:false, large_drag_target:false};$.jstree.plugins.dnd = function(options, parent){this.bind = function(){parent.bind.call(this);this.element.on("mousedown.jstree touchstart.jstree", this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor", $.proxy(function(e){if(this.settings.dnd.large_drag_target && $(e.target).closest(".jstree-node")[0] !== e.currentTarget){return true;}if(e.type === "touchstart" && (!this.settings.dnd.touch || this.settings.dnd.touch === "selected" && !$(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked"))){return true;}var obj=this.get_node(e.target), mlt=this.is_selected(obj) && this.settings.dnd.drag_selection?this.get_top_selected().length:1, txt=mlt > 1?mlt + " " + this.get_string("nodes"):this.get_text(e.currentTarget);if(this.settings.core.force_text){txt = $.vakata.html.escape(txt);}if(obj && obj.id && obj.id !== "#" && (e.which === 1 || e.type === "touchstart") && (this.settings.dnd.is_draggable === true || $.isFunction(this.settings.dnd.is_draggable) && this.settings.dnd.is_draggable.call(this, mlt > 1?this.get_top_selected(true):[obj]))){this.element.trigger("mousedown.jstree");return $.vakata.dnd.start(e, {jstree:true, origin:this, obj:this.get_node(obj, true), nodes:mlt > 1?this.get_top_selected():[obj.id]}, "<div id=\"jstree-dnd\" class=\"jstree-" + this.get_theme() + " jstree-" + this.get_theme() + "-" + this.get_theme_variant() + " " + (this.settings.core.themes.responsive?" jstree-dnd-responsive":"") + "\"><i class=\"jstree-icon jstree-er\"></i>" + txt + "<ins class=\"jstree-copy\" style=\"display:none;\">+</ins></div>");}}, this));};};$(function(){var lastmv=false, laster=false, opento=false, marker=$("<div id=\"jstree-marker\">&#160;</div>").hide();$(document).on("dnd_start.vakata.jstree", function(e, data){lastmv = false;if(!data || !data.data || !data.data.jstree){return;}marker.appendTo("body");}).on("dnd_move.vakata.jstree", function(e, data){if(opento){clearTimeout(opento);}if(!data || !data.data || !data.data.jstree){return;}if(data.event.target.id && data.event.target.id === "jstree-marker"){return;}var ins=$.jstree.reference(data.event.target), ref=false, off=false, rel=false, tmp, l, t, h, p, i, o, ok, t1, t2, op, ps, pr, ip, tm;if(ins && ins._data && ins._data.dnd){marker.attr("class", "jstree-" + ins.get_theme() + (ins.settings.core.themes.responsive?" jstree-dnd-responsive":""));data.helper.children().attr("class", "jstree-" + ins.get_theme() + " jstree-" + ins.get_theme() + "-" + ins.get_theme_variant() + " " + (ins.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey))?"show":"hide"]();if((data.event.target === ins.element[0] || data.event.target === ins.get_container_ul()[0]) && ins.get_container_ul().children().length === 0){ok = true;for(t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {ok = ok && ins.check(data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey))?"copy_node":"move_node", data.data.origin && data.data.origin !== ins?data.data.origin.get_node(data.data.nodes[t1]):data.data.nodes[t1], "#", "last", {dnd:true, ref:ins.get_node("#"), pos:"i", origin:data.data.origin, is_multi:data.data.origin && data.data.origin !== ins, is_foreign:!data.data.origin});if(!ok){break;}}if(ok){lastmv = {ins:ins, par:"#", pos:"last"};marker.hide();data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");return;}}else {ref = ins.settings.dnd.large_drop_target?$(data.event.target).closest(".jstree-node").children(".jstree-anchor"):$(data.event.target).closest(".jstree-anchor");if(ref && ref.length && ref.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")){off = ref.offset();rel = data.event.pageY - off.top;h = ref.outerHeight();if(rel < h / 3){o = ["b", "i", "a"];}else if(rel > h - h / 3){o = ["a", "i", "b"];}else {o = rel > h / 2?["i", "a", "b"]:["i", "b", "a"];}$.each(o, function(j, v){switch(v){case "b":l = off.left - 6;t = off.top;p = ins.get_parent(ref);i = ref.parent().index();break;case "i":ip = ins.settings.dnd.inside_pos;tm = ins.get_node(ref.parent());l = off.left - 2;t = off.top + h / 2 + 1;p = tm.id;i = ip === "first"?0:ip === "last"?tm.children.length:Math.min(ip, tm.children.length);break;case "a":l = off.left - 6;t = off.top + h;p = ins.get_parent(ref);i = ref.parent().index() + 1;break;}ok = true;for(t1 = 0, t2 = data.data.nodes.length; t1 < t2; t1++) {op = data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey))?"copy_node":"move_node";ps = i;if(op === "move_node" && v === "a" && (data.data.origin && data.data.origin === ins) && p === ins.get_parent(data.data.nodes[t1])){pr = ins.get_node(p);if(ps > $.inArray(data.data.nodes[t1], pr.children)){ps -= 1;}}ok = ok && (ins && ins.settings && ins.settings.dnd && ins.settings.dnd.check_while_dragging === false || ins.check(op, data.data.origin && data.data.origin !== ins?data.data.origin.get_node(data.data.nodes[t1]):data.data.nodes[t1], p, ps, {dnd:true, ref:ins.get_node(ref.parent()), pos:v, origin:data.data.origin, is_multi:data.data.origin && data.data.origin !== ins, is_foreign:!data.data.origin}));if(!ok){if(ins && ins.last_error){laster = ins.last_error();}break;}}if(v === "i" && ref.parent().is(".jstree-closed") && ins.settings.dnd.open_timeout){opento = setTimeout((function(x, z){return function(){x.open_node(z);};})(ins, ref), ins.settings.dnd.open_timeout);}if(ok){lastmv = {ins:ins, par:p, pos:v === "i" && ip === "last" && i === 0 && !ins.is_loaded(tm)?"last":i};marker.css({left:l + "px", top:t + "px"}).show();data.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok");laster = {};o = true;return false;}});if(o === true){return;}}}}lastmv = false;data.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er");marker.hide();}).on("dnd_scroll.vakata.jstree", function(e, data){if(!data || !data.data || !data.data.jstree){return;}marker.hide();lastmv = false;data.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er");}).on("dnd_stop.vakata.jstree", function(e, data){if(opento){clearTimeout(opento);}if(!data || !data.data || !data.data.jstree){return;}marker.hide().detach();var i, j, nodes=[];if(lastmv){for(i = 0, j = data.data.nodes.length; i < j; i++) {nodes[i] = data.data.origin?data.data.origin.get_node(data.data.nodes[i]):data.data.nodes[i];}lastmv.ins[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (data.event.metaKey || data.event.ctrlKey))?"copy_node":"move_node"](nodes, lastmv.par, lastmv.pos, false, false, false, data.data.origin);}else {i = $(data.event.target).closest(".jstree");if(i.length && laster && laster.error && laster.error === "check"){i = i.jstree(true);if(i){i.settings.core.error.call(this, laster);}}}}).on("keyup.jstree keydown.jstree", function(e, data){data = $.vakata.dnd._get();if(data && data.data && data.data.jstree){data.helper.find(".jstree-copy").first()[data.data.origin && (data.data.origin.settings.dnd.always_copy || data.data.origin.settings.dnd.copy && (e.metaKey || e.ctrlKey))?"show":"hide"]();}});});(function($){$.vakata.html = {div:$("<div />"), escape:function escape(str){return $.vakata.html.div.text(str).html();}, strip:function strip(str){return $.vakata.html.div.empty().append($.parseHTML(str)).text();}};var vakata_dnd={element:false, target:false, is_down:false, is_drag:false, helper:false, helper_w:0, data:false, init_x:0, init_y:0, scroll_l:0, scroll_t:0, scroll_e:false, scroll_i:false, is_touch:false};$.vakata.dnd = {settings:{scroll_speed:10, scroll_proximity:20, helper_left:5, helper_top:10, threshold:5, threshold_touch:50}, _trigger:function _trigger(event_name, e){var data=$.vakata.dnd._get();data.event = e;$(document).triggerHandler("dnd_" + event_name + ".vakata", data);}, _get:function _get(){return {data:vakata_dnd.data, element:vakata_dnd.element, helper:vakata_dnd.helper};}, _clean:function _clean(){if(vakata_dnd.helper){vakata_dnd.helper.remove();}if(vakata_dnd.scroll_i){clearInterval(vakata_dnd.scroll_i);vakata_dnd.scroll_i = false;}vakata_dnd = {element:false, target:false, is_down:false, is_drag:false, helper:false, helper_w:0, data:false, init_x:0, init_y:0, scroll_l:0, scroll_t:0, scroll_e:false, scroll_i:false, is_touch:false};$(document).off("mousemove.vakata.jstree touchmove.vakata.jstree", $.vakata.dnd.drag);$(document).off("mouseup.vakata.jstree touchend.vakata.jstree", $.vakata.dnd.stop);}, _scroll:function _scroll(init_only){if(!vakata_dnd.scroll_e || !vakata_dnd.scroll_l && !vakata_dnd.scroll_t){if(vakata_dnd.scroll_i){clearInterval(vakata_dnd.scroll_i);vakata_dnd.scroll_i = false;}return false;}if(!vakata_dnd.scroll_i){vakata_dnd.scroll_i = setInterval($.vakata.dnd._scroll, 100);return false;}if(init_only === true){return false;}var i=vakata_dnd.scroll_e.scrollTop(), j=vakata_dnd.scroll_e.scrollLeft();vakata_dnd.scroll_e.scrollTop(i + vakata_dnd.scroll_t * $.vakata.dnd.settings.scroll_speed);vakata_dnd.scroll_e.scrollLeft(j + vakata_dnd.scroll_l * $.vakata.dnd.settings.scroll_speed);if(i !== vakata_dnd.scroll_e.scrollTop() || j !== vakata_dnd.scroll_e.scrollLeft()){$.vakata.dnd._trigger("scroll", vakata_dnd.scroll_e);}}, start:function start(e, data, html){if(e.type === "touchstart" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]){e.pageX = e.originalEvent.changedTouches[0].pageX;e.pageY = e.originalEvent.changedTouches[0].pageY;e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);}if(vakata_dnd.is_drag){$.vakata.dnd.stop({});}try{e.currentTarget.unselectable = "on";e.currentTarget.onselectstart = function(){return false;};if(e.currentTarget.style){e.currentTarget.style.MozUserSelect = "none";}}catch(ignore) {}vakata_dnd.init_x = e.pageX;vakata_dnd.init_y = e.pageY;vakata_dnd.data = data;vakata_dnd.is_down = true;vakata_dnd.element = e.currentTarget;vakata_dnd.target = e.target;vakata_dnd.is_touch = e.type === "touchstart";if(html !== false){vakata_dnd.helper = $("<div id='vakata-dnd'></div>").html(html).css({display:"block", margin:"0", padding:"0", position:"absolute", top:"-2000px", lineHeight:"16px", zIndex:"10000"});}$(document).on("mousemove.vakata.jstree touchmove.vakata.jstree", $.vakata.dnd.drag);$(document).on("mouseup.vakata.jstree touchend.vakata.jstree", $.vakata.dnd.stop);return false;}, drag:function drag(e){if(e.type === "touchmove" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]){e.pageX = e.originalEvent.changedTouches[0].pageX;e.pageY = e.originalEvent.changedTouches[0].pageY;e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);}if(!vakata_dnd.is_down){return;}if(!vakata_dnd.is_drag){if(Math.abs(e.pageX - vakata_dnd.init_x) > (vakata_dnd.is_touch?$.vakata.dnd.settings.threshold_touch:$.vakata.dnd.settings.threshold) || Math.abs(e.pageY - vakata_dnd.init_y) > (vakata_dnd.is_touch?$.vakata.dnd.settings.threshold_touch:$.vakata.dnd.settings.threshold)){if(vakata_dnd.helper){vakata_dnd.helper.appendTo("body");vakata_dnd.helper_w = vakata_dnd.helper.outerWidth();}vakata_dnd.is_drag = true;$.vakata.dnd._trigger("start", e);}else {return;}}var d=false, w=false, dh=false, wh=false, dw=false, ww=false, dt=false, dl=false, ht=false, hl=false;vakata_dnd.scroll_t = 0;vakata_dnd.scroll_l = 0;vakata_dnd.scroll_e = false;$($(e.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return /^auto|scroll$/.test($(this).css("overflow")) && (this.scrollHeight > this.offsetHeight || this.scrollWidth > this.offsetWidth);}).each(function(){var t=$(this), o=t.offset();if(this.scrollHeight > this.offsetHeight){if(o.top + t.height() - e.pageY < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_t = 1;}if(e.pageY - o.top < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_t = -1;}}if(this.scrollWidth > this.offsetWidth){if(o.left + t.width() - e.pageX < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_l = 1;}if(e.pageX - o.left < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_l = -1;}}if(vakata_dnd.scroll_t || vakata_dnd.scroll_l){vakata_dnd.scroll_e = $(this);return false;}});if(!vakata_dnd.scroll_e){d = $(document);w = $(window);dh = d.height();wh = w.height();dw = d.width();ww = w.width();dt = d.scrollTop();dl = d.scrollLeft();if(dh > wh && e.pageY - dt < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_t = -1;}if(dh > wh && wh - (e.pageY - dt) < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_t = 1;}if(dw > ww && e.pageX - dl < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_l = -1;}if(dw > ww && ww - (e.pageX - dl) < $.vakata.dnd.settings.scroll_proximity){vakata_dnd.scroll_l = 1;}if(vakata_dnd.scroll_t || vakata_dnd.scroll_l){vakata_dnd.scroll_e = d;}}if(vakata_dnd.scroll_e){$.vakata.dnd._scroll(true);}if(vakata_dnd.helper){ht = parseInt(e.pageY + $.vakata.dnd.settings.helper_top, 10);hl = parseInt(e.pageX + $.vakata.dnd.settings.helper_left, 10);if(dh && ht + 25 > dh){ht = dh - 50;}if(dw && hl + vakata_dnd.helper_w > dw){hl = dw - (vakata_dnd.helper_w + 2);}vakata_dnd.helper.css({left:hl + "px", top:ht + "px"});}$.vakata.dnd._trigger("move", e);return false;}, stop:function stop(e){if(e.type === "touchend" && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]){e.pageX = e.originalEvent.changedTouches[0].pageX;e.pageY = e.originalEvent.changedTouches[0].pageY;e.target = document.elementFromPoint(e.originalEvent.changedTouches[0].pageX - window.pageXOffset, e.originalEvent.changedTouches[0].pageY - window.pageYOffset);}if(vakata_dnd.is_drag){$.vakata.dnd._trigger("stop", e);}else {if(e.type === "touchend" && e.target === vakata_dnd.target){var to=setTimeout(function(){$(e.target).click();}, 100);$(e.target).one("click", function(){if(to){clearTimeout(to);}});}}$.vakata.dnd._clean();return false;}};})($);$.jstree.defaults.massload = null;$.jstree.plugins.massload = function(options, parent){this.init = function(el, options){parent.init.call(this, el, options);this._data.massload = {};};this._load_nodes = function(nodes, callback, is_callback){var s=this.settings.massload;if(is_callback && !$.isEmptyObject(this._data.massload)){return parent._load_nodes.call(this, nodes, callback, is_callback);}if($.isFunction(s)){return s.call(this, nodes, $.proxy(function(data){if(data){for(var i in data) {if(data.hasOwnProperty(i)){this._data.massload[i] = data[i];}}}parent._load_nodes.call(this, nodes, callback, is_callback);}, this));}if(typeof s === "object" && s && s.url){s = $.extend(true, {}, s);if($.isFunction(s.url)){s.url = s.url.call(this, nodes);}if($.isFunction(s.data)){s.data = s.data.call(this, nodes);}return $.ajax(s).done($.proxy(function(data, t, x){if(data){for(var i in data) {if(data.hasOwnProperty(i)){this._data.massload[i] = data[i];}}}parent._load_nodes.call(this, nodes, callback, is_callback);}, this)).fail($.proxy(function(f){parent._load_nodes.call(this, nodes, callback, is_callback);}, this));}return parent._load_nodes.call(this, nodes, callback, is_callback);};this._load_node = function(obj, callback){var d=this._data.massload[obj.id];if(d){return this[typeof d === "string"?"_append_html_data":"_append_json_data"](obj, typeof d === "string"?$($.parseHTML(d)).filter(function(){return this.nodeType !== 3;}):d, function(status){callback.call(this, status);delete this._data.massload[obj.id];});}return parent._load_node.call(this, obj, callback);};};$.jstree.defaults.search = {ajax:false, fuzzy:false, case_sensitive:false, show_only_matches:false, close_opened_onclear:true, search_leaves_only:false, search_callback:false};$.jstree.plugins.search = function(options, parent){this.bind = function(){parent.bind.call(this);this._data.search.str = "";this._data.search.dom = $();this._data.search.res = [];this._data.search.opn = [];this._data.search.som = false;this.element.on("before_open.jstree", $.proxy(function(e, data){var i, j, f, r=this._data.search.res, s=[], o=$();if(r && r.length){this._data.search.dom = $(this.element[0].querySelectorAll("#" + $.map(r, function(v){return "0123456789".indexOf(v[0]) !== -1?"\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&"):v.replace($.jstree.idregex, "\\$&");}).join(", #")));this._data.search.dom.children(".jstree-anchor").addClass("jstree-search");if(this._data.search.som && this._data.search.res.length){for(i = 0, j = r.length; i < j; i++) {s = s.concat(this.get_node(r[i]).parents);}s = $.vakata.array_remove_item($.vakata.array_unique(s), "#");o = s.length?$(this.element[0].querySelectorAll("#" + $.map(s, function(v){return "0123456789".indexOf(v[0]) !== -1?"\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&"):v.replace($.jstree.idregex, "\\$&");}).join(", #"))):$();this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function(){return this.nextSibling;}).removeClass("jstree-last");o = o.add(this._data.search.dom);o.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function(){$(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last");});}}}, this)).on("search.jstree", $.proxy(function(e, data){if(this._data.search.som){if(data.nodes.length){this.element.find(".jstree-node").hide().filter(".jstree-last").filter(function(){return this.nextSibling;}).removeClass("jstree-last");data.nodes.parentsUntil(".jstree").addBack().show().filter(".jstree-children").each(function(){$(this).children(".jstree-node:visible").eq(-1).addClass("jstree-last");});}}}, this)).on("clear_search.jstree", $.proxy(function(e, data){if(this._data.search.som && data.nodes.length){this.element.find(".jstree-node").css("display", "").filter(".jstree-last").filter(function(){return this.nextSibling;}).removeClass("jstree-last");}}, this));};this.search = function(str, skip_async, show_only_matches, inside, append){if(str === false || $.trim(str.toString()) === ""){return this.clear_search();}inside = this.get_node(inside);inside = inside && inside.id?inside.id:null;str = str.toString();var s=this.settings.search, a=s.ajax?s.ajax:false, m=this._model.data, f=null, r=[], p=[], i, j;if(this._data.search.res.length && !append){this.clear_search();}if(show_only_matches === undefined){show_only_matches = s.show_only_matches;}if(!skip_async && a !== false){if($.isFunction(a)){return a.call(this, str, $.proxy(function(d){if(d && d.d){d = d.d;}this._load_nodes(!$.isArray(d)?[]:$.vakata.array_unique(d), function(){this.search(str, true, show_only_matches, inside, append);}, true);}, this), inside);}else {a = $.extend({}, a);if(!a.data){a.data = {};}a.data.str = str;if(inside){a.data.inside = inside;}return $.ajax(a).fail($.proxy(function(){this._data.core.last_error = {error:"ajax", plugin:"search", id:"search_01", reason:"Could not load search parents", data:JSON.stringify(a)};this.settings.core.error.call(this, this._data.core.last_error);}, this)).done($.proxy(function(d){if(d && d.d){d = d.d;}this._load_nodes(!$.isArray(d)?[]:$.vakata.array_unique(d), function(){this.search(str, true, show_only_matches, inside, append);}, true);}, this));}}if(!append){this._data.search.str = str;this._data.search.dom = $();this._data.search.res = [];this._data.search.opn = [];this._data.search.som = show_only_matches;}f = new $.vakata.search(str, true, {caseSensitive:s.case_sensitive, fuzzy:s.fuzzy});$.each(m[inside?inside:"#"].children_d, function(ii, i){var v=m[i];if(v.text && (s.search_callback && s.search_callback.call(this, str, v) || !s.search_callback && f.search(v.text).isMatch) && (!s.search_leaves_only || v.state.loaded && v.children.length === 0)){r.push(i);p = p.concat(v.parents);}});if(r.length){p = $.vakata.array_unique(p);this._search_open(p);if(!append){this._data.search.dom = $(this.element[0].querySelectorAll("#" + $.map(r, function(v){return "0123456789".indexOf(v[0]) !== -1?"\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&"):v.replace($.jstree.idregex, "\\$&");}).join(", #")));this._data.search.res = r;}else {this._data.search.dom = this._data.search.dom.add($(this.element[0].querySelectorAll("#" + $.map(r, function(v){return "0123456789".indexOf(v[0]) !== -1?"\\3" + v[0] + " " + v.substr(1).replace($.jstree.idregex, "\\$&"):v.replace($.jstree.idregex, "\\$&");}).join(", #"))));this._data.search.res = $.vakata.array_unique(this._data.search.res.concat(r));}this._data.search.dom.children(".jstree-anchor").addClass("jstree-search");}this.trigger("search", {nodes:this._data.search.dom, str:str, res:this._data.search.res, show_only_matches:show_only_matches});};this.clear_search = function(){this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search");if(this.settings.search.close_opened_onclear){this.close_node(this._data.search.opn, 0);}this.trigger("clear_search", {nodes:this._data.search.dom, str:this._data.search.str, res:this._data.search.res});this._data.search.str = "";this._data.search.res = [];this._data.search.opn = [];this._data.search.dom = $();};this._search_open = function(d){var t=this;$.each(d.concat([]), function(i, v){if(v === "#"){return true;}try{v = $("#" + v.replace($.jstree.idregex, "\\$&"), t.element);}catch(ignore) {}if(v && v.length){if(t.is_closed(v)){t._data.search.opn.push(v[0].id);t.open_node(v, function(){t._search_open(d);}, 0);}}});};};(function($){$.vakata.search = function(pattern, txt, options){options = options || {};options = $.extend({}, $.vakata.search.defaults, options);if(options.fuzzy !== false){options.fuzzy = true;}pattern = options.caseSensitive?pattern:pattern.toLowerCase();var MATCH_LOCATION=options.location, MATCH_DISTANCE=options.distance, MATCH_THRESHOLD=options.threshold, patternLen=pattern.length, matchmask, pattern_alphabet, match_bitapScore, search;if(patternLen > 32){options.fuzzy = false;}if(options.fuzzy){matchmask = 1 << patternLen - 1;pattern_alphabet = (function(){var mask={}, i=0;for(i = 0; i < patternLen; i++) {mask[pattern.charAt(i)] = 0;}for(i = 0; i < patternLen; i++) {mask[pattern.charAt(i)] |= 1 << patternLen - i - 1;}return mask;})();match_bitapScore = function(e, x){var accuracy=e / patternLen, proximity=Math.abs(MATCH_LOCATION - x);if(!MATCH_DISTANCE){return proximity?1:accuracy;}return accuracy + proximity / MATCH_DISTANCE;};}search = function(text){text = options.caseSensitive?text:text.toLowerCase();if(pattern === text || text.indexOf(pattern) !== -1){return {isMatch:true, score:0};}if(!options.fuzzy){return {isMatch:false, score:1};}var i, j, textLen=text.length, scoreThreshold=MATCH_THRESHOLD, bestLoc=text.indexOf(pattern, MATCH_LOCATION), binMin, binMid, binMax=patternLen + textLen, lastRd, start, finish, rd, charMatch, score=1, locations=[];if(bestLoc !== -1){scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);bestLoc = text.lastIndexOf(pattern, MATCH_LOCATION + patternLen);if(bestLoc !== -1){scoreThreshold = Math.min(match_bitapScore(0, bestLoc), scoreThreshold);}}bestLoc = -1;for(i = 0; i < patternLen; i++) {binMin = 0;binMid = binMax;while(binMin < binMid) {if(match_bitapScore(i, MATCH_LOCATION + binMid) <= scoreThreshold){binMin = binMid;}else {binMax = binMid;}binMid = Math.floor((binMax - binMin) / 2 + binMin);}binMax = binMid;start = Math.max(1, MATCH_LOCATION - binMid + 1);finish = Math.min(MATCH_LOCATION + binMid, textLen) + patternLen;rd = new Array(finish + 2);rd[finish + 1] = (1 << i) - 1;for(j = finish; j >= start; j--) {charMatch = pattern_alphabet[text.charAt(j - 1)];if(i === 0){rd[j] = (rd[j + 1] << 1 | 1) & charMatch;}else {rd[j] = (rd[j + 1] << 1 | 1) & charMatch | ((lastRd[j + 1] | lastRd[j]) << 1 | 1) | lastRd[j + 1];}if(rd[j] & matchmask){score = match_bitapScore(i, j - 1);if(score <= scoreThreshold){scoreThreshold = score;bestLoc = j - 1;locations.push(bestLoc);if(bestLoc > MATCH_LOCATION){start = Math.max(1, 2 * MATCH_LOCATION - bestLoc);}else {break;}}}}if(match_bitapScore(i + 1, MATCH_LOCATION) > scoreThreshold){break;}lastRd = rd;}return {isMatch:bestLoc >= 0, score:score};};return txt === true?{search:search}:search(txt);};$.vakata.search.defaults = {location:0, distance:100, threshold:0.6, fuzzy:false, caseSensitive:false};})($);$.jstree.defaults.sort = function(a, b){return this.get_text(a) > this.get_text(b)?1:-1;};$.jstree.plugins.sort = function(options, parent){this.bind = function(){parent.bind.call(this);this.element.on("model.jstree", $.proxy(function(e, data){this.sort(data.parent, true);}, this)).on("rename_node.jstree create_node.jstree", $.proxy(function(e, data){this.sort(data.parent || data.node.parent, false);this.redraw_node(data.parent || data.node.parent, true);}, this)).on("move_node.jstree copy_node.jstree", $.proxy(function(e, data){this.sort(data.parent, false);this.redraw_node(data.parent, true);}, this));};this.sort = function(obj, deep){var i, j;obj = this.get_node(obj);if(obj && obj.children && obj.children.length){obj.children.sort($.proxy(this.settings.sort, this));if(deep){for(i = 0, j = obj.children_d.length; i < j; i++) {this.sort(obj.children_d[i], false);}}}};};var to=false;$.jstree.defaults.state = {key:"jstree", events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree", ttl:false, filter:false};$.jstree.plugins.state = function(options, parent){this.bind = function(){parent.bind.call(this);var bind=$.proxy(function(){this.element.on(this.settings.state.events, $.proxy(function(){if(to){clearTimeout(to);}to = setTimeout($.proxy(function(){this.save_state();}, this), 100);}, this));this.trigger("state_ready");}, this);this.element.on("ready.jstree", $.proxy(function(e, data){this.element.one("restore_state.jstree", bind);if(!this.restore_state()){bind();}}, this));};this.save_state = function(){var st={state:this.get_state(), ttl:this.settings.state.ttl, sec:+new Date()};$.vakata.storage.set(this.settings.state.key, JSON.stringify(st));};this.restore_state = function(){var k=$.vakata.storage.get(this.settings.state.key);if(!!k){try{k = JSON.parse(k);}catch(ex) {return false;}}if(!!k && k.ttl && k.sec && +new Date() - k.sec > k.ttl){return false;}if(!!k && k.state){k = k.state;}if(!!k && $.isFunction(this.settings.state.filter)){k = this.settings.state.filter.call(this, k);}if(!!k){this.element.one("set_state.jstree", function(e, data){data.instance.trigger("restore_state", {state:$.extend(true, {}, k)});});this.set_state(k);return true;}return false;};this.clear_state = function(){return $.vakata.storage.del(this.settings.state.key);};};(function($, undefined){$.vakata.storage = {set:function set(key, val){return window.localStorage.setItem(key, val);}, get:function get(key){return window.localStorage.getItem(key);}, del:function del(key){return window.localStorage.removeItem(key);}};})($);$.jstree.defaults.types = {"#":{}, "default":{}};$.jstree.plugins.types = function(options, parent){this.init = function(el, options){var i, j;if(options && options.types && options.types["default"]){for(i in options.types) {if(i !== "default" && i !== "#" && options.types.hasOwnProperty(i)){for(j in options.types["default"]) {if(options.types["default"].hasOwnProperty(j) && options.types[i][j] === undefined){options.types[i][j] = options.types["default"][j];}}}}}parent.init.call(this, el, options);this._model.data["#"].type = "#";};this.refresh = function(skip_loading, forget_state){parent.refresh.call(this, skip_loading, forget_state);this._model.data["#"].type = "#";};this.bind = function(){this.element.on("model.jstree", $.proxy(function(e, data){var m=this._model.data, dpc=data.nodes, t=this.settings.types, i, j, c="default";for(i = 0, j = dpc.length; i < j; i++) {c = "default";if(m[dpc[i]].original && m[dpc[i]].original.type && t[m[dpc[i]].original.type]){c = m[dpc[i]].original.type;}if(m[dpc[i]].data && m[dpc[i]].data.jstree && m[dpc[i]].data.jstree.type && t[m[dpc[i]].data.jstree.type]){c = m[dpc[i]].data.jstree.type;}m[dpc[i]].type = c;if(m[dpc[i]].icon === true && t[c].icon !== undefined){m[dpc[i]].icon = t[c].icon;}}m["#"].type = "#";}, this));parent.bind.call(this);};this.get_json = function(obj, options, flat){var i, j, m=this._model.data, opt=options?$.extend(true, {}, options, {no_id:false}):{}, tmp=parent.get_json.call(this, obj, opt, flat);if(tmp === false){return false;}if($.isArray(tmp)){for(i = 0, j = tmp.length; i < j; i++) {tmp[i].type = tmp[i].id && m[tmp[i].id] && m[tmp[i].id].type?m[tmp[i].id].type:"default";if(options && options.no_id){delete tmp[i].id;if(tmp[i].li_attr && tmp[i].li_attr.id){delete tmp[i].li_attr.id;}if(tmp[i].a_attr && tmp[i].a_attr.id){delete tmp[i].a_attr.id;}}}}else {tmp.type = tmp.id && m[tmp.id] && m[tmp.id].type?m[tmp.id].type:"default";if(options && options.no_id){tmp = this._delete_ids(tmp);}}return tmp;};this._delete_ids = function(tmp){if($.isArray(tmp)){for(var i=0, j=tmp.length; i < j; i++) {tmp[i] = this._delete_ids(tmp[i]);}return tmp;}delete tmp.id;if(tmp.li_attr && tmp.li_attr.id){delete tmp.li_attr.id;}if(tmp.a_attr && tmp.a_attr.id){delete tmp.a_attr.id;}if(tmp.children && $.isArray(tmp.children)){tmp.children = this._delete_ids(tmp.children);}return tmp;};this.check = function(chk, obj, par, pos, more){if(parent.check.call(this, chk, obj, par, pos, more) === false){return false;}obj = obj && obj.id?obj:this.get_node(obj);par = par && par.id?par:this.get_node(par);var m=obj && obj.id?more && more.origin?more.origin:$.jstree.reference(obj.id):null, tmp, d, i, j;m = m && m._model && m._model.data?m._model.data:null;switch(chk){case "create_node":case "move_node":case "copy_node":if(chk !== "move_node" || $.inArray(obj.id, par.children) === -1){tmp = this.get_rules(par);if(tmp.max_children !== undefined && tmp.max_children !== -1 && tmp.max_children === par.children.length){this._data.core.last_error = {error:"check", plugin:"types", id:"types_01", reason:"max_children prevents function: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};return false;}if(tmp.valid_children !== undefined && tmp.valid_children !== -1 && $.inArray(obj.type || "default", tmp.valid_children) === -1){this._data.core.last_error = {error:"check", plugin:"types", id:"types_02", reason:"valid_children prevents function: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};return false;}if(m && obj.children_d && obj.parents){d = 0;for(i = 0, j = obj.children_d.length; i < j; i++) {d = Math.max(d, m[obj.children_d[i]].parents.length);}d = d - obj.parents.length + 1;}if(d <= 0 || d === undefined){d = 1;}do{if(tmp.max_depth !== undefined && tmp.max_depth !== -1 && tmp.max_depth < d){this._data.core.last_error = {error:"check", plugin:"types", id:"types_03", reason:"max_depth prevents function: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};return false;}par = this.get_node(par.parent);tmp = this.get_rules(par);d++;}while(par);}break;}return true;};this.get_rules = function(obj){obj = this.get_node(obj);if(!obj){return false;}var tmp=this.get_type(obj, true);if(tmp.max_depth === undefined){tmp.max_depth = -1;}if(tmp.max_children === undefined){tmp.max_children = -1;}if(tmp.valid_children === undefined){tmp.valid_children = -1;}return tmp;};this.get_type = function(obj, rules){obj = this.get_node(obj);return !obj?false:rules?$.extend({type:obj.type}, this.settings.types[obj.type]):obj.type;};this.set_type = function(obj, type){var t, t1, t2, old_type, old_icon;if($.isArray(obj)){obj = obj.slice();for(t1 = 0, t2 = obj.length; t1 < t2; t1++) {this.set_type(obj[t1], type);}return true;}t = this.settings.types;obj = this.get_node(obj);if(!t[type] || !obj){return false;}old_type = obj.type;old_icon = this.get_icon(obj);obj.type = type;if(old_icon === true || t[old_type] && t[old_type].icon !== undefined && old_icon === t[old_type].icon){this.set_icon(obj, t[type].icon !== undefined?t[type].icon:true);}return true;};};$.jstree.defaults.unique = {case_sensitive:false, duplicate:function duplicate(name, counter){return name + " (" + counter + ")";}};$.jstree.plugins.unique = function(options, parent){this.check = function(chk, obj, par, pos, more){if(parent.check.call(this, chk, obj, par, pos, more) === false){return false;}obj = obj && obj.id?obj:this.get_node(obj);par = par && par.id?par:this.get_node(par);if(!par || !par.children){return true;}var n=chk === "rename_node"?pos:obj.text, c=[], s=this.settings.unique.case_sensitive, m=this._model.data, i, j;for(i = 0, j = par.children.length; i < j; i++) {c.push(s?m[par.children[i]].text:m[par.children[i]].text.toLowerCase());}if(!s){n = n.toLowerCase();}switch(chk){case "delete_node":return true;case "rename_node":i = $.inArray(n, c) === -1 || obj.text && obj.text[s?"toString":"toLowerCase"]() === n;if(!i){this._data.core.last_error = {error:"check", plugin:"unique", id:"unique_01", reason:"Child with name " + n + " already exists. Preventing: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};}return i;case "create_node":i = $.inArray(n, c) === -1;if(!i){this._data.core.last_error = {error:"check", plugin:"unique", id:"unique_04", reason:"Child with name " + n + " already exists. Preventing: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};}return i;case "copy_node":i = $.inArray(n, c) === -1;if(!i){this._data.core.last_error = {error:"check", plugin:"unique", id:"unique_02", reason:"Child with name " + n + " already exists. Preventing: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};}return i;case "move_node":i = obj.parent === par.id && (!more || !more.is_multi) || $.inArray(n, c) === -1;if(!i){this._data.core.last_error = {error:"check", plugin:"unique", id:"unique_03", reason:"Child with name " + n + " already exists. Preventing: " + chk, data:JSON.stringify({chk:chk, pos:pos, obj:obj && obj.id?obj.id:false, par:par && par.id?par.id:false})};}return i;}return true;};this.create_node = function(par, node, pos, callback, is_loaded){if(!node || node.text === undefined){if(par === null){par = "#";}par = this.get_node(par);if(!par){return parent.create_node.call(this, par, node, pos, callback, is_loaded);}pos = pos === undefined?"last":pos;if(!pos.toString().match(/^(before|after)$/) && !is_loaded && !this.is_loaded(par)){return parent.create_node.call(this, par, node, pos, callback, is_loaded);}if(!node){node = {};}var tmp, n, dpc, i, j, m=this._model.data, s=this.settings.unique.case_sensitive, cb=this.settings.unique.duplicate;n = tmp = this.get_string("New node");dpc = [];for(i = 0, j = par.children.length; i < j; i++) {dpc.push(s?m[par.children[i]].text:m[par.children[i]].text.toLowerCase());}i = 1;while($.inArray(s?n:n.toLowerCase(), dpc) !== -1) {n = cb.call(this, tmp, ++i).toString();}node.text = n;}return parent.create_node.call(this, par, node, pos, callback, is_loaded);};};var div=document.createElement("DIV");div.setAttribute("unselectable", "on");div.setAttribute("role", "presentation");div.className = "jstree-wholerow";div.innerHTML = "&#160;";$.jstree.plugins.wholerow = function(options, parent){this.bind = function(){parent.bind.call(this);this.element.on("ready.jstree set_state.jstree", $.proxy(function(){this.hide_dots();}, this)).on("init.jstree loading.jstree ready.jstree", $.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul");}, this)).on("deselect_all.jstree", $.proxy(function(e, data){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");}, this)).on("changed.jstree", $.proxy(function(e, data){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var tmp=false, i, j;for(i = 0, j = data.selected.length; i < j; i++) {tmp = this.get_node(data.selected[i], true);if(tmp && tmp.length){tmp.children(".jstree-wholerow").addClass("jstree-wholerow-clicked");}}}, this)).on("open_node.jstree", $.proxy(function(e, data){this.get_node(data.node, true).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked");}, this)).on("hover_node.jstree dehover_node.jstree", $.proxy(function(e, data){if(e.type === "hover_node" && this.is_disabled(data.node)){return;}this.get_node(data.node, true).children(".jstree-wholerow")[e.type === "hover_node"?"addClass":"removeClass"]("jstree-wholerow-hovered");}, this)).on("contextmenu.jstree", ".jstree-wholerow", $.proxy(function(e){e.preventDefault();var tmp=$.Event("contextmenu", {metaKey:e.metaKey, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey, pageX:e.pageX, pageY:e.pageY});$(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp);}, this)).on("click.jstree", ".jstree-wholerow", function(e){e.stopImmediatePropagation();var tmp=$.Event("click", {metaKey:e.metaKey, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey});$(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).focus();}).on("click.jstree", ".jstree-leaf > .jstree-ocl", $.proxy(function(e){e.stopImmediatePropagation();var tmp=$.Event("click", {metaKey:e.metaKey, ctrlKey:e.ctrlKey, altKey:e.altKey, shiftKey:e.shiftKey});$(e.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(tmp).focus();}, this)).on("mouseover.jstree", ".jstree-wholerow, .jstree-icon", $.proxy(function(e){e.stopImmediatePropagation();if(!this.is_disabled(e.currentTarget)){this.hover_node(e.currentTarget);}return false;}, this)).on("mouseleave.jstree", ".jstree-node", $.proxy(function(e){this.dehover_node(e.currentTarget);}, this));};this.teardown = function(){if(this.settings.wholerow){this.element.find(".jstree-wholerow").remove();}parent.teardown.call(this);};this.redraw_node = function(obj, deep, callback, force_render){obj = parent.redraw_node.apply(this, arguments);if(obj){var tmp=div.cloneNode(true);if($.inArray(obj.id, this._data.core.selected) !== -1){tmp.className += " jstree-wholerow-clicked";}if(this._data.core.focused && this._data.core.focused === obj.id){tmp.className += " jstree-wholerow-hovered";}obj.insertBefore(tmp, obj.childNodes[0]);}return obj;};};if(document.registerElement && Object && Object.create){var proto=Object.create(HTMLElement.prototype);proto.createdCallback = function(){var c={core:{}, plugins:[]}, i;for(i in $.jstree.plugins) {if($.jstree.plugins.hasOwnProperty(i) && this.attributes[i]){c.plugins.push(i);if(this.getAttribute(i) && JSON.parse(this.getAttribute(i))){c[i] = JSON.parse(this.getAttribute(i));}}}for(i in $.jstree.defaults.core) {if($.jstree.defaults.core.hasOwnProperty(i) && this.attributes[i]){c.core[i] = JSON.parse(this.getAttribute(i)) || this.getAttribute(i);}}$(this).jstree(c);};try{document.registerElement("vakata-jstree", {prototype:proto});}catch(ignore) {}}});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
	"use strict";

	!(function (a, b) {
	  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	})("undefined" != typeof window ? window : undefined, function (a, b) {
	  var c = [],
	      d = c.slice,
	      e = c.concat,
	      f = c.push,
	      g = c.indexOf,
	      h = {},
	      i = h.toString,
	      j = h.hasOwnProperty,
	      k = {},
	      l = a.document,
	      m = "2.1.3",
	      n = (function (_n) {
	    var _nWrapper = function n(_x, _x2) {
	      return _n.apply(this, arguments);
	    };

	    _nWrapper.toString = function () {
	      return _n.toString();
	    };

	    return _nWrapper;
	  })(function (a, b) {
	    return new n.fn.init(a, b);
	  }),
	      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      p = /^-ms-/,
	      q = /-([\da-z])/gi,
	      r = function r(a, b) {
	    return b.toUpperCase();
	  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
	      return d.call(this);
	    }, get: function get(a) {
	      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = n.merge(this.constructor(), a);return (b.prevObject = this, b.context = this.context, b);
	    }, each: function each(a, b) {
	      return n.each(this, a, b);
	    }, map: function map(a) {
	      return this.pushStack(n.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(d.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor(null);
	    }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
	  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === n.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
	    }, isPlainObject: function isPlainObject(a) {
	      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) return !1;return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
	    }, globalEval: function globalEval(a) {
	      var b,
	          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
	    }, camelCase: function camelCase(a) {
	      return a.replace(p, "ms-").replace(q, r);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b, c) {
	      var d,
	          e = 0,
	          f = a.length,
	          g = s(a);if (c) {
	        if (g) {
	          for (; f > e; e++) if ((d = b.apply(a[e], c), d === !1)) break;
	        } else for (e in a) if ((d = b.apply(a[e], c), d === !1)) break;
	      } else if (g) {
	        for (; f > e; e++) if ((d = b.call(a[e], e, a[e]), d === !1)) break;
	      } else for (e in a) if ((d = b.call(a[e], e, a[e]), d === !1)) break;return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(o, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return (null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c);
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : g.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return (a.length = e, a);
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
	    }, map: function map(a, b, c) {
	      var d,
	          f = 0,
	          g = a.length,
	          h = s(a),
	          i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, e, f;return ("string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
	        return a.apply(b || this, e.concat(d.call(arguments)));
	      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0);
	    }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
	    h["[object " + b + "]"] = b.toLowerCase();
	  });function s(a) {
	    var b = a.length,
	        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	  }var t = (function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = hb(),
	        z = hb(),
	        A = hb(),
	        B = function B(a, b) {
	      return (a === b && (l = !0), 0);
	    },
	        C = 1 << 31,
	        D = ({}).hasOwnProperty,
	        E = [],
	        F = E.pop,
	        G = E.push,
	        H = E.push,
	        I = E.slice,
	        J = function J(a, b) {
	      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) {
	        return c;
	      }return -1;
	    },
	        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        L = "[\\x20\\t\\r\\n\\f]",
	        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        N = M.replace("w", "w#"),
	        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
	        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
	        Q = new RegExp(L + "+", "g"),
	        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
	        S = new RegExp("^" + L + "*," + L + "*"),
	        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
	        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
	        V = new RegExp(P),
	        W = new RegExp("^" + N + "$"),
	        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
	        Y = /^(?:input|select|textarea|button)$/i,
	        Z = /^h\d$/i,
	        $ = /^[^{]+\{\s*\[native \w/,
	        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        ab = /[+~]/,
	        bb = /'|\\/g,
	        cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
	        db = function db(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        eb = function eb() {
	      m();
	    };try {
	      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	    } catch (fb) {
	      H = { apply: E.length ? function (a, b) {
	          G.apply(a, I.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
	        } };
	    }function gb(a, b, d, e) {
	      var f, h, j, k, l, o, r, s, w, x;if (((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)) {
	        return d;
	      }if (!e && p) {
	        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
	          if (9 === k) {
	            if ((h = b.getElementById(j), !h || !h.parentNode)) {
	              return d;
	            }if (h.id === j) {
	              return (d.push(h), d);
	            }
	          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
	            return (d.push(h), d);
	          }
	        } else {
	          if (f[2]) {
	            return (H.apply(d, b.getElementsByTagName(a)), d);
	          }if ((j = f[3]) && c.getElementsByClassName) {
	            return (H.apply(d, b.getElementsByClassName(j)), d);
	          }
	        }if (c.qsa && (!q || !q.test(a))) {
	          if ((s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase())) {
	            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + rb(o[l]);w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",");
	          }if (x) try {
	            return (H.apply(d, w.querySelectorAll(x)), d);
	          } catch (y) {} finally {
	            r || b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(R, "$1"), b, d, e);
	    }function hb() {
	      var a = [];function b(c, e) {
	        return (a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e);
	      }return b;
	    }function ib(a) {
	      return (a[u] = !0, a);
	    }function jb(a) {
	      var b = n.createElement("div");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function kb(a, b) {
	      var c = a.split("|"),
	          e = a.length;while (e--) d.attrHandle[c[e]] = b;
	    }function lb(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) {
	        return d;
	      }if (c) while (c = c.nextSibling) if (c === b) {
	        return -1;
	      }return a ? 1 : -1;
	    }function mb(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function nb(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function ob(a) {
	      return ib(function (b) {
	        return (b = +b, ib(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	        }));
	      });
	    }function pb(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = gb.support = {}, f = gb.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
	    }, m = gb.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
	        return (a.className = "i", !a.getAttribute("className"));
	      }), c.getElementsByTagName = jb(function (a) {
	        return (a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length);
	      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
	        return (o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length);
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(cb, db);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(cb, db);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        return p ? b.getElementsByClassName(a) : void 0;
	      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), jb(function (a) {
	        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
	        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return (l = !0, 0);var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return (l = !0, 0);var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            h = [a],
	            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return lb(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
	      }, g) : n;
	    }, gb.matches = function (a, b) {
	      return gb(a, null, null, b);
	    }, gb.matchesSelector = function (a, b) {
	      if (((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return gb(b, n, null, [a]).length > 0;
	    }, gb.contains = function (a, b) {
	      return ((a.ownerDocument || a) !== n && m(a), t(a, b));
	    }, gb.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, gb.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, gb.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
	        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
	      }return (k = null, a);
	    }, e = gb.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) c += e(b);return c;
	    }, d = gb.selectors = { cacheLength: 50, createPseudo: ib, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return (a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4));
	        }, CHILD: function CHILD(a) {
	          return (a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a);
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(cb, db).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = gb.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h;if (q) {
	              if (f) {
	                while (p) {
	                  l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
	                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
	                  k[a] = [w, n, m];break;
	                }
	              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return (m -= e, m === d || m % d === 0 && m / d >= 0);
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ib(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(R, "$1"));return d[u] ? ib(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
	          }) : function (a, e, f) {
	            return (b[0] = a, d(b, null, f, c), b[0] = null, !c.pop());
	          };
	        }), has: ib(function (a) {
	          return function (b) {
	            return gb(a, b).length > 0;
	          };
	        }), contains: ib(function (a) {
	          return (a = a.replace(cb, db), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          });
	        }), lang: ib(function (a) {
	          return (W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
	            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          });
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: function enabled(a) {
	          return a.disabled === !1;
	        }, disabled: function disabled(a) {
	          return a.disabled === !0;
	        }, checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return (a.parentNode && a.parentNode.selectedIndex, a.selected === !0);
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) {
	            return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return Z.test(a.nodeName);
	        }, input: function input(a) {
	          return Y.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: ob(function () {
	          return [0];
	        }), last: ob(function (a, b) {
	          return [b - 1];
	        }), eq: ob(function (a, b, c) {
	          return [0 > c ? c + b : c];
	        }), even: ob(function (a, b) {
	          for (var c = 0; b > c; c += 2) a.push(c);return a;
	        }), odd: ob(function (a, b) {
	          for (var c = 1; b > c; c += 2) a.push(c);return a;
	        }), lt: ob(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
	        }), gt: ob(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = mb(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);function qb() {}qb.prototype = d.filters = d.pseudos, d.setFilters = new qb(), g = gb.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
	      }return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
	    };function rb(a) {
	      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
	    }function sb(a, b, c) {
	      var d = b.dir,
	          e = c && "parentNode" === d,
	          f = x++;return b.first ? function (b, c, f) {
	        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
	      } : function (b, c, g) {
	        var h,
	            i,
	            j = [w, f];if (g) {
	          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
	        } else while (b = b[d]) if (1 === b.nodeType || e) {
	          if ((i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return j[2] = h[2];if ((i[d] = j, j[2] = a(b, c, g))) return !0;
	        }
	      };
	    }function tb(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
	      } : a[0];
	    }function ub(a, b, c) {
	      for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);return c;
	    }function vb(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
	    }function wb(a, b, c, d, e, f) {
	      return (d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : vb(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
	          j = vb(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
	            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	          }
	        } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
	      }));
	    }function xb(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
	        return a === b;
	      }, h, !0), l = sb(function (a) {
	        return J(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return (b = null, e);
	      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];else {
	        if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
	          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a));
	        }m.push(c);
	      }return tb(m);
	    }function yb(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = (function (_f) {
	        var _fWrapper = function f(_x, _x2, _x3, _x4, _x5) {
	          return _f.apply(this, arguments);
	        };

	        _fWrapper.toString = function () {
	          return _f.toString();
	        };

	        return _fWrapper;
	      })(function (f, g, h, i, k) {
	        var l,
	            m,
	            o,
	            p = 0,
	            q = "0",
	            r = f && [],
	            s = [],
	            t = j,
	            u = f || e && d.find.TAG("*", k),
	            v = w += null == t ? 1 : Math.random() || 0.1,
	            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
	          if (e && l) {
	            m = 0;while (o = a[m++]) if (o(l, g, h)) {
	              i.push(l);break;
	            }k && (w = v);
	          }c && ((l = !o && l) && p--, f && r.push(l));
	        }if ((p += q, c && q !== p)) {
	          m = 0;while (o = b[m++]) o(r, s, g, h);if (f) {
	            if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = vb(s);
	          }H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
	        }return (k && (w = v, j = t), r);
	      });return c ? ib(f) : f;
	    }return (h = gb.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, yb(e, d)), f.selector = a;
	      }return f;
	    }, i = gb.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
	        if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
	          if ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
	            if ((j.splice(i, 1), a = f.length && rb(j), !a)) return (H.apply(e, f), e);break;
	          }
	        }
	      }return ((n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e);
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("div"));
	    }), jb(function (a) {
	      return (a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href"));
	    }) || kb("type|href|height|width", function (a, b, c) {
	      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && jb(function (a) {
	      return (a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value"));
	    }) || kb("value", function (a, b, c) {
	      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	    }), jb(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || kb(K, function (a, b, c) {
	      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), gb);
	  })(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
	    if (n.isFunction(b)) {
	      return n.grep(a, function (a, d) {
	        return !!b.call(a, d, a) !== c;
	      });
	    }if (b.nodeType) {
	      return n.grep(a, function (a) {
	        return a === b !== c;
	      });
	    }if ("string" == typeof b) {
	      if (w.test(b)) {
	        return n.filter(b, a, c);
	      }b = n.filter(b, a);
	    }return n.grep(a, function (a) {
	      return g.call(b, a) >= 0 !== c;
	    });
	  }n.filter = function (a, b, c) {
	    var d = b[0];return (c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
	      return 1 === a.nodeType;
	    })));
	  }, n.fn.extend({ find: function find(a) {
	      var b,
	          c = this.length,
	          d = [],
	          e = this;if ("string" != typeof a) {
	        return this.pushStack(n(a).filter(function () {
	          for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
	        }));
	      }for (b = 0; c > b; b++) n.find(a, e[b], d);return (d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d);
	    }, filter: function filter(a) {
	      return this.pushStack(x(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(x(this, a || [], !0));
	    }, is: function is(a) {
	      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
	    } });var y,
	      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      A = n.fn.init = function (a, b) {
	    var c, d;if (!a) return this;if ("string" == typeof a) {
	      if ((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
	        if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
	      }return (d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this);
	    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	  };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	      C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
	      var d = [],
	          e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
	        if (e && n(a).is(c)) break;d.push(a);
	      }return d;
	    }, sibling: function sibling(a, b) {
	      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
	    } }), n.fn.extend({ has: function has(a) {
	      var b = n(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
	      });
	    }, closest: function closest(a, b) {
	      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
	        f.push(c);break;
	      }return this.pushStack(f.length > 1 ? n.unique(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function D(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType);return a;
	  }n.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return n.dir(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return n.dir(a, "parentNode", c);
	    }, next: function next(a) {
	      return D(a, "nextSibling");
	    }, prev: function prev(a) {
	      return D(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return n.dir(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return n.dir(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return n.dir(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return n.dir(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return n.sibling((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return n.sibling(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || n.merge([], a.childNodes);
	    } }, function (a, b) {
	    n.fn[a] = function (c, d) {
	      var e = n.map(this, b, c);return ("Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e));
	    };
	  });var E = /\S+/g,
	      F = {};function G(a) {
	    var b = F[a] = {};return (n.each(a.match(E) || [], function (a, c) {
	      b[c] = !0;
	    }), b);
	  }n.Callbacks = function (a) {
	    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h = [],
	        i = !a.once && [],
	        j = (function (_j) {
	      var _jWrapper = function j(_x) {
	        return _j.apply(this, arguments);
	      };

	      _jWrapper.toString = function () {
	        return _j.toString();
	      };

	      return _jWrapper;
	    })(function (l) {
	      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
	        b = !1;break;
	      }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
	    }),
	        k = { add: function add() {
	        if (h) {
	          var c = h.length;!(function g(b) {
	            n.each(b, function (b, c) {
	              var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
	            });
	          })(arguments), d ? f = h.length : b && (e = c, j(b));
	        }return this;
	      }, remove: function remove() {
	        return (h && n.each(arguments, function (a, b) {
	          var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
	        }), this);
	      }, has: function has(a) {
	        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
	      }, empty: function empty() {
	        return (h = [], f = 0, this);
	      }, disable: function disable() {
	        return (h = i = b = void 0, this);
	      }, disabled: function disabled() {
	        return !h;
	      }, lock: function lock() {
	        return (i = void 0, b || k.disable(), this);
	      }, locked: function locked() {
	        return !i;
	      }, fireWith: function fireWith(a, b) {
	        return (!h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this);
	      }, fire: function fire() {
	        return (k.fireWith(this, arguments), this);
	      }, fired: function fired() {
	        return !!c;
	      } };return k;
	  }, n.extend({ Deferred: function Deferred(a) {
	      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
	          c = "pending",
	          d = { state: function state() {
	          return c;
	        }, always: function always() {
	          return (e.done(arguments).fail(arguments), this);
	        }, then: function then() {
	          var a = arguments;return n.Deferred(function (c) {
	            n.each(b, function (b, f) {
	              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
	                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? n.extend(a, d) : d;
	        } },
	          e = {};return (d.pipe = d.then, n.each(b, function (a, f) {
	        var g = f[2],
	            h = f[3];d[f[1]] = g.add, h && g.add(function () {
	          c = h;
	        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
	          return (e[f[0] + "With"](this === e ? d : this, arguments), this);
	        }, e[f[0] + "With"] = g.fireWith;
	      }), d.promise(e), a && a.call(e, e), e);
	    }, when: function when(a) {
	      var b = 0,
	          c = d.call(arguments),
	          e = c.length,
	          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
	          g = 1 === f ? a : n.Deferred(),
	          h = function h(a, b, c) {
	        return function (e) {
	          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
	        };
	      },
	          i,
	          j,
	          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return (f || g.resolveWith(k, c), g.promise());
	    } });var H;n.fn.ready = function (a) {
	    return (n.ready.promise().done(a), this);
	  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? n.readyWait++ : n.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
	    } });function I() {
	    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	  }n.ready.promise = function (b) {
	    return (H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b));
	  }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === n.type(c)) {
	      e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
	    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
	      return j.call(n(a), c);
	    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  };n.acceptData = function (a) {
	    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
	  };function K() {
	    Object.defineProperty(this.cache = {}, 0, { get: function get() {
	        return {};
	      } }), this.expando = n.expando + K.uid++;
	  }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
	      if (!K.accepts(a)) {
	        return 0;
	      }var b = {},
	          c = a[this.expando];if (!c) {
	        c = K.uid++;try {
	          b[this.expando] = { value: c }, Object.defineProperties(a, b);
	        } catch (d) {
	          b[this.expando] = c, n.extend(a, b);
	        }
	      }return (this.cache[c] || (this.cache[c] = {}), c);
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.key(a),
	          f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
	    }, get: function get(a, b) {
	      var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
	    }, access: function access(a, b, c) {
	      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d,
	          e,
	          f = this.key(a),
	          g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
	        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
	      }
	    }, hasData: function hasData(a) {
	      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
	    }, discard: function discard(a) {
	      a[this.expando] && delete this.cache[a[this.expando]];
	    } };var L = new K(),
	      M = new K(),
	      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      O = /([A-Z])/g;function P(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
	      try {
	        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
	      } catch (e) {}M.set(a, b, c);
	    } else c = void 0;return c;
	  }n.extend({ hasData: function hasData(a) {
	      return M.hasData(a) || L.hasData(a);
	    }, data: function data(a, b, c) {
	      return M.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      M.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return L.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      L.remove(a, b);
	    } }), n.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == typeof a ? this.each(function () {
	        M.set(this, a);
	      }) : J(this, function (b) {
	        var c,
	            d = n.camelCase(a);if (f && void 0 === b) {
	          if ((c = M.get(f, a), void 0 !== c)) return c;if ((c = M.get(f, d), void 0 !== c)) return c;if ((c = P(f, d, void 0), void 0 !== c)) return c;
	        } else this.each(function () {
	          var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        M.remove(this, a);
	      });
	    } }), n.extend({ queue: function queue(a, b, c) {
	      var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = n.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = n._queueHooks(a, b),
	          g = function g() {
	        n.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
	          L.remove(a, [b + "queue", c]);
	        }) });
	    } }), n.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return ("string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
	      }));
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        n.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = n.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return (h(), e.promise(b));
	    } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      R = ["Top", "Right", "Bottom", "Left"],
	      S = function S(a, b) {
	    return (a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a));
	  },
	      T = /^(?:checkbox|radio)$/i;!(function () {
	    var a = l.createDocumentFragment(),
	        b = a.appendChild(l.createElement("div")),
	        c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  })();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	      W = /^(?:mouse|pointer|contextmenu)|click/,
	      X = /^(?:focusinfocus|focusoutblur)$/,
	      Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
	    return !0;
	  }function $() {
	    return !1;
	  }function _() {
	    try {
	      return l.activeElement;
	    } catch (a) {}
	  }n.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = L.get(a);if (r) {
	        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
	          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
	        b = (b || "").match(E) || [""], j = b.length;while (j--) if ((h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
	          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
	        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
	      }
	    }, trigger: function trigger(b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          k,
	          m,
	          o,
	          p = [d || l],
	          q = j.call(b, "type") ? b.type : b,
	          r = j.call(b, "namespace") ? b.namespace.split(".") : [];if ((g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1))) {
	        if (!e && !o.noBubble && !n.isWindow(d)) {
	          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
	        }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return (b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result);
	      }
	    }, dispatch: function dispatch(a) {
	      a = n.event.fix(a);var b,
	          c,
	          e,
	          f,
	          g,
	          h = [],
	          i = d.call(arguments),
	          j = (L.get(this, "events") || {})[a.type] || [],
	          k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
	        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
	          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
	        }return (k.postDispatch && k.postDispatch.call(this, a), a.result);
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
	        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
	      }return (h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g);
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
	        return (null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a);
	      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
	        var c,
	            d,
	            e,
	            f = b.button;return (null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a);
	      } }, fix: function fix(a) {
	      if (a[n.expando]) {
	        return a;
	      }var b,
	          c,
	          d,
	          e = a.type,
	          f = a,
	          g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return (a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a);
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === _() && this.blur ? (this.blur(), !1) : void 0;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
	        }, _default: function _default(a) {
	          return n.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } }, simulate: function simulate(a, b, c, d) {
	      var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
	    } }, n.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c, !1);
	  }, n.Event = function (a, b) {
	    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	  }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return ((!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c);
	      } };
	  }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      n.event.simulate(b, a.target, n.event.fix(a), !0);
	    };n.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
	      } };
	  }), n.fn.extend({ on: function on(a, b, c, d, e) {
	      var f, g;if ("object" == typeof a) {
	        "string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
	      }if ((null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)) d = $;else if (!d) {
	        return this;
	      }return (1 === e && (f = d, d = function (a) {
	        return (n().off(a), f.apply(this, arguments));
	      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
	        n.event.add(this, a, d, c, b);
	      }));
	    }, one: function one(a, b, c, d) {
	      return this.on(a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) {
	        return (d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this);
	      }if ("object" == typeof a) {
	        for (e in a) this.off(e, b, a[e]);return this;
	      }return ((b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
	        n.event.remove(this, a, c, b);
	      }));
	    }, trigger: function trigger(a, b) {
	      return this.each(function () {
	        n.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
	    } });var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      bb = /<([\w:]+)/,
	      cb = /<|&#?\w+;/,
	      db = /<(?:script|style|link)/i,
	      eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      fb = /^$|\/(?:java|ecma)script/i,
	      gb = /^true\/(.*)/,
	      hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	      ib = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;function jb(a, b) {
	    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	  }function kb(a) {
	    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type, a);
	  }function lb(a) {
	    var b = gb.exec(a.type);return (b ? a.type = b[1] : a.removeAttribute("type"), a);
	  }function mb(a, b) {
	    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
	  }function nb(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
	      }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
	    }
	  }function ob(a, b) {
	    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	  }function pb(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	  }n.extend({ clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);if (b) if (c) for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);else nb(a, h);return (g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h);
	    }, buildFragment: function buildFragment(a, b, c, d) {
	      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m], e || 0 === e)) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (cb.test(e)) {
	        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
	      } else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
	        j = 0;while (e = f[j++]) fb.test(e.type || "") && c.push(e);
	      }return k;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
	        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
	          if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
	        }delete M.cache[c[M.expando]];
	      }
	    } }), n.fn.extend({ text: function text(a) {
	      return J(this, function (a) {
	        return void 0 === a ? n.text(this) : this.empty().each(function () {
	          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = jb(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = jb(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, remove: function remove(a, b) {
	      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));return this;
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");return this;
	    }, clone: function clone(a, b) {
	      return (a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
	        return n.clone(this, a, b);
	      }));
	    }, html: function html(a) {
	      return J(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = a.replace(ab, "<$1></$2>");try {
	            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = arguments[0];return (this.domManip(arguments, function (b) {
	        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
	      }), a && (a.length || a.nodeType) ? this : this.remove());
	    }, detach: function detach(a) {
	      return this.remove(a, !0);
	    }, domManip: function domManip(a, b) {
	      a = e.apply([], a);var c,
	          d,
	          f,
	          g,
	          h,
	          i,
	          j = 0,
	          l = this.length,
	          m = this,
	          o = l - 1,
	          p = a[0],
	          q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) {
	        return this.each(function (c) {
	          var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
	        });
	      }if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
	        for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")));
	      }return this;
	    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    n.fn[a] = function (a) {
	      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
	    };
	  });var qb,
	      rb = {};function sb(b, c) {
	    var d,
	        e = n(c.createElement(b)).appendTo(c.body),
	        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return (e.detach(), f);
	  }function tb(a) {
	    var b = l,
	        c = rb[a];return (c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c);
	  }var ub = /^margin/,
	      vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	      wb = function wb(b) {
	    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	  };function xb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return (c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g);
	  }function yb(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }!(function () {
	    var b,
	        c,
	        d = l.documentElement,
	        e = l.createElement("div"),
	        f = l.createElement("div");if (f.style) {
	      (function () {
	        var g = function () {
	          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
	        };

	        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
	            return (g(), b);
	          }, boxSizingReliable: function boxSizingReliable() {
	            return (null == c && g(), c);
	          }, reliableMarginRight: function reliableMarginRight() {
	            var b,
	                c = f.appendChild(l.createElement("div"));return (c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b);
	          } });
	      })();
	    }
	  })(), n.swap = function (a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
	  };var zb = /^(none|table(?!-c[ea]).+)/,
	      Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
	      Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
	      Cb = { position: "absolute", visibility: "hidden", display: "block" },
	      Db = { letterSpacing: "0", fontWeight: "400" },
	      Eb = ["Webkit", "O", "Moz", "ms"];function Fb(a, b) {
	    if (b in a) {
	      return b;
	    }var c = b[0].toUpperCase() + b.slice(1),
	        d = b,
	        e = Eb.length;while (e--) if ((b = Eb[e] + c, b in a)) {
	      return b;
	    }return d;
	  }function Gb(a, b, c) {
	    var d = Ab.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	  }function Hb(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
	  }function Ib(a, b, c) {
	    var d = !0,
	        e = "width" === b ? a.offsetWidth : a.offsetHeight,
	        f = wb(a),
	        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
	      if ((e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))) {
	        return e;
	      }d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	    }return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
	  }function Jb(a, b) {
	    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
	  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = xb(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = n.camelCase(b),
	            i = a.style;return (b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0));
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = n.camelCase(b);return (b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e);
	    } }), n.each(["height", "width"], function (a, b) {
	    n.cssHooks[b] = { get: function get(a, c, d) {
	        return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
	          return Ib(a, b, d);
	        }) : Ib(a, b, d) : void 0;
	      }, set: function set(a, c, d) {
	        var e = d && wb(a);return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
	      } };
	  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
	    return b ? n.swap(a, { display: "inline-block" }, xb, [a, "marginRight"]) : void 0;
	  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    n.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
	      } }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
	  }), n.fn.extend({ css: function css(a, b) {
	      return J(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (n.isArray(b)) {
	          for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
	        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
	      }, a, b, arguments.length > 1);
	    }, show: function show() {
	      return Jb(this, !0);
	    }, hide: function hide() {
	      return Jb(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        S(this) ? n(this).show() : n(this).hide();
	      });
	    } });function Kb(a, b, c, d, e) {
	    return new Kb.prototype.init(a, b, c, d, e);
	  }n.Tween = Kb, Kb.prototype = { constructor: Kb, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Kb.propHooks[this.prop];return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Kb.propHooks[this.prop];return (this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this);
	    } }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = { _default: { get: function get(a) {
	        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
	      }, set: function set(a) {
	        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
	      } } }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, n.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return 0.5 - Math.cos(a * Math.PI) / 2;
	    } }, n.fx = Kb.prototype.init, n.fx.step = {};var Lb,
	      Mb,
	      Nb = /^(?:toggle|show|hide)$/,
	      Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	      Pb = /queueHooks$/,
	      Qb = [Vb],
	      Rb = { "*": [function (a, b) {
	      var c = this.createTween(a, b),
	          d = c.cur(),
	          e = Ob.exec(b),
	          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
	          g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
	          h = 1,
	          i = 20;if (g && g[3] !== f) {
	        f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
	      }return (e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c);
	    }] };function Sb() {
	    return (setTimeout(function () {
	      Lb = void 0;
	    }), Lb = n.now());
	  }function Tb(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return (b && (e.opacity = e.width = a), e);
	  }function Ub(a, b, c) {
	    for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) {
	      return d;
	    }
	  }function Vb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = this,
	        m = {},
	        o = a.style,
	        p = a.nodeType && S(a),
	        q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
	      h.unqueued || i();
	    }), h.unqueued++, l.always(function () {
	      l.always(function () {
	        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
	      });
	    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
	      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	    }));for (d in b) if ((e = b[d], Nb.exec(e))) {
	      if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
	        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	      }m[d] = q && q[d] || n.style(a, d);
	    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);else {
	      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
	        n(a).hide();
	      }), l.done(function () {
	        var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
	      });for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	    }
	  }function Wb(a, b) {
	    var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
	      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
	    } else b[d] = e;
	  }function Xb(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = Qb.length,
	        h = n.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = (function (_i) {
	      var _iWrapper = function i() {
	        return _i.apply(this, arguments);
	      };

	      _iWrapper.toString = function () {
	        return _i.toString();
	      };

	      return _iWrapper;
	    })(function () {
	      if (e) return !1;for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return (h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1));
	    }),
	        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return (j.tweens.push(d), d);
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) {
	          return this;
	        }for (e = !0; d > c; c++) j.tweens[c].run(1);return (b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this);
	      } }),
	        k = j.props;for (Wb(k, j.opts.specialEasing); g > f; f++) if (d = Qb[f].call(j, a, k, j.opts)) {
	      return d;
	    }return (n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always));
	  }n.Animation = n.extend(Xb, { tweener: function tweener(a, b) {
	      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
	    }, prefilter: function prefilter(a, b) {
	      b ? Qb.unshift(a) : Qb.push(a);
	    } }), n.speed = function (a, b, c) {
	    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return (d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
	      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
	    }, d);
	  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = n.isEmptyObject(a),
	          f = n.speed(b, c, d),
	          g = function g() {
	        var b = Xb(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
	      };return (g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g));
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return ("string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = n.timers,
	            g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
	      }));
	    }, finish: function finish(a) {
	      return (a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = L.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = n.timers,
	            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
	      }));
	    } }), n.each(["toggle", "show", "hide"], function (a, b) {
	    var c = n.fn[b];n.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
	    };
	  }), n.each({ slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    n.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), n.timers = [], n.fx.tick = function () {
	    var a,
	        b = 0,
	        c = n.timers;for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), Lb = void 0;
	  }, n.fx.timer = function (a) {
	    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	  }, n.fx.interval = 13, n.fx.start = function () {
	    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
	  }, n.fx.stop = function () {
	    clearInterval(Mb), Mb = null;
	  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
	    return (a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
	      var d = setTimeout(b, a);c.stop = function () {
	        clearTimeout(d);
	      };
	    }));
	  }, (function () {
	    var a = l.createElement("input"),
	        b = l.createElement("select"),
	        c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	  })();var Yb,
	      Zb,
	      $b = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
	      return J(this, n.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        n.removeAttr(this, a);
	      });
	    } }), n.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) {
	        return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
	      }
	    }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d,
	          e = 0,
	          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
	            var c = a.value;return (a.setAttribute("type", b), c && (a.value = c), b);
	          }
	        } } } }), Zb = { set: function set(a, b, c) {
	      return (b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c);
	    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = $b[b] || n.find.attr;$b[b] = function (a, b, d) {
	      var e, f;return (d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e);
	    };
	  });var _b = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
	      return J(this, n.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[n.propFix[a] || a];
	      });
	    } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
	      var d,
	          e,
	          f,
	          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) {
	        return (f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]);
	      }
	    }, propHooks: { tabIndex: { get: function get(a) {
	          return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
	        } } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return (b && b.parentNode && b.parentNode.selectedIndex, null);
	    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    n.propFix[this.toLowerCase()] = this;
	  });var ac = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = "string" == typeof a && a,
	          i = 0,
	          j = this.length;if (n.isFunction(a)) {
	        return this.each(function (b) {
	          n(this).addClass(a.call(this, b, this.className));
	        });
	      }if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " "))) {
	        f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = 0 === arguments.length || "string" == typeof a && a,
	          i = 0,
	          j = this.length;if (n.isFunction(a)) {
	        return this.each(function (b) {
	          n(this).removeClass(a.call(this, b, this.className));
	        });
	      }if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : ""))) {
	        f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
	        n(this).toggleClass(a.call(this, c, this.className, b), b);
	      } : function () {
	        if ("string" === c) {
	          var b,
	              d = 0,
	              e = n(this),
	              f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
	      });
	    }, hasClass: function hasClass(a) {
	      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) {
	        return !0;
	      }return !1;
	    } });var bc = /\r/g;n.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) {
	          return (d = n.isFunction(a), this.each(function (c) {
	            var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
	              return null == a ? "" : a + "";
	            })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	          }));
	        }if (e) {
	          return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c));
	        }
	      }
	    } }), n.extend({ valHooks: { option: { get: function get(a) {
	          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup")))) {
	            if ((b = n(c).val(), f)) {
	              return b;
	            }g.push(b);
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = n.makeArray(b),
	              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return (c || (a.selectedIndex = -1), f);
	        } } } }), n.each(["radio", "checkbox"], function () {
	    n.valHooks[this] = { set: function set(a, b) {
	        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
	      } }, k.checkOn || (n.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	    n.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), n.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    }, bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } });var cc = n.now(),
	      dc = /\?/;n.parseJSON = function (a) {
	    return JSON.parse(a + "");
	  }, n.parseXML = function (a) {
	    var b, c;if (!a || "string" != typeof a) return null;try {
	      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
	    } catch (d) {
	      b = void 0;
	    }return ((!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b);
	  };var ec = /#.*$/,
	      fc = /([?&])_=[^&]*/,
	      gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      ic = /^(?:GET|HEAD)$/,
	      jc = /^\/\//,
	      kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	      lc = {},
	      mc = {},
	      nc = "*/".concat("*"),
	      oc = a.location.href,
	      pc = kc.exec(oc.toLowerCase()) || [];function qc(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	    };
	  }function rc(a, b, c, d) {
	    var e = {},
	        f = a === mc;function g(h) {
	      var i;return (e[h] = !0, n.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i);
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function sc(a, b) {
	    var c,
	        d,
	        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return (d && n.extend(!0, a, d), a);
	  }function tc(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
	      i.unshift(e);break;
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	  }function uc(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	      if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
	        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	      }if (g !== !0) if (g && a.throws) b = g(b);else try {
	        b = g(b);
	      } catch (l) {
	        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	      }
	    }return { state: "success", data: b };
	  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: oc, type: "GET", isLocal: hc.test(pc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a);
	    }, ajaxPrefilter: qc(lc), ajaxTransport: qc(mc), ajax: function ajax(a, b) {
	      "object" == typeof a && (b = a, a = void 0), b = b || {};var c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.ajaxSetup({}, b),
	          l = k.context || k,
	          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
	          o = n.Deferred(),
	          p = n.Callbacks("once memory"),
	          q = k.statusCode || {},
	          r = {},
	          s = {},
	          t = 0,
	          u = "canceled",
	          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (2 === t) {
	            if (!f) {
	              f = {};while (b = gc.exec(e)) f[b[1].toLowerCase()] = b[2];
	            }b = f[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === t ? e : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          var c = a.toLowerCase();return (t || (a = s[c] = s[c] || a, r[a] = b), this);
	        }, overrideMimeType: function overrideMimeType(a) {
	          return (t || (k.mimeType = a), this);
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
	        }, abort: function abort(a) {
	          var b = a || u;return (c && c.abort(b), x(0, b), this);
	        } };if ((o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t)) {
	        return v;
	      }i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
	        return v.abort();
	      }u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rc(mc, k, b, v)) {
	        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
	          v.abort("timeout");
	        }, k.timeout));try {
	          t = 1, c.send(r, x);
	        } catch (w) {
	          if (!(2 > t)) throw w;x(-1, w);
	        }
	      } else x(-1, "No Transport");function x(a, b, f, h) {
	        var j,
	            r,
	            s,
	            u,
	            w,
	            x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
	      }return v;
	    }, getJSON: function getJSON(a, b, c) {
	      return n.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return n.get(a, void 0, b, "script");
	    } }), n.each(["get", "post"], function (a, b) {
	    n[b] = function (a, c, d, e) {
	      return (n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d }));
	    };
	  }), n._evalUrl = function (a) {
	    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
	  }, n.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapAll(a.call(this, b));
	      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
	      }).append(this)), this);
	    }, wrapInner: function wrapInner(a) {
	      return this.each(n.isFunction(a) ? function (b) {
	        n(this).wrapInner(a.call(this, b));
	      } : function () {
	        var b = n(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = n.isFunction(a);return this.each(function (c) {
	        n(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
	      }).end();
	    } }), n.expr.filters.hidden = function (a) {
	    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	  }, n.expr.filters.visible = function (a) {
	    return !n.expr.filters.hidden(a);
	  };var vc = /%20/g,
	      wc = /\[\]$/,
	      xc = /\r?\n/g,
	      yc = /^(?:submit|button|image|reset|file)$/i,
	      zc = /^(?:input|select|textarea|keygen)/i;function Ac(a, b, c, d) {
	    var e;if (n.isArray(b)) n.each(b, function (b, e) {
	      c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ac(a + "[" + e + "]", b[e], c, d);
	  }n.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	    };if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) Ac(c, a[c], b, e);return d.join("&").replace(vc, "+");
	  }, n.fn.extend({ serialize: function serialize() {
	      return n.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a));
	      }).map(function (a, b) {
	        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
	          return { name: b.name, value: a.replace(xc, "\r\n") };
	        }) : { name: b.name, value: c.replace(xc, "\r\n") };
	      }).get();
	    } }), n.ajaxSettings.xhr = function () {
	    try {
	      return new XMLHttpRequest();
	    } catch (a) {}
	  };var Bc = 0,
	      Cc = {},
	      Dc = { 0: 200, 1223: 204 },
	      Ec = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
	    for (var a in Cc) Cc[a]();
	  }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function (a) {
	    var b;return k.cors || Ec && !a.crossDomain ? { send: function send(c, d) {
	        var e,
	            f = a.xhr(),
	            g = ++Bc;if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
	          return function () {
	            b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
	          };
	        }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");try {
	          f.send(a.hasContent && a.data || null);
	        } catch (h) {
	          if (b) throw h;
	        }
	      }, abort: function abort() {
	        b && b();
	      } } : void 0;
	  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
	        return (n.globalEval(a), a);
	      } } }), n.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), n.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, c;return { send: function send(d, e) {
	          b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
	            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
	          }), l.head.appendChild(b[0]);
	        }, abort: function abort() {
	          c && c();
	        } };
	    }
	  });var Fc = [],
	      Gc = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Fc.pop() || n.expando + "_" + cc++;return (this[a] = !0, a);
	    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return (g || n.error(e + " was not called"), g[0]);
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script") : void 0;
	  }), n.parseHTML = function (a, b, c) {
	    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
	        e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	  };var Hc = n.fn.load;n.fn.load = function (a, b, c) {
	    if ("string" != typeof a && Hc) return Hc.apply(this, arguments);var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return (h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
	    }).complete(c && function (a, b) {
	      g.each(c, f || [a.responseText, b, a]);
	    }), this);
	  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    n.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), n.expr.filters.animated = function (a) {
	    return n.grep(n.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };var Ic = a.document.documentElement;function Jc(a) {
	    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }n.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.css(a, "position"),
	          l = n(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, n.fn.extend({ offset: function offset(a) {
	      if (arguments.length) {
	        return void 0 === a ? this : this.each(function (b) {
	          n.offset.setOffset(this, a, b);
	        });
	      }var b,
	          c,
	          d = this[0],
	          e = { top: 0, left: 0 },
	          f = d && d.ownerDocument;if (f) {
	        return (b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e);
	      }
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return ("fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) });
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent || Ic;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ic;
	      });
	    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
	    var d = "pageYOffset" === c;n.fn[b] = function (e) {
	      return J(this, function (b, e, f) {
	        var g = Jc(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
	      }, b, e, arguments.length, null);
	    };
	  }), n.each(["top", "left"], function (a, b) {
	    n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
	      return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0;
	    });
	  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
	    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      n.fn[d] = function (d, e) {
	        var f = arguments.length && (c || "boolean" != typeof d),
	            g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
	          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
	        }, b, f ? d : void 0, f, null);
	      };
	    });
	  }), n.fn.size = function () {
	    return this.length;
	  }, n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(36) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Kc = a.jQuery,
	      Lc = a.$;return (n.noConflict = function (b) {
	    return (a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n);
	  }, typeof b === U && (a.jQuery = a.$ = n), n);
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* interact.js v1.2.4 | https://raw.github.com/taye/interact.js/master/LICENSE */
	"use strict";

	!(function (t) {
	  "use strict";function e() {}function i(t) {
	    if (!t || "object" != typeof t) {
	      return !1;
	    }var e = b(t) || ue;return /object|function/.test(typeof e.Element) ? t instanceof e.Element : 1 === t.nodeType && "string" == typeof t.nodeName;
	  }function r(t) {
	    return !(!t || !t.Window) && t instanceof t.Window;
	  }function s(t) {
	    return !!t && t instanceof ve;
	  }function n(t) {
	    return o(t) && void 0 !== typeof t.length && a(t.splice);
	  }function o(t) {
	    return !!t && "object" == typeof t;
	  }function a(t) {
	    return "function" == typeof t;
	  }function h(t) {
	    return "number" == typeof t;
	  }function p(t) {
	    return "boolean" == typeof t;
	  }function l(t) {
	    return "string" == typeof t;
	  }function c(t) {
	    return l(t) ? (ge.querySelector(t), !0) : !1;
	  }function d(t, e) {
	    for (var i in e) t[i] = e[i];return t;
	  }function u(t, e) {
	    t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
	  }function g(t, e, i) {
	    e || (e = i.pointerIds.length > 1 ? z(i.pointers) : i.pointers[0]), f(e, be, i), t.page.x = be.x, t.page.y = be.y, y(e, be, i), t.client.x = be.x, t.client.y = be.y, t.timeStamp = new Date().getTime();
	  }function v(t, e, i) {
	    t.page.x = i.page.x - e.page.x, t.page.y = i.page.y - e.page.y, t.client.x = i.client.x - e.client.x, t.client.y = i.client.y - e.client.y, t.timeStamp = new Date().getTime() - e.timeStamp;var r = Math.max(t.timeStamp / 1000, 0.001);t.page.speed = Se(t.page.x, t.page.y) / r, t.page.vx = t.page.x / r, t.page.vy = t.page.y / r, t.client.speed = Se(t.client.x, t.page.y) / r, t.client.vx = t.client.x / r, t.client.vy = t.client.y / r;
	  }function m(t, e, i) {
	    return (i = i || {}, t = t || "page", i.x = e[t + "X"], i.y = e[t + "Y"], i);
	  }function f(t, e, i) {
	    return (e = e || {}, t instanceof B ? /inertiastart/.test(t.type) ? (i = i || t.interaction, d(e, i.inertiaStatus.upCoords.page), e.x += i.inertiaStatus.sx, e.y += i.inertiaStatus.sy) : (e.x = t.pageX, e.y = t.pageY) : He ? (m("screen", t, e), e.x += ue.scrollX, e.y += ue.scrollY) : m("page", t, e), e);
	  }function y(t, e, i) {
	    return (e = e || {}, t instanceof B ? /inertiastart/.test(t.type) ? (d(e, i.inertiaStatus.upCoords.client), e.x += i.inertiaStatus.sx, e.y += i.inertiaStatus.sy) : (e.x = t.clientX, e.y = t.clientY) : m(He ? "screen" : "client", t, e), e);
	  }function x(t) {
	    return (t = t || ue, { x: t.scrollX || t.document.documentElement.scrollLeft, y: t.scrollY || t.document.documentElement.scrollTop });
	  }function E(t) {
	    return h(t.pointerId) ? t.pointerId : t.identifier;
	  }function S(t) {
	    return t instanceof ye ? t.correspondingUseElement : t;
	  }function b(t) {
	    if (r(t)) {
	      return t;
	    }var e = t.ownerDocument || t;return e.defaultView || e.parentWindow || ue;
	  }function w(t) {
	    var e = We ? { x: 0, y: 0 } : x(b(t)),
	        i = t instanceof me ? t.getBoundingClientRect() : t.getClientRects()[0];return i && { left: i.left + e.x, right: i.right + e.x, top: i.top + e.y, bottom: i.bottom + e.y, width: i.width || i.right - i.left, height: i.heigh || i.bottom - i.top };
	  }function D(t) {
	    var e = [];return (n(t) ? (e[0] = t[0], e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e);
	  }function z(t) {
	    var e = D(t);return { pageX: (e[0].pageX + e[1].pageX) / 2, pageY: (e[0].pageY + e[1].pageY) / 2, clientX: (e[0].clientX + e[1].clientX) / 2, clientY: (e[0].clientY + e[1].clientY) / 2 };
	  }function T(t) {
	    if (t.length || t.touches && t.touches.length > 1) {
	      var e = D(t),
	          i = Math.min(e[0].pageX, e[1].pageX),
	          r = Math.min(e[0].pageY, e[1].pageY),
	          s = Math.max(e[0].pageX, e[1].pageX),
	          n = Math.max(e[0].pageY, e[1].pageY);return { x: i, y: r, left: i, top: r, width: s - i, height: n - r };
	    }
	  }function C(t, e) {
	    e = e || Me.deltaSource;var i = e + "X",
	        r = e + "Y",
	        s = D(t),
	        n = s[0][i] - s[1][i],
	        o = s[0][r] - s[1][r];return Se(n, o);
	  }function M(t, e, i) {
	    i = i || Me.deltaSource;var r = i + "X",
	        s = i + "Y",
	        n = D(t),
	        o = n[0][r] - n[1][r],
	        a = n[0][s] - n[1][s],
	        p = 180 * Math.atan(a / o) / Math.PI;if (h(e)) {
	      var l = p - e,
	          c = l % 360;c > 315 ? p -= 360 + p / 360 | 0 : c > 135 ? p -= 180 + p / 360 | 0 : -315 > c ? p += 360 + p / 360 | 0 : -135 > c && (p += 180 + p / 360 | 0);
	    }return p;
	  }function P(t, e) {
	    var r = t ? t.options.origin : Me.origin;return ("parent" === r ? r = k(e) : "self" === r ? r = t.getRect(e) : c(r) && (r = Y(e, r) || { x: 0, y: 0 }), a(r) && (r = r(t && e)), i(r) && (r = w(r)), r.x = "x" in r ? r.x : r.left, r.y = "y" in r ? r.y : r.top, r);
	  }function O(t, e, i, r) {
	    var s = 1 - t;return s * s * e + 2 * s * t * i + t * t * r;
	  }function _(t, e, i, r, s, n, o) {
	    return { x: O(o, t, i, s), y: O(o, e, r, n) };
	  }function A(t, e, i, r) {
	    return (t /= r, -i * t * (t - 2) + e);
	  }function X(t, e) {
	    for (; e;) {
	      if (e === t) {
	        return !0;
	      }e = e.parentNode;
	    }return !1;
	  }function Y(t, e) {
	    for (var r = k(t); i(r);) {
	      if (pe(r, e)) {
	        return r;
	      }r = k(r);
	    }return null;
	  }function k(t) {
	    var e = t.parentNode;if (s(e)) {
	      for (; (e = e.host) && s(e););return e;
	    }return e;
	  }function I(t, e) {
	    return t._context === e.ownerDocument || X(t._context, e);
	  }function R(t, e, r) {
	    var s = t.options.ignoreFrom;return s && i(r) ? l(s) ? le(r, s, e) : i(s) ? X(s, r) : !1 : !1;
	  }function F(t, e, r) {
	    var s = t.options.allowFrom;return s ? i(r) ? l(s) ? le(r, s, e) : i(s) ? X(s, r) : !1 : !1 : !0;
	  }function q(t, e) {
	    if (!e) {
	      return !1;
	    }var i = e.options.drag.axis;return "xy" === t || "xy" === i || i === t;
	  }function N(t, e) {
	    var i = t.options;return (/^resize/.test(e) && (e = "resize"), i[e].snap && i[e].snap.enabled);
	  }function H(t, e) {
	    var i = t.options;return (/^resize/.test(e) && (e = "resize"), i[e].restrict && i[e].restrict.enabled);
	  }function W(t, e) {
	    var i = t.options;return (/^resize/.test(e) && (e = "resize"), i[e].autoScroll && i[e].autoScroll.enabled);
	  }function U(t, e, i) {
	    for (var r = t.options, s = r[i.name].max, n = r[i.name].maxPerElement, o = 0, a = 0, h = 0, p = 0, l = ze.length; l > p; p++) {
	      var c = ze[p],
	          d = c.prepared.name,
	          u = c.interacting();if (u) {
	        if ((o++, o >= ke)) {
	          return !1;
	        }if (c.target === t) {
	          if ((a += d === i.name | 0, a >= s)) {
	            return !1;
	          }if (c.element === e && (h++, d !== i.name || h >= n)) {
	            return !1;
	          }
	        }
	      }
	    }return ke > 0;
	  }function V(t) {
	    var e,
	        i,
	        r,
	        s,
	        n,
	        o = t[0],
	        a = o ? 0 : -1,
	        h = [],
	        p = [];for (s = 1; s < t.length; s++) if ((e = t[s], e && e !== o)) if (o) {
	      if (e.parentNode !== e.ownerDocument) if (o.parentNode !== e.ownerDocument) {
	        if (!h.length) for (i = o; i.parentNode && i.parentNode !== i.ownerDocument;) h.unshift(i), i = i.parentNode;if (o instanceof xe && e instanceof me && !(e instanceof fe)) {
	          if (e === o.parentNode) continue;i = e.ownerSVGElement;
	        } else i = e;for (p = []; i.parentNode !== i.ownerDocument;) p.unshift(i), i = i.parentNode;for (n = 0; p[n] && p[n] === h[n];) n++;var l = [p[n - 1], p[n], h[n]];for (r = l[0].lastChild; r;) {
	          if (r === l[1]) {
	            o = e, a = s, h = [];break;
	          }if (r === l[2]) break;r = r.previousSibling;
	        }
	      } else o = e, a = s;
	    } else o = e, a = s;return a;
	  }function $() {
	    if ((this.target = null, this.element = null, this.dropTarget = null, this.dropElement = null, this.prevDropTarget = null, this.prevDropElement = null, this.prepared = { name: null, axis: null, edges: null }, this.matches = [], this.matchElements = [], this.inertiaStatus = { active: !1, smoothEnd: !1, startEvent: null, upCoords: {}, xe: 0, ye: 0, sx: 0, sy: 0, t0: 0, vx0: 0, vys: 0, duration: 0, resumeDx: 0, resumeDy: 0, lambda_v0: 0, one_ve_v0: 0, i: null }, a(Function.prototype.bind))) this.boundInertiaFrame = this.inertiaFrame.bind(this), this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);else {
	      var t = this;this.boundInertiaFrame = function () {
	        return t.inertiaFrame();
	      }, this.boundSmoothEndFrame = function () {
	        return t.smoothEndFrame();
	      };
	    }this.activeDrops = { dropzones: [], elements: [], rects: [] }, this.pointers = [], this.pointerIds = [], this.downTargets = [], this.downTimes = [], this.holdTimers = [], this.prevCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.curCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.startCoords = { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, this.pointerDelta = { page: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 }, client: { x: 0, y: 0, vx: 0, vy: 0, speed: 0 }, timeStamp: 0 }, this.downEvent = null, this.downPointer = {}, this._eventTarget = null, this._curEventTarget = null, this.prevEvent = null, this.tapTime = 0, this.prevTap = null, this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.snapOffsets = [], this.gesture = { start: { x: 0, y: 0 }, startDistance: 0, prevDistance: 0, distance: 0, scale: 1, startAngle: 0, prevAngle: 0 }, this.snapStatus = { x: 0, y: 0, dx: 0, dy: 0, realX: 0, realY: 0, snappedX: 0, snappedY: 0, targets: [], locked: !1, changed: !1 }, this.restrictStatus = { dx: 0, dy: 0, restrictedX: 0, restrictedY: 0, snap: null, restricted: !1, changed: !1 }, this.restrictStatus.snap = this.snapStatus, this.pointerIsDown = !1, this.pointerWasMoved = !1, this.gesturing = !1, this.dragging = !1, this.resizing = !1, this.resizeAxes = "xy", this.mouse = !1, ze.push(this);
	  }function G(t, e, i) {
	    var r,
	        s = 0,
	        n = ze.length,
	        o = /mouse/i.test(t.pointerType || e) || 4 === t.pointerType,
	        a = E(t);if (/down|start/i.test(e)) for (s = 0; n > s; s++) {
	      r = ze[s];var h = i;if (r.inertiaStatus.active && r.target.options[r.prepared.name].inertia.allowResume && r.mouse === o) for (; h;) {
	        if (h === r.element) {
	          return (r.pointers[0] && r.removePointer(r.pointers[0]), r.addPointer(t), r);
	        }h = k(h);
	      }
	    }if (o || !Oe && !_e) {
	      for (s = 0; n > s; s++) if (ze[s].mouse && !ze[s].inertiaStatus.active) {
	        return ze[s];
	      }for (s = 0; n > s; s++) if (ze[s].mouse && (!/down/.test(e) || !ze[s].inertiaStatus.active)) {
	        return r;
	      }return (r = new $(), r.mouse = !0, r);
	    }for (s = 0; n > s; s++) if (he(ze[s].pointerIds, a)) {
	      return ze[s];
	    }if (/up|end|out/i.test(e)) {
	      return null;
	    }for (s = 0; n > s; s++) if ((r = ze[s], !(r.prepared.name && !r.target.options.gesture.enabled || r.interacting() || !o && r.mouse))) {
	      return (r.addPointer(t), r);
	    }return new $();
	  }function L(t) {
	    return function (e) {
	      var i,
	          r,
	          s = S(e.path ? e.path[0] : e.target),
	          n = S(e.currentTarget);if (Oe && /touch/.test(e.type)) for (Ye = new Date().getTime(), r = 0; r < e.changedTouches.length; r++) {
	        var o = e.changedTouches[r];i = G(o, e.type, s), i && (i._updateEventTargets(s, n), i[t](o, e, s, n));
	      } else {
	        if (!_e && /mouse/.test(e.type)) {
	          for (r = 0; r < ze.length; r++) if (!ze[r].mouse && ze[r].pointerIsDown) return;if (new Date().getTime() - Ye < 500) return;
	        }if ((i = G(e, e.type, s), !i)) return;i._updateEventTargets(s, n), i[t](e, e, s, n);
	      }
	    };
	  }function B(t, e, i, r, s, n) {
	    var o,
	        a,
	        h = t.target,
	        p = t.snapStatus,
	        l = t.restrictStatus,
	        c = t.pointers,
	        u = (h && h.options || Me).deltaSource,
	        g = u + "X",
	        v = u + "Y",
	        m = h ? h.options : Me,
	        f = P(h, s),
	        y = "start" === r,
	        x = "end" === r,
	        E = y ? t.startCoords : t.curCoords;s = s || t.element, a = d({}, E.page), o = d({}, E.client), a.x -= f.x, a.y -= f.y, o.x -= f.x, o.y -= f.y;var S = m[i].snap && m[i].snap.relativePoints;!N(h, i) || y && S && S.length || (this.snap = { range: p.range, locked: p.locked, x: p.snappedX, y: p.snappedY, realX: p.realX, realY: p.realY, dx: p.dx, dy: p.dy }, p.locked && (a.x += p.dx, a.y += p.dy, o.x += p.dx, o.y += p.dy)), !H(h, i) || y && m[i].restrict.elementRect || !l.restricted || (a.x += l.dx, a.y += l.dy, o.x += l.dx, o.y += l.dy, this.restrict = { dx: l.dx, dy: l.dy }), this.pageX = a.x, this.pageY = a.y, this.clientX = o.x, this.clientY = o.y, this.x0 = t.startCoords.page.x, this.y0 = t.startCoords.page.y, this.clientX0 = t.startCoords.client.x, this.clientY0 = t.startCoords.client.y, this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.button = e.button, this.target = s, this.t0 = t.downTimes[0], this.type = i + (r || ""), this.interaction = t, this.interactable = h;var b = t.inertiaStatus;if ((b.active && (this.detail = "inertia"), n && (this.relatedTarget = n), x ? "client" === u ? (this.dx = o.x - t.startCoords.client.x, this.dy = o.y - t.startCoords.client.y) : (this.dx = a.x - t.startCoords.page.x, this.dy = a.y - t.startCoords.page.y) : y ? (this.dx = 0, this.dy = 0) : "inertiastart" === r ? (this.dx = t.prevEvent.dx, this.dy = t.prevEvent.dy) : "client" === u ? (this.dx = o.x - t.prevEvent.clientX, this.dy = o.y - t.prevEvent.clientY) : (this.dx = a.x - t.prevEvent.pageX, this.dy = a.y - t.prevEvent.pageY), t.prevEvent && "inertia" === t.prevEvent.detail && !b.active && m[i].inertia && m[i].inertia.zeroResumeDelta && (b.resumeDx += this.dx, b.resumeDy += this.dy, this.dx = this.dy = 0), "resize" === i && t.resizeAxes ? m.resize.square ? ("y" === t.resizeAxes ? this.dx = this.dy : this.dy = this.dx, this.axes = "xy") : (this.axes = t.resizeAxes, "x" === t.resizeAxes ? this.dy = 0 : "y" === t.resizeAxes && (this.dx = 0)) : "gesture" === i && (this.touches = [c[0], c[1]], y ? (this.distance = C(c, u), this.box = T(c), this.scale = 1, this.ds = 0, this.angle = M(c, void 0, u), this.da = 0) : x || e instanceof B ? (this.distance = t.prevEvent.distance, this.box = t.prevEvent.box, this.scale = t.prevEvent.scale, this.ds = this.scale - 1, this.angle = t.prevEvent.angle, this.da = this.angle - t.gesture.startAngle) : (this.distance = C(c, u), this.box = T(c), this.scale = this.distance / t.gesture.startDistance, this.angle = M(c, t.gesture.prevAngle, u), this.ds = this.scale - t.gesture.prevScale, this.da = this.angle - t.gesture.prevAngle)), y)) this.timeStamp = t.downTimes[0], this.dt = 0, this.duration = 0, this.speed = 0, this.velocityX = 0, this.velocityY = 0;else if ("inertiastart" === r) this.timeStamp = t.prevEvent.timeStamp, this.dt = t.prevEvent.dt, this.duration = t.prevEvent.duration, this.speed = t.prevEvent.speed, this.velocityX = t.prevEvent.velocityX, this.velocityY = t.prevEvent.velocityY;else if ((this.timeStamp = new Date().getTime(), this.dt = this.timeStamp - t.prevEvent.timeStamp, this.duration = this.timeStamp - t.downTimes[0], e instanceof B)) {
	      var w = this[g] - t.prevEvent[g],
	          D = this[v] - t.prevEvent[v],
	          z = this.dt / 1000;this.speed = Se(w, D) / z, this.velocityX = w / z, this.velocityY = D / z;
	    } else this.speed = t.pointerDelta[u].speed, this.velocityX = t.pointerDelta[u].vx, this.velocityY = t.pointerDelta[u].vy;if ((x || "inertiastart" === r) && t.prevEvent.speed > 600 && this.timeStamp - t.prevEvent.timeStamp < 150) {
	      var O = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI,
	          _ = 22.5;0 > O && (O += 360);var A = O >= 135 - _ && 225 + _ > O,
	          X = O >= 225 - _ && 315 + _ > O,
	          Y = !A && (O >= 315 - _ || 45 + _ > O),
	          k = !X && O >= 45 - _ && 135 + _ > O;this.swipe = { up: X, down: k, left: A, right: Y, angle: O, speed: t.prevEvent.speed, velocity: { x: t.prevEvent.velocityX, y: t.prevEvent.velocityY } };
	    }
	  }function K() {
	    this.originalEvent.preventDefault();
	  }function j(t) {
	    var e = "";if (("drag" === t.name && (e = Ie.drag), "resize" === t.name)) if (t.axis) e = Ie[t.name + t.axis];else if (t.edges) {
	      for (var i = "resize", r = ["top", "bottom", "left", "right"], s = 0; 4 > s; s++) t.edges[r[s]] && (i += r[s]);e = Ie[i];
	    }return e;
	  }function J(t, e, r, s, n, o) {
	    if (!e) {
	      return !1;
	    }if (e === !0) {
	      var a = h(o.width) ? o.width : o.right - o.left,
	          p = h(o.height) ? o.height : o.bottom - o.top;if ((0 > a && ("left" === t ? t = "right" : "right" === t && (t = "left")), 0 > p && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")), "left" === t)) {
	        return r.x < (a >= 0 ? o.left : o.right) + Ae;
	      }if ("top" === t) {
	        return r.y < (p >= 0 ? o.top : o.bottom) + Ae;
	      }if ("right" === t) {
	        return r.x > (a >= 0 ? o.right : o.left) - Ae;
	      }if ("bottom" === t) {
	        return r.y > (p >= 0 ? o.bottom : o.top) - Ae;
	      }
	    }return i(s) ? i(e) ? e === s : le(s, e, n) : !1;
	  }function Q(t, e, i) {
	    var r,
	        s = this.getRect(i),
	        n = !1,
	        a = null,
	        h = null,
	        p = d({}, e.curCoords.page),
	        l = this.options;if (!s) {
	      return null;
	    }if (Re.resize && l.resize.enabled) {
	      var c = l.resize;if ((r = { left: !1, right: !1, top: !1, bottom: !1 }, o(c.edges))) {
	        for (var u in r) r[u] = J(u, c.edges[u], p, e._eventTarget, i, s);r.left = r.left && !r.right, r.top = r.top && !r.bottom, n = r.left || r.right || r.top || r.bottom;
	      } else {
	        var g = "y" !== l.resize.axis && p.x > s.right - Ae,
	            v = "x" !== l.resize.axis && p.y > s.bottom - Ae;n = g || v, h = (g ? "x" : "") + (v ? "y" : "");
	      }
	    }return (a = n ? "resize" : Re.drag && l.drag.enabled ? "drag" : null, Re.gesture && e.pointerIds.length >= 2 && !e.dragging && !e.resizing && (a = "gesture"), a ? { name: a, axis: h, edges: r } : null);
	  }function Z(t, e) {
	    if (!o(t)) {
	      return null;
	    }var i = t.name,
	        r = e.options;return ("resize" === i && r.resize.enabled || "drag" === i && r.drag.enabled || "gesture" === i && r.gesture.enabled) && Re[i] ? (("resize" === i || "resizeyx" === i) && (i = "resizexy"), t) : null;
	  }function te(t, e) {
	    var r = {},
	        s = Ce[t.type],
	        n = S(t.path ? t.path[0] : t.target),
	        o = n;e = e ? !0 : !1;for (var a in t) r[a] = t[a];for (r.originalEvent = t, r.preventDefault = K; i(o);) {
	      for (var h = 0; h < s.selectors.length; h++) {
	        var p = s.selectors[h],
	            l = s.contexts[h];if (pe(o, p) && X(l, n) && X(l, o)) {
	          var c = s.listeners[h];r.currentTarget = o;for (var d = 0; d < c.length; d++) c[d][1] === e && c[d][0](r);
	        }
	      }o = k(o);
	    }
	  }function ee(t) {
	    return te.call(this, t, !0);
	  }function ie(t, e) {
	    return De.get(t, e) || new re(t, e);
	  }function re(t, e) {
	    this._element = t, this._iEvents = this._iEvents || {};var r;if (c(t)) {
	      this.selector = t;var s = e && e.context;r = s ? b(s) : ue, s && (r.Node ? s instanceof r.Node : i(s) || s === r.document) && (this._context = s);
	    } else r = b(t), i(t, r) && (Ee ? (Ge.add(this._element, ce.down, Le.pointerDown), Ge.add(this._element, ce.move, Le.pointerHover)) : (Ge.add(this._element, "mousedown", Le.pointerDown), Ge.add(this._element, "mousemove", Le.pointerHover), Ge.add(this._element, "touchstart", Le.pointerDown), Ge.add(this._element, "touchmove", Le.pointerHover)));this._doc = r.document, he(we, this._doc) || oe(this._doc), De.push(this), this.set(e);
	  }function se(t, e) {
	    var i = !1;return function () {
	      return (i || (ue.console.warn(e), i = !0), t.apply(this, arguments));
	    };
	  }function ne(t) {
	    for (var e = 0; e < ze.length; e++) ze[e].pointerEnd(t, t);
	  }function oe(t) {
	    if (!he(we, t)) {
	      var e = t.defaultView || t.parentWindow;for (var i in Ce) Ge.add(t, i, te), Ge.add(t, i, ee, !0);Ee ? (ce = Ee === e.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" }, Ge.add(t, ce.down, Le.selectorDown), Ge.add(t, ce.move, Le.pointerMove), Ge.add(t, ce.over, Le.pointerOver), Ge.add(t, ce.out, Le.pointerOut), Ge.add(t, ce.up, Le.pointerUp), Ge.add(t, ce.cancel, Le.pointerCancel), Ge.add(t, ce.move, Pe.edgeMove)) : (Ge.add(t, "mousedown", Le.selectorDown), Ge.add(t, "mousemove", Le.pointerMove), Ge.add(t, "mouseup", Le.pointerUp), Ge.add(t, "mouseover", Le.pointerOver), Ge.add(t, "mouseout", Le.pointerOut), Ge.add(t, "touchstart", Le.selectorDown), Ge.add(t, "touchmove", Le.pointerMove), Ge.add(t, "touchend", Le.pointerUp), Ge.add(t, "touchcancel", Le.pointerCancel), Ge.add(t, "mousemove", Pe.edgeMove), Ge.add(t, "touchmove", Pe.edgeMove)), Ge.add(e, "blur", ne);try {
	        if (e.frameElement) {
	          var r = e.frameElement.ownerDocument,
	              s = r.defaultView;Ge.add(r, "mouseup", Le.pointerEnd), Ge.add(r, "touchend", Le.pointerEnd), Ge.add(r, "touchcancel", Le.pointerEnd), Ge.add(r, "pointerup", Le.pointerEnd), Ge.add(r, "MSPointerUp", Le.pointerEnd), Ge.add(s, "blur", ne);
	        }
	      } catch (n) {
	        ie.windowParentError = n;
	      }Ge.useAttachEvent && (Ge.add(t, "selectstart", function (t) {
	        var e = ze[0];e.currentAction() && e.checkAndPreventDefault(t);
	      }), Ge.add(t, "dblclick", L("ie8Dblclick"))), we.push(t);
	    }
	  }function ae(t, e) {
	    for (var i = 0, r = t.length; r > i; i++) if (t[i] === e) {
	      return i;
	    }return -1;
	  }function he(t, e) {
	    return -1 !== ae(t, e);
	  }function pe(e, i, r) {
	    return de ? de(e, i, r) : (ue !== t && (i = i.replace(/\/deep\//g, " ")), e[Ue](i));
	  }function le(t, e, r) {
	    for (; i(t);) {
	      if (pe(t, e)) {
	        return !0;
	      }if ((t = k(t), t === r)) {
	        return pe(t, e);
	      }
	    }return !1;
	  }var ce,
	      de,
	      ue = (function () {
	    var e = t.document.createTextNode("");return e.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(e) === e ? t.wrap(t) : t;
	  })(),
	      ge = ue.document,
	      ve = ue.DocumentFragment || e,
	      me = ue.SVGElement || e,
	      fe = ue.SVGSVGElement || e,
	      ye = ue.SVGElementInstance || e,
	      xe = ue.HTMLElement || ue.Element,
	      Ee = ue.PointerEvent || ue.MSPointerEvent,
	      Se = Math.hypot || function (t, e) {
	    return Math.sqrt(t * t + e * e);
	  },
	      be = {},
	      we = [],
	      De = [],
	      ze = [],
	      Te = !1,
	      Ce = {},
	      Me = { base: { accept: null, actionChecker: null, styleCursor: !0, preventDefault: "auto", origin: { x: 0, y: 0 }, deltaSource: "page", allowFrom: null, ignoreFrom: null, _context: ge, dropChecker: null }, drag: { enabled: !1, manualStart: !0, max: 1 / 0, maxPerElement: 1, snap: null, restrict: null, inertia: null, autoScroll: null, axis: "xy" }, drop: { enabled: !1, accept: null, overlap: "pointer" }, resize: { enabled: !1, manualStart: !1, max: 1 / 0, maxPerElement: 1, snap: null, restrict: null, inertia: null, autoScroll: null, square: !1, axis: "xy", edges: null, invert: "none" }, gesture: { manualStart: !1, enabled: !1, max: 1 / 0, maxPerElement: 1, restrict: null }, perAction: { manualStart: !1, max: 1 / 0, maxPerElement: 1, snap: { enabled: !1, endOnly: !1, range: 1 / 0, targets: null, offsets: null, relativePoints: null }, restrict: { enabled: !1, endOnly: !1 }, autoScroll: { enabled: !1, container: null, margin: 60, speed: 300 }, inertia: { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, zeroResumeDelta: !0, smoothEndDuration: 300 } }, _holdDuration: 600 },
	      Pe = { interaction: null, i: null, x: 0, y: 0, scroll: function scroll() {
	      var t = Pe.interaction.target.options[Pe.interaction.prepared.name].autoScroll,
	          e = t.container || b(Pe.interaction.element),
	          i = new Date().getTime(),
	          s = (i - Pe.prevTime) / 1000,
	          n = t.speed * s;n >= 1 && (r(e) ? e.scrollBy(Pe.x * n, Pe.y * n) : e && (e.scrollLeft += Pe.x * n, e.scrollTop += Pe.y * n), Pe.prevTime = i), Pe.isScrolling && ($e(Pe.i), Pe.i = Ve(Pe.scroll));
	    }, edgeMove: function edgeMove(t) {
	      for (var e, i, s = !1, n = 0; n < ze.length; n++) if ((e = ze[n], e.interacting() && W(e.target, e.prepared.name))) {
	        i = e.target, s = !0;break;
	      }if (s) {
	        var o,
	            a,
	            h,
	            p,
	            l = i.options[e.prepared.name].autoScroll,
	            c = l.container || b(e.element);if (r(c)) p = t.clientX < Pe.margin, o = t.clientY < Pe.margin, a = t.clientX > c.innerWidth - Pe.margin, h = t.clientY > c.innerHeight - Pe.margin;else {
	          var d = w(c);p = t.clientX < d.left + Pe.margin, o = t.clientY < d.top + Pe.margin, a = t.clientX > d.right - Pe.margin, h = t.clientY > d.bottom - Pe.margin;
	        }Pe.x = a ? 1 : p ? -1 : 0, Pe.y = h ? 1 : o ? -1 : 0, Pe.isScrolling || (Pe.margin = l.margin, Pe.speed = l.speed, Pe.start(e));
	      }
	    }, isScrolling: !1, prevTime: 0, start: function start(t) {
	      Pe.isScrolling = !0, $e(Pe.i), Pe.interaction = t, Pe.prevTime = new Date().getTime(), Pe.i = Ve(Pe.scroll);
	    }, stop: function stop() {
	      Pe.isScrolling = !1, $e(Pe.i);
	    } },
	      Oe = "ontouchstart" in ue || ue.DocumentTouch && ge instanceof ue.DocumentTouch,
	      _e = !!Ee,
	      Ae = Oe || _e ? 20 : 10,
	      Xe = 1,
	      Ye = 0,
	      ke = 1 / 0,
	      Ie = ge.all && !ue.atob ? { drag: "move", resizex: "e-resize", resizey: "s-resize", resizexy: "se-resize", resizetop: "n-resize", resizeleft: "w-resize", resizebottom: "s-resize", resizeright: "e-resize", resizetopleft: "se-resize", resizebottomright: "se-resize", resizetopright: "ne-resize", resizebottomleft: "ne-resize", gesture: "" } : { drag: "move", resizex: "ew-resize", resizey: "ns-resize", resizexy: "nwse-resize", resizetop: "ns-resize", resizeleft: "ew-resize", resizebottom: "ns-resize", resizeright: "ew-resize", resizetopleft: "nwse-resize", resizebottomright: "nwse-resize", resizetopright: "nesw-resize", resizebottomleft: "nesw-resize", gesture: "" },
	      Re = { drag: !0, resize: !0, gesture: !0 },
	      Fe = "onmousewheel" in ge ? "mousewheel" : "wheel",
	      qe = ["dragstart", "dragmove", "draginertiastart", "dragend", "dragenter", "dragleave", "dropactivate", "dropdeactivate", "dropmove", "drop", "resizestart", "resizemove", "resizeinertiastart", "resizeend", "gesturestart", "gesturemove", "gestureinertiastart", "gestureend", "down", "move", "up", "cancel", "tap", "doubletap", "hold"],
	      Ne = {},
	      He = "Opera" == navigator.appName && Oe && navigator.userAgent.match("Presto"),
	      We = /iP(hone|od|ad)/.test(navigator.platform) && /OS [1-7][^\d]/.test(navigator.appVersion),
	      Ue = "matches" in Element.prototype ? "matches" : "webkitMatchesSelector" in Element.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in Element.prototype ? "mozMatchesSelector" : "oMatchesSelector" in Element.prototype ? "oMatchesSelector" : "msMatchesSelector",
	      Ve = t.requestAnimationFrame,
	      $e = t.cancelAnimationFrame,
	      Ge = (function () {
	    function t(t, e, a, d) {
	      var u = ae(p, t),
	          g = l[u];if ((g || (g = { events: {}, typeCount: 0 }, u = p.push(t) - 1, l.push(g), c.push(n ? { supplied: [], wrapped: [], useCount: [] } : null)), g.events[e] || (g.events[e] = [], g.typeCount++), !he(g.events[e], a))) {
	        var v;if (n) {
	          var m = c[u],
	              f = ae(m.supplied, a),
	              y = m.wrapped[f] || function (e) {
	            e.immediatePropagationStopped || (e.target = e.srcElement, e.currentTarget = t, e.preventDefault = e.preventDefault || i, e.stopPropagation = e.stopPropagation || r, e.stopImmediatePropagation = e.stopImmediatePropagation || s, /mouse|click/.test(e.type) && (e.pageX = e.clientX + b(t).document.documentElement.scrollLeft, e.pageY = e.clientY + b(t).document.documentElement.scrollTop), a(e));
	          };v = t[o](h + e, y, Boolean(d)), -1 === f ? (m.supplied.push(a), m.wrapped.push(y), m.useCount.push(1)) : m.useCount[f]++;
	        } else v = t[o](e, a, d || !1);return (g.events[e].push(a), v);
	      }
	    }function e(t, i, r, s) {
	      var o,
	          d,
	          u,
	          g = ae(p, t),
	          v = l[g],
	          m = r;if (v && v.events) if ((n && (d = c[g], u = ae(d.supplied, r), m = d.wrapped[u]), "all" !== i)) {
	        if (v.events[i]) {
	          var f = v.events[i].length;if ("all" === r) for (o = 0; f > o; o++) e(t, i, v.events[i][o], Boolean(s));else for (o = 0; f > o; o++) if (v.events[i][o] === r) {
	            t[a](h + i, m, s || !1), v.events[i].splice(o, 1), n && d && (d.useCount[u]--, 0 === d.useCount[u] && (d.supplied.splice(u, 1), d.wrapped.splice(u, 1), d.useCount.splice(u, 1)));break;
	          }v.events[i] && 0 === v.events[i].length && (v.events[i] = null, v.typeCount--);
	        }v.typeCount || (l.splice(g), p.splice(g), c.splice(g));
	      } else for (i in v.events) v.events.hasOwnProperty(i) && e(t, i, "all");
	    }function i() {
	      this.returnValue = !1;
	    }function r() {
	      this.cancelBubble = !0;
	    }function s() {
	      this.cancelBubble = !0, this.immediatePropagationStopped = !0;
	    }var n = "attachEvent" in ue && !("addEventListener" in ue),
	        o = n ? "attachEvent" : "addEventListener",
	        a = n ? "detachEvent" : "removeEventListener",
	        h = n ? "on" : "",
	        p = [],
	        l = [],
	        c = [];return { add: t, remove: e, useAttachEvent: n, _elements: p, _targets: l, _attachedListeners: c };
	  })();$.prototype = { getPageXY: function getPageXY(t, e) {
	      return f(t, e, this);
	    }, getClientXY: function getClientXY(t, e) {
	      return y(t, e, this);
	    }, setEventXY: function setEventXY(t, e) {
	      return g(t, e, this);
	    }, pointerOver: function pointerOver(t, e, i) {
	      function r(t, e) {
	        t && I(t, i) && !R(t, i, i) && F(t, i, i) && pe(i, e) && (s.push(t), n.push(i));
	      }if (!this.prepared.name && this.mouse) {
	        var s = [],
	            n = [],
	            o = this.element;this.addPointer(t), !this.target || !R(this.target, this.element, i) && F(this.target, this.element, i) || (this.target = null, this.element = null, this.matches = [], this.matchElements = []);var a = De.get(i),
	            h = a && !R(a, i, i) && F(a, i, i) && Z(a.getAction(t, this, i), a);h && !U(a, i, h) && (h = null), h ? (this.target = a, this.element = i, this.matches = [], this.matchElements = []) : (De.forEachSelector(r), this.validateSelector(t, s, n) ? (this.matches = s, this.matchElements = n, this.pointerHover(t, e, this.matches, this.matchElements), Ge.add(i, Ee ? ce.move : "mousemove", Le.pointerHover)) : this.target && (X(o, i) ? (this.pointerHover(t, e, this.matches, this.matchElements), Ge.add(this.element, Ee ? ce.move : "mousemove", Le.pointerHover)) : (this.target = null, this.element = null, this.matches = [], this.matchElements = [])));
	      }
	    }, pointerHover: function pointerHover(t, e, i, r, s, n) {
	      var o = this.target;if (!this.prepared.name && this.mouse) {
	        var a;this.setEventXY(this.curCoords, t), s ? a = this.validateSelector(t, s, n) : o && (a = Z(o.getAction(this.pointers[0], this, this.element), this.target)), o && o.options.styleCursor && (o._doc.documentElement.style.cursor = a ? j(a) : "");
	      } else this.prepared.name && this.checkAndPreventDefault(e, o, this.element);
	    }, pointerOut: function pointerOut(t, e, i) {
	      this.prepared.name || (De.get(i) || Ge.remove(i, Ee ? ce.move : "mousemove", Le.pointerHover), this.target && this.target.options.styleCursor && !this.interacting() && (this.target._doc.documentElement.style.cursor = ""));
	    }, selectorDown: function selectorDown(t, e, r, s) {
	      function n(t, e, i) {
	        var s = de ? i.querySelectorAll(e) : void 0;I(t, p) && !R(t, p, r) && F(t, p, r) && pe(p, e, s) && (a.matches.push(t), a.matchElements.push(p));
	      }var o,
	          a = this,
	          h = Ge.useAttachEvent ? d({}, e) : e,
	          p = r,
	          l = this.addPointer(t);if ((this.holdTimers[l] = setTimeout(function () {
	        a.pointerHold(Ge.useAttachEvent ? h : t, h, r, s);
	      }, Me._holdDuration), this.pointerIsDown = !0, this.inertiaStatus.active && this.target.selector)) for (; i(p);) {
	        if (p === this.element && Z(this.target.getAction(t, this, this.element), this.target).name === this.prepared.name) {
	          return ($e(this.inertiaStatus.i), this.inertiaStatus.active = !1, void this.collectEventTargets(t, e, r, "down"));
	        }p = k(p);
	      }if (this.interacting()) {
	        return void this.collectEventTargets(t, e, r, "down");
	      }for (this.setEventXY(this.curCoords, t); i(p) && !o;) this.matches = [], this.matchElements = [], De.forEachSelector(n), o = this.validateSelector(t, this.matches, this.matchElements), p = k(p);return o ? (this.prepared.name = o.name, this.prepared.axis = o.axis, this.prepared.edges = o.edges, this.collectEventTargets(t, e, r, "down"), this.pointerDown(t, e, r, s, o)) : (this.downTimes[l] = new Date().getTime(), this.downTargets[l] = r, this.downEvent = e, d(this.downPointer, t), u(this.prevCoords, this.curCoords), this.pointerWasMoved = !1, void this.collectEventTargets(t, e, r, "down"));
	    }, pointerDown: function pointerDown(t, e, i, r, s) {
	      if (!s && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
	        return void this.checkAndPreventDefault(e, this.target, this.element);
	      }this.pointerIsDown = !0;var n,
	          o = this.addPointer(t);if (this.pointerIds.length < 2 && !this.target || !this.prepared.name) {
	        var a = De.get(r);a && !R(a, r, i) && F(a, r, i) && (n = Z(s || a.getAction(t, this, r), a, i)) && U(a, r, n) && (this.target = a, this.element = r);
	      }var h = this.target,
	          p = h && h.options;if (h && !this.interacting()) {
	        if ((n = n || Z(s || h.getAction(t, this, r), h, this.element), this.setEventXY(this.startCoords), !n)) {
	          return;
	        }p.styleCursor && (h._doc.documentElement.style.cursor = j(n)), this.resizeAxes = "resize" === n.name ? n.axis : null, "gesture" === n && this.pointerIds.length < 2 && (n = null), this.prepared.name = n.name, this.prepared.axis = n.axis, this.prepared.edges = n.edges, this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = 0 / 0, this.downTimes[o] = new Date().getTime(), this.downTargets[o] = i, this.downEvent = e, d(this.downPointer, t), this.setEventXY(this.prevCoords), this.pointerWasMoved = !1, this.checkAndPreventDefault(e, h, this.element);
	      } else this.inertiaStatus.active && r === this.element && Z(h.getAction(t, this, this.element), h).name === this.prepared.name && ($e(this.inertiaStatus.i), this.inertiaStatus.active = !1, this.checkAndPreventDefault(e, h, this.element));
	    }, setModifications: function setModifications(t, e) {
	      var i = this.target,
	          r = !0,
	          s = N(i, this.prepared.name) && (!i.options[this.prepared.name].snap.endOnly || e),
	          n = H(i, this.prepared.name) && (!i.options[this.prepared.name].restrict.endOnly || e);return (s ? this.setSnapping(t) : this.snapStatus.locked = !1, n ? this.setRestriction(t) : this.restrictStatus.restricted = !1, s && this.snapStatus.locked && !this.snapStatus.changed ? r = n && this.restrictStatus.restricted && this.restrictStatus.changed : n && this.restrictStatus.restricted && !this.restrictStatus.changed && (r = !1), r);
	    }, setStartOffsets: function setStartOffsets(t, e, i) {
	      var r,
	          s,
	          n = e.getRect(i),
	          o = P(e, i),
	          a = e.options[this.prepared.name].snap,
	          h = e.options[this.prepared.name].restrict;n ? (this.startOffset.left = this.startCoords.page.x - n.left, this.startOffset.top = this.startCoords.page.y - n.top, this.startOffset.right = n.right - this.startCoords.page.x, this.startOffset.bottom = n.bottom - this.startCoords.page.y, r = "width" in n ? n.width : n.right - n.left, s = "height" in n ? n.height : n.bottom - n.top) : this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0, this.snapOffsets.splice(0);var p = a && "startCoords" === a.offset ? { x: this.startCoords.page.x - o.x, y: this.startCoords.page.y - o.y } : a && a.offset || { x: 0, y: 0 };if (n && a && a.relativePoints && a.relativePoints.length) for (var l = 0; l < a.relativePoints.length; l++) this.snapOffsets.push({ x: this.startOffset.left - r * a.relativePoints[l].x + p.x, y: this.startOffset.top - s * a.relativePoints[l].y + p.y });else this.snapOffsets.push(p);n && h.elementRect ? (this.restrictOffset.left = this.startOffset.left - r * h.elementRect.left, this.restrictOffset.top = this.startOffset.top - s * h.elementRect.top, this.restrictOffset.right = this.startOffset.right - r * (1 - h.elementRect.right), this.restrictOffset.bottom = this.startOffset.bottom - s * (1 - h.elementRect.bottom)) : this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
	    }, start: function start(t, e, i) {
	      this.interacting() || !this.pointerIsDown || this.pointerIds.length < ("gesture" === t.name ? 2 : 1) || (-1 === ae(ze, this) && ze.push(this), this.prepared.name = t.name, this.prepared.axis = t.axis, this.prepared.edges = t.edges, this.target = e, this.element = i, this.setStartOffsets(t.name, e, i), this.setModifications(this.startCoords.page), this.prevEvent = this[this.prepared.name + "Start"](this.downEvent));
	    }, pointerMove: function pointerMove(t, e, r, s, n) {
	      this.recordPointer(t), this.setEventXY(this.curCoords, t instanceof B ? this.inertiaStatus.startEvent : void 0);var o,
	          a,
	          h = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y,
	          p = this.mouse ? 0 : ae(this.pointerIds, E(t));if ((this.pointerIsDown && !this.pointerWasMoved && (o = this.curCoords.client.x - this.startCoords.client.x, a = this.curCoords.client.y - this.startCoords.client.y, this.pointerWasMoved = Se(o, a) > Xe), h || this.pointerIsDown && !this.pointerWasMoved || (this.pointerIsDown && clearTimeout(this.holdTimers[p]), this.collectEventTargets(t, e, r, "move")), this.pointerIsDown)) {
	        if (h && this.pointerWasMoved && !n) {
	          return void this.checkAndPreventDefault(e, this.target, this.element);
	        }if ((v(this.pointerDelta, this.prevCoords, this.curCoords), this.prepared.name)) {
	          if (this.pointerWasMoved && (!this.inertiaStatus.active || t instanceof B && /inertiastart/.test(t.type))) {
	            if (!this.interacting() && (v(this.pointerDelta, this.prevCoords, this.curCoords), "drag" === this.prepared.name)) {
	              var l = Math.abs(o),
	                  c = Math.abs(a),
	                  d = this.target.options.drag.axis,
	                  g = l > c ? "x" : c > l ? "y" : "xy";if ("xy" !== g && "xy" !== d && d !== g) {
	                this.prepared.name = null;for (var m = r; i(m);) {
	                  var f = De.get(m);if (f && f !== this.target && !f.options.drag.manualStart && "drag" === f.getAction(this.downPointer, this, m).name && q(g, f)) {
	                    this.prepared.name = "drag", this.target = f, this.element = m;break;
	                  }m = k(m);
	                }if (!this.prepared.name) {
	                  var y = function y(t, e, i) {
	                    var s = de ? i.querySelectorAll(e) : void 0;if (t !== this.target) {
	                      return I(t, r) && !t.options.drag.manualStart && !R(t, m, r) && F(t, m, r) && pe(m, e, s) && "drag" === t.getAction(this.downPointer, this, m).name && q(g, t) && U(t, m, "drag") ? t : void 0;
	                    }
	                  };for (m = r; i(m);) {
	                    var x = De.forEachSelector(y);if (x) {
	                      this.prepared.name = "drag", this.target = x, this.element = m;break;
	                    }m = k(m);
	                  }
	                }
	              }
	            }var S = !!this.prepared.name && !this.interacting();if (S && (this.target.options[this.prepared.name].manualStart || !U(this.target, this.element, this.prepared))) {
	              return void this.stop();
	            }if (this.prepared.name && this.target) {
	              S && this.start(this.prepared, this.target, this.element);var b = this.setModifications(this.curCoords.page, n);(b || S) && (this.prevEvent = this[this.prepared.name + "Move"](e)), this.checkAndPreventDefault(e, this.target, this.element);
	            }
	          }u(this.prevCoords, this.curCoords), (this.dragging || this.resizing) && Pe.edgeMove(e);
	        }
	      }
	    }, dragStart: function dragStart(t) {
	      var e = new B(this, t, "drag", "start", this.element);
	      this.dragging = !0, this.target.fire(e), this.activeDrops.dropzones = [], this.activeDrops.elements = [], this.activeDrops.rects = [], this.dynamicDrop || this.setActiveDrops(this.element);var i = this.getDropEvents(t, e);return (i.activate && this.fireActiveDrops(i.activate), e);
	    }, dragMove: function dragMove(t) {
	      var e = this.target,
	          i = new B(this, t, "drag", "move", this.element),
	          r = this.element,
	          s = this.getDrop(i, r);this.dropTarget = s.dropzone, this.dropElement = s.element;var n = this.getDropEvents(t, i);return (e.fire(i), n.leave && this.prevDropTarget.fire(n.leave), n.enter && this.dropTarget.fire(n.enter), n.move && this.dropTarget.fire(n.move), this.prevDropTarget = this.dropTarget, this.prevDropElement = this.dropElement, i);
	    }, resizeStart: function resizeStart(t) {
	      var e = new B(this, t, "resize", "start", this.element);if (this.prepared.edges) {
	        var i = this.target.getRect(this.element);if (this.target.options.resize.square) {
	          var r = d({}, this.prepared.edges);r.top = r.top || r.left && !r.bottom, r.left = r.left || r.top && !r.right, r.bottom = r.bottom || r.right && !r.top, r.right = r.right || r.bottom && !r.left, this.prepared._squareEdges = r;
	        } else this.prepared._squareEdges = null;this.resizeRects = { start: i, current: d({}, i), restricted: d({}, i), previous: d({}, i), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, e.rect = this.resizeRects.restricted, e.deltaRect = this.resizeRects.delta;
	      }return (this.target.fire(e), this.resizing = !0, e);
	    }, resizeMove: function resizeMove(t) {
	      var e = new B(this, t, "resize", "move", this.element),
	          i = this.prepared.edges,
	          r = this.target.options.resize.invert,
	          s = "reposition" === r || "negate" === r;if (i) {
	        var n = e.dx,
	            o = e.dy,
	            a = this.resizeRects.start,
	            h = this.resizeRects.current,
	            p = this.resizeRects.restricted,
	            l = this.resizeRects.delta,
	            c = d(this.resizeRects.previous, p);if (this.target.options.resize.square) {
	          var u = i;i = this.prepared._squareEdges, u.left && u.bottom || u.right && u.top ? o = -n : u.left || u.right ? o = n : (u.top || u.bottom) && (n = o);
	        }if ((i.top && (h.top += o), i.bottom && (h.bottom += o), i.left && (h.left += n), i.right && (h.right += n), s)) {
	          if ((d(p, h), "reposition" === r)) {
	            var g;p.top > p.bottom && (g = p.top, p.top = p.bottom, p.bottom = g), p.left > p.right && (g = p.left, p.left = p.right, p.right = g);
	          }
	        } else p.top = Math.min(h.top, a.bottom), p.bottom = Math.max(h.bottom, a.top), p.left = Math.min(h.left, a.right), p.right = Math.max(h.right, a.left);p.width = p.right - p.left, p.height = p.bottom - p.top;for (var v in p) l[v] = p[v] - c[v];e.edges = this.prepared.edges, e.rect = p, e.deltaRect = l;
	      }return (this.target.fire(e), e);
	    }, gestureStart: function gestureStart(t) {
	      var e = new B(this, t, "gesture", "start", this.element);return (e.ds = 0, this.gesture.startDistance = this.gesture.prevDistance = e.distance, this.gesture.startAngle = this.gesture.prevAngle = e.angle, this.gesture.scale = 1, this.gesturing = !0, this.target.fire(e), e);
	    }, gestureMove: function gestureMove(t) {
	      if (!this.pointerIds.length) {
	        return this.prevEvent;
	      }var e;return (e = new B(this, t, "gesture", "move", this.element), e.ds = e.scale - this.gesture.scale, this.target.fire(e), this.gesture.prevAngle = e.angle, this.gesture.prevDistance = e.distance, 1 / 0 === e.scale || null === e.scale || void 0 === e.scale || isNaN(e.scale) || (this.gesture.scale = e.scale), e);
	    }, pointerHold: function pointerHold(t, e, i) {
	      this.collectEventTargets(t, e, i, "hold");
	    }, pointerUp: function pointerUp(t, e, i, r) {
	      var s = this.mouse ? 0 : ae(this.pointerIds, E(t));clearTimeout(this.holdTimers[s]), this.collectEventTargets(t, e, i, "up"), this.collectEventTargets(t, e, i, "tap"), this.pointerEnd(t, e, i, r), this.removePointer(t);
	    }, pointerCancel: function pointerCancel(t, e, i, r) {
	      var s = this.mouse ? 0 : ae(this.pointerIds, E(t));clearTimeout(this.holdTimers[s]), this.collectEventTargets(t, e, i, "cancel"), this.pointerEnd(t, e, i, r), this.removePointer(t);
	    }, ie8Dblclick: function ie8Dblclick(t, e, i) {
	      this.prevTap && e.clientX === this.prevTap.clientX && e.clientY === this.prevTap.clientY && i === this.prevTap.target && (this.downTargets[0] = i, this.downTimes[0] = new Date().getTime(), this.collectEventTargets(t, e, i, "tap"));
	    }, pointerEnd: function pointerEnd(t, e, i, r) {
	      var s,
	          n = this.target,
	          o = n && n.options,
	          a = o && this.prepared.name && o[this.prepared.name].inertia,
	          h = this.inertiaStatus;if (this.interacting()) {
	        if (h.active) {
	          return;
	        }var p,
	            l,
	            c = new Date().getTime(),
	            g = !1,
	            v = !1,
	            m = !1,
	            f = N(n, this.prepared.name) && o[this.prepared.name].snap.endOnly,
	            y = H(n, this.prepared.name) && o[this.prepared.name].restrict.endOnly,
	            x = 0,
	            E = 0;if ((p = this.dragging ? "x" === o.drag.axis ? Math.abs(this.pointerDelta.client.vx) : "y" === o.drag.axis ? Math.abs(this.pointerDelta.client.vy) : this.pointerDelta.client.speed : this.pointerDelta.client.speed, g = a && a.enabled && "gesture" !== this.prepared.name && e !== h.startEvent, v = g && c - this.curCoords.timeStamp < 50 && p > a.minSpeed && p > a.endSpeed, g && !v && (f || y))) {
	          var S = {};S.snap = S.restrict = S, f && (this.setSnapping(this.curCoords.page, S), S.locked && (x += S.dx, E += S.dy)), y && (this.setRestriction(this.curCoords.page, S), S.restricted && (x += S.dx, E += S.dy)), (x || E) && (m = !0);
	        }if (v || m) {
	          if ((u(h.upCoords, this.curCoords), this.pointers[0] = h.startEvent = l = new B(this, e, this.prepared.name, "inertiastart", this.element), h.t0 = c, n.fire(h.startEvent), v)) {
	            h.vx0 = this.pointerDelta.client.vx, h.vy0 = this.pointerDelta.client.vy, h.v0 = p, this.calcInertia(h);var b,
	                w = d({}, this.curCoords.page),
	                D = P(n, this.element);if ((w.x = w.x + h.xe - D.x, w.y = w.y + h.ye - D.y, b = { useStatusXY: !0, x: w.x, y: w.y, dx: 0, dy: 0, snap: null }, b.snap = b, x = E = 0, f)) {
	              var z = this.setSnapping(this.curCoords.page, b);z.locked && (x += z.dx, E += z.dy);
	            }if (y) {
	              var T = this.setRestriction(this.curCoords.page, b);T.restricted && (x += T.dx, E += T.dy);
	            }h.modifiedXe += x, h.modifiedYe += E, h.i = Ve(this.boundInertiaFrame);
	          } else h.smoothEnd = !0, h.xe = x, h.ye = E, h.sx = h.sy = 0, h.i = Ve(this.boundSmoothEndFrame);return void (h.active = !0);
	        }(f || y) && this.pointerMove(t, e, i, r, !0);
	      }if (this.dragging) {
	        s = new B(this, e, "drag", "end", this.element);var C = this.element,
	            M = this.getDrop(s, C);this.dropTarget = M.dropzone, this.dropElement = M.element;var O = this.getDropEvents(e, s);O.leave && this.prevDropTarget.fire(O.leave), O.enter && this.dropTarget.fire(O.enter), O.drop && this.dropTarget.fire(O.drop), O.deactivate && this.fireActiveDrops(O.deactivate), n.fire(s);
	      } else this.resizing ? (s = new B(this, e, "resize", "end", this.element), n.fire(s)) : this.gesturing && (s = new B(this, e, "gesture", "end", this.element), n.fire(s));this.stop(e);
	    }, collectDrops: function collectDrops(t) {
	      var e,
	          r = [],
	          s = [];for (t = t || this.element, e = 0; e < De.length; e++) if (De[e].options.drop.enabled) {
	        var n = De[e],
	            o = n.options.drop.accept;if (!(i(o) && o !== t || l(o) && !pe(t, o))) for (var a = n.selector ? n._context.querySelectorAll(n.selector) : [n._element], h = 0, p = a.length; p > h; h++) {
	          var c = a[h];c !== t && (r.push(n), s.push(c));
	        }
	      }return { dropzones: r, elements: s };
	    }, fireActiveDrops: function fireActiveDrops(t) {
	      var e, i, r, s;for (e = 0; e < this.activeDrops.dropzones.length; e++) i = this.activeDrops.dropzones[e], r = this.activeDrops.elements[e], r !== s && (t.target = r, i.fire(t)), s = r;
	    }, setActiveDrops: function setActiveDrops(t) {
	      var e = this.collectDrops(t, !0);this.activeDrops.dropzones = e.dropzones, this.activeDrops.elements = e.elements, this.activeDrops.rects = [];for (var i = 0; i < this.activeDrops.dropzones.length; i++) this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
	    }, getDrop: function getDrop(t, e) {
	      var i = [];Te && this.setActiveDrops(e);for (var r = 0; r < this.activeDrops.dropzones.length; r++) {
	        var s = this.activeDrops.dropzones[r],
	            n = this.activeDrops.elements[r],
	            o = this.activeDrops.rects[r];i.push(s.dropCheck(this.pointers[0], this.target, e, n, o) ? n : null);
	      }var a = V(i),
	          h = this.activeDrops.dropzones[a] || null,
	          p = this.activeDrops.elements[a] || null;return { dropzone: h, element: p };
	    }, getDropEvents: function getDropEvents(t, e) {
	      var i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };return (this.dropElement !== this.prevDropElement && (this.prevDropTarget && (i.leave = { target: this.prevDropElement, dropzone: this.prevDropTarget, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, timeStamp: e.timeStamp, type: "dragleave" }, e.dragLeave = this.prevDropElement, e.prevDropzone = this.prevDropTarget), this.dropTarget && (i.enter = { target: this.dropElement, dropzone: this.dropTarget, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, timeStamp: e.timeStamp, type: "dragenter" }, e.dragEnter = this.dropElement, e.dropzone = this.dropTarget)), "dragend" === e.type && this.dropTarget && (i.drop = { target: this.dropElement, dropzone: this.dropTarget, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, timeStamp: e.timeStamp, type: "drop" }), "dragstart" === e.type && (i.activate = { target: null, dropzone: null, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, timeStamp: e.timeStamp, type: "dropactivate" }), "dragend" === e.type && (i.deactivate = { target: null, dropzone: null, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, timeStamp: e.timeStamp, type: "dropdeactivate" }), "dragmove" === e.type && this.dropTarget && (i.move = { target: this.dropElement, dropzone: this.dropTarget, relatedTarget: e.target, draggable: e.interactable, dragEvent: e, interaction: this, dragmove: e, timeStamp: e.timeStamp, type: "dropmove" }, e.dropzone = this.dropTarget), i);
	    }, currentAction: function currentAction() {
	      return this.dragging && "drag" || this.resizing && "resize" || this.gesturing && "gesture" || null;
	    }, interacting: function interacting() {
	      return this.dragging || this.resizing || this.gesturing;
	    }, clearTargets: function clearTargets() {
	      this.target && !this.target.selector && (this.target = this.element = null), this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
	    }, stop: function stop(t) {
	      if (this.interacting()) {
	        Pe.stop(), this.matches = [], this.matchElements = [];var e = this.target;e.options.styleCursor && (e._doc.documentElement.style.cursor = ""), t && a(t.preventDefault) && this.checkAndPreventDefault(t, e, this.element), this.dragging && (this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null), this.clearTargets();
	      }this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = !1, this.prepared.name = this.prevEvent = null, this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;for (var i = 0; i < this.pointers.length; i++) -1 === ae(this.pointerIds, E(this.pointers[i])) && this.pointers.splice(i, 1);ze.length > 1 && ze.splice(ae(ze, this), 1);
	    }, inertiaFrame: function inertiaFrame() {
	      var t = this.inertiaStatus,
	          e = this.target.options[this.prepared.name].inertia,
	          i = e.resistance,
	          r = new Date().getTime() / 1000 - t.t0;if (r < t.te) {
	        var s = 1 - (Math.exp(-i * r) - t.lambda_v0) / t.one_ve_v0;if (t.modifiedXe === t.xe && t.modifiedYe === t.ye) t.sx = t.xe * s, t.sy = t.ye * s;else {
	          var n = _(0, 0, t.xe, t.ye, t.modifiedXe, t.modifiedYe, s);t.sx = n.x, t.sy = n.y;
	        }this.pointerMove(t.startEvent, t.startEvent), t.i = Ve(this.boundInertiaFrame);
	      } else t.sx = t.modifiedXe, t.sy = t.modifiedYe, this.pointerMove(t.startEvent, t.startEvent), t.active = !1, this.pointerEnd(t.startEvent, t.startEvent);
	    }, smoothEndFrame: function smoothEndFrame() {
	      var t = this.inertiaStatus,
	          e = new Date().getTime() - t.t0,
	          i = this.target.options[this.prepared.name].inertia.smoothEndDuration;i > e ? (t.sx = A(e, 0, t.xe, i), t.sy = A(e, 0, t.ye, i), this.pointerMove(t.startEvent, t.startEvent), t.i = Ve(this.boundSmoothEndFrame)) : (t.sx = t.xe, t.sy = t.ye, this.pointerMove(t.startEvent, t.startEvent), t.active = !1, t.smoothEnd = !1, this.pointerEnd(t.startEvent, t.startEvent));
	    }, addPointer: function addPointer(t) {
	      var e = E(t),
	          i = this.mouse ? 0 : ae(this.pointerIds, e);return (-1 === i && (i = this.pointerIds.length), this.pointerIds[i] = e, this.pointers[i] = t, i);
	    }, removePointer: function removePointer(t) {
	      var e = E(t),
	          i = this.mouse ? 0 : ae(this.pointerIds, e);-1 !== i && (this.interacting() || this.pointers.splice(i, 1), this.pointerIds.splice(i, 1), this.downTargets.splice(i, 1), this.downTimes.splice(i, 1), this.holdTimers.splice(i, 1));
	    }, recordPointer: function recordPointer(t) {
	      if (!this.inertiaStatus.active) {
	        var e = this.mouse ? 0 : ae(this.pointerIds, E(t));-1 !== e && (this.pointers[e] = t);
	      }
	    }, collectEventTargets: function collectEventTargets(t, e, r, s) {
	      function n(t, e, n) {
	        var o = de ? n.querySelectorAll(e) : void 0;t._iEvents[s] && i(p) && I(t, p) && !R(t, p, r) && F(t, p, r) && pe(p, e, o) && (a.push(t), h.push(p));
	      }var o = this.mouse ? 0 : ae(this.pointerIds, E(t));if ("tap" !== s || !this.pointerWasMoved && this.downTargets[o] && this.downTargets[o] === r) {
	        for (var a = [], h = [], p = r; p;) ie.isSet(p) && ie(p)._iEvents[s] && (a.push(ie(p)), h.push(p)), De.forEachSelector(n), p = k(p);(a.length || "tap" === s) && this.firePointers(t, e, r, a, h, s);
	      }
	    }, firePointers: function firePointers(t, e, i, r, s, n) {
	      var o,
	          a,
	          h,
	          p = this.mouse ? 0 : ae(E(t)),
	          c = {};for ("doubletap" === n ? c = t : (d(c, e), e !== t && d(c, t), c.preventDefault = K, c.stopPropagation = B.prototype.stopPropagation, c.stopImmediatePropagation = B.prototype.stopImmediatePropagation, c.interaction = this, c.timeStamp = new Date().getTime(), c.originalEvent = e, c.type = n, c.pointerId = E(t), c.pointerType = this.mouse ? "mouse" : _e ? l(t.pointerType) ? t.pointerType : [,, "touch", "pen", "mouse"][t.pointerType] : "touch"), "tap" === n && (c.dt = c.timeStamp - this.downTimes[p], a = c.timeStamp - this.tapTime, h = !!(this.prevTap && "doubletap" !== this.prevTap.type && this.prevTap.target === c.target && 500 > a), c.double = h, this.tapTime = c.timeStamp), o = 0; o < r.length && (c.currentTarget = s[o], c.interactable = r[o], r[o].fire(c), !(c.immediatePropagationStopped || c.propagationStopped && s[o + 1] !== c.currentTarget)); o++);if (h) {
	        var u = {};d(u, c), u.dt = a, u.type = "doubletap", this.collectEventTargets(u, e, i, "doubletap"), this.prevTap = u;
	      } else "tap" === n && (this.prevTap = c);
	    }, validateSelector: function validateSelector(t, e, i) {
	      for (var r = 0, s = e.length; s > r; r++) {
	        var n = e[r],
	            o = i[r],
	            a = Z(n.getAction(t, this, o), n);if (a && U(n, o, a)) {
	          return (this.target = n, this.element = o, a);
	        }
	      }
	    }, setSnapping: function setSnapping(t, e) {
	      var i,
	          r,
	          s,
	          n = this.target.options[this.prepared.name].snap,
	          o = [];if ((e = e || this.snapStatus, e.useStatusXY)) r = { x: e.x, y: e.y };else {
	        var p = P(this.target, this.element);r = d({}, t), r.x -= p.x, r.y -= p.y;
	      }e.realX = r.x, e.realY = r.y, r.x = r.x - this.inertiaStatus.resumeDx, r.y = r.y - this.inertiaStatus.resumeDy;for (var l = n.targets ? n.targets.length : 0, c = 0; c < this.snapOffsets.length; c++) {
	        var u = { x: r.x - this.snapOffsets[c].x, y: r.y - this.snapOffsets[c].y };for (s = 0; l > s; s++) i = a(n.targets[s]) ? n.targets[s](u.x, u.y, this) : n.targets[s], i && o.push({ x: h(i.x) ? i.x + this.snapOffsets[c].x : u.x, y: h(i.y) ? i.y + this.snapOffsets[c].y : u.y, range: h(i.range) ? i.range : n.range });
	      }var g = { target: null, inRange: !1, distance: 0, range: 0, dx: 0, dy: 0 };for (s = 0, l = o.length; l > s; s++) {
	        i = o[s];var v = i.range,
	            m = i.x - r.x,
	            f = i.y - r.y,
	            y = Se(m, f),
	            x = v >= y;1 / 0 === v && g.inRange && 1 / 0 !== g.range && (x = !1), (!g.target || (x ? g.inRange && 1 / 0 !== v ? y / v < g.distance / g.range : 1 / 0 === v && 1 / 0 !== g.range || y < g.distance : !g.inRange && y < g.distance)) && (1 / 0 === v && (x = !0), g.target = i, g.distance = y, g.range = v, g.inRange = x, g.dx = m, g.dy = f, e.range = v);
	      }var E;return (g.target ? (E = e.snappedX !== g.target.x || e.snappedY !== g.target.y, e.snappedX = g.target.x, e.snappedY = g.target.y) : (E = !0, e.snappedX = 0 / 0, e.snappedY = 0 / 0), e.dx = g.dx, e.dy = g.dy, e.changed = E || g.inRange && !e.locked, e.locked = g.inRange, e);
	    }, setRestriction: function setRestriction(t, e) {
	      var r,
	          s = this.target,
	          n = s && s.options[this.prepared.name].restrict,
	          o = n && n.restriction;if (!o) {
	        return e;
	      }e = e || this.restrictStatus, r = r = e.useStatusXY ? { x: e.x, y: e.y } : d({}, t), e.snap && e.snap.locked && (r.x += e.snap.dx || 0, r.y += e.snap.dy || 0), r.x -= this.inertiaStatus.resumeDx, r.y -= this.inertiaStatus.resumeDy, e.dx = 0, e.dy = 0, e.restricted = !1;var h, p, c;return l(o) && (o = "parent" === o ? k(this.element) : "self" === o ? s.getRect(this.element) : Y(this.element, o), !o) ? e : (a(o) && (o = o(r.x, r.y, this.element)), i(o) && (o = w(o)), h = o, o ? "x" in o && "y" in o ? (p = Math.max(Math.min(h.x + h.width - this.restrictOffset.right, r.x), h.x + this.restrictOffset.left), c = Math.max(Math.min(h.y + h.height - this.restrictOffset.bottom, r.y), h.y + this.restrictOffset.top)) : (p = Math.max(Math.min(h.right - this.restrictOffset.right, r.x), h.left + this.restrictOffset.left), c = Math.max(Math.min(h.bottom - this.restrictOffset.bottom, r.y), h.top + this.restrictOffset.top)) : (p = r.x, c = r.y), e.dx = p - r.x, e.dy = c - r.y, e.changed = e.restrictedX !== p || e.restrictedY !== c, e.restricted = !(!e.dx && !e.dy), e.restrictedX = p, e.restrictedY = c, e);
	    }, checkAndPreventDefault: function checkAndPreventDefault(t, e, i) {
	      if (e = e || this.target) {
	        var r = e.options,
	            s = r.preventDefault;if ("auto" === s && i && !/^input$|^textarea$/i.test(i.nodeName)) {
	          if (/down|start/i.test(t.type) && "drag" === this.prepared.name && "xy" !== r.drag.axis) {
	            return;
	          }if (r[this.prepared.name] && r[this.prepared.name].manualStart && !this.interacting()) {
	            return;
	          }return void t.preventDefault();
	        }return "always" === s ? void t.preventDefault() : void 0;
	      }
	    }, calcInertia: function calcInertia(t) {
	      var e = this.target.options[this.prepared.name].inertia,
	          i = e.resistance,
	          r = -Math.log(e.endSpeed / t.v0) / i;t.x0 = this.prevEvent.pageX, t.y0 = this.prevEvent.pageY, t.t0 = t.startEvent.timeStamp / 1000, t.sx = t.sy = 0, t.modifiedXe = t.xe = (t.vx0 - r) / i, t.modifiedYe = t.ye = (t.vy0 - r) / i, t.te = r, t.lambda_v0 = i / t.v0, t.one_ve_v0 = 1 - e.endSpeed / t.v0;
	    }, _updateEventTargets: function _updateEventTargets(t, e) {
	      this._eventTarget = t, this._curEventTarget = e;
	    } }, B.prototype = { preventDefault: e, stopImmediatePropagation: function stopImmediatePropagation() {
	      this.immediatePropagationStopped = this.propagationStopped = !0;
	    }, stopPropagation: function stopPropagation() {
	      this.propagationStopped = !0;
	    } };for (var Le = {}, Be = ["dragStart", "dragMove", "resizeStart", "resizeMove", "gestureStart", "gestureMove", "pointerOver", "pointerOut", "pointerHover", "selectorDown", "pointerDown", "pointerMove", "pointerUp", "pointerCancel", "pointerEnd", "addPointer", "removePointer", "recordPointer"], Ke = 0, je = Be.length; je > Ke; Ke++) {
	    var Je = Be[Ke];Le[Je] = L(Je);
	  }De.indexOfElement = function (t, e) {
	    e = e || ge;for (var i = 0; i < this.length; i++) {
	      var r = this[i];if (r.selector === t && r._context === e || !r.selector && r._element === t) return i;
	    }return -1;
	  }, De.get = function (t, e) {
	    return this[this.indexOfElement(t, e && e.context)];
	  }, De.forEachSelector = function (t) {
	    for (var e = 0; e < this.length; e++) {
	      var i = this[e];if (i.selector) {
	        var r = t(i, i.selector, i._context, e, this);if (void 0 !== r) return r;
	      }
	    }
	  }, re.prototype = { setOnEvents: function setOnEvents(t, e) {
	      return ("drop" === t ? (a(e.ondrop) && (this.ondrop = e.ondrop), a(e.ondropactivate) && (this.ondropactivate = e.ondropactivate), a(e.ondropdeactivate) && (this.ondropdeactivate = e.ondropdeactivate), a(e.ondragenter) && (this.ondragenter = e.ondragenter), a(e.ondragleave) && (this.ondragleave = e.ondragleave), a(e.ondropmove) && (this.ondropmove = e.ondropmove)) : (t = "on" + t, a(e.onstart) && (this[t + "start"] = e.onstart), a(e.onmove) && (this[t + "move"] = e.onmove), a(e.onend) && (this[t + "end"] = e.onend), a(e.oninertiastart) && (this[t + "inertiastart"] = e.oninertiastart)), this);
	    }, draggable: function draggable(t) {
	      return o(t) ? (this.options.drag.enabled = t.enabled === !1 ? !1 : !0, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.drag.axis = t.axis : null === t.axis && delete this.options.drag.axis, this) : p(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
	    }, setPerAction: function setPerAction(t, e) {
	      for (var i in e) i in Me[t] && (o(e[i]) ? (this.options[t][i] = d(this.options[t][i] || {}, e[i]), o(Me.perAction[i]) && "enabled" in Me.perAction[i] && (this.options[t][i].enabled = e[i].enabled === !1 ? !1 : !0)) : p(e[i]) && o(Me.perAction[i]) ? this.options[t][i].enabled = e[i] : void 0 !== e[i] && (this.options[t][i] = e[i]));
	    }, dropzone: function dropzone(t) {
	      return o(t) ? (this.options.drop.enabled = t.enabled === !1 ? !1 : !0, this.setOnEvents("drop", t), this.accept(t.accept), /^(pointer|center)$/.test(t.overlap) ? this.options.drop.overlap = t.overlap : h(t.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), this) : p(t) ? (this.options.drop.enabled = t, this) : this.options.drop;
	    }, dropCheck: function dropCheck(t, e, i, r, s) {
	      var n = !1;if (!(s = s || this.getRect(r))) {
	        return this.options.dropChecker ? this.options.dropChecker(t, n, this, r, e, i) : !1;
	      }var o = this.options.drop.overlap;if ("pointer" === o) {
	        var a,
	            p,
	            l = f(t),
	            c = P(e, i);l.x += c.x, l.y += c.y, a = l.x > s.left && l.x < s.right, p = l.y > s.top && l.y < s.bottom, n = a && p;
	      }var d = e.getRect(i);if ("center" === o) {
	        var u = d.left + d.width / 2,
	            g = d.top + d.height / 2;n = u >= s.left && u <= s.right && g >= s.top && g <= s.bottom;
	      }if (h(o)) {
	        var v = Math.max(0, Math.min(s.right, d.right) - Math.max(s.left, d.left)) * Math.max(0, Math.min(s.bottom, d.bottom) - Math.max(s.top, d.top)),
	            m = v / (d.width * d.height);n = m >= o;
	      }return (this.options.dropChecker && (n = this.options.dropChecker(t, n, this, r, e, i)), n);
	    }, dropChecker: function dropChecker(t) {
	      return a(t) ? (this.options.dropChecker = t, this) : null === t ? (delete this.options.getRect, this) : this.options.dropChecker;
	    }, accept: function accept(t) {
	      return i(t) ? (this.options.drop.accept = t, this) : c(t) ? (this.options.drop.accept = t, this) : null === t ? (delete this.options.drop.accept, this) : this.options.drop.accept;
	    }, resizable: function resizable(t) {
	      return o(t) ? (this.options.resize.enabled = t.enabled === !1 ? !1 : !0, this.setPerAction("resize", t), this.setOnEvents("resize", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.resize.axis = t.axis : null === t.axis && (this.options.resize.axis = Me.resize.axis), p(t.square) && (this.options.resize.square = t.square), this) : p(t) ? (this.options.resize.enabled = t, this) : this.options.resize;
	    }, squareResize: function squareResize(t) {
	      return p(t) ? (this.options.resize.square = t, this) : null === t ? (delete this.options.resize.square, this) : this.options.resize.square;
	    }, gesturable: function gesturable(t) {
	      return o(t) ? (this.options.gesture.enabled = t.enabled === !1 ? !1 : !0, this.setPerAction("gesture", t), this.setOnEvents("gesture", t), this) : p(t) ? (this.options.gesture.enabled = t, this) : this.options.gesture;
	    }, autoScroll: function autoScroll(t) {
	      return (o(t) ? t = d({ actions: ["drag", "resize"] }, t) : p(t) && (t = { actions: ["drag", "resize"], enabled: t }), this.setOptions("autoScroll", t));
	    }, snap: function snap(t) {
	      var e = this.setOptions("snap", t);return e === this ? this : e.drag;
	    }, setOptions: function setOptions(t, e) {
	      var i,
	          r = e && n(e.actions) ? e.actions : ["drag"];if (o(e) || p(e)) {
	        for (i = 0; i < r.length; i++) {
	          var s = /resize/.test(r[i]) ? "resize" : r[i];if (o(this.options[s])) {
	            var a = this.options[s][t];o(e) ? (d(a, e), a.enabled = e.enabled === !1 ? !1 : !0, "snap" === t && ("grid" === a.mode ? a.targets = [ie.createSnapGrid(d({ offset: a.gridOffset || { x: 0, y: 0 } }, a.grid || {}))] : "anchor" === a.mode ? a.targets = a.anchors : "path" === a.mode && (a.targets = a.paths), "elementOrigin" in e && (a.relativePoints = [e.elementOrigin]))) : p(e) && (a.enabled = e);
	          }
	        }return this;
	      }var h = {},
	          l = ["drag", "resize", "gesture"];for (i = 0; i < l.length; i++) t in Me[l[i]] && (h[l[i]] = this.options[l[i]][t]);return h;
	    }, inertia: function inertia(t) {
	      var e = this.setOptions("inertia", t);return e === this ? this : e.drag;
	    }, getAction: function getAction(t, e, i) {
	      var r = this.defaultActionChecker(t, e, i);return this.options.actionChecker ? this.options.actionChecker(t, r, this, i, e) : r;
	    }, defaultActionChecker: Q, actionChecker: function actionChecker(t) {
	      return a(t) ? (this.options.actionChecker = t, this) : null === t ? (delete this.options.actionChecker, this) : this.options.actionChecker;
	    }, getRect: function getRect(t) {
	      return (t = t || this._element, this.selector && !i(t) && (t = this._context.querySelector(this.selector)), w(t));
	    }, rectChecker: function rectChecker(t) {
	      return a(t) ? (this.getRect = t, this) : null === t ? (delete this.options.getRect, this) : this.getRect;
	    }, styleCursor: function styleCursor(t) {
	      return p(t) ? (this.options.styleCursor = t, this) : null === t ? (delete this.options.styleCursor, this) : this.options.styleCursor;
	    }, preventDefault: function preventDefault(t) {
	      return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : p(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
	    }, origin: function origin(t) {
	      return c(t) ? (this.options.origin = t, this) : o(t) ? (this.options.origin = t, this) : this.options.origin;
	    }, deltaSource: function deltaSource(t) {
	      return "page" === t || "client" === t ? (this.options.deltaSource = t, this) : this.options.deltaSource;
	    }, restrict: function restrict(t) {
	      if (!o(t)) {
	        return this.setOptions("restrict", t);
	      }for (var e, i = ["drag", "resize", "gesture"], r = 0; r < i.length; r++) {
	        var s = i[r];if (s in t) {
	          var n = d({ actions: [s], restriction: t[s] }, t);e = this.setOptions("restrict", n);
	        }
	      }return e;
	    }, context: function context() {
	      return this._context;
	    }, _context: ge, ignoreFrom: function ignoreFrom(t) {
	      return c(t) ? (this.options.ignoreFrom = t, this) : i(t) ? (this.options.ignoreFrom = t, this) : this.options.ignoreFrom;
	    }, allowFrom: function allowFrom(t) {
	      return c(t) ? (this.options.allowFrom = t, this) : i(t) ? (this.options.allowFrom = t, this) : this.options.allowFrom;
	    }, element: function element() {
	      return this._element;
	    }, fire: function fire(t) {
	      if (!t || !t.type || !he(qe, t.type)) {
	        return this;
	      }var e,
	          i,
	          r,
	          s = "on" + t.type,
	          n = "";if (t.type in this._iEvents) for (e = this._iEvents[t.type], i = 0, r = e.length; r > i && !t.immediatePropagationStopped; i++) n = e[i].name, e[i](t);if ((a(this[s]) && (n = this[s].name, this[s](t)), t.type in Ne && (e = Ne[t.type]))) for (i = 0, r = e.length; r > i && !t.immediatePropagationStopped; i++) n = e[i].name, e[i](t);return this;
	    }, on: function on(t, e, i) {
	      var r;if ((l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t))) {
	        for (r = 0; r < t.length; r++) this.on(t[r], e, i);return this;
	      }if (o(t)) {
	        for (var s in t) this.on(s, t[s], e);return this;
	      }if (("wheel" === t && (t = Fe), i = i ? !0 : !1, he(qe, t))) t in this._iEvents ? this._iEvents[t].push(e) : this._iEvents[t] = [e];else if (this.selector) {
	        if (!Ce[t]) for (Ce[t] = { selectors: [], contexts: [], listeners: [] }, r = 0; r < we.length; r++) Ge.add(we[r], t, te), Ge.add(we[r], t, ee, !0);var a,
	            h = Ce[t];for (a = h.selectors.length - 1; a >= 0 && (h.selectors[a] !== this.selector || h.contexts[a] !== this._context); a--);-1 === a && (a = h.selectors.length, h.selectors.push(this.selector), h.contexts.push(this._context), h.listeners.push([])), h.listeners[a].push([e, i]);
	      } else Ge.add(this._element, t, e, i);return this;
	    }, off: function off(t, e, i) {
	      var r;if ((l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t))) {
	        for (r = 0; r < t.length; r++) this.off(t[r], e, i);return this;
	      }if (o(t)) {
	        for (var s in t) this.off(s, t[s], e);return this;
	      }var a,
	          h = -1;if ((i = i ? !0 : !1, "wheel" === t && (t = Fe), he(qe, t))) a = this._iEvents[t], a && -1 !== (h = ae(a, e)) && this._iEvents[t].splice(h, 1);else if (this.selector) {
	        var p = Ce[t],
	            c = !1;if (!p) {
	          return this;
	        }for (h = p.selectors.length - 1; h >= 0; h--) if (p.selectors[h] === this.selector && p.contexts[h] === this._context) {
	          var d = p.listeners[h];for (r = d.length - 1; r >= 0; r--) {
	            var u = d[r][0],
	                g = d[r][1];if (u === e && g === i) {
	              d.splice(r, 1), d.length || (p.selectors.splice(h, 1), p.contexts.splice(h, 1), p.listeners.splice(h, 1), Ge.remove(this._context, t, te), Ge.remove(this._context, t, ee, !0), p.selectors.length || (Ce[t] = null)), c = !0;break;
	            }
	          }if (c) break;
	        }
	      } else Ge.remove(this._element, t, e, i);return this;
	    }, set: function set(t) {
	      o(t) || (t = {}), this.options = d({}, Me.base);var e,
	          i = ["drag", "drop", "resize", "gesture"],
	          r = ["draggable", "dropzone", "resizable", "gesturable"],
	          s = d(d({}, Me.perAction), t[n] || {});for (e = 0; e < i.length; e++) {
	        var n = i[e];this.options[n] = d({}, Me[n]), this.setPerAction(n, s), this[r[e]](t[n]);
	      }var a = ["accept", "actionChecker", "allowFrom", "deltaSource", "dropChecker", "ignoreFrom", "origin", "preventDefault", "rectChecker"];for (e = 0, je = a.length; je > e; e++) {
	        var h = a[e];this.options[h] = Me.base[h], h in t && this[h](t[h]);
	      }return this;
	    }, unset: function unset() {
	      if ((Ge.remove(this, "all"), l(this.selector))) for (var t in Ce) for (var e = Ce[t], i = 0; i < e.selectors.length; i++) {
	        e.selectors[i] === this.selector && e.contexts[i] === this._context && (e.selectors.splice(i, 1), e.contexts.splice(i, 1), e.listeners.splice(i, 1), e.selectors.length || (Ce[t] = null)), Ge.remove(this._context, t, te), Ge.remove(this._context, t, ee, !0);break;
	      } else Ge.remove(this, "all"), this.options.styleCursor && (this._element.style.cursor = "");return (this.dropzone(!1), De.splice(ae(De, this), 1), ie);
	    } }, re.prototype.snap = se(re.prototype.snap, "Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping"), re.prototype.restrict = se(re.prototype.restrict, "Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction"), re.prototype.inertia = se(re.prototype.inertia, "Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia"), re.prototype.autoScroll = se(re.prototype.autoScroll, "Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll"), ie.isSet = function (t, e) {
	    return -1 !== De.indexOfElement(t, e && e.context);
	  }, ie.on = function (t, e, i) {
	    if ((l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t))) {
	      for (var r = 0; r < t.length; r++) ie.on(t[r], e, i);return ie;
	    }if (o(t)) {
	      for (var s in t) ie.on(s, t[s], e);return ie;
	    }return (he(qe, t) ? Ne[t] ? Ne[t].push(e) : Ne[t] = [e] : Ge.add(ge, t, e, i), ie);
	  }, ie.off = function (t, e, i) {
	    if ((l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t))) {
	      for (var r = 0; r < t.length; r++) ie.off(t[r], e, i);return ie;
	    }if (o(t)) {
	      for (var s in t) ie.off(s, t[s], e);return ie;
	    }if (he(qe, t)) {
	      var a;t in Ne && -1 !== (a = ae(Ne[t], e)) && Ne[t].splice(a, 1);
	    } else Ge.remove(ge, t, e, i);return ie;
	  }, ie.enableDragging = se(function (t) {
	    return null !== t && void 0 !== t ? (Re.drag = t, ie) : Re.drag;
	  }, "interact.enableDragging is deprecated and will soon be removed."), ie.enableResizing = se(function (t) {
	    return null !== t && void 0 !== t ? (Re.resize = t, ie) : Re.resize;
	  }, "interact.enableResizing is deprecated and will soon be removed."), ie.enableGesturing = se(function (t) {
	    return null !== t && void 0 !== t ? (Re.gesture = t, ie) : Re.gesture;
	  }, "interact.enableGesturing is deprecated and will soon be removed."), ie.eventTypes = qe, ie.debug = function () {
	    var t = ze[0] || new $();return { interactions: ze, target: t.target, dragging: t.dragging, resizing: t.resizing, gesturing: t.gesturing, prepared: t.prepared, matches: t.matches, matchElements: t.matchElements, prevCoords: t.prevCoords, startCoords: t.startCoords, pointerIds: t.pointerIds, pointers: t.pointers, addPointer: Le.addPointer, removePointer: Le.removePointer, recordPointer: Le.recordPointer, snap: t.snapStatus, restrict: t.restrictStatus, inertia: t.inertiaStatus, downTime: t.downTimes[0], downEvent: t.downEvent, downPointer: t.downPointer, prevEvent: t.prevEvent, Interactable: re, interactables: De, pointerIsDown: t.pointerIsDown, defaultOptions: Me, defaultActionChecker: Q, actionCursors: Ie, dragMove: Le.dragMove, resizeMove: Le.resizeMove, gestureMove: Le.gestureMove, pointerUp: Le.pointerUp, pointerDown: Le.pointerDown, pointerMove: Le.pointerMove, pointerHover: Le.pointerHover, events: Ge, globalEvents: Ne, delegatedEvents: Ce };
	  }, ie.getTouchAverage = z, ie.getTouchBBox = T, ie.getTouchDistance = C, ie.getTouchAngle = M, ie.getElementRect = w, ie.matchesSelector = pe, ie.closest = Y, ie.margin = function (t) {
	    return h(t) ? (Ae = t, ie) : Ae;
	  }, ie.supportsTouch = function () {
	    return Oe;
	  }, ie.supportsPointerEvent = function () {
	    return _e;
	  }, ie.stop = function (t) {
	    for (var e = ze.length - 1; e > 0; e--) ze[e].stop(t);return ie;
	  }, ie.dynamicDrop = function (t) {
	    return p(t) ? (Te = t, ie) : Te;
	  }, ie.pointerMoveTolerance = function (t) {
	    return h(t) ? (Xe = t, this) : Xe;
	  }, ie.maxInteractions = function (t) {
	    return h(t) ? (ke = t, this) : ke;
	  }, ie.createSnapGrid = function (t) {
	    return function (e, i) {
	      var r = 0,
	          s = 0;o(t.offset) && (r = t.offset.x, s = t.offset.y);var n = Math.round((e - r) / t.x),
	          a = Math.round((i - s) / t.y),
	          h = n * t.x + r,
	          p = a * t.y + s;return { x: h, y: p, range: t.range };
	    };
	  }, oe(ge), Ue in Element.prototype && a(Element.prototype[Ue]) || (de = function (t, e, i) {
	    i = i || t.parentNode.querySelectorAll(e);for (var r = 0, s = i.length; s > r; r++) if (i[r] === t) return !0;return !1;
	  }), (function () {
	    for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r) Ve = t[i[r] + "RequestAnimationFrame"], $e = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];Ve || (Ve = function (t) {
	      var i = new Date().getTime(),
	          r = Math.max(0, 16 - (i - e)),
	          s = setTimeout(function () {
	        t(i + r);
	      }, r);return (e = i + r, s);
	    }), $e || ($e = function (t) {
	      clearTimeout(t);
	    });
	  })(), true ? ("undefined" != typeof module && module.exports && (exports = module.exports = ie), exports.interact = ie) : "function" == typeof define && define.amd ? define("interact", function () {
	    return ie;
	  }) : t.interact = ie;
	})(window);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var FileManager = _interopRequire(__webpack_require__(39));

	var Module = {
		activate: function activate(loaded) {
			var fileManager = new FileManager();
			IDE.fileManager = fileManager;

			loaded();
		}
	};

	module.exports = Module;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Request = _interopRequire(__webpack_require__(40));

	var FileManager = (function () {
		function FileManager() {
			_classCallCheck(this, FileManager);

			_get(Object.getPrototypeOf(FileManager.prototype), "constructor", this).call(this);
			//this.client = new Request();
		}

		_createClass(FileManager, {
			getTree: {
				value: function getTree(path) {
					return this.client.createRequest("/folders").withHeader("Content-Type", "application/json").withParams({ path: path }).asGet().send();
				}
			},
			getFile: {
				value: function getFile(path) {
					return this.client.createRequest("/files").withParams({ path: path }).asGet().send();
				}
			},
			setFile: {
				value: function setFile(path, content) {
					return this.client.createRequest("/files").withParams({ path: path }).asPut().withContent(content).send();
				}
			}
		});

		return FileManager;
	})();

	module.exports = FileManager;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var HttpClient = __webpack_require__(41).HttpClient;

	var IDE = window.IDE;

	var Request = (function (_HttpClient) {
		function Request() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_classCallCheck(this, Request);

			_get(Object.getPrototypeOf(Request.prototype), "constructor", this).apply(this, args);

			this.configure(function (request) {
				var authToken = localStorage.getItem("auth-token");
				var projectID = IDE.qParams.project;

				request.withBaseUri("/api/1.0/projects/" + projectID);
				request.withHeader("Authorization", "Bearer " + authToken);
				request.withHeader("X-R-ID", "TEST");
			});
		}

		_inherits(Request, _HttpClient);

		return Request;
	})(HttpClient);

	module.exports = Request;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * An extensible HTTP client provided by Aurelia.
	 *
	 * @module HttpClient
	 */

	exports.HttpClient = __webpack_require__(48).HttpClient;
	exports.HttpRequestMessage = __webpack_require__(50).HttpRequestMessage;
	exports.HttpResponseMessage = __webpack_require__(45).HttpResponseMessage;
	exports.JSONPRequestMessage = __webpack_require__(42).JSONPRequestMessage;
	exports.Headers = __webpack_require__(43).Headers;
	exports.RequestBuilder = __webpack_require__(49).RequestBuilder;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	exports.createJSONPRequestMessageProcessor = createJSONPRequestMessageProcessor;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Headers = __webpack_require__(43).Headers;

	var RequestMessageProcessor = __webpack_require__(44).RequestMessageProcessor;

	var _transformers = __webpack_require__(47);

	var timeoutTransformer = _transformers.timeoutTransformer;
	var callbackParameterNameTransformer = _transformers.callbackParameterNameTransformer;

	var JSONPRequestMessage = exports.JSONPRequestMessage = function JSONPRequestMessage(uri, callbackParameterName) {
	  _classCallCheck(this, JSONPRequestMessage);

	  this.method = "JSONP";
	  this.uri = uri;
	  this.content = undefined;
	  this.headers = new Headers();
	  this.responseType = "jsonp";
	  this.callbackParameterName = callbackParameterName;
	};

	var JSONPXHR = (function () {
	  function JSONPXHR() {
	    _classCallCheck(this, JSONPXHR);
	  }

	  _createClass(JSONPXHR, {
	    open: {
	      value: function open(method, uri) {
	        this.method = method;
	        this.uri = uri;
	        this.callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
	      }
	    },
	    send: {
	      value: function send() {
	        var _this = this;

	        var uri = this.uri + (this.uri.indexOf("?") >= 0 ? "&" : "?") + this.callbackParameterName + "=" + this.callbackName;

	        window[this.callbackName] = function (data) {
	          delete window[_this.callbackName];
	          document.body.removeChild(script);

	          if (_this.status === undefined) {
	            _this.status = 200;
	            _this.statusText = "OK";
	            _this.response = data;
	            _this.onload(_this);
	          }
	        };

	        var script = document.createElement("script");
	        script.src = uri;
	        document.body.appendChild(script);

	        if (this.timeout !== undefined) {
	          setTimeout(function () {
	            if (_this.status === undefined) {
	              _this.status = 0;
	              _this.ontimeout(new Error("timeout"));
	            }
	          }, this.timeout);
	        }
	      }
	    },
	    abort: {
	      value: function abort() {
	        if (this.status === undefined) {
	          this.status = 0;
	          this.onabort(new Error("abort"));
	        }
	      }
	    },
	    setRequestHeader: {
	      value: function setRequestHeader() {}
	    }
	  });

	  return JSONPXHR;
	})();

	function createJSONPRequestMessageProcessor() {
	  return new RequestMessageProcessor(JSONPXHR, [timeoutTransformer, callbackParameterNameTransformer]);
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Headers = exports.Headers = (function () {
	  function Headers() {
	    var headers = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Headers);

	    this.headers = headers;
	  }

	  _createClass(Headers, {
	    add: {
	      value: function add(key, value) {
	        this.headers[key] = value;
	      }
	    },
	    get: {
	      value: function get(key) {
	        return this.headers[key];
	      }
	    },
	    clear: {
	      value: function clear() {
	        this.headers = {};
	      }
	    },
	    configureXHR: {
	      value: function configureXHR(xhr) {
	        var headers = this.headers,
	            key;

	        for (key in headers) {
	          xhr.setRequestHeader(key, headers[key]);
	        }
	      }
	    }
	  }, {
	    parse: {

	      /**
	       * XmlHttpRequest's getAllResponseHeaders() method returns a string of response
	       * headers according to the format described here:
	       * http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method
	       * This method parses that string into a user-friendly key/value pair object.
	       */

	      value: function parse(headerStr) {
	        var headers = new Headers();
	        if (!headerStr) {
	          return headers;
	        }

	        var headerPairs = headerStr.split("\r\n");
	        for (var i = 0; i < headerPairs.length; i++) {
	          var headerPair = headerPairs[i];
	          // Can't use split() here because it does the wrong thing
	          // if the header value has the string ": " in it.
	          var index = headerPair.indexOf(": ");
	          if (index > 0) {
	            var key = headerPair.substring(0, index);
	            var val = headerPair.substring(index + 2);
	            headers.add(key, val);
	          }
	        }

	        return headers;
	      }
	    }
	  });

	  return Headers;
	})();

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var HttpResponseMessage = __webpack_require__(45).HttpResponseMessage;

	var _aureliaPath = __webpack_require__(46);

	var join = _aureliaPath.join;
	var buildQueryString = _aureliaPath.buildQueryString;

	function buildFullUri(message) {
	  var uri = join(message.baseUri, message.uri),
	      qs;

	  if (message.params) {
	    qs = buildQueryString(message.params);
	    uri = qs ? "" + uri + "?" + qs : uri;
	  }

	  message.fullUri = uri;
	}

	var RequestMessageProcessor = exports.RequestMessageProcessor = (function () {
	  function RequestMessageProcessor(xhrType, transformers) {
	    _classCallCheck(this, RequestMessageProcessor);

	    this.XHRType = xhrType;
	    this.transformers = transformers;
	  }

	  _createClass(RequestMessageProcessor, {
	    abort: {
	      value: function abort() {
	        //The logic here is if the xhr object is not set then there is nothing to abort so the intent was carried out
	        if (this.xhr) {
	          this.xhr.abort();
	        }
	      }
	    },
	    process: {
	      value: function process(client, message) {
	        var _this = this;

	        return new Promise(function (resolve, reject) {
	          var xhr = _this.xhr = new _this.XHRType(),
	              transformers = _this.transformers,
	              i,
	              ii;

	          buildFullUri(message);
	          xhr.open(message.method, message.fullUri, true);

	          for (i = 0, ii = transformers.length; i < ii; ++i) {
	            transformers[i](client, _this, message, xhr);
	          }

	          xhr.onload = function (e) {
	            var response = new HttpResponseMessage(message, xhr, message.responseType, message.reviver);
	            if (response.isSuccess) {
	              resolve(response);
	            } else {
	              reject(response);
	            }
	          };

	          xhr.ontimeout = function (e) {
	            reject(new HttpResponseMessage(message, {
	              response: e,
	              status: xhr.status,
	              statusText: xhr.statusText
	            }, "timeout"));
	          };

	          xhr.onerror = function (e) {
	            reject(new HttpResponseMessage(message, {
	              response: e,
	              status: xhr.status,
	              statusText: xhr.statusText
	            }, "error"));
	          };

	          xhr.onabort = function (e) {
	            reject(new HttpResponseMessage(message, {
	              response: e,
	              status: xhr.status,
	              statusText: xhr.statusText
	            }, "abort"));
	          };

	          xhr.send(message.content);
	        });
	      }
	    }
	  });

	  return RequestMessageProcessor;
	})();

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Headers = __webpack_require__(43).Headers;

	var HttpResponseMessage = exports.HttpResponseMessage = (function () {
	  function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
	    _classCallCheck(this, HttpResponseMessage);

	    this.requestMessage = requestMessage;
	    this.statusCode = xhr.status;
	    this.response = xhr.response;
	    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
	    this.statusText = xhr.statusText;
	    this.responseType = responseType;
	    this.reviver = reviver;

	    if (xhr.getAllResponseHeaders) {
	      this.headers = Headers.parse(xhr.getAllResponseHeaders());
	    } else {
	      this.headers = new Headers();
	    }
	  }

	  _createClass(HttpResponseMessage, {
	    content: {
	      get: function () {
	        try {
	          if (this._content !== undefined) {
	            return this._content;
	          }

	          if (this.response === undefined || this.response === null) {
	            return this._content = this.response;
	          }

	          if (this.responseType === "json") {
	            return this._content = JSON.parse(this.response, this.reviver);
	          }

	          if (this.reviver) {
	            return this._content = this.reviver(this.response);
	          }

	          return this._content = this.response;
	        } catch (e) {
	          if (this.isSuccess) {
	            throw e;
	          }

	          return this._content = null;
	        }
	      }
	    }
	  });

	  return HttpResponseMessage;
	})();

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.relativeToFile = relativeToFile;
	exports.join = join;
	exports.buildQueryString = buildQueryString;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function trimDots(ary) {
	  var i, part;
	  for (i = 0; i < ary.length; ++i) {
	    part = ary[i];
	    if (part === ".") {
	      ary.splice(i, 1);
	      i -= 1;
	    } else if (part === "..") {
	      // If at the start, or previous value is still ..,
	      // keep them so that when converted to a path it may
	      // still work when converted to a path, even though
	      // as an ID it is less than ideal. In larger point
	      // releases, may be better to just kick out an error.
	      if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
	        continue;
	      } else if (i > 0) {
	        ary.splice(i - 1, 2);
	        i -= 2;
	      }
	    }
	  }
	}

	function relativeToFile(name, file) {
	  var lastIndex,
	      normalizedBaseParts,
	      fileParts = file && file.split("/");

	  name = name.trim();
	  name = name.split("/");

	  if (name[0].charAt(0) === "." && fileParts) {
	    //Convert file to array, and lop off the last part,
	    //so that . matches that 'directory' and not name of the file's
	    //module. For instance, file of 'one/two/three', maps to
	    //'one/two/three.js', but we want the directory, 'one/two' for
	    //this normalization.
	    normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
	    name = normalizedBaseParts.concat(name);
	  }

	  trimDots(name);

	  return name.join("/");
	}

	function join(path1, path2) {
	  var url1, url2, url3, i, ii, urlPrefix;

	  if (!path1) {
	    return path2;
	  }

	  if (!path2) {
	    return path1;
	  }

	  urlPrefix = path1.indexOf("//") === 0 ? "//" : path1.indexOf("/") === 0 ? "/" : "";

	  url1 = path1.split("/");
	  url2 = path2.split("/");
	  url3 = [];

	  for (i = 0, ii = url1.length; i < ii; ++i) {
	    if (url1[i] == "..") {
	      url3.pop();
	    } else if (url1[i] == "." || url1[i] == "") {
	      continue;
	    } else {
	      url3.push(url1[i]);
	    }
	  }

	  for (i = 0, ii = url2.length; i < ii; ++i) {
	    if (url2[i] == "..") {
	      url3.pop();
	    } else if (url2[i] == "." || url2[i] == "") {
	      continue;
	    } else {
	      url3.push(url2[i]);
	    }
	  }

	  return urlPrefix + url3.join("/").replace(/\:\//g, "://");;
	}

	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    class2type = {};

	"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (name, i) {
	  class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function type(obj) {
	  if (obj == null) {
	    return obj + "";
	  }

	  // Support: Android<4.0 (functionish RegExp)
	  return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
	}

	function buildQueryString(a, traditional) {
	  var prefix,
	      s = [],
	      add = function add(key, value) {
	    // If value is a function, invoke it and return its value
	    value = typeof value === "function" ? value() : value == null ? "" : value;
	    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
	  };

	  for (prefix in a) {
	    _buildQueryString(prefix, a[prefix], traditional, add);
	  }

	  // Return the resulting serialization
	  return s.join("&").replace(r20, "+");
	}

	function _buildQueryString(prefix, obj, traditional, add) {
	  var name;

	  if (Array.isArray(obj)) {
	    // Serialize array item.
	    obj.forEach(function (v, i) {
	      if (traditional || rbracket.test(prefix)) {
	        // Treat each array item as a scalar.
	        add(prefix, v);
	      } else {
	        // Item is non-scalar (array or object), encode its numeric index.
	        _buildQueryString(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
	      }
	    });
	  } else if (!traditional && type(obj) === "object") {
	    // Serialize object item.
	    for (name in obj) {
	      _buildQueryString(prefix + "[" + name + "]", obj[name], traditional, add);
	    }
	  } else {
	    // Serialize scalar item.
	    add(prefix, obj);
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.timeoutTransformer = timeoutTransformer;
	exports.callbackParameterNameTransformer = callbackParameterNameTransformer;
	exports.credentialsTransformer = credentialsTransformer;
	exports.progressTransformer = progressTransformer;
	exports.responseTypeTransformer = responseTypeTransformer;
	exports.headerTransformer = headerTransformer;
	exports.contentTransformer = contentTransformer;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function timeoutTransformer(client, processor, message, xhr) {
	  if (message.timeout !== undefined) {
	    xhr.timeout = message.timeout;
	  }
	}

	function callbackParameterNameTransformer(client, processor, message, xhr) {
	  if (message.callbackParameterName !== undefined) {
	    xhr.callbackParameterName = message.callbackParameterName;
	  }
	}

	function credentialsTransformer(client, processor, message, xhr) {
	  if (message.withCredentials !== undefined) {
	    xhr.withCredentials = message.withCredentials;
	  }
	}

	function progressTransformer(client, processor, message, xhr) {
	  if (message.progressCallback) {
	    xhr.upload.onprogress = message.progressCallback;
	  }
	}

	function responseTypeTransformer(client, processor, message, xhr) {
	  var responseType = message.responseType;

	  if (responseType === "json") {
	    responseType = "text"; //IE does not support json
	  }

	  xhr.responseType = responseType;
	}

	function headerTransformer(client, processor, message, xhr) {
	  message.headers.configureXHR(xhr);
	}

	function contentTransformer(client, processor, message, xhr) {
	  if (window.FormData && message.content instanceof FormData) {
	    return;
	  }

	  if (window.Blob && message.content instanceof Blob) {
	    return;
	  }

	  if (window.ArrayBufferView && message.content instanceof ArrayBufferView) {
	    return;
	  }

	  if (message.content instanceof Document) {
	    return;
	  }

	  if (typeof message.content === "string") {
	    return;
	  }

	  if (message.content === null || message.content === undefined) {
	    return;
	  }

	  message.content = JSON.stringify(message.content, message.replacer);
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Headers = __webpack_require__(43).Headers;

	var RequestBuilder = __webpack_require__(49).RequestBuilder;

	var _httpRequestMessage = __webpack_require__(50);

	var HttpRequestMessage = _httpRequestMessage.HttpRequestMessage;
	var createHttpRequestMessageProcessor = _httpRequestMessage.createHttpRequestMessageProcessor;

	var _jsonpRequestMessage = __webpack_require__(42);

	var JSONPRequestMessage = _jsonpRequestMessage.JSONPRequestMessage;
	var createJSONPRequestMessageProcessor = _jsonpRequestMessage.createJSONPRequestMessageProcessor;

	function trackRequestStart(client, processor) {
	  client.pendingRequests.push(processor);
	  client.isRequesting = true;
	}

	function trackRequestEnd(client, processor) {
	  var index = client.pendingRequests.indexOf(processor);

	  client.pendingRequests.splice(index, 1);
	  client.isRequesting = client.pendingRequests.length > 0;

	  if (!client.isRequesting) {
	    var evt = new window.CustomEvent("aurelia-http-client-requests-drained", { bubbles: true, cancelable: true });
	    setTimeout(function () {
	      return document.dispatchEvent(evt);
	    }, 1);
	  }
	}

	/**
	* The main HTTP client object.
	*
	* @class HttpClient
	* @constructor
	*/

	var HttpClient = exports.HttpClient = (function () {
	  function HttpClient() {
	    _classCallCheck(this, HttpClient);

	    this.requestTransformers = [];
	    this.requestProcessorFactories = new Map();
	    this.requestProcessorFactories.set(HttpRequestMessage, createHttpRequestMessageProcessor);
	    this.requestProcessorFactories.set(JSONPRequestMessage, createJSONPRequestMessageProcessor);
	    this.pendingRequests = [];
	    this.isRequesting = false;
	  }

	  _createClass(HttpClient, {
	    configure: {

	      /**
	       * Configure this HttpClient with default settings to be used by all requests.
	       *
	       * @method configure
	       * @param {Function} fn A function that takes a RequestBuilder as an argument.
	       * @chainable
	       */

	      value: function configure(fn) {
	        var builder = new RequestBuilder(this);
	        fn(builder);
	        this.requestTransformers = builder.transformers;
	        return this;
	      }
	    },
	    createRequest: {

	      /**
	       * Returns a new RequestBuilder for this HttpClient instance that can be used to build and send HTTP requests.
	       *
	       * @method createRequest
	       * @param uri The target URI.
	       * @type RequestBuilder
	       */

	      value: function createRequest(uri) {
	        var builder = new RequestBuilder(this);

	        if (uri) {
	          builder.withUri(uri);
	        }

	        return builder;
	      }
	    },
	    send: {

	      /**
	       * Sends a message using the underlying networking stack.
	       *
	       * @method send
	       * @param message A configured HttpRequestMessage or JSONPRequestMessage.
	       * @param {Array} transformers A collection of transformers to apply to the HTTP request.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function send(message, transformers) {
	        var _this = this;

	        var createProcessor = this.requestProcessorFactories.get(message.constructor),
	            processor,
	            promise,
	            i,
	            ii;

	        if (!createProcessor) {
	          throw new Error("No request message processor factory for " + message.constructor + ".");
	        }

	        processor = createProcessor();
	        trackRequestStart(this, processor);

	        transformers = transformers || this.requestTransformers;

	        for (i = 0, ii = transformers.length; i < ii; ++i) {
	          transformers[i](this, processor, message);
	        }

	        promise = processor.process(this, message);

	        promise.abort = promise.cancel = function () {
	          processor.abort();
	        };

	        return promise.then(function (response) {
	          trackRequestEnd(_this, processor);
	          return response;
	        })["catch"](function (response) {
	          trackRequestEnd(_this, processor);
	          throw response;
	        });
	      }
	    },
	    "delete": {

	      /**
	       * Sends an HTTP DELETE request.
	       *
	       * @method delete
	       * @param {String} uri The target URI.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function _delete(uri) {
	        return this.createRequest(uri).asDelete().send();
	      }
	    },
	    get: {

	      /**
	       * Sends an HTTP GET request.
	       *
	       * @method get
	       * @param {String} uri The target URI.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function get(uri) {
	        return this.createRequest(uri).asGet().send();
	      }
	    },
	    head: {

	      /**
	       * Sends an HTTP HEAD request.
	       *
	       * @method head
	       * @param {String} uri The target URI.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function head(uri) {
	        return this.createRequest(uri).asHead().send();
	      }
	    },
	    jsonp: {

	      /**
	       * Sends a JSONP request.
	       *
	       * @method jsonp
	       * @param {String} uri The target URI.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function jsonp(uri) {
	        var callbackParameterName = arguments[1] === undefined ? "jsoncallback" : arguments[1];

	        return this.createRequest(uri).asJsonp(callbackParameterName).send();
	      }
	    },
	    options: {

	      /**
	       * Sends an HTTP OPTIONS request.
	       *
	       * @method options
	       * @param {String} uri The target URI.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function options(uri) {
	        return this.createRequest(uri).asOptions().send();
	      }
	    },
	    put: {

	      /**
	       * Sends an HTTP PUT request.
	       *
	       * @method put
	       * @param {String} uri The target URI.
	       * @param {Object} uri The request payload.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function put(uri, content) {
	        return this.createRequest(uri).asPut().withContent(content).send();
	      }
	    },
	    patch: {

	      /**
	       * Sends an HTTP PATCH request.
	       *
	       * @method patch
	       * @param {String} uri The target URI.
	       * @param {Object} uri The request payload.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function patch(uri, content) {
	        return this.createRequest(uri).asPatch().withContent(content).send();
	      }
	    },
	    post: {

	      /**
	       * Sends an HTTP POST request.
	       *
	       * @method post
	       * @param {String} uri The target URI.
	       * @param {Object} uri The request payload.
	       * @return {Promise} A cancellable promise object.
	       */

	      value: function post(uri, content) {
	        return this.createRequest(uri).asPost().withContent(content).send();
	      }
	    }
	  });

	  return HttpClient;
	})();

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var join = __webpack_require__(46).join;

	var HttpRequestMessage = __webpack_require__(50).HttpRequestMessage;

	var JSONPRequestMessage = __webpack_require__(42).JSONPRequestMessage;

	/**
	* A builder class allowing fluent composition of HTTP requests.
	*
	* @class RequestBuilder
	* @constructor
	*/

	var RequestBuilder = exports.RequestBuilder = (function () {
		function RequestBuilder(client) {
			_classCallCheck(this, RequestBuilder);

			this.client = client;
			this.transformers = client.requestTransformers.slice(0);
			this.useJsonp = false;
		}

		_createClass(RequestBuilder, {
			send: {

				/**
	   * Sends the request.
	   *
	   * @method send
	   * @return {Promise} A cancellable promise object.
	   */

				value: function send() {
					var message = this.useJsonp ? new JSONPRequestMessage() : new HttpRequestMessage();
					return this.client.send(message, this.transformers);
				}
			}
		}, {
			addHelper: {

				/**
	   * Adds a user-defined request transformer to the RequestBuilder.
	   *
	   * @method addHelper
	   * @param {String} name The name of the helper to add.
	   * @param {Function} fn The helper function.
	   * @chainable
	   */

				value: function addHelper(name, fn) {
					RequestBuilder.prototype[name] = function () {
						this.transformers.push(fn.apply(this, arguments));
						return this;
					};
				}
			}
		});

		return RequestBuilder;
	})();

	RequestBuilder.addHelper("asDelete", function () {
		return function (client, processor, message) {
			message.method = "DELETE";
		};
	});

	RequestBuilder.addHelper("asGet", function () {
		return function (client, processor, message) {
			message.method = "GET";
		};
	});

	RequestBuilder.addHelper("asHead", function () {
		return function (client, processor, message) {
			message.method = "HEAD";
		};
	});

	RequestBuilder.addHelper("asOptions", function () {
		return function (client, processor, message) {
			message.method = "OPTIONS";
		};
	});

	RequestBuilder.addHelper("asPatch", function () {
		return function (client, processor, message) {
			message.method = "PATCH";
		};
	});

	RequestBuilder.addHelper("asPost", function () {
		return function (client, processor, message) {
			message.method = "POST";
		};
	});

	RequestBuilder.addHelper("asPut", function () {
		return function (client, processor, message) {
			message.method = "PUT";
		};
	});

	RequestBuilder.addHelper("asJsonp", function (callbackParameterName) {
		this.useJsonp = true;
		return function (client, processor, message) {
			message.callbackParameterName = callbackParameterName;
		};
	});

	RequestBuilder.addHelper("withUri", function (uri) {
		return function (client, processor, message) {
			message.uri = uri;
		};
	});

	RequestBuilder.addHelper("withContent", function (content) {
		return function (client, processor, message) {
			message.content = content;
		};
	});

	RequestBuilder.addHelper("withBaseUri", function (baseUri) {
		return function (client, processor, message) {
			message.baseUri = baseUri;
		};
	});

	RequestBuilder.addHelper("withParams", function (params) {
		return function (client, processor, message) {
			message.params = params;
		};
	});

	RequestBuilder.addHelper("withResponseType", function (responseType) {
		return function (client, processor, message) {
			message.responseType = responseType;
		};
	});

	RequestBuilder.addHelper("withTimeout", function (timeout) {
		return function (client, processor, message) {
			message.timeout = timeout;
		};
	});

	RequestBuilder.addHelper("withHeader", function (key, value) {
		return function (client, processor, message) {
			message.headers.add(key, value);
		};
	});

	RequestBuilder.addHelper("withCredentials", function (value) {
		return function (client, processor, message) {
			message.withCredentials = value;
		};
	});

	RequestBuilder.addHelper("withReviver", function (reviver) {
		return function (client, processor, message) {
			message.reviver = reviver;
		};
	});

	RequestBuilder.addHelper("withReplacer", function (replacer) {
		return function (client, processor, message) {
			message.replacer = replacer;
		};
	});

	RequestBuilder.addHelper("withProgressCallback", function (progressCallback) {
		return function (client, processor, message) {
			message.progressCallback = progressCallback;
		};
	});

	RequestBuilder.addHelper("withCallbackParameterName", function (callbackParameterName) {
		return function (client, processor, message) {
			message.callbackParameterName = callbackParameterName;
		};
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	exports.createHttpRequestMessageProcessor = createHttpRequestMessageProcessor;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var Headers = __webpack_require__(43).Headers;

	var RequestMessageProcessor = __webpack_require__(44).RequestMessageProcessor;

	var _transformers = __webpack_require__(47);

	var timeoutTransformer = _transformers.timeoutTransformer;
	var credentialsTransformer = _transformers.credentialsTransformer;
	var progressTransformer = _transformers.progressTransformer;
	var responseTypeTransformer = _transformers.responseTypeTransformer;
	var headerTransformer = _transformers.headerTransformer;
	var contentTransformer = _transformers.contentTransformer;

	var HttpRequestMessage = exports.HttpRequestMessage = function HttpRequestMessage(method, uri, content, headers) {
	  _classCallCheck(this, HttpRequestMessage);

	  this.method = method;
	  this.uri = uri;
	  this.content = content;
	  this.headers = headers || new Headers();
	  this.responseType = "json"; //text, arraybuffer, blob, document
	};

	function createHttpRequestMessageProcessor() {
	  return new RequestMessageProcessor(XMLHttpRequest, [timeoutTransformer, credentialsTransformer, progressTransformer, responseTypeTransformer, headerTransformer, contentTransformer]);
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var PluginsManager = _interopRequire(__webpack_require__(52));

	var Module = {
		activate: function activate(loaded) {
			var plugins = new PluginsManager();
			IDE.plugins = plugins;

			loaded();
		}
	};

	module.exports = Module;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var IDE = window.IDE;

	var PluginsManager = (function () {
		function PluginsManager() {
			_classCallCheck(this, PluginsManager);

			var _EventEmitter = __webpack_require__(22);
			this.events = new _EventEmitter();

			this.toolbarElements = [];
			this.plugins = {};
		}

		_createClass(PluginsManager, {
			get: {
				value: function get(pluginName) {
					return this.plugins[pluginName];
				}
			},
			load: {
				value: function load(pluginName) {
					this.plugins[pluginName] = {};
					this.plugins[pluginName].code = __webpack_require__(53)("./" + pluginName + "/index.js");
					this.plugins[pluginName].manifest = __webpack_require__(65)("./" + pluginName + "/manifest.js");
				}
			},
			loadMultiple: {
				value: function loadMultiple(plugins) {
					var _this = this;

					plugins.forEach(function (plugin) {
						return _this.load(plugin);
					});
					/*
	    var that = this;
	    plugins.forEach(function(plugin){
	    	that.load(plugin);
	    });
	    */

					//For now the load is Synchronous
					IDE.plugins.events.emit("all_loaded");
				}
			},
			activate: {
				value: function activate(pluginName) {
					/*
	     * Behaviour to be discussed
	     */
					this.registerPluginToolbarElements(pluginName);
					try {
						this.plugins[pluginName].code.activate();
					} catch (e) {}

					this.events.emit("plugin_activated", this.plugins[pluginName]);
				}
			},
			registerPluginToolbarElements: {
				value: function registerPluginToolbarElements(pluginName) {
					var _this = this;

					var toolbarElements = this.plugins[pluginName].manifest.toolbar;

					toolbarElements.forEach(function (element) {
						element.plugin = pluginName;
						_this.toolbarElements.push(element);
					});
				}
			},
			getToolbarElements: {
				value: function getToolbarElements() {
					return this.toolbarElements;
				}
			},
			onPluginActivated: {
				value: function onPluginActivated(callback) {
					this.events.on("plugin_activated", callback);
				}
			},
			onPluginsLoaded: {
				value: function onPluginsLoaded(callback) {
					this.events.on("all_loaded", callback);
				}
			},
			onPluginsActivated: {
				value: function onPluginsActivated(callback) {
					this.events.on("all_activated", callback);
				}
			}
		});

		return PluginsManager;
	})();

	module.exports = PluginsManager;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./history/index.js": 54,
		"./save/index.js": 61
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 53;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(55);

	var IDE = window.IDE;

	module.exports = {

		activate: function activate() {
			IDE.editor.onChange(this.onChange);
		},

		redo: function redo() {
			IDE.editor.redo();
		},

		undo: function undo() {
			IDE.editor.undo();
		},

		onChange: function onChange(event) {
			var undoManager = IDE.editor.editor.session.$undoManager;

			if (undoManager.hasUndo()) {
				IDE.toolbar.swapItemClass("undo", "undo", "undo-enabled");
			} else {
				IDE.toolbar.swapItemClass("undo", "undo-enabled", "undo");
			}
			if (undoManager.hasRedo()) {
				IDE.toolbar.swapItemClass("redo", "redo", "redo-enabled");
			} else {
				IDE.toolbar.swapItemClass("redo", "redo-enabled", "redo");
			}
		}
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\plugins\\history\\style.css", function() {
			var newContent = require("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\plugins\\history\\style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, ".page-toolbar-item-undo-enabled  {\r\n\tbackground-image: url("+__webpack_require__(57)+");\r\n}\r\n\r\n.page-toolbar-item-undo {\r\n\tbackground-image: url("+__webpack_require__(58)+");\r\n}\r\n\r\n.page-toolbar-item-redo-enabled {\r\n\tbackground-image: url("+__webpack_require__(59)+");\r\n\topacity:1;\r\n}\r\n\r\n.page-toolbar-item-redo{\r\n\tbackground-image: url("+__webpack_require__(60)+");\r\n}", ""]);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFGNjg5MDMyQTYxNDExRTQ4MkJCQjYxMkZGRjRBQ0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGNjg5MDMzQTYxNDExRTQ4MkJCQjYxMkZGRjRBQ0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUY2ODkwMzBBNjE0MTFFNDgyQkJCNjEyRkZGNEFDRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUY2ODkwMzFBNjE0MTFFNDgyQkJCNjEyRkZGNEFDRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sU73LAAAAvElEQVR42mL8//8/AyWApaC0kiIDmPDIFVNiQCcQ9xDlBSxivUBcRK4XutE0XwPiGUBsQYwB9UBcgiavCcTpQHwciFcCMT8+A2QIuDYMiLcBMQcuA0A2LUDT9A2I9wDxCiA+DcRWQJyLKxD/AXEKVCwGKiYIxL/QojYBGlZYA/EvVAHMJb/Q5PuBWIhQNIIMSQLij1jkQK68D7X4H76EBMogBTjkLsI0E0rKuMAyYvMCLnAUmcNIaXYGCDAAc8wnR6hMTyYAAAAASUVORK5CYII="

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMzdCMDczQTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDMzdCMDc0QTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUMzN0IwNzFBNjI1MTFFNDgyQkJCNjEyRkZGNEFDRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUMzN0IwNzJBNjI1MTFFNDgyQkJCNjEyRkZGNEFDRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4L1n+NAAAAvUlEQVR42mL8//8/AyWA5eq16xQZwIRHrpgSAzqBuIcoL2AR6wXiInK90I2m+RoQzwBiC2IMqAfiEjR5TSBOB+LjQLwSiPnxGSBDwLVhQLwNiDlwGQCyaQGapm9AvAeIVwDxaSC2AuJcXIH4D4hToGIxUDFBIP6FFrUJ0LDCGoh/oQpgLvmFJt8PxEKEohFkSBIQf8QiB3LlfajF//AlJFAGKcAhdxGmmVBSxgWWEZsXcIGjyBxGSrMzQIABAMnjKGuzisyVAAAAAElFTkSuQmCC"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMzdCMDZCQTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDMzdCMDZDQTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUY2ODkwMzRBNjE0MTFFNDgyQkJCNjEyRkZGNEFDRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUMzN0IwNkFBNjI1MTFFNDgyQkJCNjEyRkZGNEFDRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/MkPOAAAAtUlEQVR42mL8//8/AyWApaC0kiIDmIhUV0SpAb1A3EmJASBQBjWIaAMsgHgGEF9D80oPSiBi0cgPxLOAOAyHwcVA/BmIG7EZwAHEW4HYmoB3ZHG5IBeq+TQQ3wViESC2AmIuJDULgDgNlwGxQFyCFlhsQPwTyl4MxClA/A9XIAoBcT+a2C8kmxOB+C+uWACxHyCbjgQmAnESumZ0L4A0nsERaAXEpsQVlOaFE6QawEhpdgYIMAC7ViPQKa1j0wAAAABJRU5ErkJggg=="

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMzdCMDZGQTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDMzdCMDcwQTYyNTExRTQ4MkJCQjYxMkZGRjRBQ0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUMzN0IwNkRBNjI1MTFFNDgyQkJCNjEyRkZGNEFDRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUMzN0IwNkVBNjI1MTFFNDgyQkJCNjEyRkZGNEFDRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4XHdZgAAAAtklEQVR42mL8//8/AyWA5eq16xQZwESkuiJKDegF4k5KDACBMqhBRBtgAcQzgPgamld6UAIRi0Z+IJ4FxGE4DC4G4s9A3IjNAA4g3grE1gS8I4vLBblQzaeB+C4QiwCxFRBzIalZAMRpuAyIBeIStMBiA+KfUPZiIE4B4n+4AlEIiPvRxH4h2ZwIxH9xxQKI/QDZdCQwEYiT0DWjewGk8QyOQCsgNiWuoDQvnCDVAEZKszNAgAEAEXwk9CKSJR0AAAAASUVORK5CYII="

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(62);

	var IDE = window.IDE;

	module.exports = {

		activate: function activate() {
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

		saveTextAsFile: function saveTextAsFile(fileNameToSaveAs, textToWrite) {
			var file2Save = studio.File(fileNameToSaveAs);
			if (!file2Save.exists) {
				var bCreated = file2Save.create();
				if (!bCreated) {
					debug_alert("Failed to create " + gitIgnorePath);
					return;
				}
			}
			studio.saveText(textToWrite, file2Save);
		},

		save: function save() {

			IDE.toolbar.removeClassToItem("save", "save-enabled");

			IDE.editor.setReadOnly(true);

			this.saveTextAsFile(IDE.qParams.path, IDE.editor.getContent());

			studio.editor.setDirty(false);
			IDE.editor.dirty = false;
			IDE.editor.setReadOnly(false);
		},

		onDirty: function onDirty() {
			//document.title = `(*) ${document.title}`;
			//alert('on dirty, by whom?');
			studio.editor.setDirty(true);
			IDE.toolbar.addClassToItem("save", "save-enabled");
		},

		onClean: function onClean() {
			document.title = document.title.substr(4);
		}
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\plugins\\save\\style.css", function() {
			var newContent = require("!!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\node_modules\\css-loader\\index.js!c:\\Users\\cwhou\\Documents\\Wakanda\\Extensions\\htmlCssEditor\\plugins\\save\\style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	exports.push([module.id, ".page-toolbar-item-save-enabled {\r\n\topacity:1 !important;\r\n}\r\n\r\n.page-toolbar-item-save {\r\n\tbackground-position-x: 5px;\r\n\tbackground-size: 26px;\r\n\tbackground-image: url("+__webpack_require__(64)+");\r\n\topacity:0.5;\r\n}", ""]);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzMxODNmYi05MjJhLTQzOGYtYmNjZi1hMDM4MWI2ZTUwNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTcyNkQyMDEwNEVGMTFFNDg0MERGQkM4MTU0RDUwQUQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTcyNkQyMDAwNEVGMTFFNDg0MERGQkM4MTU0RDUwQUQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjllMTE1OTQtYjQ0Ny00MTA2LWI1M2QtYzc1OWI1ZTRjMzUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmMzMzE4M2ZiLTkyMmEtNDM4Zi1iY2NmLWEwMzgxYjZlNTA2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqbkPnUAAACzSURBVHjaYvz//z/DQAImhgEGow4YcAewgIjk5GRy9XMAsQ0Q7yFH89y5cykOATEg3j2aBkYdMOoAissBMoAglOZH44PAe3qEwFIgfgfEl6D8d1C8gV5R0IZDvIVeDjgCxIfRxE6TUypSkghbCfBp7oCdQHwGyr4MxJsoccB/KCY3LbSTqB9uH6XlwEYoXj1QBdE/IA4D4j8DWRL+Gq0LqFkX/B9xIcA42jUbdcBAOwAgwABVZSWqQCIChwAAAABJRU5ErkJggg=="

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./history/manifest.js": 66,
		"./save/manifest.js": 67
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 65;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
		subscribe: ["editor.onchange"],
		toolbar: [{
			name: "undo",
			type: "button",
			action: "undo"
		}, {
			name: "redo",
			type: "button",
			action: "redo"
		}, {
			type: "separator"
		}]
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {
		subscribe: ["editor.ondirty", "editor.onclean"],
		toolbar: [{
			name: "save",
			type: "button",
			action: "save"
		}, {
			type: "separator"
		}]
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Utils = __webpack_require__(69);

	var query = _Utils.query;
	var mapExtToEditorMode = _Utils.mapExtToEditorMode;

	var Module = {
		activate: function activate(loaded) {
			//Core Plugin qParams
			var qParams = query();
			var mode = qParams.mode;
			IDE.qParams = qParams;

			IDE.qParams.path = "";

			loaded();
		}
	};

	module.exports = Module;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function query() {
		var str = window.location.search;
		var regex = /([^&=?]+)=?([^&]*)/g;
		var dict = {};
		var parts = null;

		while (parts = regex.exec(str)) {
			var key = decodeURIComponent(parts[1]);

			dict[key] = decodeURIComponent(parts[2]);
		}

		return dict;
	};

	function mapExtToEditorMode(ext) {

		var extMap = {
			js: "javascript",
			wamodel: "json",
			wasettings: "xml",
			wadirectory: "xml",
			waproject: "xml",
			waperm: "xml",
			md: "markdown"
		};

		return extMap[ext] || ext;
	}

	function safeClassReplace(str, oldClass, newClass) {
		return str.replace(new RegExp("(^| |\t)+" + oldClass + "($| |\t)+", "g"), " " + newClass + " ");
	}

	exports.query = query;
	exports.mapExtToEditorMode = mapExtToEditorMode;
	exports.safeClassReplace = safeClassReplace;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var TabManager = _interopRequire(__webpack_require__(71));

	var Module = {
		activate: function activate(loaded) {
			IDE.tabs = TabManager;
			IDE.tabs.list = {};

			TabManager.connect(IDE.qParams.path);

			TabManager.on("close", function () {
				TabManager.close();
				TabManager.connect();
			});

			TabManager.on("join", function (id) {
				IDE.tabs.list[id] = true;
			});

			TabManager.on("leave", function (id) {
				delete IDE.tabs.list[id];
			});

			loaded();
		}
	};

	module.exports = Module;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var tabManager = (function () {
		"use strict";

		/**
	  * @var {WebWorker}
	  */
		var _worker;

		/**
	  * @var {Object} event hash
	  */
		var _events = {};

		/**
	  * Initialize system
	  * @param {string} name
	  */
		function connect(name) {
			if (_worker) {
				throw new Error("tabManager allready connected");
			}
			_worker = new SharedWorker("/ce/src/modules/tabManager/shared-worker.js");
			_worker.port.addEventListener("message", onmessage, false);
			_worker.port.start();

			_worker.port.postMessage({
				type: "__registerid",
				data: name
			});
		}

		window.addEventListener("unload", close);

		/**
	  * Open a new page
	  * @param {string} url
	  */
		function createTab(url) {
			window.open(url, "_blank").focus();
		}

		/**
	  * Focus a tab
	  * @param {string} tab
	  */
		function focusTab(tab) {
			var win = getTabRef(tab);

			if (win) {
				win.focus();
			}
		}

		/**
	  * Close a tab
	  * @param {string} tab
	  */
		function closeTab(tab) {
			var win = getTabRef(tab);

			if (win) {
				win.close();
			}
		}

		/**
	  * Get tab reference
	  * @param {string} tab name
	  * @return {window} window reference
	  */
		function getTabRef(name) {
			var win = window.open("", name);

			if (!win) {
				return;
			}

			// Can't get reference...
			if (win.location.hostname === "") {
				win.close();
				return null;
			}

			return win;
		}

		/**
	  * Close the connection
	  */
		function close() {
			if (!_worker) {
				return;
			}

			_worker.port.postMessage({ type: "__disconnect" });
			_worker.port.removeEventListener("message", onmessage, false);
			_worker.port.close();

			_worker = null;
			_events = {};

			fire("disconnect");
		}

		/**
	  * Send data to a tab
	  * @param {mixed} data
	  * @param {string} tab
	  */
		function send(type, data, tab) {
			if (!_worker) {
				throw new Error("tabManager isn't connected");
			}

			_worker.port.postMessage({
				type: type,
				to: tab || "*",
				data: data });
		}

		/**
	  * Message listener
	  * @param {object} event
	  */
		function onmessage(event) {
			var type = event.data.type;
			var data = event.data.data;

			switch (type) {
				// Get my id
				case "connect":
				case "__changename":
					window.name = data;
					break;

				// Ping pong to avoid timeout
				// Note: there is no onclose event on SharedWorker !
				case "__ping":
					_worker.port.postMessage({
						type: "__pong"
					});
					return;
			}

			fire(type, data);
		}

		/**
	  * Enable an event
	  * @param {string} eventName
	  * @param {function} callback on event
	  */
		function on(eventName, callback) {
			if (!(eventName in _events)) {
				_events[eventName] = [];
			}

			if (_events[eventName].indexOf(callback) > -1) {
				return;
			}

			_events[eventName].push(callback);
		}

		/**
	  * Disable an event
	  * @param {string} eventName
	  */
		function off(eventName, callback) {
			if (!(eventName in _events)) {
				return;
			}

			if (callback) {
				var pos = _events[eventName].indexOf(callback);

				if (pos > -1) {
					_events.splice(pos, 1);
				}
			} else {
				delete _events[eventName];
			}
		}

		/**
	  * Fire an event
	  *
	  * @param {string} eventName
	  * @param {object} data to send
	  */
		function fire(eventName, data) {
			if (!(eventName in _events)) {
				return;
			}

			var i, count;
			var event = _events[eventName];

			for (i = 0, count = event.length; i < count; ++i) {
				event[i](data);
			}
		}

		/**
	  * Exports
	  */
		return {
			connect: connect,
			close: close,
			send: send,

			on: on,
			off: off,

			createTab: createTab,
			closeTab: closeTab,
			focusTab: focusTab
		};
	})();

	module.exports = tabManager;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Toolbar = _interopRequire(__webpack_require__(73));

	var Module = {
		activate: function activate(loaded) {
			var toolbar = new Toolbar({
				className: "page_toolbar"
			});
			IDE.toolbar = toolbar;

			IDE.plugins.onPluginsLoaded(function () {});

			IDE.plugins.onPluginsActivated(function () {});

			loaded();
		}
	};

	module.exports = Module;

	//alert("Plugins Loaded");

	//alert("Plugins Activated");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var safeClassReplace = __webpack_require__(69).safeClassReplace;

	var IDE = window.IDE;

	var Toolbar = (function () {
		function Toolbar(options) {
			var _this = this;

			_classCallCheck(this, Toolbar);

			this.className = options.className;

			var container = document.getElementsByClassName(this.className)[0];

			this.container = container;
			this.items = [];
			this.itemPrefix = "page-toolbar-item-";

			this.addItems(options.items);

			IDE.plugins.onPluginActivated(this.addPluginItems);

			IDE.plugins.onPluginsActivated(function () {
				return _this.create();
			});
		}

		_createClass(Toolbar, {
			addItems: {
				value: function addItems(items) {
					if (items && items.length) {
						var _items;

						(_items = this.items).push.apply(_items, _toConsumableArray(items));
					}
				}
			},
			addPluginItems: {
				value: function addPluginItems(plugin) {}
			},
			renderItem: {
				value: function renderItem(item) {
					var action = item.action;
					var name = item.name;
					var plugin = item.plugin;
					var type = item.type;
					var template = "";

					switch (type) {
						case "button":
							template = "<li data-plugin=\"" + plugin + "\" data-command=\"" + action + "\" class=\"page-toolbar-item page-toolbar-item-" + name + "\" id=\"page-toolbar-item-" + name + "\" title=\"" + name + "\"></li>";
							break;

						case "separator":
							template = "<li class=\"page-toolbar-item page-toolbar-item-separator\"></li>";
							break;
					}

					return template;
				}
			},
			render: {
				value: function render() {
					var toolbarHtml = "";

					toolbarHtml = this.items.map(this.renderItem).join("");

					this.container.innerHTML = "<ul class=\"page-toolbar-items\">" + toolbarHtml + "</ul>";
				}
			},
			hookEvents: {
				value: function hookEvents() {
					this.container.addEventListener("click", function (event) {
						var target = event.target;
						var pluginName = target.getAttribute("data-plugin");
						var command = target.getAttribute("data-command");
						var plugin = IDE.plugins.get(pluginName);
						plugin.code[command]();
					});
				}
			},
			create: {
				value: function create() {
					this.items = IDE.plugins.getToolbarElements(); //TMP
					this.render();
					this.hookEvents();
				}
			},
			getItemContainer: {
				value: function getItemContainer(targetId) {
					targetId = this.itemPrefix + targetId;

					var container = window.document.getElementById(targetId);

					return container;
				}
			},
			swapItemClass: {
				value: function swapItemClass(item, oldClass, newClass) {
					var container = this.getItemContainer(item);
					newClass = this.itemPrefix + newClass;
					oldClass = this.itemPrefix + oldClass;
					container.className = safeClassReplace(container.className, oldClass, newClass);
				}
			},
			addClassToItem: {
				value: function addClassToItem(item, newClass) {
					var container = this.getItemContainer(item);
					newClass = this.itemPrefix + newClass;
					container.className = container.className + " " + newClass;
				}
			},
			removeClassToItem: {
				value: function removeClassToItem(item, targetClass) {
					var container = this.getItemContainer(item);
					targetClass = this.itemPrefix + targetClass;
					container.className = safeClassReplace(container.className, targetClass, "");
				}
			},
			editItemClasses: {
				value: function editItemClasses(item, options) {
					var _this = this;

					var toRemove = options.remove;
					var toAdd = options.add;
					var container = this.getItemContainer(item);

					toRemove.forEach(function (item) {
						_this.removeClassToItem(container, item);
					});

					toAdd.forEach(function (item) {
						_this.removeClassToItem(container, item);
					});
				}
			}
		});

		return Toolbar;
	})();

	module.exports = Toolbar;

	//TODO

/***/ }
/******/ ]);