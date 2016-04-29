var Util = require('../util/songs_util.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');


module.exports = {
	fetchSongs: function() {
		Util.fetchSongs();
	},
	

	playSong: function(song) {
		Util.getSong(song);
	},

	nextSong: function() {
		Dispatcher.dispatch({
			actionType: Constants.NEXT_SONG
		});
	},

	removeFromQueue: function(qIdx) {
		Dispatcher.dispatch({
			actionType: Constants.QUEUE_REMOVE,
			idx: qIdx
		});
	}
}