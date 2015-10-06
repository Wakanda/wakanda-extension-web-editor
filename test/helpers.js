var editor = document.createElement('DIV');
editor.setAttribute('id','editor');
editor.className = 'cloud-ide-editor';
document.body.appendChild(editor);

var toolbar = document.createElement('DIV');
toolbar.className = 'page_toolbar';
document.body.appendChild(toolbar);

window.studio = {};

window.studio.editor = {};

window.studio.editor.loaded = function() { 
    console.log('studio loaded mocked!');
};

window.studio.getPref = window.studio.getPreferences = window.studio.getEditorPref = function(prefName) {
	console.log('studio getPreferences mocked');
	return prefName;
};

window.studio.setPref = window.studio.setPreferences = window.studio.setEditorPref = function(prefName,prefValue) {
	console.log('studio setPreferences mocked');
	return prefValue;
};