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
};

PlayStore.__onDispatch: function() {
	switch (payload.actionType) {
		case SongConstants.SONG_RECEIVED:
			addSong(payload.song);
			break;
		case SongConstants.SONGS_ERROR:
			setErrors(payload.errors);
			break;

	}
	this.__emitChange();
};

module.exports = PlayStore;