var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
import SongConstants from '../constants/allConstants.js';

var SongStore = new Store(AppDispatcher);

var _songs = {};
var _errors = [];

var setErrors = function(errors) {
	var temp = errors;
  	if (temp.length > 0) {
    	temp.forEach(function(error) {
      	_errors.push(error);
   		 });
 	 } else {
    _errors.push(temp);
  }

};

var resetSongs = function(songs) {
	// console.log(songs);
	_songs = {};

	songs.forEach(function(song) {
		_songs[song.id] = song;
	})
};

SongStore.findSongs = function(partialTitle) {
	var possSongs = [];
	if (partialTitle.length < 1) {
		return [];
	}
	var songs = SongStore.all();

	songs.forEach(function(song) {
		if (song.title.toLowerCase().match(".*" + partialTitle.toLowerCase() + ".*")) {
			possSongs.push(song);
		} else if (song.artist.toLowerCase().match(".*" + partialTitle.toLowerCase() + ".*")) {
			possSongs.push(song)
		}
	})
	return possSongs;
};

SongStore.find = function(id) {
	return _songs[id];
}

SongStore.all = function() {
	return Object.keys(_songs).map(function(key) {
		return _songs[key];
	});
};

SongStore.likedSongs = function(songIds) {
	debugger;
	userSongs = [];
	songIds.forEach(function(songId) {
		userSongs.push(_songs[songId]);
	})

	return userSongs;
};

SongStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case SongConstants.SONGS_RECEIVED:
			// console.log("songs recieved");
			// console.log(payload);
			resetSongs(payload.songs);
			break;
		case SongConstants.SONGS_ERROR:
			setErrors(payload.errors);
			break;
		case SongConstants.ARTIST_SONGS:
			resetSongs(payload.songs);
			break;
	}
	this.__emitChange();
};

window.SongStore = SongStore
module.exports = SongStore;