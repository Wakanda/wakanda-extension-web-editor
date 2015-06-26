/* Copyright (c) 4D, 2012
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* The Software shall be used for Good, not Evil.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

var actions = {};

actions.loadDone = function loadDone() {
	//studio.alert('I am done');
}

actions.save = function save() {
	//studio.alert('I am done');
}

actions.load = function load( message ) {
	"use strict";
	
	if ( message.params.file !== '' ) {
	
		var file	= studio.File(message.params.file);
		var mode	= '';
		
		switch ( file.extension.toLowerCase() ) {
		
			case 'js':
				mode = 'javascript';
				break;
			case 'html':
				mode = 'htmlmixed';
				break;
			case 'css':
				mode = 'css';
				break;
			case 'waperm':
			case 'xml':
				mode = 'xml';
				break;
			default:
				mode = 'htmlmixed';			
		};
		
		
		studio.extension.storage.setItem( 'extension' , studio.extension.getFolder().path );
		studio.extension.storage.setItem( 'mode' , mode );

//studio.alert('load ' + message.params.file);
		studio.extension.storage.setItem( 'file' , message.params.file );
	}
	return true;
}


exports.handleMessage = function handleMessage(message) {
	"use strict";
	var
		actionName;

	actionName = message.action;

	if (!actions.hasOwnProperty(actionName)) {
		studio.alert("I don't know about this message: " + actionName);
		return false;
	}
	actions[actionName](message);
};

