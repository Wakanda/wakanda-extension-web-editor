var IDE = window.IDE;

class Tree {
	constructor(options) {
		
		this.className = options.className;
		
		var container = document.getElementsByClassName(this.className)[0];
		
		this.container = container;
		
		var _EventEmitter   = require('../../../lib/micro-events.js');
		this.events = new _EventEmitter();
				
		this.create(options);
	}
	
	static fetcher(node, callback) {
		var path = (node.id !== "#")? node.id : "/";
		
		IDE
		.fileManager
		.getTree(path)
		.then( Tree.mapper(node, callback) );			
	}
	
	static mapper(node, callback) {
		return function(response){
			var obj = response.content.map(function(element){
				return Tree.adaptToNodeFormat(element);
			});						
			
			if( node.parent === null ) {
				obj = [{
					"id" : "/",
					"text" : "/",
					"icon" : "cloud-ide-tree-ext-home",
					"children" : obj
				}];				
			}
			
			callback(obj);
		}
	}
	
	static extensionMapper(extension){
		var known = {
			"wasolution"   : "wasolution",
			"wadirectory"  : "wadirectory",
			"waproject"    : "waproject",
			"wamodel"      : "wamodel",
			"waperm"       : "waperm",
			"html"         : "html",
			"js"           : "js",
			"json"         : "json",
			"css"          : "css",
			"folder"       : "folder"
		};
		
		var className = known[extension] || "unknown";
		
		return className; 
	}
	
	static adaptToNodeFormat(element) {
		
		var extension = "";		
		if(element.type !== "folder") {
			var pos       = element.name.lastIndexOf('.');
			
			extension = pos > -1 ? element.name.substr(pos + 1).toLowerCase() : "unknown";
		}
		
		return {
			"id"       : element.path,
			"text"     : element.name,
			"icon"     : "cloud-ide-tree-ext-" + Tree.extensionMapper(extension || "folder"),
			"children" : element.type==="folder"? true : false
		};
	}
	
	static onselect(event, element){
		var path = element.node.id;
		
		if(IDE.tabs.list[path]){
			IDE.tabs.focusTab(path);
		} else if(path==IDE.qParams.path){
			
		}else{
			var url  = window.location.origin + window.location.pathname + "?project=" + IDE.qParams.project + "&path=" + path;
			IDE.tabs.createTab(url);
		}
	}
	
	render() {
		var jstree = require("../../../lib/jstree/jstree.js");
		var $      = require("../../..//lib/jquery-2.1.3.min.js");
		
		this.$container = $(this.container);
		
		this.$container.jstree({
			core : {
				data : Tree.fetcher
			}
		})
		.on("activate_node.jstree",Tree.onselect)
		.on("loaded.jstree", () => this.events.emit("ready") );
	}
	
	hookEvents(){
		
		this.events.on("ready", ()=>this.init() );
		var that     = this;
		var interact = require("../../../lib/interact-1.2.4.min.js");
		
		interact('.cloud-ide-tree-editor-handle')
		.draggable({
			restrict: {
				//restriction: "parent",
				elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
			},
			onmove: function(event){
				//debugger;
				var target = event.target;
				var x      = event.dx;

				// translate the element
				var newValue = target.offsetLeft+x;
				newValue = (newValue>0)? newValue : 0;
				target.style.left = newValue +"px";
				editor.style.left = (newValue+target.offsetWidth) +"px";
				that.container.style.width = (newValue - that.container.offsetLeft) + "px";
			}
		});
	}
	
	init(project, path) {
		var arrPath = IDE.qParams.path.split("/");
		arrPath.splice(0,1);
		this.navigateToPath("/", arrPath);
	}
	
	navigateToPath(currentPath, arrNext) {
		
		var next = arrNext.splice(0, 1);
		
		this.navigateToNode(currentPath, ()=>{
			if(next.length) {
				this.navigateToPath(`${currentPath}/${next}`.replace(/\/\//g, '/'), arrNext);
			} else {
				this.selectNode(currentPath);
			}
		});
	}
	
	selectNode(path){
		this.$container.jstree().select_node(path, true);
	}
	
	navigateToNode(path, callback) {
		
		var node = this.$container.jstree().get_node(`[id="${path}"]`)
		this.$container.jstree().open_node(node, callback);
	}
	
	create(options) {
		this.render();
		this.hookEvents();
	}
}

export default Tree;