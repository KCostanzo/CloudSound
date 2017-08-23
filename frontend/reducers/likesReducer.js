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
			//given action.like.song_id for song to remove from likedSongs
			//working, but should do directly on newstate Arr
			let unlikeObject = merge({}, state);
			let tempLikeArr = [...unlikeObject.likedSongs];
			const rmIdx = tempLikeArr.indexOf(parseInt(action.song_id));
			tempLikeArr.splice(rmIdx,1);

			unlikeObject.likedSongs = tempLikeArr;
			return unlikeObject;

		default: 
			// console.log("likeDefaultrtn");
			return state;
	}

}

export default likesRedcuer;