var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
var SongConstants = require("../constants/allConstants.js");

var PlayStore = new Store(AppDispatcher);

var _queue = [];
var _errors = [];

var setErrors = function(error) {
	_errors.push(error);
};

var _nowPlaying = null;

var addSong = function(song) {
	_queue.push(song);
	_nowPlaying = _queue[0];
};

PlayStore.queue = function() {
	var queue = [];
	_queue.forEach(function(song) {
		queue.push(song);
	})
	return queue;
};

var nextSong = function() {
	_queue = _queue.slice(1);
	_nowPlaying = _queue[0];
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
	}
	this.__emitChange();
};

window.Play = PlayStore;
module.exports = PlayStore;