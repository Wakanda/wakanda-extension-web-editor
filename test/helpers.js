var editor = document.createElement('DIV');
editor.setAttribute('id','editor');
editor.className = 'cloud-ide-editor';
document.body.appendChild(editor);

var toolbar = document.createElement('DIV');
toolbar.className = 'page_toolbar';
document.body.appendChild(toolbar);

window.studio = {};

window.studio.editor = {};

window.studio.editor.loaded = function(){ 
    console.log('studio loaded mocked!');
};