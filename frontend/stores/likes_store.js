var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

var LikeStore = new Store(AppDispatcher);

var _likedSongs = [];

var addSong = function(like) {
	_likedSongs.push(like.song_id);
};

var resetSongs = function(songs) {
	if(!songs.songs) {
		return;
	}
	_likedSongs = [];

	songs.songs.forEach(function(song) {
		_likedSongs.push(song.id);
	});
};

var removeSong = function(like) {
	var idx = _likedSongs.indexOf(parseInt(like.song_id));
	_likedSongs.splice(idx, 1);
};	

// LikeStore.fetchUserSongs = function(userId) {

// };

LikeStore.all = function() {
	var songIds = [];
	_likedSongs.forEach(function(songId) {
		songIds.push(songId);
	});

	return songIds;
};

LikeStore.empty = function() {
	_likedSongs = [];
};

LikeStore.songLiked = function(songId) {
	for (var i = 0; i < _likedSongs.length; i++) {
		if(_likedSongs[i] === songId) {
			return true;
		}
	};
	return false;
};

LikeStore.__onDispatch = function(payload) {
	switch(payload.actionType) {
		case Constants.LIKED_SONGS:
			resetSongs(payload.songs);
			break;
		case Constants.LIKE_MADE:
			addSong(payload.like);
			break;
		case Constants.UNLIKED:
			removeSong(payload.like);
			break;
	}
	this.__emitChange();
};

window.Likes = LikeStore;
module.exports = LikeStore;