var ServerActions = require('../actions/song_server_actions.js');

module.exports = {
	fetchSongs: function() {
		$.ajax({
			method: 'GET',
			url: 'api/songs',
			success: function(songs) {
				ServerActions.getSongs(songs);
			},
			error: function(error) {
				ServerActions.songError(error);
			}
		});
	},

	getSong: function(songId) {
		$.ajax({
			method: 'GET',
			url: 'api/songs' + songId,
			success: function(song) {
				ServerActions.getSong(song);
			},
			error: function(error) {
				ServerActions.songError(error);
			}
		});
	}
}