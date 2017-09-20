import Constants from '../constants/allConstants.js';
import merge from 'lodash/merge';


const likesRedcuer = (state = {likedSongs:[], errors:[]}, action) => {
	// console.log("in likes reducer");

	switch (action.type) {
		case Constants.LIKED_SONGS:
			console.log("all liked songs received");
			let newState = merge({},state);
			newState.likedSongs = action.payload.songs;
			return newState;

		case Constants.LIKE_MADE:
			console.log("like Case in like Reducer");
			let newLikeMade = merge({},state);
			newLikeMade.likedSongs = action.payload.songs;
			return newLikeMade;

		case Constants.UNLIKED:
			let unlikeObject = merge({}, state);
			let rmIdx = "null";

			for (let i=0; i < unlikeObject.likedSongs.length; i++) {
				if (unlikeObject.likedSongs[i].id === action.payload.song_id) {
					rmIdx = i;
				}
			};
			// console.log(rmIdx);
			if (rmIdx !== "null") {
				unlikeObject.likedSongs.splice(rmIdx,1);
			}
			// console.log(unlikeObject);

			return unlikeObject;

		case Constants.LIKES_ERR:
			let newErrs = merge({}, state);
			newErrs.errors.push(action.payload);
			return newErrs;

		default: 
			return state;
	}

}

export default likesRedcuer;