var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

var LikeStore = new Store(AppDispatcher);

var _likedSongs = [];

// var addSong = function(like) {
// 	_likedSongs.push(like);
// };


//TODO: I have the songs...for a render user page may be more effecient to use songs dirctly here and have the use index base its items on these songs here

var resetSongs = function(songs) {
	if(!songs.songs) {
		return;
	}
	_likedSongs = [];

	songs.songs.forEach(function(song) {
		_likedSongs.push(song);
	});
};

var mySongReset = function(songs) {
	if(!songs.mySongs) {
		returnl
	}

	_mySongs = [];
	songs.mySongs.forEach(function(song) {
		_mySongs.push(song);
	});
};

var removeSong = function(like) {
	var songIds = []
	_likedSongs.forEach(function(song) {
		songIds.push(song.id);
	})
	var idx = songIds.indexOf(parseInt(like.song_id));
	_likedSongs.splice(idx, 1);
};	

LikeStore.all = function() {
	var songs = [];
	_likedSongs.forEach(function(song) {
		songs.push(song);
	});

	return songs;
};

LikeStore.empty = function() {
	_likedSongs = [];
};

LikeStore.songLiked = function(songId) {
	for (var i = 0; i < _likedSongs.length; i++) {
		if(_likedSongs[i].id === songId) {
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
			resetSongs(payload.songs);
			break;
		case Constants.UNLIKED:
			removeSong(payload.like);
			break;
	}
	this.__emitChange();
};

window.Likes = LikeStore;
module.exports = LikeStore;