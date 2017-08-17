var Util = require('../util/songs_util.js');
var Dispatcher = require('../dispatcher/dispatcher.js');
// var Constants = require('../constants/allConstants.js');
import Constants from '../constants/allConstants.js';


module.exports = {
	fetchSongs: function() {
		Util.fetchSongs();
	},
	
	fetchArtistSongs: function(artist) {
		Util.fetchArtistSongs(artist);
	},

	playSong: function(song) {
		Util.getSong(song);
	},

	addSong: function(song) {
		Util.addSong(song);
	},

	postSongAWS: function(songData) {
		// console.log(songData);
		Util.postSongAWS(songData);
	},

	nextSong: function() {
		// console.log("client dispatch nextsong");
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