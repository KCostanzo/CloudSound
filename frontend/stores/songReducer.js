import SongConstants from '../allConstants';


const songReducer = (state = {songs:[], errors:[]}, action) => {
	
	switch (action.type) {
		case SongConstants.ADD_SONG: 
			return {
				songs: [...state.songs, action.song]
			}
		case SongConstants.SONGS_RECEIVED:	
			return {
				songs: action.songs
			}
		case SongConstants.SONGS_ERROR:
			return {
				errors: [...state.errors, action.error]
			}
		case SongConstants.ARTIST_SONGS:
			return {
				songs: action.songs
			}
		default: 
			return state;
	}

}

export default songReducer;