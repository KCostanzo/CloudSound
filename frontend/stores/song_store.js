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

}

var resetSongs = function(songs) {
	_songs = {};

	songs.forEach(function(song) {
		_songs[song.id] = song;
	})
};

SongStore.all = function() {
	return [{id: 1, title: 'mysong', artist: 'stanzo'},{id: 2, title: 'song2', artist: 'blur'}]
	// return Object.keys(_songs).map(function(key) {
	// 	return _songs[key];
	// })
};

SongStore.__onDispatch = function(payload) {
	switch (payload.actionType) {
		case SongConstants.SONGS_RECEIVED:
			resetSongs(payload.songs);
			break;
		case SongConstants.SONGS_ERROR:
			setErrors(payload.errors);
			break;

	}
	this.__emitChange();
};

module.exports = SongStore;