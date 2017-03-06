var ServerActions = require('../actions/song_server_actions.js');
var LikeActions = require('../actions/like_actions.js');

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
		})
	},

	fetchArtistSongs: function(artist) {
		artist.split(" ").join("%20")
		$.ajax({
			method: 'GET',
			url: 'api/artist/' + artist,
			success: function(songs) {
				ServerActions.getArtistSongs(songs);
			},
			error: function(error) {
				ServerActions.songError(error);
			}
		})
	},

	getSong: function(songId) {
		$.ajax({
			method: 'GET',
			url: 'api/songs/' + songId,
			success: function(song) {
				ServerActions.getSong(song);
			},
			error: function(error) {
				ServerActions.songError(error);
			}
		})
	},

	addSong: function(songId) {
		$.ajax({
			method: 'GET',
			url: 'api/songs/' + songId,
			success: function(song) {
				ServerActions.addSong(song);
			},
			error: function(error) {
				ServerActions.songError(error);
			}
		})
	},

	//put data here, form data in jquerey?
	// console.log(songData);
	postSongAWS: function(songData) {
		$.ajax({
			method: 'POST',
			url: 'https://musicstoreforapp.s3.amazonaws.com/',
			contentType: false,
			processData: false,
			data: songData,
			success: function(postedSong) {
				console.log(postedSong);
				console.log('success');
				ServerActions.songPosted(postedSong);
			},
			error: function(error) {
				console.log('error');
				ServerActions.postSongError(error);
			}
		})
	},
};