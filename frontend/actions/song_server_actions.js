var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

module.exports = {
	getSongs: function(songs) {
		Dispatcher.dispatch({
			actionType: Constants.SONGS_RECEIVED,
			songs: songs
		})
	},

	getSong: function(song) {
		Dispatcher.dispatch({
			actionType: Constants.SONG_RECEIVED,
			song: song
		})
	},

	songError: function(errors) {
    	Dispatcher.dispatch({
      		actionType: Constants.SONGS_ERROR,
     		 errors: errors
   		 });
 	}
};