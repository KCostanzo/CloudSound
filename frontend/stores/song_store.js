var Store = require('flux/utils').Store;
var AppDispatcher = require("../dispatcher/dispatcher.js");
var SongConstants = require("../constants/allConstants.js");

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
	_songs = {};

	songs.forEach(function(song) {
		_songs[song.id] = song;
	})
};

SongStore.findSongs = function(partialTitle) {
	var possSongs = [];
	if (partialTitle.length < 3) {
		return [];
	}
	var songs = SongStore.all();
	songs.forEach(function(song) {
		var repeat = false;
		// for (var i = 0; i < possSongs.length; i++) {
		// 	if(song.title === possSongs[i]) {
		// 		repeat = true;
		// 	}
		// }
		// if (repeat) {
		// 	return;
		// }
		for (var i = 0; i < (song.title.length - partialTitle.length +1); i++) {
			var match = true;
			for (var j = 0; j < partialTitle.length; j++) {
				if(partialTitle[j].toUpperCase() !== song.title[i+j].toUpperCase()) {
					match = false;
				}
 			}
			if (match) {
				possSongs.push(song);
			}
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

SongStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case SongConstants.SONGS_RECEIVED:
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