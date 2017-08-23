import SongConstants from '../constants/allConstants';
import merge from 'lodash/merge';


const songsReducer = (state = {songs:[], errors:[]}, action) => {
	
	//find and use loadash merge here b4 using if needed 4 mutability

	switch (action.type) {
		case SongConstants.ADD_SONG: 
			let addSongNewState = merge({}, state);

			addSongNewState.songs = [...addSongNewState.songs, action.payload];
			return addSongNewState;

		case SongConstants.GET_SONGS:
			console.log("in songs received");
			let newState = merge({}, state);	
			newState.songs = action.payload;
			return newState;

		case SongConstants.SONGS_ERROR:
			let newError = merge({}, state);

			newError.errors = [...newError.errors, action.payload];
			return newError;

		case SongConstants.ARTIST_SONGS:
			let aristState = merge({}, state);

			aristState.songs = action.payload;
			return aristState;
		default: 
			return state;
	}

}

export default songsReducer;