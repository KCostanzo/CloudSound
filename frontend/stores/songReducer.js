import SongConstants from '../allConstants';


const songsReducer = (state = {songs:[], errors:[]}, action) => {
	
	//find and use loadash merge here b4 using if needed 4 mutability
	//let newState = merge({}, state);

	switch (action.type) {
		case SongConstants.ADD_SONG: 
			//newState.songs = [...newState.songs, action.song];
			state.songs = [...state.songs, action.song];
			//return newState;
			return state;

		case SongConstants.SONGS_RECEIVED:	
			//newState.songs = action.songs;
			state.songs = action.songs;
			return state;

		case SongConstants.SONGS_ERROR:
			//newstate.errors = [...newState.errors, action.error];
			state.errors = [...state.errors, action.error];
			return state;

		case SongConstants.ARTIST_SONGS:
			//newState.songs = action.songs;
			state.songs = action.songs;
			return state;
		default: 
			return state;
	}

}

export default songsReducer;