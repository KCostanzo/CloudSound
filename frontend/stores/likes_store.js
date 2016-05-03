var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

var LikeStore = new Store(AppDispatcher);

var _likedSongs = [];

var addSong = function(like) {
	_likedSongs.push(like.song_id);
};

var resetSongs = function(songs) {
	if (songs.length > 0) {
		_likedSongs = [];
	
		songs.forEach(function(song) {
			_likedSongs.push(song.id);
		});
	}
};

LikeStore.all = function() {
	var songIds = [];
	_likedSongs.forEach(function(songId) {
		songIds.push(songId);
	});

	return songIds;
};

LikeStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case Constants.LIKED_SONGS:
			resetSongs(payload.songs);
			break;
		case Constants.LIKE_MADE:
			addSong(payload.like);
			break;
	}
	this.__emitChange();
};

window.Likes = LikeStore;
module.exports = LikeStore;