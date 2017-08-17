var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
// var SongConstants = require("../constants/allConstants.js");
import SongConstants from '../constants/allConstants.js';

var PlayStore = new Store(AppDispatcher);

var _queue = [];
var _errors = [];
var _nowPlaying = null;

var setErrors = function(error) {
	_errors.push(error);
};

var addSong = function(song) {
	_queue.push(song);
};

var playSong = function(song) {
	_nowPlaying = song;
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

// var clearPlaying = function() {
// 	_nowPlaying = null;
// 	PlayStore.__emitChange();
// };

var nextSong = function() {
	_nowPlaying = _queue[0];
	_queue = _queue.slice(1);

	//console.log(_nowPlaying);
};

PlayStore.nowPlaying = function() {
	return _nowPlaying;
};

PlayStore.songPlaying = function() {
	if (_nowPlaying) {
		return true;
	} else {
		return false;
	}
};

PlayStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case SongConstants.SONG_RECEIVED:
		// console.log("now playing song");
		// console.log(payload);
			playSong(payload.song);
			break;
		case SongConstants.ADD_SONG:
			addSong(payload.song);
			break;
		case SongConstants.SONGS_ERROR:
			setErrors(payload.errors);
			break;
		case SongConstants.NEXT_SONG:
		// console.log("next song working dispatch receiver");
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