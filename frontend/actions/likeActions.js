import axios from 'axios';
import Constants from '../constants/allConstants.js'

export const createLike = song_id => dispatch => (

	axios({
		method: 'POST',
		url: 'api/likes',
		data: {song_id}
	}).then(response => dispatch => ({
		type: Constants.LIKE_MADE,
		payload: response.data
	})).catch(error => dispatch => ({
		type: Constants.LIKE_ERR,
		payload: error
	}))
);


export const unlike = song_id => dispatch => (
	axios({
		method: 'DELETE',
		url: 'api/likes' + song_id,
		data: {song_id}
	}).then(response => dispatch => ({
		type: Constants.UNLIKED,
		payload: response.data
	})).catch(error => dispatch => ({
		type: Constant.UNLIKE_ERR,
		payload: error
	}))

);