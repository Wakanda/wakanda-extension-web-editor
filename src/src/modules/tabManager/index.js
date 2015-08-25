import TabManager from "./TabManager"

var Module =  {
	activate(loaded){
		IDE.tabs      = TabManager;
		IDE.tabs.list = {};

		TabManager.connect(IDE.qParams.path);

		TabManager.on('close', function(){
			TabManager.close();
			TabManager.connect();
		});

		TabManager.on('join', function(id) {
			IDE.tabs.list[id] = true;
		});

		TabManager.on('leave', function(id){
			delete IDE.tabs.list[id];
		});
		
		loaded();
	}
}

export default Module;


