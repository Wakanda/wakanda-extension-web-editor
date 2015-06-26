var tabManager = (function(){
	'use strict';

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
			throw new Error('tabManager allready connected');
		}
		_worker = new SharedWorker('/ce/src/modules/tabManager/shared-worker.js');
		_worker.port.addEventListener('message', onmessage, false);
		_worker.port.start();

		_worker.port.postMessage({
			type: '__registerid',
			data: name
		});
	}

	window.addEventListener('unload', close);


	/**
	 * Open a new page
	 * @param {string} url
	 */
	function createTab(url) {
		window.open(url, '_blank').focus();
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
		var win = window.open('', name);

		if (!win) {
			return;
		}

		// Can't get reference...
		if (win.location.hostname === '') {
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

		_worker.port.postMessage({ type: '__disconnect' });
		_worker.port.removeEventListener('message', onmessage, false);
		_worker.port.close();

		_worker = null;
		_events = {};

		fire('disconnect');
	}


	/**
	 * Send data to a tab
	 * @param {mixed} data
	 * @param {string} tab
	 */
	function send(type, data, tab) {
		if (!_worker) {
			throw new Error('tabManager isn\'t connected');
		}

		_worker.port.postMessage({
			type: type,
			to:   tab || '*',
			data: data,
		});
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
			case 'connect':
			case '__changename':
				window.name = data;
				break;

			// Ping pong to avoid timeout
			// Note: there is no onclose event on SharedWorker !
			case '__ping':
				_worker.port.postMessage({
					type: '__pong'
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
		}
		else {
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
		close:   close,
		send:    send,

		on:      on,
		off:     off,

		createTab: createTab,
		closeTab:  closeTab,
		focusTab:  focusTab
	};
})();

export default tabManager;