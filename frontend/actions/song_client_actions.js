var Util = require('../util/songs_util.js');

module.exports = {
	fetchSongs: function() {
		Util.fetchSongs();
	},

	playSong: function(song) {
		Util.getSong(song);
	}
}