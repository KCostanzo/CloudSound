import axios from 'axios';
import Constants from '../constants/allConstants';

export const getSongs = () => dispatch => (
	axios({
		method: 'GET',
		url: 'api/songs'
	}).then(response => dispatch({
		type: Constants.GET_SONGS,
		payload: response.data
	})).catch(error => dispatch({
		type: Constants.SONGS_ERROR,
		payload: error.data
	}))
);

	// fetchSongs: function() {
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: 'api/songs',
	// 		success: function(songs) {
	// 			ServerActions.getSongs(songs);
	// 		},
	// 		error: function(error) {
	// 			ServerActions.songError(error);
	// 		}
	// 	})
	// },

	// fetchArtistSongs: function(artist) {
	// 	artist.split(" ").join("%20")
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: 'api/artist/' + artist,
	// 		success: function(songs) {
	// 			ServerActions.getArtistSongs(songs);
	// 		},
	// 		error: function(error) {
	// 			ServerActions.songError(error);
	// 		}
	// 	})
	// },

	// getSong: function(songId) {
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: 'api/songs/' + songId,
	// 		success: function(song) {
	// 			ServerActions.getSong(song);
	// 		},
	// 		error: function(error) {
	// 			ServerActions.songError(error);
	// 		}
	// 	})
	// },

	// addSong: function(songId) {
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: 'api/songs/' + songId,
	// 		success: function(song) {
	// 			ServerActions.addSong(song);
	// 		},
	// 		error: function(error) {
	// 			ServerActions.songError(error);
	// 		}
	// 	})
	// },
