var IDE = window.IDE;

export default {
	
	activate() {
        IDE.plugins.events.on("all_activated", this.onStudioManagerReady );
	},

    onStudioManagerReady() {
        IDE.studioManager.refreshPreferences();
        studio.editor.loaded();
        window.onblur = function() { 
            IDE.editor.editor.clearSelection();
        };
    }

}