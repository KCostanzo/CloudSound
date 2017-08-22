import Constants from '../constants/allConstants';


const likesRedcuer = (state = {likedSongs:[], errors:[]}, action) => {
	console.log("in likes reducer");
	console.log(state);
	console.log(action);
	
	switch (action.type) {
		case Constants.LIKED_SONGS:
			console.log("all liked songs received");
			//let newstate = merge({},state);
			//newState.likedSongs = action.songs;
			state.likedSongs = action.payload.songs;
			return state;

		case Constants.LIKE_MADE:
			console.log("like Case in like Reducer");
			state.likedSongs = action.payload.songs;
			return state;
		case Constants.UNLIKED:
			//given action.like.song_id for song to remove from likedSongs
			//working, but should do directly on newstate Arr
			let tempLikeArr = [...state.likedSongs];
			const rmIdx = tempLikeArr.indexOf(parseInt(action.song_id));
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