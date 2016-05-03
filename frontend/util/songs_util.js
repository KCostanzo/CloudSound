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

	// createLike: function(songId) {
	// 	// debugger;
	// 	$.ajax({
	// 		method: 'POST',
	// 		url: 'api/likes',
	// 		success: function(like) {
	// 			LikeActions.likeCreated(like);
	// 		},
	// 		error: function(error) {
	// 			LikeActions.likeError(error);
	// 		}
	// 	})
	// },

	// getLikedSongs: function() {
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: 'api/likes',
	// 		success: function(songs) {
	// 			LikeActions.getLikedSongs(songs);
	// 		},
	// 		error: function(error) {
	// 			LikeActions.likeError(error);
	// 		}
	// 	})
	// }
};