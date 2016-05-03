var Util = require('../util/likes_util.js');
var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/allConstants');

module.exports = {
	createLike: function(songId) {
		Util.createLike(songId);
	},

	getLiked: function() {
		Util.getLikedSongs();
	},

	unlike: function(songId) {
		Util.unlikeSong(songId);
	}
};