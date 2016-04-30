var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
var SongConstants = require("../constants/allConstants.js");

var PlayStore = new Store(AppDispatcher);

var _queue = [];
var _errors = [];
var _nowPlaying = null;

var setErrors = function(error) {
	_errors.push(error);
};

var addSong = function(song) {
	if (!_nowPlaying) {
		_nowPlaying = song;
	} else {
		_queue.push(song);
	}
};

var removeFromQueue = function(queueIdx) {
	_queue.splice(queueIdx, 1);
};

PlayStore.queue = function() {
	var queue = [];
	_queue.forEach(function(song) {
		queue.push(song);
	})
	return queue;
};

var nextSong = function() {
	_nowPlaying = _queue[0];
	_queue = _queue.slice(1);
};

PlayStore.nowPlaying = function() {
	return _nowPlaying;
};

PlayStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case SongConstants.SONG_RECEIVED:
			addSong(payload.song);
			break;
		case SongConstants.SONGS_ERROR:
			setErrors(payload.errors);
			break;
		case SongConstants.NEXT_SONG:
			nextSong();
			break;
		case SongConstants.QUEUE_REMOVE:
			removeFromQueue(payload.idx);
			break;
	}
	this.__emitChange();
};

window.Play = PlayStore;
module.exports = PlayStore;