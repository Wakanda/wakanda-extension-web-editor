import StudioManager from "./StudioManager"

var IDE = window.IDE;

export default {

	activate(loaded) {

        if (typeof studio !== 'undefined') {
            this.init();
        }

        loaded();
		
	},

    init() {
        var studioManager    = new StudioManager();
        IDE.studioManager    = studioManager;
        IDE.fileManager.getFile = IDE.studioManager.getFile;
    }
}