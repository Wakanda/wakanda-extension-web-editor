class StudioManager {	
	
	getPreferences() {
		var preferences = {};

		preferences.fontFamily = studio.getPref('fontName');
		preferences.fontSize = navigator.platform.indexOf('Win') > -1 ? studio.getPref('fontSize')+'pt' : studio.getPref('fontSize')+'px';
	    preferences.theme = studio.getPreferences('codeEditor.colorScheme') ? 'ace/theme/' + studio.getPreferences('codeEditor.colorScheme') : 'ace/theme/chrome';
	    preferences.tabSize = studio.getEditorPref('js','tabSize');
	    preferences.useSoftTabs = studio.getEditorPref('js','insertSpacesForTabs') || false;
	    preferences.displayIndentGuides = studio.getPref('showTabulationLine') || false;
	    preferences.showLineNumbers = studio.getPref('showLineNumbers') || false;
	    preferences.fadeFoldWidgets = studio.getPref('autohideCollapseButton') || false;
	    
		return preferences;
	}

	refreshPreferences() {
		IDE.editor.editor.setOptions(this.getPreferences());	
	}

	loadFile(fn) {
		IDE.qParams.path = fn;
		IDE.editor.loadFile();
	}
		
	shortcut_plugins_save_save() {
		IDE['plugins']['plugins']['save']['code']['save']();
	}

	posFromOffset( offsetPos ) {
		var row = 0, col = 0;
		var pos = 0;
		while (row < lines.length && pos + lines[row].length < offsetPos) {
			pos += lines[row].length;
			pos++; // for the newline 0x0D
			row++;
		}
		col = offsetPos - pos;
		return {row: row, column: col};
	}

	selectByTextOffset(start, end) {
		var aceStartPos;
		var aceEndPos;
		var doc = IDE.editor.editor.getSession().getDocument();
		var lines = doc.getAllLines();

		aceStartPos = this.posFromOffset(start);
		aceEndPos = this.posFromOffset(end);

		IDE.editor.editor.resize(true);

		var scrollColumn = parseInt(aceStartPos.column);
		IDE.editor.editor.navigateFileStart();
		IDE.editor.editor.navigateLeft(scrollColumn);
		
		var scrollLine = parseInt((aceStartPos.row + aceEndPos.row)/2)+1;
		IDE.editor.editor.scrollToLine(scrollLine, true, true);
		
		var sel = IDE.editor.editor.getSelection();
		var range = sel.getRange();
		
		range.setStart( aceStartPos.row, aceStartPos.column );
		range.setEnd( aceEndPos.row, aceEndPos.column );

		sel.setSelectionRange( range );
	};

	getText() {
		var content2Search = IDE.editor.getContent();
		return content2Search;
	};

	getSelectedText() {
		return IDE.editor.editor.getSelectedText();
	};

	insertText(text2Insert) {
		IDE.editor.editor.session.replace(IDE.editor.editor.selection.getRange(), text2Insert) 
	};
}

export default StudioManager;