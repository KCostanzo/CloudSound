import Constants from '../allConstants';


const likesRedcuer = (likes = {likedSongs:[], errors:[]}, action) => {
	
	switch (action.type) {
		case Constants.LIKED_SONGS:
			//let newstate = merge({},state);
			//newState.likedSongs = action.songs;
			likes.likedSongs = action.songs;
			return likes;

		case Constants.LIKE_MADE:
			likes.likedSongs = action.songs;
			return likes;

		case Constants.UNLIKED:
			//given action.like.song_id for song to remove from likedSongs


		default: 
			return likes;
	}

}

export default likesRedcuer;