(function(global) {
	'use strict';


	/**
	 * @var {Array} client list
	 */
	var _clients = [];


	/**
	 * @var {number} Timeout interval to remove freezed/closed window from list
	 */
	var TIMEOUT = 5000;


	/**
	 * Get empty slot
	 * @return {number} slot index
	 */
	function getFreeSlot() {
		var i, count;

		for (i = 0, count = _clients.length; i < count; ++i) {
			if (!_clients[i]) {
				return i;
			}
		}

		return i;
	}


	/**
	 * Detect if the main tab is closed, if it's the case then
	 * attribute the role to a new tab
	 */
	function checkAndDefineNewMainTabIfNeeded() {
		var i, j, count;

		for (i = 0, count = _clients.length; i < count; ++i) {
			if (_clients[i]) {
				j = i;

				if(_clients[i].isMain){
					return;
				}
			}
		}

		_clients[j].isMain = true;
		_clients[j].postMessage({ type: 'main' });
	}


	/**
	 * Generate an unique name
	 * @param {string} base name
	 * @return {string}
	 */
	function generateUID(name) {
		var i, count;
		var num = 1;

		name = name || 'unknown';

		for (i = 0, count = _clients.length; i < count; ++i) {
			if (_clients[i] && _clients[i].uid === name) {

				for (i = 0; i < count; ++i) {
					if (_clients[i] && _clients[i].uid === name + num) {
						num++;
						i = - 1;
					}
				}

				return name + num;
			}
		}

		return name;
	}


	/**
	 * Generic message handler
	 * @param {number} slot id
	 */
	function genericMessage(id) {
		return function onMessage(event) {
			var i, count;

			if (!_clients[id]) {
				return;
			}

			switch (event.data.type) {
				case '__pong':
					_clients[id].tick = Date.now();
					break;

				case '__disconnect':
					broadCastExcept( id, {
						type: 'leave',
						data: _clients[id].uid
					});

					_clients[id] = undefined;
					checkAndDefineNewMainTabIfNeeded();
					break;

				case '__registerid':
					_clients[id].uid = generateUID(event.data.data);

					// Update id
					_clients[id].postMessage({
						type: 'connect',
						data: _clients[id].uid
					});

					// send list of available windows
					for (i = 0, count = _clients.length; i < count; ++i) {
						if (i !== id && _clients[i]) {
							_clients[id].postMessage({
								type: 'join',
								data: _clients[i].uid
							});
						}
					}

					// Notify other windows
					broadCastExcept( id, {
						type: 'join',
						data: _clients[id].uid
					});

					checkAndDefineNewMainTabIfNeeded();
					break;

				default:
					// Send to all
					if (event.data.to === '*') {
						broadCastExcept( id, event.data);
						break;
					}

					// Send to one
					for (i = 0, count = _clients.length; i < count; ++i) {
						if (_clients[i].uid === event.data.to) {
							_clients[i].postMessage(event.data);
							break;
						}
					}
					break;
			}
		};
	}


	/**
	 * Broadcast to every one except...
	 * @param {number} id (slot)
	 * @param {object} data to send
	 */
	function broadCastExcept(id, data) {
		var i, count;

		for (i = 0, count = _clients.length; i < count; ++i) {
			if (i !== id && _clients[i]) {
				_clients[i].postMessage(data);
			}
		}
	}


	/**
	 * Handle connection
	 * @param {object} event
	 */
	function onConnect(event) {
		var port, id;

		port         = event.source;
		port.tick    = Date.now();
		id           = getFreeSlot();
		_clients[id] = port;

		port.addEventListener('message', genericMessage(id), false);
		port.start();
	}


	/**
	 * Ping to disconnect tabs on timeout
	 */
	function onCheckTimeout() {
		var i, count, now;

		now   = Date.now();
		count = _clients.length;

		for (i = 0; i < count; ++i) {
			if (!_clients[i]) {
				continue;
			}

			// Timeout, disconnect it
			if (_clients[i].tick + TIMEOUT + 200 < now) {
				broadCastExcept( i, {
					type: 'leave',
					data: _clients[i].uid
				});

				_clients[i].postMessage({
					type: 'close',
				});

				_clients[i] = undefined;
				continue;
			}

			_clients[i].postMessage({
				type: '__ping'
			});
		}

		checkAndDefineNewMainTabIfNeeded();
	}

	global.addEventListener('connect', onConnect, false);
	setInterval( onCheckTimeout, TIMEOUT);
})(this);