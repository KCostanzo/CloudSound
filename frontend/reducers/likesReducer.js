import Constants from '../constants/allConstants';


const likesRedcuer = (state = {likedSongs:[], errors:[]}, action) => {
	
	switch (action.type) {
		case Constants.LIKED_SONGS:
			//let newstate = merge({},state);
			//newState.likedSongs = action.songs;
			state.likedSongs = action.songs;
			return state;

		case Constants.LIKE_MADE:
			console.log("like Case in like Reducer");
			state.likedSongs = action.payload;
			return state;
		case Constants.UNLIKED:
			//given action.like.song_id for song to remove from likedSongs
			//working, but should do directly on newstate Arr
			let tempLikeArr = [...state.likedSongs];
			const rmIdx = tempLikeArr.indexOf(parseInt(action.like.song_id));
			tempLikeArr.splice(rmIdx,1);

			state.likedSongs = tempLikeArr;
			//newState.likedSongs = tempLikeArr;
			//return newState;
			return state;

		default: 
			// console.log("likeDefaultrtn");
			return state;
	}

}

export default likesRedcuer;