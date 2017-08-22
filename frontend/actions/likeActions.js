import axios from 'axios';
import Constants from '../constants/allConstants.js';
// import LikesStore from '../stores/likes_store.js'
import rootReducer from '../reducers/rootReducer';


// export const checkIfLiked = songId => dispatch => ({
// 	type: Constants.CHECKIFLIKED,
// 	payload: songId
// });

export const getLikes = () => dispatch => (
	axios({
		method: 'GET',
		url: 'api/likes'
	}).then(response => dispatch ({
		type: Constants.LIKED_SONGS,
		payload: response.data
	})).catch(error => dispatch({
		type: Constants.LIKES_ERR,
		payload: error
}))
);



export const createLike = song_id => dispatch => (
	axios({
		method: 'POST',
		url: 'api/likes',
		data: {song_id}
	}).then(response => dispatch({
		type: Constants.LIKE_MADE,
		payload: response.data
	})).catch(error => dispatch({
		type: Constants.LIKE_ERR,
		payload: error
	}))
);



export const unlike = song_id => dispatch => {
	// console.log(song_id);
	return(
	axios({
		method: 'DELETE',
		url: 'api/likes/' + song_id,
		data: {song_id}
	}).then(response => dispatch({
		type: Constants.UNLIKED,
		payload: response.data
	})).catch(error => dispatch({
		type: Constant.UNLIKE_ERR,
		payload: error
	}))

);
}
