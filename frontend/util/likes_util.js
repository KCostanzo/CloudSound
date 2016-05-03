var LikeActions = require('../actions/like_server_actions.js');


module.exports = {
	createLike: function(song_id) {
		$.ajax({
			method: 'POST',
			url: 'api/likes',
			data: {song_id: song_id},
			success: function(like) {
				LikeActions.likeCreated(like);
			},
			error: function(error) {
				LikeActions.likeError(error);
			}
		})
	},

	getLikedSongs: function() {
		$.ajax({
			method: 'GET',
			url: 'api/likes',
			success: function(songs) {
				LikeActions.getLikedSongs(songs);
			},
			error: function(error) {
				LikeActions.likeError(error);
			}
		})
	},

	unlikeSong: function(songId) {
		$.ajax({
			method: 'DELETE',
			url: 'api/likes/' + songId,
			data: {song_id: songId},
			success: function(like) {
				LikeActions.unlike(like);
			},
			error: function(error) {
				LikeActions.likeError(error)
			}
		})
	}
};
