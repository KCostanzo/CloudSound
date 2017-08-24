import Constants from '../constants/allConstants';
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
			console.log("unlike");

			let unlikeObject = merge({}, state);
			let rmIdx = null;

			for (let i=0; i < unlikeObject.likedSongs.length; i++) {
				if (unlikeObject.likedSongs[i].id === action.payload.song_id) {
					// console.log("equal checked");
					rmIdx = i;
				}
			};
			// console.log(rmIdx);
			if (rmIdx) {
				unlikeObject.likedSongs.splice(rmIdx,1);
			}

			return unlikeObject;

		default: 
			return state;
	}

}

export default likesRedcuer;