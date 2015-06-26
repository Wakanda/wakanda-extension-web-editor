function query(){
	var str    = window.location.search;
	var regex  = /([^&=?]+)=?([^&]*)/g;
	var dict   = {};
	var parts  = null;
	
	while ( parts = regex.exec(str) ) {
		let key = decodeURIComponent(parts[1]);	
		
		dict[key] = decodeURIComponent(parts[2]);
	}
	
	return dict;
};

function mapExtToEditorMode(ext){
	
	var extMap = {
		js : "javascript",
		wamodel : "json",
		wasettings : "xml",
		wadirectory : "xml",		
		waproject : "xml",
		waperm : "xml",
		md : "markdown"
	};
	
	return extMap[ext] || ext;
}

function safeClassReplace(str, oldClass, newClass){
	return str.replace(new RegExp(`(^| |\t)+${oldClass}($| |\t)+`,"g"), ` ${newClass} `);
}

export {query, mapExtToEditorMode, safeClassReplace};