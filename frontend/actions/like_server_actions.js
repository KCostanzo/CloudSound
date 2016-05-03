var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/allConstants');

module.exports = {
	getLikedSongs: function(songs) {
		Dispatcher.dispatch({
			actionType: Constants.LIKED_SONGS,
			songs: songs
		});
	},

	likeCreated: function(like) {
		Dispatcher.dispatch({
			actionType: Constants.LIKE_MADE,
			like: like
		});
	},

	likeError: function(error) {
	}
}