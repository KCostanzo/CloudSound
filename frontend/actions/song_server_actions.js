var Dispatcher = require('../dispatcher/dispatcher.js');
var Constants = require('../constants/allConstants.js');

module.exports = {
	getSongs: function(songs) {
		Dispatcher.dispatch({
			actionType: Constants.SONGS_RECEIVED,
			songs: songs
		})
	},

	getArtistSongs: function(songs) {
		Dispatcher.dispatch({
			actionType: Constants.ARTIST_SONGS,
			songs: songs
		})
	},

	getSong: function(song) {
		Dispatcher.dispatch({
			actionType: Constants.SONG_RECEIVED,
			song: song
		})
	},

	addSong: function(song) {
		Dispatcher.dispatch({
			actionType: Constants.ADD_SONG,
			song: song
		})
	},

	songPosted: function(song) {
		Dispatcher.dispatch({
			actionType: Constants.POST_SONG,
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